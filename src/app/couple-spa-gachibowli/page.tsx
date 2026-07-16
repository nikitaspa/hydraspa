"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CoupleSpaGachibowli() {
  return (
    <div className="bg-obsidian-deep min-h-screen pt-24 pb-12 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-headline text-4xl md:text-6xl text-silk-beige mb-6"
        >
          Luxury <span className="gold-gradient-text">Couple Spa in Gachibowli</span>
        </motion.h1>
        <p className="text-mist-silver max-w-3xl mx-auto leading-relaxed">
          Reconnect and unwind together at Hydra Spa. Our exclusive couple spa packages in Gachibowli are designed to offer a private, romantic, and deeply relaxing experience for you and your partner.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-24 flex-col-reverse md:flex-row">
        <div className="space-y-6">
          <h2 className="font-headline text-3xl text-gold-metallic">A Romantic Retreat</h2>
          <p className="text-mist-silver leading-relaxed">
            Share a moment of pure bliss with our bespoke side-by-side treatments. Located securely in Gachibowli, our couple's suites feature dual massage tables, ambient romantic lighting, and optional private baths. 
          </p>
          <ul className="text-mist-silver space-y-4">
            <li>♥ <strong>Synchronized Massages:</strong> Our therapists work in harmony to ensure both partners experience simultaneous relaxation.</li>
            <li>♥ <strong>Ultimate Privacy:</strong> Enjoy our premium soundproof suites exclusively designed for couples.</li>
            <li>♥ <strong>Custom Aromatherapy:</strong> Choose from our selection of sensual and calming essential oils.</li>
          </ul>
          <Link href="/services" className="inline-block mt-4 gold-gradient text-obsidian-deep px-6 py-3 font-bold text-xs uppercase tracking-widest rounded">
            Book Couple's Package
          </Link>
        </div>
        <div className="rounded-xl overflow-hidden h-[400px]">
          <img src="/images/optimized_v2_17.webp" alt="Couple Spa Suite in Gachibowli" className="w-full h-full object-cover" />
        </div>
      </section>
    </div>
  );
}
