"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import Image from 'next/image';

import { useGlobalContext } from '../../context/GlobalContext';

// Define the precise gallery items from the user's design
const LUXURY_GALLERY_ITEMS = [
  {
    id: 'g-1',
    category: 'interiors',
    image: '/images/optimized_v2_9.webp',
    title: 'The Shadow Hallway',
    tag: 'SPA INTERIORS',
    alt: 'A luxurious spa hallway with dark textured walls and soft recessed amber lighting. Small glowing candles line the floor on both sides, casting long shadows. Minimalist wooden accents and a polished black stone floor create a sense of deep calm and exclusive quiet luxury.'
  },
  {
    id: 'g-2',
    category: 'reception',
    image: '/images/optimized_v2_10.webp',
    title: 'First Impression',
    tag: 'RECEPTION',
    alt: 'A high-end spa reception desk made of dark, rough-hewn marble with a backlit gold-metallic base. A tall glass vase with white orchids sits on the desk. Behind it, a softly lit wall with a geometric pattern in dark charcoal. The atmosphere is professional yet welcoming, with warm overhead spotlights.'
  },
  {
    id: 'g-3',
    category: 'massage',
    image: '/images/optimized_v2_11.webp',
    title: 'Deep Healing Space',
    tag: 'MASSAGE ROOMS',
    alt: 'A serene massage room with a single premium massage table covered in crisp white linen. A wooden tray nearby holds essential oil bottles, smooth black volcanic stones, and a small ceramic bowl of water with floating flower petals. The lighting is low and warm, creating a cocoon-like sanctuary.'
  },
  {
    id: 'g-4',
    category: 'steam',
    image: '/images/optimized_v2_12.webp',
    title: 'The Vapor Cloud',
    tag: 'STEAM ROOMS',
    alt: 'A modern steam room with dark grey mosaic tiles and clouds of white mist softly illuminated by blue and violet LED strips under the benches. The floor is slightly wet and reflective, capturing the ethereal light. A single silver water spout provides a cooling contrast in the atmospheric steam.'
  },
  {
    id: 'g-5',
    category: 'couple',
    image: '/images/optimized_v2_13.webp',
    title: 'Shared Tranquility',
    tag: 'COUPLE ROOMS',
    alt: 'A spacious couple\'s suite featuring two side-by-side massage tables and a large sunken stone bathtub in the background filled with rose petals and foam. Dimmable warm lights and hundreds of small tea light candles create an ultra-romantic and tranquil atmosphere. Dark wood beams on the ceiling.'
  },
  {
    id: 'g-6',
    category: 'lounge',
    image: '/images/optimized_v2_14.webp',
    title: 'The Afterglow',
    tag: 'RELAXATION LOUNGE',
    alt: 'A relaxation lounge with plush velvet chaises-longues in a dark navy color. Floor-to-ceiling glass windows look out onto a moonlit garden. A central fireplace with a golden metal surround glows warmly. Small side tables hold teacups and minimalist books. Luxury quiet atmosphere.'
  },
  {
    id: 'g-7',
    category: 'massage',
    image: '/images/optimized_v2_15.webp',
    title: 'Botanical Essence',
    tag: 'MASSAGE ROOMS',
    alt: 'Detailed macro shot of high-quality spa products. Bottles of clear and golden essential oils, a bunch of dried lavender, and a pile of pristine white towels on a dark slate surface. Soft focus background with a warm golden candle glow, emphasizing textures and luxury wellness.'
  },
  {
    id: 'g-8',
    category: 'interiors',
    image: '/images/optimized_v2_16.webp',
    title: 'The Hydro-Basin',
    tag: 'SPA INTERIORS',
    alt: 'An indoor hydrotherapy pool area within the spa. The water is deep turquoise and perfectly still, reflecting the dark, architectural ceiling. Recessed warm lighting around the perimeter and underwater glow. The walls are finished in a dark, shimmering charcoal plaster. Quiet luxury aesthetic.'
  }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<(typeof LUXURY_GALLERY_ITEMS)[0] | null>(null);

  const { setIsBookingOpen, setPresetServiceId, setPresetPrice, setPresetPackageName } = useGlobalContext();

  const filteredItems = filter === 'all'
    ? LUXURY_GALLERY_ITEMS
    : LUXURY_GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <>
      {/* GALLERY HERO */}
      <section className="max-w-5xl mx-auto px-6 mb-24 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-gold-metallic font-semibold mb-4"
        >
          THE VISUAL JOURNEY
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-headline text-4xl md:text-6xl text-silk-beige mb-8"
        >
          Our Sanctuary
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base text-mist-silver leading-relaxed font-light max-w-3xl mx-auto mb-16"
        >
          Explore the atmospheric serenity of Hydra Spa. A meticulously designed space where ancient rituals meet contemporary luxury through soft lighting, natural textures, and the gentle whisper of flowing water.
        </motion.p>

        {/* Category Pill Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            { id: 'all', label: 'All Interiors' },
            { id: 'interiors', label: 'Spa Interiors' },
            { id: 'reception', label: 'Reception' },
            { id: 'massage', label: 'Massage Rooms' },
            { id: 'couple', label: 'Couple Rooms' },
            { id: 'steam', label: 'Steam Rooms' },
            { id: 'lounge', label: 'Relaxation Lounge' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2.5 rounded text-[10px] uppercase tracking-widest font-bold border transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-gold-metallic text-obsidian-deep border-gold-metallic'
                  : 'border-white/10 hover:border-gold-metallic/50 text-mist-silver hover:text-silk-beige'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
      </section>

      {/* MASONRY GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => setLightboxItem(item)}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 cursor-zoom-in aspect-[4/3] shadow-lg hover:border-gold-metallic/40 transition-all duration-300"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 33vw"
                    referrerPolicy="no-referrer"
                    className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                {/* Subtle vignette layer overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/90 via-obsidian-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay text content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-gold-metallic text-[10px] font-semibold tracking-[0.2em] mb-2">{item.tag}</span>
                  <h3 className="font-headline text-lg text-silk-beige font-medium">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* EXPERIENCE CALL TO ACTION */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized_v2_17.webp"
            alt="Luxury Spa dusk view"
            fill
            referrerPolicy="no-referrer"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deep via-transparent to-obsidian-deep" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-xl mx-auto space-y-6">
          <h2 className="font-headline text-3xl md:text-5xl text-silk-beige leading-tight">
            Experience it for yourself
          </h2>
          <p className="text-xs md:text-sm text-mist-silver font-light leading-relaxed">
            Your journey to absolute tranquility begins with a single step. Reserve your sanctuary today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => {
                setPresetServiceId(undefined);
                setPresetPrice(undefined);
                setPresetPackageName(undefined);
                setIsBookingOpen(true);
              }}
              className="bg-gold-metallic text-obsidian-deep px-10 py-4 font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
            >
              Schedule Your Visit
            </button>
            <a
              href="/#services"
              className="border border-gold-metallic text-gold-metallic px-10 py-4 font-bold text-[10px] uppercase tracking-widest hover:bg-gold-metallic hover:text-obsidian-deep transition-all"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-obsidian-deep/95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setLightboxItem(null)}
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-silk-beige hover:text-gold-metallic hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl w-full max-h-[80vh] flex flex-col justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[16/10] max-h-[65vh] rounded-lg overflow-hidden border border-white/10">
                <Image
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-contain bg-obsidian-deep"
                />
              </div>
              <div className="mt-4 text-center max-w-2xl px-4">
                <span className="text-gold-metallic text-xs font-semibold tracking-widest uppercase">{lightboxItem.tag}</span>
                <h4 className="font-headline text-xl text-silk-beige mt-1">{lightboxItem.title}</h4>
                <p className="text-xs text-mist-silver mt-2 font-light leading-relaxed">{lightboxItem.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
