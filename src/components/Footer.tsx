"use client";

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-16 text-mist-silver relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-metallic/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="HS Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-sm shadow-sm object-cover" />
            <div className="flex flex-col text-left">
              <span className="font-headline text-2xl tracking-[0.3em] text-gold-metallic font-bold">HYDRA SPA</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed font-light">
            The ultimate destination for quiet luxury and bespoke wellness in Hyderabad. Discover inner peace through our curated holistic therapies.
          </p>
        </div>

        <div>
          <h4 className="font-headline text-lg text-silk-beige mb-6 tracking-widest uppercase font-semibold">Contact</h4>
          <div className="space-y-4 text-sm font-light">
            <p className="flex items-center gap-3 hover:text-gold-metallic transition-colors">
              <Phone size={16} className="text-gold-metallic" />
              <a href="tel:+918999384340">+91 8999384340</a>
            </p>
            <p className="flex items-center gap-3 hover:text-gold-metallic transition-colors cursor-pointer">
              <Mail size={16} className="text-gold-metallic" />
              <span>concierge@hydraspa.in</span>
            </p>
            <p className="flex items-start gap-3 hover:text-gold-metallic transition-colors">
              <MapPin size={16} className="text-gold-metallic flex-shrink-0 mt-1" />
              <span>Plot 42, Jubilee Enclave,<br />Madhapur, Hyderabad 500081</span>
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-headline text-lg text-silk-beige mb-6 tracking-widest uppercase font-semibold">Explore</h4>
          <div className="space-y-3 text-sm font-light flex flex-col">
            <a href="/#about" className="hover:text-gold-metallic transition-colors w-fit">Our Philosophy</a>
            <a href="/services" className="hover:text-gold-metallic transition-colors w-fit">Bespoke Services</a>
            <a href="/#packages" className="hover:text-gold-metallic transition-colors w-fit">Luxury Packages</a>
            <a href="/gallery" className="hover:text-gold-metallic transition-colors w-fit">Gallery</a>
            <a href="/contact" className="hover:text-gold-metallic transition-colors w-fit">Contact Us</a>
          </div>
        </div>

        <div>
          <h4 className="font-headline text-lg text-silk-beige mb-6 tracking-widest uppercase font-semibold">Hours</h4>
          <div className="space-y-3 text-sm font-light">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>Mon - Fri</span>
              <span className="text-gold-metallic">10:00 AM - 9:00 PM</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>Sat - Sun</span>
              <span className="text-gold-metallic">9:00 AM - 10:00 PM</span>
            </div>
            <p className="pt-2 text-xs text-mist-silver/70 italic">* Prior reservation mandatory for weekend slots.</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 text-center text-xs text-mist-silver/50 tracking-widest">
        &copy; {new Date().getFullYear()} HYDRA SPA LUXURY WELLNESS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
