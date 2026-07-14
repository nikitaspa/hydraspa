"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronsDown, Diamond } from 'lucide-react';
import { useGlobalContext } from '../../context/GlobalContext';

export default function ServicesPage() {
  const { setIsBookingOpen, setPresetServiceId, setPresetPrice } = useGlobalContext();
  useEffect(() => {
    // Simple scroll reveal animation
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.glass-card, section h2, .scroll-reveal').forEach(el => {
      el.classList.add('scroll-reveal');
      observer.observe(el);
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <header className="relative h-[716px] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-6 md:px-0">
          <span className="font-label-caps text-label-caps text-gold-metallic tracking-[0.4em] mb-4 block">REDEFINING WELLNESS</span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-silk-beige mb-6">Our Sanctuary Services</h1>
          <p className="max-w-2xl mx-auto font-body-lg text-body-lg text-mist-silver opacity-80">Indulge in a curated selection of ancient healing traditions and modern hydro-therapy rituals designed for the ultimate rejuvenation.</p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronsDown className="text-gold-metallic" size={40} />
        </div>
      </header>

      {/* Signature Hydra Therapy Highlight */}
      <section id="signature-therapy" className="py-32 px-6 md:px-20 max-w-[1440px] mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 border border-gold-metallic/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>
            <img 
              className="w-full aspect-[4/5] object-cover relative z-10" 
              alt="High-end luxury spa interior with hydrotherapy pool" 
              src="/images/optimized_v2_18.webp" 
            />
          </div>
          <div className="w-full lg:w-1/2">
            <span className="font-label-caps text-label-caps text-gold-metallic tracking-widest mb-6 block">EXCLUSIVELY OURS</span>
            <h2 className="font-headline-lg text-headline-lg text-silk-beige mb-8">Signature Hydra Therapy</h2>
            <p className="font-body-lg text-body-lg text-mist-silver mb-10 leading-relaxed">Our crowning achievement in wellness. This ritual combines rhythmic manual lymphatic drainage with our proprietary temperature-controlled mineral infusion. Designed to reset your circadian rhythm and deeply detoxify the skin's dermal layers.</p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="border-l border-gold-metallic pl-6">
                <span className="block font-label-caps text-label-caps text-gold-metallic mb-1">DURATION</span>
                <span className="font-headline-md text-headline-md text-silk-beige">120 MIN</span>
              </div>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="text-mist-silver font-medium tracking-wider">STARTING</span>
                <span className="font-headline-md text-headline-md text-silk-beige">FROM ₹350</span>
              </div>
            </div>
            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-4 text-silk-beige">
                <Diamond className="text-gold-metallic" size={20} />
                <span>Full Body Mineral Scrub &amp; Wrap</span>
              </div>
              <div className="flex items-center gap-4 text-silk-beige">
                <Diamond className="text-gold-metallic" size={20} />
                <span>Deep Tissue Fusion Massage</span>
              </div>
              <div className="flex items-center gap-4 text-silk-beige">
                <Diamond className="text-gold-metallic" size={20} />
                <span>Private Hydro-Oxygen Bath</span>
              </div>
            </div>
            <button 
              onClick={() => {
                setPresetServiceId('signature-hydra-therapy');
                setPresetPrice(350);
                setIsBookingOpen(true);
              }}
              className="gold-btn-gradient text-obsidian-deep px-12 py-4 font-label-caps text-label-caps font-extrabold tracking-widest hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all"
            >
              RESERVE EXPERIENCE
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="spa-collection" className="py-32 bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="text-center mb-24">
            <h2 className="font-headline-lg text-headline-lg text-silk-beige mb-4">The Spa Collection</h2>
            <div className="h-[2px] w-24 bg-gold-metallic mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Swedish Massage */}
            <div className="glass-card group hover:scale-[1.02] transition-all duration-500 luxury-shadow flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  alt="Swedish massage" 
                  src="/images/optimized_v2_19.webp" 
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline-md text-headline-md text-gold-metallic">Swedish</h3>
                  <span className="font-label-caps text-label-caps text-mist-silver">60/90 MIN</span>
                </div>
                <p className="text-mist-silver mb-6 flex-grow">Classic long-stroke massage designed to increase oxygen levels in the blood and decrease muscle toxins.</p>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-silk-beige font-semibold">From ₹120</span>
                  <button 
                    onClick={() => {
                      setPresetServiceId('swedish-massage');
                      setPresetPrice(120);
                      setIsBookingOpen(true);
                    }}
                    className="text-gold-metallic font-label-caps text-label-caps flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    BOOK NOW <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Deep Tissue */}
            <div className="glass-card group hover:scale-[1.02] transition-all duration-500 luxury-shadow flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  alt="Deep tissue massage" 
                  src="/images/optimized_v2_20.webp" 
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline-md text-headline-md text-gold-metallic">Deep Tissue</h3>
                  <span className="font-label-caps text-label-caps text-mist-silver">90 MIN</span>
                </div>
                <p className="text-mist-silver mb-6 flex-grow">Targeted therapy for chronic muscle tension using slow, deliberate strokes to reach deeper layers of fascia.</p>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-silk-beige font-semibold">From ₹160</span>
                  <button 
                    onClick={() => {
                      setPresetServiceId('deep-tissue');
                      setPresetPrice(160);
                      setIsBookingOpen(true);
                    }}
                    className="text-gold-metallic font-label-caps text-label-caps flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    BOOK NOW <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Balinese */}
            <div className="glass-card group hover:scale-[1.02] transition-all duration-500 luxury-shadow flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  alt="Balinese massage" 
                  src="/images/optimized_v2_21.webp" 
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline-md text-headline-md text-gold-metallic">Balinese</h3>
                  <span className="font-label-caps text-label-caps text-mist-silver">60/90 MIN</span>
                </div>
                <p className="text-mist-silver mb-6 flex-grow">A full-body, deep-tissue, holistic treatment using a combination of gentle stretches, acupressure, and aromatherapy.</p>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-silk-beige font-semibold">From ₹145</span>
                  <button 
                    onClick={() => {
                      setPresetServiceId('aromatherapy');
                      setPresetPrice(145);
                      setIsBookingOpen(true);
                    }}
                    className="text-gold-metallic font-label-caps text-label-caps flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    BOOK NOW <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Aromatherapy */}
            <div className="glass-card group hover:scale-[1.02] transition-all duration-500 luxury-shadow flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  alt="Aromatherapy massage" 
                  src="/images/optimized_v2_22.webp" 
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline-md text-headline-md text-gold-metallic">Aromatherapy</h3>
                  <span className="font-label-caps text-label-caps text-mist-silver">60 MIN</span>
                </div>
                <p className="text-mist-silver mb-6 flex-grow">A sensory journey using highly concentrated plant oils to enhance physical and emotional well-being.</p>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-silk-beige font-semibold">From ₹130</span>
                  <button 
                    onClick={() => {
                      setPresetServiceId('reflexology');
                      setPresetPrice(130);
                      setIsBookingOpen(true);
                    }}
                    className="text-gold-metallic font-label-caps text-label-caps flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    BOOK NOW <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Thai Massage */}
            <div className="glass-card group hover:scale-[1.02] transition-all duration-500 luxury-shadow flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  alt="Thai massage" 
                  src="/images/optimized_v2_23.webp" 
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline-md text-headline-md text-gold-metallic">Thai Massage</h3>
                  <span className="font-label-caps text-label-caps text-mist-silver">90 MIN</span>
                </div>
                <p className="text-mist-silver mb-6 flex-grow">An ancient healing system combining acupressure, Indian Ayurvedic principles, and assisted yoga postures.</p>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-silk-beige font-semibold">From ₹155</span>
                  <button 
                    onClick={() => {
                      setPresetServiceId('hot-stone');
                      setPresetPrice(155);
                      setIsBookingOpen(true);
                    }}
                    className="text-gold-metallic font-label-caps text-label-caps flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    BOOK NOW <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Hot Stone */}
            <div className="glass-card group hover:scale-[1.02] transition-all duration-500 luxury-shadow flex flex-col">
              <div className="h-64 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  alt="Hot stone massage" 
                  src="/images/optimized_v2_24.webp" 
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-headline-md text-headline-md text-gold-metallic">Hot Stone</h3>
                  <span className="font-label-caps text-label-caps text-mist-silver">90 MIN</span>
                </div>
                <p className="text-mist-silver mb-6 flex-grow">Heated basalt stones placed on key energy points to melt away tension and balance the body's spirit.</p>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-silk-beige font-semibold">From ₹180</span>
                  <button 
                    onClick={() => {
                      setPresetServiceId('couples-retreat');
                      setPresetPrice(180);
                      setIsBookingOpen(true);
                    }}
                    className="text-gold-metallic font-label-caps text-label-caps flex items-center gap-2 group-hover:gap-4 transition-all"
                  >
                    BOOK NOW <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Couple Spa Section */}
      <section id="booking-cta" className="py-32 relative overflow-hidden bg-obsidian-deep">
        <div className="absolute inset-0 z-0 opacity-20"></div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            <div className="w-full lg:w-1/2">
              <img 
                className="w-full aspect-video object-cover shadow-2xl border border-white/5" 
                alt="Couples' spa suite" 
                src="/images/optimized_v2_25.webp" 
              />
            </div>
            <div className="w-full lg:w-1/2">
              <span className="font-label-caps text-label-caps text-gold-metallic mb-4 block">SHARED SERENITY</span>
              <h2 className="font-headline-lg text-headline-lg text-silk-beige mb-8">Sacred Union Package</h2>
              <p className="font-body-lg text-body-lg text-mist-silver mb-10">Reconnect in our private VIP suite. A journey designed for two, featuring side-by-side treatments followed by a private hydrotherapy session with artisan infusions.</p>
              <div className="space-y-6 mb-12">
                <div className="p-6 bg-white/5 border border-white/10 flex justify-between items-center hover:bg-white/10 transition-colors">
                  <div>
                    <h4 className="text-silk-beige font-medium">Eternal Bloom (90 Min)</h4>
                    <p className="text-sm text-mist-silver">Dual Swedish massage + facial</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-gold-metallic font-semibold">₹380</span>
                  </div>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 flex justify-between items-center hover:bg-white/10 transition-colors">
                  <div>
                    <h4 className="text-silk-beige font-medium">Royal Hydra Ritual (150 Min)</h4>
                    <p className="text-sm text-mist-silver">The full signature experience for two</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-gold-metallic font-semibold">₹650</span>
                  </div>
                </div>
              </div>
              <button className="border border-gold-metallic text-gold-metallic px-10 py-4 font-label-caps text-label-caps hover:bg-gold-metallic hover:text-obsidian-deep transition-all duration-500">EXPLORE COUPLES' RITUALS</button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section id="faq" className="py-32 px-6 md:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-8 h-auto md:h-[800px]">
          
          {/* Body Scrub */}
          <div className="md:col-span-2 md:row-span-1 glass-card p-10 flex flex-col justify-end relative overflow-hidden group">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000" 
              alt="Body scrub" 
              src="/images/optimized_v2_26.webp" 
            />
            <div className="relative z-10">
              <h3 className="font-headline-md text-headline-md text-gold-metallic mb-2">Body Scrub</h3>
              <p className="text-mist-silver mb-6">Revitalizing mineral exfoliation for velvet-soft skin.</p>
              <span className="text-silk-beige">45 MIN | $90</span>
            </div>
          </div>

          {/* Steam Bath */}
          <div className="md:col-span-2 md:row-span-1 glass-card p-10 flex flex-col justify-end relative overflow-hidden group">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000" 
              alt="Steam bath" 
              src="/images/optimized_v2_27.webp" 
            />
            <div className="relative z-10">
              <h3 className="font-headline-md text-headline-md text-gold-metallic mb-2">Steam Bath</h3>
              <p className="text-mist-silver mb-6">Aromatic steam ritual to open pores and clarify the spirit.</p>
              <span className="text-silk-beige">30 MIN | $60</span>
            </div>
          </div>

          {/* Foot Reflexology */}
          <div className="md:col-span-4 md:row-span-1 glass-card p-10 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden group">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-1000" 
              alt="Reflexology" 
              src="/images/optimized_v2_28.webp" 
            />
            <div className="relative z-10 w-full md:w-1/2">
              <h3 className="font-headline-md text-headline-md text-gold-metallic mb-2">Foot Reflexology</h3>
              <p className="text-mist-silver mb-6">Targeted pressure point therapy focusing on the feet to stimulate wellness throughout the entire body.</p>
              <span className="text-silk-beige">45 MIN | $85</span>
            </div>
            <div className="relative z-10 w-full md:w-1/2 flex justify-end">
              <button className="gold-btn-gradient text-obsidian-deep px-8 py-3 font-label-caps text-label-caps">BOOK REFLEXOLOGY</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-banner" className="py-32 text-center bg-silk-beige text-obsidian-deep">
        <div className="max-w-3xl mx-auto px-6">
          <span className="font-label-caps text-label-caps tracking-widest mb-6 block text-charcoal-rich">READY FOR RENEWAL?</span>
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-10 italic">Your sanctuary awaits.</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-obsidian-deep text-gold-metallic px-12 py-5 font-label-caps text-label-caps font-bold hover:bg-charcoal-rich transition-colors">BOOK APPOINTMENT</button>
            <button className="border border-obsidian-deep text-obsidian-deep px-12 py-5 font-label-caps text-label-caps font-bold hover:bg-obsidian-deep hover:text-silk-beige transition-all">VIEW PRICING GUIDE</button>
          </div>
        </div>
      </section>


    </>
  );
}
