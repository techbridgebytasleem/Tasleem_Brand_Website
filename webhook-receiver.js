const http = require('http');
const { exec } = require('child_process');
const crypto = require('crypto');

const SECRET = process.env.WEBHOOK_SECRET || 'e52be0d0e797aad7a0d57b1fd3670fd7901fe73b9bc4f7a66f8aee8715e59e39';
const PORT = 9000;

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/webhook') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const signature = req.headers['x-hub-signature-256'];
        
        if (!signature) {
          console.log('❌ No signature provided');
          res.writeHead(401, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'No signature' }));
          return;
        }

        const hash = crypto.createHmac('sha256', SECRET).update(body).digest('hex');
        const computedSignature = `sha256=${hash}`;

        if (signature !== computedSignature) {
          console.log('❌ Signature mismatch');
          res.writeHead(401, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Unauthorized' }));
          return;
        }

        const payload = JSON.parse(body);
        
        // Only deploy if push is to main branch
        if (payload.ref !== 'refs/heads/main') {
          console.log(`ℹ️ Push to ${payload.ref}, skipping deployment`);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ status: 'skipped', message: 'Not main branch' }));
          return;
        }

        console.log('✅ Webhook verified - Deployment starting...');
        console.log(`📝 Commit: ${payload.head_commit.message}`);
        console.log(`👤 Author: ${payload.pusher.name}`);
        
        // Run deployment script
        exec('/home/Tasleem_Brand_Website/deploy.sh', (error, stdout, stderr) => {
          if (error) {
            console.error(`❌ Deployment error: ${error.message}`);
            console.error(stderr);
            return;
          }
          console.log(`✅ Deployment successful!\n${stdout}`);
        });

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'deployment-started' }));
      } catch (err) {
        console.error('Error:', err);
        res.writeHead(500);
        res.end('Error processing webhook');
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Webhook receiver listening on port ${PORT}`);
  console.log(`🔐 Using webhook secret: ${SECRET.substring(0, 10)}...`);
});
