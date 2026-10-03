'use client';

import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

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
            Open to<br />
            <span className="text-shimmer">Opportunities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Interested in senior Cloud Architect, AI/GenAI, or consulting roles? Reach out directly via email or LinkedIn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
          <a href="mailto:tasleem.cloudarchitect@gmail.com" className="group bg-gradient-to-br from-secondary/50 to-secondary/20 border border-gold/20 hover:border-gold/50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gold mb-1">Email</p>
                <p className="text-foreground font-semibold group-hover:text-gold transition-colors break-all">tasleem.cloudarchitect@gmail.com</p>
              </div>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/tasleemansari/" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-secondary/50 to-secondary/20 border border-gold/20 hover:border-gold/50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gold mb-1">LinkedIn</p>
                <p className="text-foreground font-semibold group-hover:text-gold transition-colors">linkedin.com/in/tasleemansari</p>
              </div>
            </div>
          </a>
        </div>

        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-secondary/50 to-secondary/20 border border-gold/20 rounded-lg px-6 py-3 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <div>
              <p className="font-semibold text-foreground">Available for Opportunities</p>
              <p className="text-xs text-muted-foreground">Open · Full-time · Consulting · Remote</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
