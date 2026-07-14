"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Sparkles, User, ShieldCheck, CheckCircle, ArrowRight, Phone, Mail, FileText } from 'lucide-react';
import { TREATMENTS, THERAPISTS } from '../data';
import { Booking } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetServiceId?: string;
  presetPrice?: number;
  presetPackageName?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  presetServiceId = '',
  presetPrice,
  presetPackageName
}: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [serviceId, setServiceId] = useState(presetServiceId);
  const [packageName, setPackageName] = useState(presetPackageName || '');
  const [price, setPrice] = useState(presetPrice || 0);
  const [therapistId, setTherapistId] = useState('any');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [error, setError] = useState('');
  const [bookingResult, setBookingResult] = useState<Booking | null>(null);

  // Re-sync preset properties
  useEffect(() => {
    if (presetServiceId) {
      setServiceId(presetServiceId);
      const matched = TREATMENTS.find(t => t.id === presetServiceId);
      if (matched) {
        setPrice(matched.price);
        setPackageName('');
      }
    }
    if (presetPackageName && presetPrice) {
      setPackageName(presetPackageName);
      setPrice(presetPrice);
      setServiceId('package');
    }
  }, [presetServiceId, presetPackageName, presetPrice]);

  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      raw: d.toISOString().split('T')[0],
      formatted: d.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })
    };
  });

  const times = ['10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM', '08:30 PM'];

  const selectedTherapist = THERAPISTS.find(t => t.id === therapistId);
  const selectedService = TREATMENTS.find(t => t.id === serviceId);

  const getBookingName = () => {
    if (packageName) return packageName;
    if (selectedService) return selectedService.name;
    return 'Bespoke Custom Wellness Experience';
  };

  const handleNextStep = () => {
    setError('');
    if (step === 1) {
      if (!serviceId && !packageName) {
        setError('Please select a service or experience first.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!selectedDate) {
        setError('Please select a preferred date.');
        return;
      }
      if (!selectedTime) {
        setError('Please select an available time slot.');
        return;
      }
      setStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!guestName.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!guestPhone.trim() || guestPhone.length < 10) {
      setError('Please provide a valid phone number.');
      return;
    }
    if (!guestEmail.trim() || !guestEmail.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }

    const tName = therapistId === 'any' ? 'First Available Certified Therapist' : selectedTherapist?.name || '';
    const resId = 'HYDRA-' + Math.floor(100000 + Math.random() * 900000);

    const newBooking: Booking = {
      id: resId,
      serviceId,
      serviceName: getBookingName(),
      price: price || selectedService?.price || 2999,
      therapistId,
      therapistName: tName,
      date: selectedDate,
      time: selectedTime,
      guestName,
      guestPhone,
      guestEmail,
      specialRequests,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    // Save to localStorage
    const currentBookings = JSON.parse(localStorage.getItem('hydra_bookings') || '[]');
    localStorage.setItem('hydra_bookings', JSON.stringify([newBooking, ...currentBookings]));

    setBookingResult(newBooking);
    setStep(4);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="booking-modal-overlay" className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-obsidian-deep/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-obsidian-deep/95 p-6 md:p-8 shadow-2xl glass-card text-silk-beige"
          >
            {/* Elegant Header */}
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-metallic font-medium">Reservations Portal</span>
                <h2 className="font-headline text-2xl md:text-3xl text-silk-beige mt-1">Begin Your Sanctuary Journey</h2>
              </div>
              <button
                onClick={onClose}
                className="rounded-full bg-white/5 p-2 text-mist-silver hover:bg-gold-metallic hover:text-obsidian-deep transition-all"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Stepper Progress Bar */}
            {step < 4 && (
              <div className="mb-6 flex justify-between gap-1">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="flex-1">
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-semibold border ${
                          step >= num
                            ? 'bg-gold-metallic border-gold-metallic text-obsidian-deep'
                            : 'border-white/20 text-mist-silver'
                        }`}
                      >
                        {num}
                      </div>
                      <span className={`text-xs uppercase tracking-wider font-medium hidden sm:inline ${step === num ? 'text-gold-metallic' : 'text-mist-silver'}`}>
                        {num === 1 ? 'Treatments' : num === 2 ? 'DateTime' : 'Guest Details'}
                      </span>
                    </div>
                    <div className={`h-[2px] mt-2 w-full rounded-full ${step > num ? 'bg-gold-metallic' : 'bg-white/10'}`} />
                  </div>
                ))}
              </div>
            )}

            {error && (
              <div className="mb-4 rounded bg-red-900/40 border border-red-500/30 p-3 text-sm text-red-200">
                {error}
              </div>
            )}

            {/* Wizard Steps */}
            <div>
              {/* Step 1: Select Service / Therapist */}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-mist-silver mb-2 font-semibold">1. Select Luxury Treatment</label>
                    <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto pr-1">
                      {TREATMENTS.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => {
                            setServiceId(t.id);
                            setPrice(t.price);
                            setPackageName('');
                          }}
                          className={`flex items-center justify-between p-3 rounded border text-left transition-all ${
                            serviceId === t.id
                              ? 'border-gold-metallic bg-gold-metallic/10 text-silk-beige'
                              : 'border-white/10 hover:border-white/30 bg-white/5'
                          }`}
                        >
                          <div>
                            <p className="font-semibold text-sm">{t.name}</p>
                            <p className="text-xs text-mist-silver">{t.duration} • {t.description.substring(0, 50)}...</p>
                          </div>
                          <span className="text-gold-metallic font-semibold text-sm">₹{t.price.toLocaleString('en-IN')}</span>
                        </button>
                      ))}
                      {packageName && (
                        <div className="flex items-center justify-between p-3 rounded border border-gold-metallic bg-gold-metallic/10 text-silk-beige">
                          <div>
                            <p className="font-semibold text-sm">{packageName} (Preset Package)</p>
                            <p className="text-xs text-mist-silver">Exclusive pre-selected wellness bundle</p>
                          </div>
                          <span className="text-gold-metallic font-semibold text-sm">₹{price.toLocaleString('en-IN')}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-mist-silver mb-2 font-semibold">2. Select Certified Specialist</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <button
                        onClick={() => setTherapistId('any')}
                        className={`p-3 rounded border text-center transition-all ${
                          therapistId === 'any'
                            ? 'border-gold-metallic bg-gold-metallic/10'
                            : 'border-white/10 hover:border-white/30 bg-white/5'
                        }`}
                      >
                        <div className="h-8 w-8 mx-auto mb-2 bg-white/10 rounded-full flex items-center justify-center text-gold-metallic">
                          <Sparkles size={16} />
                        </div>
                        <p className="font-semibold text-xs text-silk-beige">First Available</p>
                        <p className="text-[10px] text-mist-silver">No waiting slots</p>
                      </button>
                      {THERAPISTS.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setTherapistId(t.id)}
                          className={`p-3 rounded border text-center transition-all ${
                            therapistId === t.id
                              ? 'border-gold-metallic bg-gold-metallic/10'
                              : 'border-white/10 hover:border-white/30 bg-white/5'
                          }`}
                        >
                          <img src={t.avatar} alt={t.name} className="h-8 w-8 rounded-full object-cover mx-auto mb-2 border border-white/20" />
                          <p className="font-semibold text-xs text-silk-beige">{t.name}</p>
                          <p className="text-[10px] text-mist-silver">{t.role.split(' ')[0]} Master</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4 border-t border-white/5">
                    <button
                      onClick={handleNextStep}
                      className="gold-gradient text-obsidian-deep px-6 py-3 rounded text-xs font-semibold uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all"
                    >
                      Choose Date & Time <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time Select */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-mist-silver mb-3 font-semibold flex items-center gap-2">
                      <Calendar size={14} className="text-gold-metallic" /> 1. Choose Booking Date
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
                      {dates.map((d) => (
                        <button
                          key={d.raw}
                          onClick={() => setSelectedDate(d.raw)}
                          className={`p-3 rounded border text-center transition-all flex flex-col justify-center ${
                            selectedDate === d.raw
                              ? 'border-gold-metallic bg-gold-metallic/10'
                              : 'border-white/10 hover:border-white/30 bg-white/5'
                          }`}
                        >
                          <span className="text-[10px] text-mist-silver uppercase tracking-wider">{d.formatted.split(' ')[0]}</span>
                          <span className="text-base font-bold mt-1 text-silk-beige">{d.formatted.split(' ')[1]}</span>
                          <span className="text-[9px] text-gold-metallic mt-1 uppercase">{d.formatted.split(' ')[2]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-mist-silver mb-3 font-semibold flex items-center gap-2">
                      <Clock size={14} className="text-gold-metallic" /> 2. Select Preferred Time Slot
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {times.map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`p-3 rounded border text-center text-xs font-medium transition-all ${
                            selectedTime === t
                              ? 'border-gold-metallic bg-gold-metallic/10 text-silk-beige'
                              : 'border-white/10 hover:border-white/30 bg-white/5 text-mist-silver'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-white/5">
                    <button
                      onClick={() => setStep(1)}
                      className="border border-white/20 text-silk-beige px-6 py-3 rounded text-xs font-semibold uppercase tracking-widest hover:bg-white/5 transition-all"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleNextStep}
                      className="gold-gradient text-obsidian-deep px-6 py-3 rounded text-xs font-semibold uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all"
                    >
                      Guest Details <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Guest Details Form */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-mist-silver mb-1 font-semibold flex items-center gap-1.5">
                        <User size={12} className="text-gold-metallic" /> Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Reddy"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        className="w-full bg-white/5 border border-white/15 rounded px-4 py-3 text-sm focus:border-gold-metallic focus:outline-none focus:ring-1 focus:ring-gold-metallic"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-mist-silver mb-1 font-semibold flex items-center gap-1.5">
                        <Phone size={12} className="text-gold-metallic" /> Mobile Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 9876543210"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        className="w-full bg-white/5 border border-white/15 rounded px-4 py-3 text-sm focus:border-gold-metallic focus:outline-none focus:ring-1 focus:ring-gold-metallic"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-mist-silver mb-1 font-semibold flex items-center gap-1.5">
                      <Mail size={12} className="text-gold-metallic" /> Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. vikram@innovate.co"
                      value={guestEmail}
                      onChange={(e) => setGuestEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/15 rounded px-4 py-3 text-sm focus:border-gold-metallic focus:outline-none focus:ring-1 focus:ring-gold-metallic"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-mist-silver mb-1 font-semibold flex items-center gap-1.5">
                      <FileText size={12} className="text-gold-metallic" /> Special Notes & Health Requests (Optional)
                    </label>
                    <textarea
                      placeholder="e.g. Prefer lighter pressure / Allergies to certain botanical oils..."
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      rows={2}
                      className="w-full bg-white/5 border border-white/15 rounded px-4 py-3 text-sm focus:border-gold-metallic focus:outline-none focus:ring-1 focus:ring-gold-metallic resize-none"
                    />
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded border border-gold-metallic/30 bg-gold-metallic/5 text-xs text-mist-silver space-y-1.5">
                    <p className="text-gold-metallic font-semibold text-sm uppercase tracking-wider mb-2">Sanctuary Summary</p>
                    <div className="flex justify-between">
                      <span>Selected Treatment:</span>
                      <span className="text-silk-beige font-semibold">{getBookingName()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Therapist:</span>
                      <span className="text-silk-beige font-semibold">
                        {therapistId === 'any' ? 'First Available' : selectedTherapist?.name} ({therapistId === 'any' ? 'Certified' : selectedTherapist?.role})
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reservation Slot:</span>
                      <span className="text-silk-beige font-semibold">{selectedDate} at {selectedTime}</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-2 mt-2 text-sm">
                      <span className="text-gold-metallic font-bold">Total Bill:</span>
                      <span className="text-gold-metallic font-bold">₹{price.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] text-mist-silver/70">
                    <ShieldCheck size={14} className="text-gold-metallic" />
                    <span>Your session is protected by medical-grade hygiene and sterilized luxury linen protocols.</span>
                  </div>

                  <div className="flex justify-between pt-2 border-t border-white/5">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="border border-white/20 text-silk-beige px-6 py-3 rounded text-xs font-semibold uppercase tracking-widest hover:bg-white/5 transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="gold-gradient text-obsidian-deep px-6 py-3 rounded text-xs font-semibold uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all cursor-pointer"
                    >
                      Confirm Reservation <CheckCircle size={14} />
                    </button>
                  </div>
                </form>
              )}

              {/* Step 4: Success Screen */}
              {step === 4 && bookingResult && (
                <div className="text-center py-6 space-y-6">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold-metallic/20 border-2 border-gold-metallic text-gold-metallic">
                    <CheckCircle size={40} />
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold-metallic font-semibold">Reservation Confirmed</span>
                    <h3 className="font-headline text-3xl text-silk-beige mt-2">Welcome to Serenity</h3>
                    <p className="text-sm text-mist-silver mt-2 max-w-md mx-auto">
                      We have secured your bespoke slot. A luxury itinerary confirmation has been dispatched to <strong className="text-silk-beige">{bookingResult.guestEmail}</strong>.
                    </p>
                  </div>

                  <div className="max-w-md mx-auto p-5 rounded-lg border border-gold-metallic/30 bg-gold-metallic/5 space-y-3 text-left">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-xs text-mist-silver">Reservation Code:</span>
                      <span className="font-mono text-sm text-gold-metallic font-bold">{bookingResult.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-mist-silver">Treatment:</span>
                      <span className="text-xs font-semibold text-silk-beige">{bookingResult.serviceName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-mist-silver">Therapist Specialist:</span>
                      <span className="text-xs font-semibold text-silk-beige">{bookingResult.therapistName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-mist-silver">Date & Time Slot:</span>
                      <span className="text-xs font-semibold text-gold-metallic">{bookingResult.date} at {bookingResult.time}</span>
                    </div>
                    <div className="flex justify-between border-t border-white/10 pt-2">
                      <span className="text-xs text-mist-silver">Total Paid at Lounge:</span>
                      <span className="text-xs font-bold text-silk-beige">₹{bookingResult.price.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <p className="text-xs text-mist-silver/70 italic">
                    *Please arrive at least 15 minutes before your scheduled appointment to enjoy our botanical welcome drink and sensory calming lounge session.
                  </p>

                  <div>
                    <button
                      onClick={onClose}
                      className="gold-gradient text-obsidian-deep px-8 py-3 rounded text-xs font-semibold uppercase tracking-widest hover:scale-105 transition-all"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
