"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SpaInGachibowli() {
  return (
    <div className="bg-obsidian-deep min-h-screen pt-24 pb-12 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-headline text-4xl md:text-6xl text-silk-beige mb-6"
        >
          The Premier <span className="gold-gradient-text">Spa in Gachibowli</span>
        </motion.h1>
        <p className="text-mist-silver max-w-3xl mx-auto leading-relaxed">
          Located in the heart of Hyderabad's IT hub, Hydra Spa offers an unparalleled wellness escape. Whether you're looking for a quick stress-relief massage after work or a full-day luxury retreat, our expert therapists in Gachibowli are dedicated to your complete rejuvenation.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="rounded-xl overflow-hidden h-[400px]">
          <img src="/images/optimized_v2_4.webp" alt="Spa in Gachibowli" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="font-headline text-3xl text-gold-metallic">Why Choose Our Gachibowli Spa?</h2>
          <ul className="text-mist-silver space-y-4">
            <li>✨ <strong>Central Location:</strong> Easily accessible from Hitec City, Madhapur, and Financial District.</li>
            <li>✨ <strong>Certified Therapists:</strong> World-class professionals trained in authentic Balinese and Swedish techniques.</li>
            <li>✨ <strong>Quiet Luxury:</strong> Soundproofed rooms ensuring complete detachment from the city noise.</li>
            <li>✨ <strong>Hygiene First:</strong> Medical-grade sanitization protocols for your safety and peace of mind.</li>
          </ul>
          <Link href="/services" className="inline-block mt-4 gold-gradient text-obsidian-deep px-6 py-3 font-bold text-xs uppercase tracking-widest rounded">
            Explore All Services
          </Link>
        </div>
      </section>
    </div>
  );
}
