"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-obsidian-deep flex items-center justify-center relative overflow-hidden px-6">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20">
        <div className="w-[600px] h-[600px] bg-gold-metallic blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto space-y-8 glass-card p-12 rounded-2xl border border-white/10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-headline-lg text-8xl md:text-9xl text-gold-metallic drop-shadow-xl mb-4">404</h1>
          <h2 className="font-headline text-3xl md:text-4xl text-silk-beige mb-6">Tranquility Not Found</h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-mist-silver text-sm md:text-base font-light tracking-wide leading-relaxed"
        >
          The page you are looking for has drifted away like a gentle breeze. It might have been moved or no longer exists in our sanctuary.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-6"
        >
          <Link 
            href="/"
            className="inline-block gold-gradient text-obsidian-deep px-8 py-4 font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-xl rounded"
          >
            Return to Sanctuary
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
