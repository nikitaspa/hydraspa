"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Sparkles, Droplets } from 'lucide-react';
import Link from 'next/link';
import { useGlobalContext } from '../../context/GlobalContext';

export default function AboutPage() {
  const { setIsBookingOpen } = useGlobalContext();

  return (
    <div className="bg-obsidian-deep min-h-screen pt-24 pb-12 overflow-hidden">
      
      {/* Hero Section */}
      <section id="about-hero" className="relative px-6 md:px-12 max-w-[1440px] mx-auto text-center mb-32">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] text-gold-metallic font-semibold flex items-center justify-center gap-2 mb-6"
        >
          <Sparkles size={12} className="animate-pulse" /> The Hydra Spa Experience
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="font-headline text-4xl md:text-6xl font-bold text-silk-beige leading-tight tracking-tight mb-8 max-w-4xl mx-auto"
        >
          Sanctuary of Peace in <span className="gold-gradient-text">Gachibowli</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-mist-silver md:text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Established with the belief that wellness is the foundation of a vibrant life. Hydra Spa brings ancient healing traditions and modern therapeutic practices together in an environment of absolute luxury and serenity.
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <section id="our-story" className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-headline-md text-3xl text-gold-metallic mb-4">Our Mission</h3>
              <p className="text-mist-silver leading-relaxed">
                To provide an unparalleled sanctuary where physical tension and mental stress melt away. We are dedicated to elevating the well-being of every guest through bespoke treatments, meticulous care, and a transformative environment.
              </p>
            </div>
            <div>
              <h3 className="font-headline-md text-3xl text-gold-metallic mb-4">Our Vision</h3>
              <p className="text-mist-silver leading-relaxed">
                To be the premier wellness destination in Hyderabad, recognized globally for setting new standards in holistic therapies, hygiene, and the ultimate customer experience.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-96 w-full rounded-lg overflow-hidden border border-white/10 luxury-shadow"
          >
            <img src="/images/optimized_v2_13.webp" alt="Serene spa environment" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-obsidian-deep/20"></div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="core-values" className="py-24 bg-white/5 border-y border-white/10 mb-32">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold text-silk-beige mb-4">Why Choose Hydra Spa?</h2>
            <p className="text-mist-silver max-w-2xl mx-auto">Every detail of your visit is carefully orchestrated to ensure a sublime experience.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl border flex flex-col items-start hover:-translate-y-2 transition-transform duration-300">
              <div className="h-12 w-12 rounded-full bg-gold-metallic/10 flex items-center justify-center mb-6">
                <Heart className="text-gold-metallic" size={24} />
              </div>
              <h4 className="text-xl text-silk-beige font-semibold mb-3">Professional Therapists</h4>
              <p className="text-mist-silver text-sm leading-relaxed">
                Our therapists undergo rigorous training in both Eastern and Western modalities. With years of experience and intuitive touch, they customize every treatment to your body's specific needs.
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl border flex flex-col items-start hover:-translate-y-2 transition-transform duration-300">
              <div className="h-12 w-12 rounded-full bg-gold-metallic/10 flex items-center justify-center mb-6">
                <Sparkles className="text-gold-metallic" size={24} />
              </div>
              <h4 className="text-xl text-silk-beige font-semibold mb-3">Premium Facilities</h4>
              <p className="text-mist-silver text-sm leading-relaxed">
                Immerse yourself in our sound-proofed therapy suites, temperature-controlled beds, ambient lighting, and bespoke aromatherapy blends. Our facilities are designed for absolute comfort.
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl border flex flex-col items-start hover:-translate-y-2 transition-transform duration-300">
              <div className="h-12 w-12 rounded-full bg-gold-metallic/10 flex items-center justify-center mb-6">
                <ShieldCheck className="text-gold-metallic" size={24} />
              </div>
              <h4 className="text-xl text-silk-beige font-semibold mb-3">Uncompromising Hygiene</h4>
              <p className="text-mist-silver text-sm leading-relaxed">
                Your health and safety are paramount. We adhere to medical-grade sterilization protocols. All linens are single-use or high-heat sanitized, and suites are thoroughly disinfected between guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="visit-us-cta" className="px-6 md:px-12 max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-silk-beige mb-6">Experience the Difference</h2>
        <p className="text-mist-silver mb-10 text-lg">Join us at Hydra Spa and discover why we are the preferred wellness sanctuary in Hyderabad.</p>
        <button
          onClick={() => setIsBookingOpen(true)}
          className="gold-gradient text-obsidian-deep px-10 py-4 rounded font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-lg"
        >
          Book Your Ritual
        </button>
      </section>

    </div>
  );
}
