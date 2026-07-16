import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles, Star, MessageSquare, Plus, X, Calendar, Clock, ChevronDown, Check,
  Heart, Award, ShieldCheck, ChevronUp, Send, ArrowRight, MapPin, Phone,
  Mail, Users, HelpCircle, Eye, CheckCircle2, MessageCircle, ChevronLeft, ChevronRight
} from 'lucide-react';

import { TREATMENTS, THERAPISTS, TESTIMONIALS, GALLERY_ITEMS, STANDARD_PACKAGES, FAQS } from './data';
import { Treatment, Testimonial } from './types';

// Child components
import BookingModal from './components/BookingModal';
import ServiceDrawer from './components/ServiceDrawer';
import BespokeCustomizer from './components/BespokeCustomizer';
import ReviewModal from './components/ReviewModal';
import MyBookingsPanel from './components/MyBookingsPanel';

export default function App() {
  // Navigation states
  const [activeSection, setActiveSection] = useState('home');

  // Hero Slider state
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const heroImages = [
    '/images/optimized_v2_1.webp',
    '/images/optimized_v2_2.webp',
    '/images/optimized_v2_3.webp'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Booking & Panel states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [presetServiceId, setPresetServiceId] = useState('');
  const [presetPrice, setPresetPrice] = useState<number | undefined>(undefined);
  const [presetPackageName, setPresetPackageName] = useState<string | undefined>(undefined);

  const [activeBookingsCount, setActiveBookingsCount] = useState(0);
  const [isBookingsPanelOpen, setIsBookingsPanelOpen] = useState(false);

  // Service Insights Drawer state
  const [selectedInsightTreatment, setSelectedInsightTreatment] = useState<Treatment | null>(null);

  // Review submission state
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  // Gallery Filter state
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'rooms' | 'treatments' | 'products'>('all');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);

  // FAQ Expand state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [contactSuccess, setContactSuccess] = useState(false);

  // WhatsApp concierge assistant widget state
  const [isWhatsappOpen, setIsWhatsappOpen] = useState(false);
  const [whatsappMsg, setWhatsappMsg] = useState('');

  // Service category filter
  const [serviceFilter, setServiceFilter] = useState<'all' | 'massage' | 'ritual' | 'aromatherapy'>('all');

  // Load existing bookings on mount to show correct badge count
  useEffect(() => {
    try {
      const saved = localStorage.getItem('hydra_bookings');
      if (saved) {
        const parsed = JSON.parse(saved);
        setActiveBookingsCount(parsed.length);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleOpenBookingWithPreset = (serviceId: string, price: number) => {
    setPresetServiceId(serviceId);
    setPresetPrice(price);
    setPresetPackageName(undefined);
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithPackage = (packageName: string, price: number) => {
    setPresetServiceId('package');
    setPresetPrice(price);
    setPresetPackageName(packageName);
    setIsBookingOpen(true);
  };

  const handleAddNewReview = (newReview: Testimonial) => {
    setTestimonials(prev => [newReview, ...prev]);
    // Scroll smoothly to testimonial list
    const el = document.getElementById('testimonials');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterSuccess(false);
      setNewsletterEmail('');
    }, 4000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactPhone.trim()) return;
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setContactName('');
      setContactPhone('');
      setContactMsg('');
    }, 4000);
  };

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsappMsg.trim()) return;
    // Redirect to WhatsApp with prefilled message
    const formattedMsg = encodeURIComponent(`Hello Hydra Spa Gachibowli, ${whatsappMsg}`);
    window.open(`https://wa.me/919876543210?text=${formattedMsg}`, '_blank');
    setWhatsappMsg('');
    setIsWhatsappOpen(false);
  };

  const filteredTreatments = serviceFilter === 'all'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === serviceFilter);

  const filteredGallery = galleryFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(g => g.category === galleryFilter);

  return (
    <div className="min-h-screen bg-obsidian-deep text-silk-beige selection:bg-gold-metallic selection:text-obsidian-deep flex flex-col font-body">

      {/* FIXED TOP NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-obsidian-deep/80 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
          {/* Brand Logo */}
          <a href="#home" className="flex flex-col text-left group">
            <span className="font-headline text-xl md:text-2xl tracking-[0.3em] text-gold-metallic font-bold group-hover:opacity-80 transition-opacity">
              HYDRA SPA
            </span>
            <span className="text-[7px] uppercase tracking-[0.4em] text-mist-silver font-semibold -mt-0.5">
              Sanctuary of peace
            </span>
          </a>

          {/* Desktop Navigation Menu Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#home" className="text-xs uppercase tracking-widest font-semibold hover:text-gold-metallic transition-colors py-1">
              Home
            </a>
            <a href="#about" className="text-xs uppercase tracking-widest font-semibold text-mist-silver hover:text-gold-metallic transition-colors py-1">
              About
            </a>
            <a href="#services" className="text-xs uppercase tracking-widest font-semibold text-mist-silver hover:text-gold-metallic transition-colors py-1">
              Services
            </a>
            <a href="#customizer" className="text-xs uppercase tracking-widest font-semibold text-mist-silver hover:text-gold-metallic transition-colors py-1 text-gold-metallic flex items-center gap-1 animate-pulse">
              <Sparkles size={11} /> Bespoke Custom
            </a>
            <a href="#packages" className="text-xs uppercase tracking-widest font-semibold text-mist-silver hover:text-gold-metallic transition-colors py-1">
              Packages
            </a>
            <a href="#gallery" className="text-xs uppercase tracking-widest font-semibold text-mist-silver hover:text-gold-metallic transition-colors py-1">
              Gallery
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
            <button
              onClick={() => setIsWhatsappOpen(true)}
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-mist-silver hover:text-gold-metallic transition-colors"
            >
              <MessageCircle size={14} className="text-gold-metallic animate-bounce" />
              <span>Whatsapp</span>
            </button>

            {/* Main CTA */}
            <button
              onClick={() => {
                setPresetServiceId('');
                setPresetPrice(undefined);
                setPresetPackageName(undefined);
                setIsBookingOpen(true);
              }}
              className="gold-gradient text-obsidian-deep px-6 py-2.5 rounded font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-all cursor-pointer shadow-lg"
            >
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* MAIN LAYOUT WRAPPER */}
      <main className="flex-grow pt-16">

        {/* HERO HEADER SECTION */}
        <section id="home" className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden">
          {/* Immersive Atmospheric Vignette Backdrop Slider */}
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentHeroSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url('${heroImages[currentHeroSlide]}')`
                }}
              />
            </AnimatePresence>
            {/* Obsidian layering shading */}
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deep/40 via-obsidian-deep/75 to-obsidian-deep" />
          </div>

          {/* Slider Controls */}
          <button
            onClick={() => setCurrentHeroSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))}
            className="absolute left-4 md:left-8 z-20 p-2 rounded-full bg-obsidian-deep/30 text-gold-metallic/70 hover:bg-gold-metallic hover:text-obsidian-deep transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button
            onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length)}
            className="absolute right-4 md:right-8 z-20 p-2 rounded-full bg-obsidian-deep/30 text-gold-metallic/70 hover:bg-gold-metallic hover:text-obsidian-deep transition-all"
            aria-label="Next slide"
          >
            <ChevronRight size={32} />
          </button>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xs uppercase tracking-[0.4em] text-gold-metallic font-semibold flex items-center justify-center gap-2"
            >
              <Sparkles size={12} className="animate-pulse" /> The Pinnacle of Wellness
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold text-silk-beige leading-tight tracking-tight"
            >
              Luxury Spa in <br />
              <span className="gold-gradient-text">Gachibowli, Hyderabad</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-base md:text-lg text-mist-silver font-light tracking-[0.1em] italic max-w-xl mx-auto"
            >
              Relax • Refresh • Rejuvenate
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full sm:w-auto gold-gradient text-obsidian-deep px-8 py-4 font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-xl cursor-pointer"
              >
                Book Appointment
              </button>
              <a
                href="#services"
                className="w-full sm:w-auto border border-gold-metallic/50 text-gold-metallic px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-gold-metallic hover:text-obsidian-deep transition-all duration-300 text-center"
              >
                Explore Services
              </a>
            </motion.div>
          </div>

          {/* Bounce arrow to scroll */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#stats" aria-label="Scroll to stats">
              <ChevronDown className="text-gold-metallic h-6 w-6" />
            </a>
          </div>
        </section>

        {/* INTERACTIVE LIVE STATS PANEL */}
        <section id="stats" className="py-16 bg-surface-container-lowest border-y border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-4 group cursor-help rounded-lg hover:bg-white/5 transition-all text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-metallic/10 text-gold-metallic mb-3 group-hover:scale-110 transition-transform">
                <Users size={20} />
              </div>
              <h3 className="font-headline text-3xl font-bold text-silk-beige group-hover:text-gold-metallic transition-colors">10,000+</h3>
              <p className="text-[10px] uppercase tracking-widest text-mist-silver font-semibold mt-1">Happy Clients</p>
              <p className="text-[9px] text-mist-silver/60 mt-1 max-w-[150px] mx-auto font-light leading-snug">
                Restored guests across corporate Hyderabad.
              </p>
            </div>

            <div className="p-4 group cursor-help rounded-lg hover:bg-white/5 transition-all text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-metallic/10 text-gold-metallic mb-3 group-hover:scale-110 transition-transform">
                <Award size={20} />
              </div>
              <h3 className="font-headline text-3xl font-bold text-silk-beige group-hover:text-gold-metallic transition-colors">Certified</h3>
              <p className="text-[10px] uppercase tracking-widest text-mist-silver font-semibold mt-1">Therapists</p>
              <p className="text-[9px] text-mist-silver/60 mt-1 max-w-[150px] mx-auto font-light leading-snug">
                Certified by elite Southeast Asian ritual academies.
              </p>
            </div>

            <div className="p-4 group cursor-help rounded-lg hover:bg-white/5 transition-all text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-metallic/10 text-gold-metallic mb-3 group-hover:scale-110 transition-transform">
                <Heart size={20} />
              </div>
              <h3 className="font-headline text-3xl font-bold text-silk-beige group-hover:text-gold-metallic transition-colors">Private</h3>
              <p className="text-[10px] uppercase tracking-widest text-mist-silver font-semibold mt-1">Luxury Rooms</p>
              <p className="text-[9px] text-mist-silver/60 mt-1 max-w-[150px] mx-auto font-light leading-snug">
                Fully soundproofed rooms with custom ambient lighting.
              </p>
            </div>

            <div className="p-4 group cursor-help rounded-lg hover:bg-white/5 transition-all text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-metallic/10 text-gold-metallic mb-3 group-hover:scale-110 transition-transform">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-headline text-3xl font-bold text-silk-beige group-hover:text-gold-metallic transition-colors">100%</h3>
              <p className="text-[10px] uppercase tracking-widest text-mist-silver font-semibold mt-1">Hygiene</p>
              <p className="text-[9px] text-mist-silver/60 mt-1 max-w-[150px] mx-auto font-light leading-snug">
                Medical-grade deep disinfection before every session.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT / OUR ESSENCE SECTION */}
        <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* About Image Frame with Gold Accents */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3 glass-card">
                <img
                  src="/images/optimized_v2_4.webp"
                  alt="Professional therapist performing luxury treatment"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden lg:block w-48 h-48 border border-gold-metallic/30 rounded -z-10" />
            </div>

            {/* About Narrative content */}
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.2rem] text-gold-metallic font-semibold block">Our Essence</span>
              <h2 className="font-headline text-3xl md:text-5xl font-medium text-silk-beige leading-tight">
                The Best Spa in Gachibowli: <br />
                <span className="gold-gradient-text">A Sanctuary of Peace</span>
              </h2>
              <p className="text-sm md:text-base text-mist-silver leading-relaxed font-light">
                At Hydra Spa, we redefine the high art of absolute relaxation. Nestled securely in the ultra-modern wellness heart of Gachibowli, Hyderabad, our sanctuary offers an impeccably curated, soundproof escape from the rapid urban hustle. We believe true wellness is a sacred, silent balance of physical alignment and peaceful mindset.
              </p>
              <p className="text-xs md:text-sm text-mist-silver/80 leading-relaxed font-light">
                Our philosophy is deeply rooted in time-tested Asian therapeutic wisdom, heavily reinforced with contemporary quiet luxury. Every professional therapist is handpicked and certified under rigorous international standards, delivering customized attention that makes Hydra Gachibowli the premiere destination for healing journeys.
              </p>

              <div className="pt-4">
                <a
                  href="#customizer"
                  className="inline-flex items-center gap-2 border-b border-gold-metallic text-gold-metallic text-xs font-semibold uppercase tracking-wider pb-1 hover:opacity-75 transition-opacity"
                >
                  Discover Your Ideal Ritual <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FILTERABLE LUXURY SERVICES EXPLORER */}
        <section id="services" className="py-24 bg-surface-container-lowest/30 border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center space-y-3 mb-16">
              <span className="text-xs uppercase tracking-[0.2rem] text-gold-metallic font-semibold">Exquisite Treatments</span>
              <h2 className="font-headline text-3xl md:text-5xl text-silk-beige">Our Luxury Services</h2>
              <p className="text-xs text-mist-silver max-w-lg mx-auto font-light">
                Each treatment is a holistic journey. Filter and discover our traditional massages, advanced botanical rituals, and energy balancing therapies.
              </p>

              {/* Service Filter Buttons */}
              <div className="flex flex-wrap justify-center gap-2 pt-6">
                {[
                  { id: 'all', label: 'All Services' },
                  { id: 'massage', label: 'Classic Massage' },
                  { id: 'ritual', label: 'Balinese Rituals' },
                  { id: 'aromatherapy', label: 'Botanical Aromatherapy' }
                ].map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => setServiceFilter(btn.id as any)}
                    className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold border rounded transition-all cursor-pointer ${
                      serviceFilter === btn.id
                        ? 'border-gold-metallic bg-gold-metallic text-obsidian-deep'
                        : 'border-white/10 hover:border-white/30 text-mist-silver hover:text-silk-beige'
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredTreatments.map((treatment) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={treatment.id}
                    className="glass-card rounded-xl overflow-hidden border border-white/10 group hover:border-gold-metallic/40 transition-all duration-500 flex flex-col justify-between"
                  >
                    {/* Card Image */}
                    <div className="h-56 overflow-hidden relative">
                      <img
                        src={treatment.image}
                        alt={treatment.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/90 via-transparent to-transparent" />
                      
                      {/* Premium Badge overlay */}
                      <span className="absolute top-4 left-4 bg-obsidian-deep/80 backdrop-blur-md text-gold-metallic text-[10px] font-semibold tracking-wider px-3 py-1 rounded border border-gold-metallic/20">
                        {treatment.duration} Session
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex justify-between items-baseline">
                          <h3 className="font-headline text-xl text-silk-beige group-hover:text-gold-metallic transition-colors">
                            {treatment.name}
                          </h3>
                          <span className="text-gold-metallic font-bold text-sm">₹{treatment.price.toLocaleString('en-IN')}</span>
                        </div>
                        <p className="text-xs text-mist-silver leading-relaxed font-light">
                          {treatment.description.substring(0, 105)}...
                        </p>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                        <button
                          onClick={() => setSelectedInsightTreatment(treatment)}
                          className="text-gold-metallic text-[10px] tracking-widest font-bold uppercase flex items-center gap-1.5 hover:opacity-75 transition-opacity cursor-pointer"
                        >
                          <Eye size={12} /> Learn Benefits
                        </button>
                        <button
                          onClick={() => handleOpenBookingWithPreset(treatment.id, treatment.price)}
                          className="border border-white/10 hover:border-gold-metallic text-silk-beige hover:text-obsidian-deep hover:bg-gold-metallic px-4 py-2 rounded text-[10px] font-semibold uppercase tracking-widest transition-all cursor-pointer"
                        >
                          Reserve Slot
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US (THE HYDRA STANDARD) */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs uppercase tracking-[0.2rem] text-gold-metallic font-semibold">The Hydra Standard</span>
            <h2 className="font-headline text-3xl md:text-5xl text-silk-beige">Why We are the Best Spa in Gachibowli</h2>
            <p className="text-xs text-mist-silver max-w-md mx-auto font-light">
              We execute hospitality at a microscopic level, ensuring your privacy, tranquility, and therapeutic restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="glass-card p-8 rounded-xl border border-white/10 text-center space-y-4 hover:border-gold-metallic/30 transition-all group">
              <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto text-obsidian-deep group-hover:scale-110 transition-transform shadow-lg">
                <Award size={28} />
              </div>
              <h4 className="font-headline text-xl text-silk-beige group-hover:text-gold-metallic transition-colors">Elite Therapists</h4>
              <p className="text-xs text-mist-silver leading-relaxed font-light">
                Our staff consists strictly of globally certified professionals. Each undergoes continuous physical anatomy and sensory wellness training to adapt treatments to your exact posture needs.
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl border border-white/10 text-center space-y-4 hover:border-gold-metallic/30 transition-all group">
              <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto text-obsidian-deep group-hover:scale-110 transition-transform shadow-lg">
                <Sparkles size={28} />
              </div>
              <h4 className="font-headline text-xl text-silk-beige group-hover:text-gold-metallic transition-colors">Bespoke Journeys</h4>
              <p className="text-xs text-mist-silver leading-relaxed font-light">
                No cookie-cutter processes exist here. We tailor every single aromatherapy dilution, physical touch depth, and thermal chamber setting to your physical condition on the day of your visit.
              </p>
            </div>

            <div className="glass-card p-8 rounded-xl border border-white/10 text-center space-y-4 hover:border-gold-metallic/30 transition-all group">
              <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto text-obsidian-deep group-hover:scale-110 transition-transform shadow-lg">
                <ShieldCheck size={28} />
              </div>
              <h4 className="font-headline text-xl text-silk-beige group-hover:text-gold-metallic transition-colors">Immaculate Hygiene</h4>
              <p className="text-xs text-mist-silver leading-relaxed font-light">
                Our lounge and private luxury suites adhere strictly to medical-grade sanitization standards. Single-use biodegradable linen sheets, sterile oil jars, and air-exchange purifiers protect your safety.
              </p>
            </div>
          </div>
        </section>

        {/* THE INTERACTIVE BESPOKE CUSTOMIZER */}
        <section id="customizer" className="py-24 bg-surface-container-lowest/50 border-y border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <BespokeCustomizer onBookCustom={handleOpenBookingWithPackage} />
          </div>
        </section>

        {/* CURATED LUXURY SPA PACKAGES */}
        <section id="packages" className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs uppercase tracking-[0.2rem] text-gold-metallic font-semibold">Curated Experiences</span>
            <h2 className="font-headline text-3xl md:text-5xl text-silk-beige">Luxury Spa Packages</h2>
            <p className="text-xs text-mist-silver max-w-md mx-auto font-light">
              We combine deeply synergistic treatments to maximize restoration, providing robust inclusions and private suite privileges.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {STANDARD_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`glass-card p-8 rounded-xl border flex flex-col justify-between transition-all relative ${
                  pkg.isPopular
                    ? 'border-gold-metallic/50 md:scale-105 z-10 shadow-[0_0_35px_rgba(212,175,55,0.07)] bg-obsidian-deep'
                    : 'border-white/10'
                }`}
              >
                {pkg.isPopular && (
                  <span className="absolute top-0 right-8 bg-gold-metallic text-obsidian-deep font-bold text-[8px] uppercase tracking-widest px-3 py-1 rounded-b">
                    Most Popular
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <h4 className={`text-xs uppercase tracking-[0.15em] font-bold ${pkg.isPopular ? 'text-gold-metallic' : 'text-mist-silver'}`}>
                      {pkg.name}
                    </h4>
                    <p className="text-xs text-mist-silver mt-2 leading-relaxed font-light">{pkg.description}</p>
                  </div>

                  <div className="text-gold-metallic flex items-baseline gap-1">
                    <span className="font-headline text-4xl font-bold">₹{pkg.price.toLocaleString('en-IN')}</span>
                    <span className="text-[10px] text-mist-silver font-medium">/ session</span>
                  </div>

                  <ul className="space-y-3 pt-4 border-t border-white/5">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-mist-silver">
                        <Check size={12} className="text-gold-metallic shrink-0" />
                        <span className="font-light">{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-auto">
                  <button
                    onClick={() => handleOpenBookingWithPackage(pkg.name, pkg.price)}
                    className={`w-full py-3 rounded text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                      pkg.isPopular
                        ? 'gold-gradient text-obsidian-deep hover:scale-[1.03]'
                        : 'border border-white/10 hover:border-gold-metallic text-silk-beige hover:text-gold-metallic hover:bg-white/5'
                    }`}
                  >
                    Book Journey Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className="py-24 bg-surface-container-lowest/30 border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16">
              <div>
                <span className="text-xs uppercase tracking-[0.2rem] text-gold-metallic font-semibold">Voice of Our Guests</span>
                <h2 className="font-headline text-3xl md:text-5xl text-silk-beige mt-2">Reflections of Calms</h2>
                <p className="text-xs text-mist-silver max-w-md font-light mt-1">
                  Read genuine reviews left by executives, artists, and wellness-seekers of Hydra Spa.
                </p>
              </div>
              <button
                onClick={() => setIsReviewOpen(true)}
                className="gold-gradient text-obsidian-deep px-5 py-3 rounded text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all cursor-pointer"
              >
                Submit Testimony <Plus size={12} />
              </button>
            </div>

            {/* Testimonials Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Highlight Guest Review with large font styling */}
              <div className="space-y-6">
                <span className="text-gold-metallic text-5xl font-headline">“</span>
                <p className="font-headline text-2xl md:text-3xl italic text-silk-beige leading-relaxed">
                  {testimonials[0]?.quote}
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-gold-metallic/50 p-1">
                    <img src={testimonials[0]?.avatar} alt={testimonials[0]?.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <h5 className="font-headline text-lg text-silk-beige">{testimonials[0]?.name}</h5>
                    <p className="text-[10px] text-mist-silver uppercase tracking-wider">{testimonials[0]?.role}</p>
                    <div className="flex items-center text-gold-metallic gap-0.5 mt-1">
                      {Array.from({ length: testimonials[0]?.rating || 5 }).map((_, i) => (
                        <Star key={i} size={10} fill="currentColor" className="stroke-none" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid of secondary guest reviews */}
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {testimonials.slice(1).map((test) => (
                  <div key={test.id} className="p-5 rounded-lg border border-white/10 bg-white/5 space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <img src={test.avatar} alt={test.name} className="h-8 w-8 rounded-full object-cover" />
                        <div>
                          <p className="text-xs font-bold text-silk-beige">{test.name}</p>
                          <p className="text-[9px] text-mist-silver uppercase">{test.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-gold-metallic gap-0.5">
                        {Array.from({ length: test.rating }).map((_, i) => (
                          <Star key={i} size={10} fill="currentColor" className="stroke-none" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-mist-silver font-light italic leading-relaxed">
                      "{test.quote}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE GALLERY SECTION */}
        <section id="gallery" className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs uppercase tracking-[0.2rem] text-gold-metallic font-semibold">Visual Aesthetics</span>
            <h2 className="font-headline text-3xl md:text-5xl text-silk-beige">Our Wellness Spaces</h2>
            <p className="text-xs text-mist-silver max-w-md mx-auto font-light">
              Step virtually into our meticulously engineered spaces of healing, luxury rooms, and advanced botanical products.
            </p>

            {/* Gallery Category Filters */}
            <div className="flex justify-center gap-2 pt-6">
              {[
                { id: 'all', label: 'All Images' },
                { id: 'rooms', label: 'Therapy Suites' },
                { id: 'treatments', label: 'Ritual Moments' },
                { id: 'products', label: 'Aromatics' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setGalleryFilter(tab.id as any)}
                  className={`px-4 py-1.5 rounded text-[10px] uppercase tracking-widest font-bold border transition-all cursor-pointer ${
                    galleryFilter === tab.id
                      ? 'border-gold-metallic bg-gold-metallic/10 text-gold-metallic'
                      : 'border-white/5 hover:border-white/15 text-mist-silver'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Photo Grid with Lightbox Triggers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={item.id}
                  onClick={() => setLightboxImage({ src: item.image, caption: item.caption })}
                  className="group relative h-60 rounded-lg overflow-hidden border border-white/5 bg-white/5 cursor-zoom-in"
                >
                  <img src={item.image} alt={item.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-obsidian-deep/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-xs text-silk-beige font-light leading-relaxed">
                      {item.caption}
                    </p>
                    <span className="text-[9px] uppercase tracking-widest text-gold-metallic font-semibold mt-2 block">
                      Click to expand view
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* EXPANDABLE ELEGANT FAQS ACCORDION */}
        <section className="py-24 bg-surface-container-lowest/30 border-y border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center space-y-3 mb-16">
              <span className="text-xs uppercase tracking-[0.2rem] text-gold-metallic font-semibold flex items-center justify-center gap-1">
                <HelpCircle size={12} /> Guests Queries
              </span>
              <h2 className="font-headline text-3xl md:text-5xl text-silk-beige">Frequently Answered</h2>
              <p className="text-xs text-mist-silver font-light">
                Find helpful clarifications regarding appointments, health, and custom arrangements.
              </p>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isExpanded = expandedFaq === idx;
                return (
                  <div key={idx} className="border border-white/10 rounded-lg bg-white/5 overflow-hidden transition-all">
                    <button
                      onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                      className="w-full p-5 text-left flex justify-between items-center text-sm font-semibold text-silk-beige hover:text-gold-metallic transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={16}
                        className={`text-gold-metallic transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="p-5 pt-0 text-xs text-mist-silver leading-relaxed font-light border-t border-white/5">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTACT & DIRECT NEWSLETTER FORMS */}
        <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Concierge Location & Inquiry */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2rem] text-gold-metallic font-semibold">Visit Our Sanctuary</span>
              <h2 className="font-headline text-3xl md:text-4xl text-silk-beige font-medium">Connect With Concierge</h2>
              <p className="text-xs text-mist-silver font-light leading-relaxed">
                Our luxury lounge is conveniently located near Cyber Towers, Gachibowli, Hyderabad. Let us prepare for your visit.
              </p>
            </div>

            <div className="space-y-4 text-xs text-mist-silver font-light">
              <div className="flex items-start gap-3">
                <MapPin className="text-gold-metallic shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="font-semibold text-silk-beige uppercase tracking-wider text-[10px]">Location Address</p>
                  <p className="mt-1">3rd Floor, Sri Tirumala Platinum,<br />Janardana Hills, Lumbini Avenue,<br />Gachibowli, Hyderabad, Telangana 500032</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-gold-metallic shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="font-semibold text-silk-beige uppercase tracking-wider text-[10px]">Direct Call Desk</p>
                  <p className="mt-1">+91 8999384340</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-gold-metallic shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="font-semibold text-silk-beige uppercase tracking-wider text-[10px]">Email Correspondence</p>
                  <p className="mt-1">service@hydraspa.in</p>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <form onSubmit={handleContactSubmit} className="glass-card border border-white/10 rounded-xl p-6 space-y-4">
              <h4 className="font-headline text-lg text-silk-beige">Submit Direct Request</h4>
              
              {contactSuccess ? (
                <div className="rounded bg-gold-metallic/15 border border-gold-metallic/30 p-4 text-xs text-gold-metallic flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  <span>Your concierge inquiry has been logged. We will contact you shortly!</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="bg-white/5 border border-white/10 rounded p-2.5 text-xs text-silk-beige focus:border-gold-metallic focus:outline-none"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Your Phone"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="bg-white/5 border border-white/10 rounded p-2.5 text-xs text-silk-beige focus:border-gold-metallic focus:outline-none"
                    />
                  </div>
                  <textarea
                    placeholder="Describe custom arrangements, wedding couples packages, or health specifications..."
                    value={contactMsg}
                    onChange={(e) => setContactMsg(e.target.value)}
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded p-2.5 text-xs text-silk-beige focus:border-gold-metallic focus:outline-none resize-none"
                  />
                  <button
                    type="submit"
                    className="gold-gradient text-obsidian-deep font-bold px-6 py-2.5 rounded text-[10px] uppercase tracking-widest hover:scale-105 transition-all cursor-pointer"
                  >
                    Send Concierge Request
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Right Side: Quiet Journal Newsletter */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 lg:border-l lg:border-white/10 lg:pl-16">
            <span className="text-xs uppercase tracking-[0.2rem] text-gold-metallic font-semibold">Wellness Newsletter</span>
            <h3 className="font-headline text-2xl md:text-3xl text-silk-beige leading-snug">Subscribe to the <br />Quiet Journal</h3>
            <p className="text-xs text-mist-silver font-light leading-relaxed">
              We periodically dispatch bespoke health tips, organic aromatherapy formulation guides, and early access reservation codes for our weekend suites. No spam, strictly quiet luxury reflections.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              {newsletterSuccess ? (
                <div className="rounded bg-gold-metallic/15 border border-gold-metallic/30 p-3.5 text-xs text-gold-metallic">
                  Welcome to the Quiet Journal. Your email is registered securely.
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-grow bg-white/5 border border-white/10 rounded px-4 py-3 text-xs text-silk-beige focus:border-gold-metallic focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="gold-gradient text-obsidian-deep px-5 py-3 rounded text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
                    aria-label="Subscribe"
                  >
                    <Send size={14} />
                  </button>
                </div>
              )}
            </form>
          </div>
        </section>

        {/* FINAL SERENITY CALL TO ACTION */}
        <section className="py-24 bg-surface-container-lowest text-center relative border-t border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-gold-metallic/5 blur-3xl rounded-full -z-10" />
          
          <div className="max-w-2xl mx-auto px-6 space-y-6">
            <h2 className="font-headline text-3xl md:text-5xl text-silk-beige font-medium leading-tight">
              Begin Your Journey <br />to Serenity
            </h2>
            <p className="text-xs md:text-sm text-mist-silver max-w-md mx-auto leading-relaxed font-light">
              Experience why we are regarded as Gachibowli's ultimate premier luxury spa sanctuary. Reservations fill quickly; secure your therapist slot now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={() => {
                  setPresetServiceId('');
                  setPresetPrice(undefined);
                  setPresetPackageName(undefined);
                  setIsBookingOpen(true);
                }}
                className="gold-gradient text-obsidian-deep px-8 py-3.5 rounded font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-lg cursor-pointer"
              >
                Book Appointment
              </button>
              <a
                href="#gallery"
                className="border border-white/10 hover:border-gold-metallic text-silk-beige hover:text-gold-metallic bg-white/5 px-8 py-3.5 rounded font-bold text-xs uppercase tracking-widest transition-all"
              >
                Visit Our Gallery
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ELEGANT FOOTER */}
      <footer className="bg-surface-container-lowest border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo & Narrative column */}
          <div className="space-y-4">
            <a href="#home" className="flex flex-col text-left">
              <span className="font-headline text-2xl tracking-[0.3em] text-gold-metallic font-bold">HYDRA SPA</span>
              <span className="text-[8px] uppercase tracking-[0.4em] text-mist-silver font-semibold -mt-0.5">Sanctuary of peace</span>
            </a>
            <p className="text-xs text-mist-silver font-light leading-relaxed">
              Gachibowli's premier wellness destination. Dedicated to providing elite quiet luxury, certified biological therapies, and immaculate hygiene standards.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-gold-metallic">Quick Navigation</h5>
            <ul className="space-y-2 text-xs font-light text-mist-silver">
              <li><a href="#home" className="hover:text-gold-metallic transition-colors">Home Landing</a></li>
              <li><a href="#about" className="hover:text-gold-metallic transition-colors">Our Essence</a></li>
              <li><a href="#services" className="hover:text-gold-metallic transition-colors">Luxury Treatments</a></li>
              <li><a href="#customizer" className="hover:text-gold-metallic transition-colors">Custom Experience</a></li>
              <li><a href="#packages" className="hover:text-gold-metallic transition-colors">Synergistic Packages</a></li>
            </ul>
          </div>

          {/* Treatments Highlights Column */}
          <div className="space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-gold-metallic">Selected Therapy</h5>
            <ul className="space-y-2 text-xs font-light text-mist-silver">
              <li><a href="#services" className="hover:text-gold-metallic transition-colors">Classic Swedish Massage</a></li>
              <li><a href="#services" className="hover:text-gold-metallic transition-colors">Bespoke Balinese Ritual</a></li>
              <li><a href="#services" className="hover:text-gold-metallic transition-colors">Botanical Aromatherapy</a></li>
              <li><a href="#services" className="hover:text-gold-metallic transition-colors">Intense Deep Tissue</a></li>
              <li><a href="#services" className="hover:text-gold-metallic transition-colors">Hydra Peptide Facial</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-gold-metallic">Open Hours</h5>
            <p className="text-xs text-mist-silver font-light leading-relaxed">
              Plot 45, Near Cyber Towers, Gachibowli, Hyderabad, Telangana 500032
            </p>
            <p className="text-xs text-silk-beige font-semibold uppercase tracking-wider">
              Open Daily: 10:00 AM - 9:00 PM
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 py-6 text-center text-[10px] text-mist-silver/50 tracking-widest uppercase">
          © 2026 Hydra Spa Gachibowli. All rights reserved.
        </div>
      </footer>

      {/* WHATSAPP CONCIERGE ASSISTANT WIDGET */}
      <div className="fixed bottom-6 right-6 z-45">
        <button
          onClick={() => setIsWhatsappOpen(!isWhatsappOpen)}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all relative"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle size={24} />
          <span className="absolute top-0 right-0 h-3 w-3 bg-gold-metallic rounded-full animate-ping" />
        </button>

        <AnimatePresence>
          {isWhatsappOpen && (
            <motion.div
              initial={{ scale: 0.9, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 15, opacity: 0 }}
              className="absolute bottom-16 right-0 w-80 glass-card border border-white/15 rounded-xl bg-obsidian-deep/95 shadow-2xl p-4 text-silk-beige"
            >
              <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-xs font-bold text-silk-beige">Concierge Desk (Active)</span>
                </div>
                <button onClick={() => setIsWhatsappOpen(false)} className="text-mist-silver hover:text-white">
                  <X size={14} />
                </button>
              </div>
              <p className="text-[11px] text-mist-silver font-light leading-relaxed mb-3">
                Ask us any questions about therapist slots, couples suites, botanical oils, or bespoke booking modifications instantly.
              </p>
              <form onSubmit={handleSendWhatsapp} className="space-y-2">
                <textarea
                  required
                  placeholder="e.g. Do you have couples slots available today at 4 PM?"
                  value={whatsappMsg}
                  onChange={(e) => setWhatsappMsg(e.target.value)}
                  rows={2}
                  className="w-full bg-white/5 border border-white/10 rounded p-2 text-xs text-silk-beige focus:border-[#25D366] focus:outline-none resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-[#25D366] text-white py-2 rounded text-[10px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle size={12} /> Send Whatsapp Message
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* DETAILED SERVICE INSIGHT DRAWER */}
      <ServiceDrawer
        treatment={selectedInsightTreatment}
        onClose={() => setSelectedInsightTreatment(null)}
        onBookNow={(treatmentId, price) => handleOpenBookingWithPreset(treatmentId, price)}
      />

      {/* BOOKING RESERVATION MODAL */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          // Sync count immediately
          try {
            const saved = localStorage.getItem('hydra_bookings');
            if (saved) {
              const parsed = JSON.parse(saved);
              setActiveBookingsCount(parsed.length);
            }
          } catch (e) {
            console.error(e);
          }
        }}
        presetServiceId={presetServiceId}
        presetPrice={presetPrice}
        presetPackageName={presetPackageName}
      />

      {/* REVIEW SUBMISSION DIALOG */}
      <ReviewModal
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
        onAddReview={handleAddNewReview}
      />

      {/* RESERVATIONS PORTAL PANEL */}
      <MyBookingsPanel
        isOpen={isBookingsPanelOpen}
        onClose={() => setIsBookingsPanelOpen(false)}
        onUpdateCount={(count) => setActiveBookingsCount(count)}
      />

      {/* ENLARGED PHOTO LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxImage && (
          <div
            id="lightbox-overlay"
            className="fixed inset-0 z-110 flex items-center justify-center p-4 bg-obsidian-deep/90 backdrop-blur-md"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-lg border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightboxImage.src} alt={lightboxImage.caption} className="max-w-full max-h-[75vh] object-contain" />
              <div className="bg-obsidian-deep/95 p-4 border-t border-white/10 flex items-center justify-between text-silk-beige">
                <p className="text-xs font-light">{lightboxImage.caption}</p>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="rounded bg-white/5 px-3 py-1.5 text-xs font-semibold hover:bg-gold-metallic hover:text-obsidian-deep transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
