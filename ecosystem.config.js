module.exports = {
  apps: [
    {
      name: 'tasleem-portfolio',
      script: '.next/standalone/server.js',
      cwd: '/home/Tasleem_Brand_Website',
      instances: 1,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 4028,
      },
      max_memory_restart: '500M',
      merge_logs: true,
      error_file: '/var/log/pm2/tasleem-portfolio-error.log',
      out_file: '/var/log/pm2/tasleem-portfolio-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },
  ],
};
