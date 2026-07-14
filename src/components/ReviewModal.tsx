"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Sparkles, MessageSquare, User, Tag } from 'lucide-react';
import { Testimonial } from '../types';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (review: Testimonial) => void;
}

export default function ReviewModal({ isOpen, onClose, onAddReview }: ReviewModalProps) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [quote, setQuote] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!quote.trim()) {
      setError('Please share your experience description.');
      return;
    }

    const newReview: Testimonial = {
      id: 'rev-' + Math.floor(1000 + Math.random() * 9000),
      name: name.trim(),
      role: role.trim() || 'Valued Spa Guest',
      quote: quote.trim(),
      rating,
      avatar: '/images/optimized_v2_29.webp'
    };

    onAddReview(newReview);
    setName('');
    setRole('');
    setQuote('');
    setRating(5);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="review-modal-overlay" className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-obsidian-deep/80 backdrop-blur-md"
          />

          {/* Modal content */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            className="relative w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-obsidian-deep/95 p-6 md:p-8 shadow-2xl glass-card text-silk-beige"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-metallic font-semibold flex items-center gap-1">
                  <Sparkles size={12} /> Share Your Light
                </span>
                <h3 className="font-headline text-2xl text-silk-beige mt-1">Submit Guest Testimony</h3>
              </div>
              <button
                onClick={onClose}
                className="rounded-full bg-white/5 p-2 text-mist-silver hover:bg-gold-metallic hover:text-obsidian-deep transition-all"
              >
                <X size={16} />
              </button>
            </div>

            {error && (
              <div className="mb-4 rounded bg-red-900/40 border border-red-500/30 p-2.5 text-xs text-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Star Rating Selector */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-mist-silver mb-2 font-semibold">Experience Rating</label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setRating(val)}
                      onMouseEnter={() => setHoverRating(val)}
                      onMouseLeave={() => setHoverRating(null)}
                      className="p-1 text-gold-metallic hover:scale-110 transition-transform"
                    >
                      <Star
                        size={24}
                        fill={(hoverRating !== null ? hoverRating >= val : rating >= val) ? "currentColor" : "none"}
                        className="stroke-gold-metallic"
                      />
                    </button>
                  ))}
                  <span className="text-xs text-mist-silver ml-2">
                    {rating === 5 ? 'Exemplary Sanctuary' : rating === 4 ? 'Luxury Experience' : 'Pleasant Session'}
                  </span>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-mist-silver mb-1.5 font-semibold flex items-center gap-1.5">
                  <User size={12} className="text-gold-metallic" /> Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Meera Deshmukh"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded px-4 py-2.5 text-xs focus:border-gold-metallic focus:outline-none focus:ring-1 focus:ring-gold-metallic text-silk-beige"
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-mist-silver mb-1.5 font-semibold flex items-center gap-1.5">
                  <Tag size={12} className="text-gold-metallic" /> Designation / Profession
                </label>
                <input
                  type="text"
                  placeholder="e.g. CEO, Tech Innovators / Artist (Optional)"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-white/5 border border-white/15 rounded px-4 py-2.5 text-xs focus:border-gold-metallic focus:outline-none focus:ring-1 focus:ring-gold-metallic text-silk-beige"
                />
              </div>

              {/* Testimony Description */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-mist-silver mb-1.5 font-semibold flex items-center gap-1.5">
                  <MessageSquare size={12} className="text-gold-metallic" /> Your Spa Reflection
                </label>
                <textarea
                  required
                  placeholder="Tell us about the atmosphere, therapist expertise, and overall treatment benefits..."
                  value={quote}
                  onChange={(e) => setQuote(e.target.value)}
                  rows={4}
                  className="w-full bg-white/5 border border-white/15 rounded px-4 py-2.5 text-xs focus:border-gold-metallic focus:outline-none focus:ring-1 focus:ring-gold-metallic text-silk-beige resize-none leading-relaxed"
                />
              </div>

              {/* Guidelines Note */}
              <p className="text-[10px] text-mist-silver/70 leading-relaxed font-light">
                *Submitted reflections are reviewed by the Hydra Standard committee to ensure genuine, respectful luxury guest representation.
              </p>

              {/* Actions */}
              <div className="flex justify-end pt-2 border-t border-white/5 gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="border border-white/10 text-mist-silver px-4 py-2 rounded text-xs uppercase tracking-widest hover:bg-white/5 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="gold-gradient text-obsidian-deep px-5 py-2 rounded text-xs font-semibold uppercase tracking-widest hover:scale-105 transition-all cursor-pointer"
                >
                  Publish Testimony
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
