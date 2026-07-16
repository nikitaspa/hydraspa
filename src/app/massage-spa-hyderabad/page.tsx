"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MassageSpaHyderabad() {
  return (
    <div className="bg-obsidian-deep min-h-screen pt-24 pb-12 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-headline text-4xl md:text-6xl text-silk-beige mb-6"
        >
          Luxury <span className="gold-gradient-text">Massage Spa in Hyderabad</span>
        </motion.h1>
        <p className="text-mist-silver max-w-3xl mx-auto leading-relaxed">
          Discover the true essence of relaxation at Hydra Spa, the top-rated massage spa in Hyderabad. Our signature massage therapies are crafted to melt away tension and restore your body's natural harmony.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="rounded-xl overflow-hidden h-[400px]">
          <img src="/images/optimized_v2_13.webp" alt="Professional Massage Therapy in Hyderabad" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="font-headline text-3xl text-gold-metallic">The Art of Healing Touch</h2>
          <p className="text-mist-silver leading-relaxed">
            Hyderabad is a bustling metropolis, and finding a moment of silence is a luxury. We provide a tranquil sanctuary where ancient healing traditions meet modern luxury.
          </p>
          <ul className="text-mist-silver space-y-4">
            <li>✨ <strong>Authentic Techniques:</strong> From ancient Balinese stretches to intensive Deep Tissue work.</li>
            <li>✨ <strong>Premium Oils:</strong> We use only organic, hypoallergenic massage oils and lotions.</li>
            <li>✨ <strong>Bespoke Pressure:</strong> Our therapists customize the pressure exactly to your preference and pain points.</li>
          </ul>
          <Link href="/services" className="inline-block mt-4 gold-gradient text-obsidian-deep px-6 py-3 font-bold text-xs uppercase tracking-widest rounded">
            View Massage Menu
          </Link>
        </div>
      </section>
    </div>
  );
}
