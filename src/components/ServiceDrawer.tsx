"use client";

import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Clock, Check, Star } from 'lucide-react';
import { Treatment } from '../types';

interface ServiceDrawerProps {
  treatment: Treatment | null;
  onClose: () => void;
  onBookNow: (treatmentId: string, price: number) => void;
}

export default function ServiceDrawer({ treatment, onClose, onBookNow }: ServiceDrawerProps) {
  return (
    <AnimatePresence>
      {treatment && (
        <div id="service-drawer-overlay" className="fixed inset-0 z-90 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-obsidian-deep/75 backdrop-blur-sm"
          />

          {/* Drawer content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeOut' }}
            className="relative h-full w-full max-w-md border-l border-white/10 bg-obsidian-deep/95 p-6 md:p-8 shadow-2xl glass-card overflow-y-auto text-silk-beige flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-metallic font-semibold">Treatment Insights</span>
                  <h3 className="font-headline text-2xl text-silk-beige mt-1">{treatment.name}</h3>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-full bg-white/5 p-2 text-mist-silver hover:bg-gold-metallic hover:text-obsidian-deep transition-all"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Treatment Main Image */}
              <div className="relative h-48 w-full overflow-hidden rounded-lg border border-white/10 mb-6">
                <img src={treatment.image} alt={treatment.name} className="h-full w-full object-cover" />
                <div className="absolute top-3 left-3 bg-obsidian-deep/80 backdrop-blur-md px-3 py-1 rounded border border-gold-metallic/30 text-gold-metallic text-xs font-semibold flex items-center gap-1">
                  <Clock size={12} /> {treatment.duration}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-sm text-mist-silver leading-relaxed font-light">
                  {treatment.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs uppercase tracking-wider text-gold-metallic font-semibold flex items-center gap-1.5">
                    <Sparkles size={12} /> Key Health & Spirit Benefits
                  </h4>
                  <ul className="space-y-2">
                    {treatment.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-mist-silver">
                        <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold-metallic/10 text-gold-metallic text-[10px] font-bold">
                          <Check size={10} />
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended For */}
                <div className="rounded border border-white/5 bg-white/5 p-4 text-xs text-mist-silver">
                  <p className="font-semibold text-gold-metallic uppercase tracking-wider mb-1">Recommended Client Profile</p>
                  <p className="italic font-light">"{treatment.recommendedFor}"</p>
                </div>
              </div>
            </div>

            {/* Bottom Booking Action */}
            <div className="border-t border-white/10 pt-6 mt-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-mist-silver font-medium">Bespoke Session Rate</span>
                  <p className="text-2xl font-bold text-gold-metallic mt-1">₹{treatment.price.toLocaleString('en-IN')}</p>
                </div>
                <div className="flex items-center gap-1 bg-gold-metallic/10 text-gold-metallic px-2.5 py-1 rounded text-xs border border-gold-metallic/20">
                  <Star size={12} fill="currentColor" />
                  <span className="font-semibold">4.9 Star Rating</span>
                </div>
              </div>
              <button
                onClick={() => {
                  onBookNow(treatment.id, treatment.price);
                  onClose();
                }}
                className="w-full gold-gradient text-obsidian-deep py-4 rounded font-label-caps text-label-caps uppercase hover:scale-105 transition-transform duration-300"
              >
                Book This Experience
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
