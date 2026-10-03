'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactSection() {
  const [showEmail, setShowEmail] = React.useState(false);

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Background gradient accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(212,175,55,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-gold text-xs font-bold uppercase tracking-widest mb-3 block">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Open to
            <br />
            <span className="text-shimmer">Opportunities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or learning more about my work? I&apos;m always open to interesting
            conversations and opportunities.
          </p>
        </div>

        {/* Resume and Contact Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-secondary/50 to-secondary/20 border border-gold/20 rounded-lg p-8 sm:p-10 hover:border-gold/40 transition-colors duration-300">
            <div className="flex items-start gap-4 mb-6">
              <Icon name="FileText" className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2">Resume & Contact Details</h3>
                <p className="text-muted-foreground mb-4">
                  My detailed resume and direct contact information are available upon request. This approach helps
                  protect my privacy and keep my professional data secure.
                </p>
                <button
                  onClick={() => setShowEmail(!showEmail)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold/10 hover:bg-gold/20 text-gold font-semibold rounded-lg transition-colors duration-200 border border-gold/30 hover:border-gold/50"
                >
                  <Icon name="Mail" className="w-4 h-4" />
                  {showEmail ? 'Hide Email' : 'Request Resume'}
                </button>

                {showEmail && (
                  <div className="mt-4 p-4 bg-secondary/50 border border-gold/20 rounded-lg animate-in fade-in duration-300">
                    <p className="text-sm text-muted-foreground mb-2">Reach out at:</p>
                    
                      href="mailto:techbridgebytasleem@gmail.com"
                      className="text-gold hover:text-gold/80 font-semibold break-all"
                    >
                      techbridgebytasleem@gmail.com
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 flex justify-center gap-8">
          
            href="https://www.linkedin.com/in/tasleemansari/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200"
            aria-label="LinkedIn"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary border border-gold/20 group-hover:border-gold/50 flex items-center justify-center transition-colors duration-200">
              <Icon name="Linkedin" className="w-6 h-6 text-gold" />
            </div>
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
              LinkedIn
            </span>
          </a>

          
            href="https://github.com/tasleemansari"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200"
            aria-label="GitHub"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary border border-gold/20 group-hover:border-gold/50 flex items-center justify-center transition-colors duration-200">
              <Icon name="Github" className="w-6 h-6 text-gold" />
            </div>
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
              GitHub
            </span>
          </a>

          
            href="https://medium.com/@tasleemansari"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200"
            aria-label="Medium"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary border border-gold/20 group-hover:border-gold/50 flex items-center justify-center transition-colors duration-200">
              <Icon name="BookOpen" className="w-6 h-6 text-gold" />
            </div>
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
              Medium
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
