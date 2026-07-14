"use client";

import React from 'react';
import { GlobalProvider, useGlobalContext } from '../context/GlobalContext';
import { AnimatePresence } from 'motion/react';
import Header from './Header';
import Footer from './Footer';

// Modals
import BookingModal from './BookingModal';
import ServiceDrawer from './ServiceDrawer';
import ReviewModal from './ReviewModal';
import MyBookingsPanel from './MyBookingsPanel';
import { MessageCircle, PhoneCall } from 'lucide-react';

function GlobalModals() {
  const {
    isBookingOpen, setIsBookingOpen,
    presetServiceId, presetPrice, presetPackageName,
    selectedInsightTreatment, setSelectedInsightTreatment,
    setPresetServiceId, setPresetPrice,
    isReviewOpen, setIsReviewOpen,
    testimonials, setTestimonials,
    isBookingsPanelOpen, setIsBookingsPanelOpen
  } = useGlobalContext();

  return (
    <>
      <AnimatePresence>
        {isBookingOpen && (
          <BookingModal
            isOpen={isBookingOpen}
            onClose={() => setIsBookingOpen(false)}
            presetServiceId={presetServiceId}
            presetPrice={presetPrice}
            presetPackageName={presetPackageName}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedInsightTreatment && (
          <ServiceDrawer
            treatment={selectedInsightTreatment}
            onClose={() => setSelectedInsightTreatment(null)}
            onBookNow={(id, price) => {
              setPresetServiceId(id);
              setPresetPrice(price);
              setSelectedInsightTreatment(null);
              setIsBookingOpen(true);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isReviewOpen && (
          <ReviewModal
            isOpen={isReviewOpen}
            onClose={() => setIsReviewOpen(false)}
            onAddReview={(review) => {
              setTestimonials([review, ...testimonials]);
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isBookingsPanelOpen && (
          <MyBookingsPanel
            isOpen={isBookingsPanelOpen}
            onClose={() => setIsBookingsPanelOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <GlobalProvider>
      <div className="min-h-screen bg-obsidian-deep text-silk-beige selection:bg-gold-metallic selection:text-obsidian-deep flex flex-col font-body">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <GlobalModals />

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
          <a
            href="tel:+918999384340"
            className="flex items-center justify-center w-12 h-12 bg-obsidian-deep border border-gold-metallic/30 text-gold-metallic rounded-full shadow-lg hover:scale-110 transition-transform shadow-gold-metallic/20"
            title="Call Now"
          >
            <PhoneCall size={22} className="animate-pulse" />
          </a>
          <a
            href="https://wa.me/918999384340"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform shadow-[#25D366]/30"
            title="WhatsApp"
          >
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </GlobalProvider>
  );
}
