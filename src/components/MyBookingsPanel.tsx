"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Calendar, Clock, User, ShieldCheck, Trash2, ArrowRight, X, UserCheck } from 'lucide-react';
import { Booking } from '../types';

interface MyBookingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  // Trigger update/notifications if necessary
  onUpdateCount?: (count: number) => void;
}

export default function MyBookingsPanel({ isOpen, onClose, onUpdateCount }: MyBookingsPanelProps) {
  const [bookings, setBookings] = useState<Booking[]>([]);

  // Load bookings from localStorage
  const loadBookings = () => {
    try {
      const saved = localStorage.getItem('hydra_bookings');
      if (saved) {
        const parsed = JSON.parse(saved) as Booking[];
        setBookings(parsed);
        if (onUpdateCount) onUpdateCount(parsed.length);
      } else {
        setBookings([]);
        if (onUpdateCount) onUpdateCount(0);
      }
    } catch (e) {
      console.error('Error reading bookings', e);
    }
  };

  useEffect(() => {
    loadBookings();
  }, [isOpen]);

  const handleCancelBooking = (id: string) => {
    if (!window.confirm('Are you absolutely sure you wish to cancel this luxury reservation?')) return;
    try {
      const saved = localStorage.getItem('hydra_bookings');
      if (saved) {
        const parsed = JSON.parse(saved) as Booking[];
        const filtered = parsed.filter(b => b.id !== id);
        localStorage.setItem('hydra_bookings', JSON.stringify(filtered));
        setBookings(filtered);
        if (onUpdateCount) onUpdateCount(filtered.length);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="bookings-panel-overlay" className="fixed inset-0 z-100 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-obsidian-deep/80 backdrop-blur-sm"
          />

          {/* Drawer content */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="relative h-full w-full max-w-md border-l border-white/10 bg-obsidian-deep/95 p-6 md:p-8 shadow-2xl glass-card overflow-y-auto text-silk-beige flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-metallic font-semibold">Guest Portal</span>
                  <h3 className="font-headline text-2xl text-silk-beige mt-1 font-medium">Your Active Reservations</h3>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-full bg-white/5 p-2 text-mist-silver hover:bg-gold-metallic hover:text-obsidian-deep transition-all"
                >
                  <X size={16} />
                </button>
              </div>

              {bookings.length === 0 ? (
                <div className="text-center py-12 space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-mist-silver">
                    <Calendar size={20} />
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-sm">No Active Reservations</p>
                    <p className="text-xs text-mist-silver max-w-[250px] mx-auto font-light leading-relaxed">
                      You do not have any pending luxury spa reservations in Gachibowli. Reserve a customized treatment to begin.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
                  {bookings.map((booking) => (
                    <div key={booking.id} className="p-4 rounded-lg border border-white/10 bg-white/5 space-y-3 relative overflow-hidden">
                      {/* Active Status Accent */}
                      <div className="absolute top-0 left-0 w-[3px] h-full bg-gold-metallic" />

                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-bold text-silk-beige leading-tight">{booking.serviceName}</p>
                          <p className="text-[10px] font-mono text-gold-metallic mt-1">Code: {booking.id}</p>
                        </div>
                        <span className="text-xs font-semibold text-gold-metallic bg-gold-metallic/10 border border-gold-metallic/20 px-2 py-0.5 rounded uppercase tracking-wider text-[9px]">
                          {booking.status}
                        </span>
                      </div>

                      <div className="space-y-1.5 text-xs text-mist-silver">
                        <div className="flex items-center gap-2">
                          <Calendar size={12} className="text-gold-metallic" />
                          <span>{booking.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={12} className="text-gold-metallic" />
                          <span>{booking.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <UserCheck size={12} className="text-gold-metallic" />
                          <span>Specialist: {booking.therapistName}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center border-t border-white/10 pt-2.5 mt-2">
                        <span className="text-xs text-mist-silver font-medium">Lounge Price: <strong className="text-silk-beige">₹{booking.price.toLocaleString('en-IN')}</strong></span>
                        
                        <button
                          onClick={() => handleCancelBooking(booking.id)}
                          className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-red-400 hover:text-red-300 font-bold transition-colors"
                        >
                          <Trash2 size={12} /> Cancel Slot
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Support Call to Action */}
            <div className="border-t border-white/10 pt-6 mt-6">
              <div className="rounded border border-gold-metallic/20 bg-gold-metallic/5 p-4 text-xs text-mist-silver flex items-start gap-3">
                <ShieldCheck size={18} className="text-gold-metallic shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gold-metallic uppercase tracking-wider mb-1">Need Assistance?</p>
                  <p className="font-light leading-relaxed">
                    Have questions about specific oils, health concerns, or desire custom couples suite arrangements? Contact our concierge desk directly via Whatsapp or phone support.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
