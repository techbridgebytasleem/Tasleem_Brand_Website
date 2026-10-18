'use client';

import React, { useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import Image from 'next/image';
import type { Award } from '@/lib/awards-recognition';

interface AwardModalProps {
  award: Award | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function AwardModal({ award, isOpen, onClose }: AwardModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !award) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-200"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-2xl max-h-[90vh] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-up"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: award.color + '18', border: `1px solid ${award.color}35` }}
              >
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center text-white font-bold text-xs"
                  style={{ backgroundColor: award.color }}
                >
                  {award.issuer === 'TCS' ? 'T' : 'A'}
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">{award.name}</h2>
                <p className="text-xs text-muted-foreground">{award.issuer}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-border rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <Icon name="XMarkIcon" size={20} className="text-muted-foreground" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="CalendarDaysIcon" size={16} className="text-gold/60 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Date Awarded</p>
                    <p className="text-sm text-foreground">{award.date}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="SparklesIcon" size={16} className="text-gold/60 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Recognition</p>
                    <p className="text-sm text-foreground leading-relaxed">{award.description}</p>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg overflow-hidden bg-black/20">
                <div className="relative w-full h-96">
                  <Image
                    src={award.certificateImage}
                    alt={award.name}
                    fill
                    className="object-contain p-4"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border px-6 py-4 flex justify-end gap-3 bg-black/20">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-foreground border border-border rounded-lg hover:border-gold/50 hover:bg-gold/5 transition-all duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
