'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';
import type { Award } from '@/lib/awards-recognition';

interface AwardCardProps {
  award: Award;
  index: number;
  onView: (award: Award) => void;
}

export default function AwardCard({ award, index, onView }: AwardCardProps) {
  return (
    <button
      onClick={() => onView(award)}
      className="group relative h-full text-left transition-all duration-300 hover:scale-105"
    >
      <div
        className="award-card card-surface rounded-2xl p-6 h-full flex flex-col cursor-pointer border border-border hover:border-gold/50 animate-badge-inter"
        style={{
          animationDelay: `${index * 100}ms`,
          borderColor: award.color + '30',
        }}
      >
        {/* Background accent */}
        <div
          className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${award.color} 0%, transparent 70%)`,
            filter: 'blur(20px)',
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Issuer Badge */}
          <div className="flex items-center justify-between mb-6">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: award.color + '15',
                border: `1px solid ${award.color}35`,
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: award.color }}
              />
              <span
                className="text-xs font-semibold"
                style={{ color: award.color }}
              >
                {award.issuer}
              </span>
            </div>
          </div>

          {/* Award Name - MINIMAL TEXT */}
          <h3
            className="font-semibold text-foreground text-base leading-snug mb-auto group-hover:text-gold transition-colors duration-200"
          >
            {award.name}
          </h3>

          {/* View Award CTA */}
          <div className="mt-6 pt-3 flex items-center gap-2 text-xs font-medium text-gold group-hover:gap-3 transition-all duration-200">
            View Award
            <Icon name="ArrowTopRightOnSquareIcon" size={12} />
          </div>
        </div>
      </div>
    </button>
  );
}
