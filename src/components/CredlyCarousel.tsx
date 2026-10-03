'use client';

import React, { useState, useRef, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import CredlyBadge from './CredlyBadge';
import { badgeCategories, type BadgeCategory } from '@/lib/credly-badges';

export default function CredlyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const activeCategory = badgeCategories[activeIndex];

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlay) return;

    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % badgeCategories.length);
    }, 3000); // Change category every 8 seconds

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlay]);

  // Reset autoplay on manual navigation
  const handleManualNav = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlay(true);
  };

  const goToPrevious = () => {
    handleManualNav((activeIndex - 1 + badgeCategories.length) % badgeCategories.length);
  };

  const goToNext = () => {
    handleManualNav((activeIndex + 1) % badgeCategories.length);
  };

  return (
    <section
      id="credly-carousel"
      className="py-20 lg:py-28 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <span className="text-gold text-xs font-bold uppercase tracking-widest mb-3 block">
            Verified Expertise
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-2">
                Professional
                <br />
                <span className="text-shimmer">Credentials</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-relaxed">
                Comprehensive certifications across AWS, Google Cloud, and AI/GenAI technologies.
                All credentials verified and publicly available on Credly.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {activeCategory?.badges.map((badge, index) => (
              <CredlyBadge key={badge.id} badge={badge} index={index} />
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12">
            {/* Category Info */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card border border-border">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: activeCategory?.color }}
                />
                <span className="text-sm font-semibold text-foreground">
                  {activeCategory?.name}
                </span>
                <span className="text-xs text-muted-foreground ml-2">
                  ({activeCategory?.badges.length} credential{activeCategory?.badges.length !== 1 ? 's' : ''})
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                {activeCategory?.description}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-3 ml-6">
              <button
                onClick={goToPrevious}
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
                className="p-2 rounded-lg border border-border hover:border-gold/50 hover:bg-gold/5 transition-all duration-200 group"
                aria-label="Previous category"
              >
                <Icon
                  name="ChevronLeftIcon"
                  size={20}
                  className="text-muted-foreground group-hover:text-gold transition-colors"
                />
              </button>

              {/* Category Dots */}
              <div className="flex gap-2">
                {badgeCategories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleManualNav(index)}
                    onMouseEnter={() => setIsAutoPlay(false)}
                    onMouseLeave={() => setIsAutoPlay(true)}
                    className={`transition-all duration-300 rounded-full ${
                      index === activeIndex
                        ? 'w-8 h-2 bg-gold'
                        : 'w-2 h-2 bg-border hover:bg-gold/50'
                    }`}
                    aria-label={`Go to ${badgeCategories[index].name}`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
                className="p-2 rounded-lg border border-border hover:border-gold/50 hover:bg-gold/5 transition-all duration-200 group"
                aria-label="Next category"
              >
                <Icon
                  name="ChevronRightIcon"
                  size={20}
                  className="text-muted-foreground group-hover:text-gold transition-colors"
                />
              </button>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
            <Icon name="InformationCircleIcon" size={14} />
            <span>Click badges to verify credentials on Credly • Auto-advances every 3 seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
}
