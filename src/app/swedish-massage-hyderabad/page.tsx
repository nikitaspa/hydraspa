"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SwedishMassageHyderabad() {
  return (
    <div className="bg-obsidian-deep min-h-screen pt-24 pb-12 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-headline text-4xl md:text-6xl text-silk-beige mb-6"
        >
          Classic <span className="gold-gradient-text">Swedish Massage in Hyderabad</span>
        </motion.h1>
        <p className="text-mist-silver max-w-3xl mx-auto leading-relaxed">
          Melt into complete relaxation with our signature Swedish Massage. Specifically designed for those new to massage therapy or seeking a gentle, soothing experience to completely decompress from daily stress.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-24 flex-col-reverse md:flex-row">
        <div className="space-y-6">
          <h2 className="font-headline text-3xl text-gold-metallic">The Benefits of Swedish Massage</h2>
          <p className="text-mist-silver leading-relaxed">
            Our expert therapists use long, gliding strokes (effleurage), kneading, and circular movements to relax superficial muscles and improve blood circulation. 
          </p>
          <ul className="text-mist-silver space-y-4">
            <li>♥ <strong>Stress Relief:</strong> Dramatically lowers cortisol levels and anxiety.</li>
            <li>♥ <strong>Improved Circulation:</strong> Flushes out toxins and oxygenates the blood.</li>
            <li>♥ <strong>Flexibility:</strong> Gently stretches ligaments and tendons, keeping them supple.</li>
          </ul>
          <Link href="/services" className="inline-block mt-4 gold-gradient text-obsidian-deep px-6 py-3 font-bold text-xs uppercase tracking-widest rounded">
            Book Your Session
          </Link>
        </div>
        <div className="rounded-xl overflow-hidden h-[400px]">
          <img src="/images/optimized_v2_6.webp" alt="Swedish Massage at Hydra Spa" className="w-full h-full object-cover" />
        </div>
      </section>
    </div>
  );
}
