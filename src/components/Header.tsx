"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Calendar, MessageCircle, Sparkles, Menu, X } from 'lucide-react';
import { useGlobalContext } from '../context/GlobalContext';
import { AnimatePresence, motion } from 'motion/react';

export default function Header() {
  const { 
    setIsBookingsPanelOpen, 
    activeBookingsCount, 
    setPresetServiceId, 
    setPresetPrice, 
    setPresetPackageName, 
    setIsBookingOpen 
  } = useGlobalContext();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-obsidian-deep/80 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all">
      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <img src="/logo.jpg" alt="HS Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-sm shadow-sm object-cover group-hover:opacity-80 transition-opacity" />
          <div className="flex flex-col text-left">
            <span className="font-headline text-xl md:text-2xl tracking-[0.3em] text-gold-metallic font-bold group-hover:opacity-80 transition-opacity">
              HYDRA SPA
            </span>
            <span className="text-[7px] uppercase tracking-[0.4em] text-mist-silver font-semibold -mt-0.5">
              Sanctuary of peace
            </span>
          </div>
        </a>

        {/* Desktop Navigation Menu Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a href="/" className={`text-xs uppercase tracking-widest font-semibold hover:text-gold-metallic transition-colors py-1 ${pathname === '/' ? 'text-gold-metallic' : 'text-mist-silver'}`}>
            Home
          </a>
          <a href="/about" className={`text-xs uppercase tracking-widest font-semibold hover:text-gold-metallic transition-colors py-1 ${pathname === '/about' ? 'text-gold-metallic' : 'text-mist-silver'}`}>
            About
          </a>
          <a href="/services" className={`text-xs uppercase tracking-widest font-semibold hover:text-gold-metallic transition-colors py-1 ${pathname === '/services' ? 'text-gold-metallic' : 'text-mist-silver'}`}>
            Services
          </a>
          <a href="/#packages" className="text-xs uppercase tracking-widest font-semibold text-mist-silver hover:text-gold-metallic transition-colors py-1">
            Packages
          </a>
          <a href="/gallery" className={`text-xs uppercase tracking-widest font-semibold hover:text-gold-metallic transition-colors py-1 ${pathname === '/gallery' ? 'text-gold-metallic' : 'text-mist-silver'}`}>
            Gallery
          </a>
          <a href="/contact" className={`text-xs uppercase tracking-widest font-semibold hover:text-gold-metallic transition-colors py-1 ${pathname === '/contact' ? 'text-gold-metallic' : 'text-mist-silver'}`}>
            Contact
          </a>
        </div>

        {/* Dynamic Utilities & Triggers */}
        <div className="flex items-center gap-3">
          {/* My Bookings LocalStorage Portal Badge */}
          <button
            onClick={() => setIsBookingsPanelOpen(true)}
            className="relative p-2 rounded-full hover:bg-white/5 text-mist-silver hover:text-gold-metallic transition-all"
            title="My Reservations"
          >
            <Calendar size={18} />
            {activeBookingsCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold-metallic text-obsidian-deep font-bold text-[8px] animate-bounce">
                {activeBookingsCount}
              </span>
            )}
          </button>

          {/* Quick Contact Toggle */}
          <a
            href="https://wa.me/918999384340"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-mist-silver hover:text-gold-metallic transition-colors"
          >
            <MessageCircle size={14} className="text-gold-metallic animate-bounce" />
            <span>Whatsapp</span>
          </a>

          {/* Main CTA */}
          <button
            onClick={() => {
              setPresetServiceId('');
              setPresetPrice(undefined);
              setPresetPackageName(undefined);
              setIsBookingOpen(true);
            }}
            className="hidden sm:block gold-gradient text-obsidian-deep px-6 py-2.5 rounded font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-all cursor-pointer shadow-lg"
          >
            Book Now
          </button>

          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden p-2 text-mist-silver hover:text-gold-metallic transition-colors ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-obsidian-deep/95 backdrop-blur-2xl absolute top-full left-0 w-full overflow-hidden border-t border-white/10"
          >
            <div className="flex flex-col items-center justify-center space-y-8 pt-12 pb-24 h-full">
              <a href="/" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm uppercase tracking-[0.2em] font-semibold hover:text-gold-metallic transition-colors ${pathname === '/' ? 'text-gold-metallic' : 'text-mist-silver'}`}>
                Home
              </a>
              <a href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm uppercase tracking-[0.2em] font-semibold hover:text-gold-metallic transition-colors ${pathname === '/about' ? 'text-gold-metallic' : 'text-mist-silver'}`}>
                About
              </a>
              <a href="/services" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm uppercase tracking-[0.2em] font-semibold hover:text-gold-metallic transition-colors ${pathname === '/services' ? 'text-gold-metallic' : 'text-mist-silver'}`}>
                Services
              </a>
              <a href="/#packages" onClick={() => setIsMobileMenuOpen(false)} className="text-sm uppercase tracking-[0.2em] font-semibold text-mist-silver hover:text-gold-metallic transition-colors">
                Packages
              </a>
              <a href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm uppercase tracking-[0.2em] font-semibold hover:text-gold-metallic transition-colors ${pathname === '/gallery' ? 'text-gold-metallic' : 'text-mist-silver'}`}>
                Gallery
              </a>
              <a href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`text-sm uppercase tracking-[0.2em] font-semibold hover:text-gold-metallic transition-colors ${pathname === '/contact' ? 'text-gold-metallic' : 'text-mist-silver'}`}>
                Contact
              </a>
              
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setPresetServiceId('');
                  setPresetPrice(undefined);
                  setPresetPackageName(undefined);
                  setIsBookingOpen(true);
                }}
                className="gold-gradient text-obsidian-deep px-8 py-3 rounded font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all mt-4"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
