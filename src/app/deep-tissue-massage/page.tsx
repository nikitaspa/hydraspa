"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DeepTissueMassage() {
  return (
    <div className="bg-obsidian-deep min-h-screen pt-24 pb-12 overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-headline text-4xl md:text-6xl text-silk-beige mb-6"
        >
          Targeted <span className="gold-gradient-text">Deep Tissue Massage</span>
        </motion.h1>
        <p className="text-mist-silver max-w-3xl mx-auto leading-relaxed">
          Break down knots and relieve chronic tension. Our specialized Deep Tissue Massage in Gachibowli focuses on the deepest layers of muscle tissue, tendons, and fascia to alleviate severe pain and muscle stiffness.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="rounded-xl overflow-hidden h-[400px]">
          <img src="/images/optimized_v2_18.webp" alt="Deep Tissue Therapy at Hydra Spa" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="font-headline text-3xl text-gold-metallic">Intense Healing & Recovery</h2>
          <p className="text-mist-silver leading-relaxed">
            Ideal for athletes, professionals with chronic desk-posture issues, and anyone suffering from persistent muscle aches. We utilize concentrated pressure and slow, deliberate strokes.
          </p>
          <ul className="text-mist-silver space-y-4">
            <li>✨ <strong>Pain Management:</strong> Highly effective for lower back pain, stiff necks, and sore shoulders.</li>
            <li>✨ <strong>Sports Recovery:</strong> Accelerates muscle healing and breaks down scar tissue.</li>
            <li>✨ <strong>Postural Alignment:</strong> Helps correct imbalances caused by tight fascia.</li>
          </ul>
          <Link href="/services" className="inline-block mt-4 gold-gradient text-obsidian-deep px-6 py-3 font-bold text-xs uppercase tracking-widest rounded">
            Explore Booking Options
          </Link>
        </div>
      </section>
    </div>
  );
}
