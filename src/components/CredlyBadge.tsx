'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import type { Badge } from '@/lib/credly-badges';

interface CredlyBadgeProps {
  badge: Badge;
  index: number;
}

export default function CredlyBadge({ badge, index }: CredlyBadgeProps) {
  return (
    <a
      href={badge.credlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative h-full"
    >
      <div
        className="badge-card card-surface rounded-2xl p-6 h-full flex flex-col cursor-pointer transition-all duration-300 hover:border-gold/50 overflow-hidden animate-badge-inter"
        style={{
          animationDelay: `${index * 100}ms`,
        }}
      >
        {/* Background accent */}
        <div
          className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${badge.color} 0%, transparent 70%)`,
            filter: 'blur(20px)',
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon + Issuer */}
          <div className="flex items-start justify-between mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200"
              style={{ background: `${badge.color}18`, border: `1px solid ${badge.color}35` }}
            >
              <Icon
                name={badge.icon as Parameters<typeof Icon>[0]['name']}
                size={24}
                style={{ color: badge.color }}
              />
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gold/10 border border-gold/20">
              <Icon name="LinkIcon" size={12} className="text-gold" />
              <span className="text-gold text-xs font-semibold">Verify</span>
            </div>
          </div>

          {/* Badge Name */}
          <h3 className="font-semibold text-foreground text-sm leading-snug mb-2 group-hover:text-gold transition-colors duration-200 flex-1">
            {badge.name}
          </h3>

          {/* Issuer */}
          <p className="text-muted-foreground text-xs font-medium mb-4">{badge.issuer}</p>

          {/* Dates */}
          <div className="flex flex-col gap-2 text-xs text-muted-foreground border-t border-border pt-4">
            <span className="flex items-center gap-2">
              <Icon name="CalendarDaysIcon" size={12} className="text-gold/60" />
              <span>Issued {badge.issueDate}</span>
            </span>
            {badge.expiryDate && (
              <span className="flex items-center gap-2">
                <Icon name="ClockIcon" size={12} className="text-gold/60" />
                <span>Expires {badge.expiryDate}</span>
              </span>
            )}
          </div>

          {/* External Link CTA */}
          <div className="mt-4 pt-3 flex items-center gap-2 text-xs font-medium text-gold group-hover:gap-3 transition-all duration-200">
            View credential
            <Icon name="ArrowTopRightOnSquareIcon" size={12} />
          </div>
        </div>
      </div>
    </a>
  );
}
