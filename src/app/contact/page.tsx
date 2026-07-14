"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <>
      <div className="pt-32 pb-20 flex-grow">
        {/* Hero Title Section */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-20 mb-16 text-center">
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-silk-beige mb-4 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            Connect with <span className="text-gold-metallic italic">Tranquility</span>
          </h1>
          <p className="font-body-lg text-body-lg text-mist-silver max-w-2xl mx-auto opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
            Begin your journey to ultimate rejuvenation. Reach out to our concierge for personalized wellness planning and reservations.
          </p>
        </section>

        {/* Main Content: Split Layout */}
        <section className="max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Information (Left) */}
          <div className="lg:col-span-5 space-y-12">
            <div className="glass-card p-10 space-y-10">
              <div>
                <h3 className="font-label-caps text-label-caps text-gold-metallic mb-6">Concierge Details</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <span className="material-symbols-outlined text-gold-metallic mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    <div>
                      <p className="font-label-caps text-label-caps text-mist-silver mb-1">Our Sanctuary</p>
                      <p className="text-silk-beige leading-relaxed">3rd Floor, Sri Tirumala Platinum,<br />Gachibowli, Hyderabad, India</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <span className="material-symbols-outlined text-gold-metallic" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                    <div>
                      <p className="font-label-caps text-label-caps text-mist-silver mb-1">Reservations</p>
                      <p className="text-silk-beige">+91 90000 12345</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <span className="material-symbols-outlined text-gold-metallic" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                    <div>
                      <p className="font-label-caps text-label-caps text-mist-silver mb-1">Email Inquiry</p>
                      <p className="text-silk-beige">concierge@hydraspa.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-white/10">
                <h3 className="font-label-caps text-label-caps text-gold-metallic mb-6">Hours of Rejuvenation</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-silk-beige">
                    <span>Mon - Fri</span>
                    <span className="text-mist-silver">08:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-silk-beige">
                    <span>Sat - Sun</span>
                    <span className="text-mist-silver">09:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 flex space-x-6">
                <a className="w-12 h-12 flex items-center justify-center glass-card hover:border-gold-metallic transition-colors" href="#">
                  <img className="w-5 h-5 opacity-70" alt="Instagram" src="/images/optimized_v2_5.webp" />
                </a>
                <a className="w-12 h-12 flex items-center justify-center glass-card hover:border-gold-metallic transition-colors" href="#">
                  <img className="w-5 h-5 opacity-70" alt="Facebook" src="/images/optimized_v2_6.webp" />
                </a>
                <a className="w-12 h-12 flex items-center justify-center glass-card hover:border-gold-metallic transition-colors" href="#">
                  <img className="w-5 h-5 opacity-70" alt="Pinterest" src="/images/optimized_v2_7.webp" />
                </a>
              </div>
            </div>
            
            {/* Map Section */}
            <div className="h-80 w-full overflow-hidden glass-card relative group">
              <div className="absolute inset-0 z-10 bg-obsidian-deep/20 pointer-events-none group-hover:bg-transparent transition-all duration-500"></div>
              <img className="w-full h-full object-cover map-grayscale" alt="Hyderabad Gachibowli Map" src="/images/optimized_v2_8.webp" />
              <div className="absolute bottom-6 left-6 z-20 bg-gold-metallic text-obsidian-deep px-4 py-2 font-label-caps text-label-caps flex items-center space-x-2">
                <span className="material-symbols-outlined text-[16px]">map</span>
                <span>Open in Maps</span>
              </div>
            </div>
          </div>
          
          {/* Booking Form (Right) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-10 lg:p-16 h-full">
              <h2 className="font-headline-md text-headline-md text-silk-beige mb-10">Request a Reservation</h2>
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label className="font-label-caps text-label-caps text-mist-silver transition-all duration-400 group-focus-within:text-gold-metallic group-focus-within:tracking-[0.3em]">Full Name</label>
                    <input required className="w-full bg-transparent border-0 border-b border-white/20 focus:border-gold-metallic focus:ring-0 text-silk-beige py-3 transition-colors placeholder:text-mist-silver/30 outline-none" placeholder="Your Name" type="text" />
                  </div>
                  <div className="space-y-2 group">
                    <label className="font-label-caps text-label-caps text-mist-silver transition-all duration-400 group-focus-within:text-gold-metallic group-focus-within:tracking-[0.3em]">Phone Number</label>
                    <input required className="w-full bg-transparent border-0 border-b border-white/20 focus:border-gold-metallic focus:ring-0 text-silk-beige py-3 transition-colors placeholder:text-mist-silver/30 outline-none" placeholder="+91 00000 00000" type="tel" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label className="font-label-caps text-label-caps text-mist-silver transition-all duration-400 group-focus-within:text-gold-metallic group-focus-within:tracking-[0.3em]">Preferred Service</label>
                    <select required className="w-full bg-transparent border-0 border-b border-white/20 focus:border-gold-metallic focus:ring-0 text-silk-beige py-3 transition-colors appearance-none outline-none">
                      <option className="bg-obsidian-deep" value="">Select a Service</option>
                      <option className="bg-obsidian-deep" value="thai">Traditional Thai Massage</option>
                      <option className="bg-obsidian-deep" value="swedish">Swedish Relaxation Therapy</option>
                      <option className="bg-obsidian-deep" value="hotstone">Hot Stone Ritual</option>
                      <option className="bg-obsidian-deep" value="deeptissue">Deep Tissue Rejuvenation</option>
                      <option className="bg-obsidian-deep" value="hydrafacial">Signature Hydra Facial</option>
                    </select>
                  </div>
                  <div className="space-y-2 group">
                    <label className="font-label-caps text-label-caps text-mist-silver transition-all duration-400 group-focus-within:text-gold-metallic group-focus-within:tracking-[0.3em]">Preferred Date</label>
                    <input required className="w-full bg-transparent border-0 border-b border-white/20 focus:border-gold-metallic focus:ring-0 text-silk-beige py-3 transition-colors outline-none" style={{ colorScheme: 'dark' }} type="date" />
                  </div>
                </div>
                
                <div className="space-y-2 group">
                  <label className="font-label-caps text-label-caps text-mist-silver transition-all duration-400 group-focus-within:text-gold-metallic group-focus-within:tracking-[0.3em]">Wellness Goals / Special Requests</label>
                  <textarea className="w-full bg-transparent border-0 border-b border-white/20 focus:border-gold-metallic focus:ring-0 text-silk-beige py-3 transition-colors placeholder:text-mist-silver/30 resize-none outline-none" placeholder="Mention any specific areas of focus or special requirements..." rows={4}></textarea>
                </div>
                
                <div className="pt-6">
                  {!isSubmitted ? (
                    <button 
                      disabled={isSubmitting}
                      className="w-full gold-btn-gradient text-obsidian-deep py-5 font-label-caps text-label-caps tracking-[0.3em] hover:opacity-90 transition-all shadow-xl active:scale-95 group flex items-center justify-center space-x-4 disabled:opacity-70" 
                      type="submit"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="material-symbols-outlined animate-spin">progress_activity</span>
                          <span>Verifying...</span>
                        </>
                      ) : (
                        <>
                          <span>Confirm Booking Request</span>
                          <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
                        </>
                      )}
                    </button>
                  ) : (
                    <div className="w-full bg-surface-container-low border border-gold-metallic text-gold-metallic py-5 font-label-caps text-label-caps flex items-center justify-center space-x-4">
                      <span className="material-symbols-outlined">check_circle</span>
                      <span>Request Sent</span>
                    </div>
                  )}
                  <p className="text-center mt-6 text-label-caps font-label-caps text-mist-silver">Our concierge will contact you shortly to finalize your time slot.</p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
