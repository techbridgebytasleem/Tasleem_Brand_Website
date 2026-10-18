'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AwardCard from './AwardCard';
import AwardModal from './AwardModal';
import { awardCategories, type Award } from '@/lib/awards-recognition';

export default function AwardsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeCategory = awardCategories[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + awardCategories.length) % awardCategories.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % awardCategories.length);
  };

  const handleViewAward = (award: Award) => {
    setSelectedAward(award);
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        id="awards-recognition"
        className="py-20 lg:py-28 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-gold text-xs font-bold uppercase tracking-widest mb-3 block">
              Professional Recognition
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <div>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-2">
                  Awards &
                  <br />
                  <span className="text-shimmer">Recognition</span>
                </h2>
                <p className="text-muted-foreground mt-4 max-w-2xl text-sm leading-relaxed">
                  Internal awards and training certifications recognizing professional excellence and continuous learning.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Awards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {activeCategory?.awards.map((award, index) => (
                <AwardCard
                  key={award.id}
                  award={award}
                  index={index}
                  onView={handleViewAward}
                />
              ))}
            </div>

            {/* Category Navigation */}
            <div className="flex items-center justify-between mt-12">
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
                    ({activeCategory?.awards.length} award{activeCategory?.awards.length !== 1 ? 's' : ''})
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Click any card to view full details and certificate
                </p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-3 ml-6">
                <button
                  onClick={goToPrevious}
                  className="p-2 rounded-lg border border-border hover:border-gold/50 hover:bg-gold/5 transition-all duration-200 group"
                  aria-label="Previous category"
                >
                  <Icon
                    name="ChevronLeftIcon"
                    size={20}
                    className="text-muted-foreground group-hover:text-gold transition-colors"
                  />
                </button>

                <div className="flex gap-2">
                  {awardCategories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === activeIndex
                          ? 'w-8 h-2 bg-gold'
                          : 'w-2 h-2 bg-border hover:bg-gold/50'
                      }`}
                      aria-label={`Go to ${awardCategories[index].name}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNext}
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

            <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
              <Icon name="InformationCircleIcon" size={14} />
              <span>Click cards to view full certificate details</span>
            </div>
          </div>
        </div>
      </section>

      {/* Award Modal */}
      <AwardModal
        award={selectedAward}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
