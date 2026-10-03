'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(212,175,55,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-gold text-xs font-bold uppercase tracking-widest mb-3 block">Get in Touch</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Open to<br />
            <span className="text-shimmer">Opportunities</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
            Interested in senior Cloud Architect, AI/GenAI, or consulting roles? Let's connect and explore how I can add value to your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <a href="mailto:tasleem.cloudarchitect@gmail.com" className="flex items-center gap-4 p-4 card-surface rounded-xl hover:border-gold/40 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Icon name="EnvelopeIcon" size={18} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Email</div>
                  <div className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">tasleem.cloudarchitect@gmail.com</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/tasleem-soudagar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 card-surface rounded-xl hover:border-gold/40 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Icon name="LinkIcon" size={18} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">LinkedIn</div>
                  <div className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">tasleem-soudagar</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 card-surface rounded-xl">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <Icon name="MapPinIcon" size={18} className="text-gold" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Location</div>
                  <div className="text-sm font-medium text-foreground">Bangalore, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="card-surface rounded-2xl p-10 h-full flex flex-col items-center justify-center text-center gap-6 border-gold/30 gold-glow">
              <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
                <Icon name="DocumentIcon" size={28} className="text-gold" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">Resume & Full Details</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-4">My complete resume, detailed project portfolio, and full contact information are available on request. This protects my privacy and prevents unsolicited outreach.</p>
                <p className="text-xs text-muted-foreground/70 mb-6">To request my resume or discuss opportunities, please reach out via LinkedIn or email.</p>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <a href="mailto:tasleem.cloudarchitect@gmail.com" className="flex items-center justify-center gap-2 px-6 py-3 bg-gold text-primary-foreground rounded-lg font-semibold text-sm hover:bg-accent transition-all duration-200 gold-glow">
                  <Icon name="EnvelopeIcon" size={16} />
                  Send Email
                </a>
                <a href="https://www.linkedin.com/in/tasleem-soudagar" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 border border-gold/40 text-gold rounded-lg font-semibold text-sm hover:bg-gold/10 transition-all duration-200">
                  <Icon name="LinkIcon" size={16} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
