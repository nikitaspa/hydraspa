"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Treatment, Testimonial } from '../types';
import { TESTIMONIALS } from '../data';

interface GlobalContextType {
  isBookingOpen: boolean;
  setIsBookingOpen: (open: boolean) => void;
  presetServiceId: string;
  setPresetServiceId: (id: string) => void;
  presetPrice: number | undefined;
  setPresetPrice: (price: number | undefined) => void;
  presetPackageName: string | undefined;
  setPresetPackageName: (name: string | undefined) => void;
  
  activeBookingsCount: number;
  setActiveBookingsCount: (count: number) => void;
  isBookingsPanelOpen: boolean;
  setIsBookingsPanelOpen: (open: boolean) => void;
  
  selectedInsightTreatment: Treatment | null;
  setSelectedInsightTreatment: (treatment: Treatment | null) => void;
  
  testimonials: Testimonial[];
  setTestimonials: (testimonials: Testimonial[]) => void;
  isReviewOpen: boolean;
  setIsReviewOpen: (open: boolean) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [presetServiceId, setPresetServiceId] = useState('');
  const [presetPrice, setPresetPrice] = useState<number | undefined>(undefined);
  const [presetPackageName, setPresetPackageName] = useState<string | undefined>(undefined);
  
  const [activeBookingsCount, setActiveBookingsCount] = useState(0);
  const [isBookingsPanelOpen, setIsBookingsPanelOpen] = useState(false);
  
  const [selectedInsightTreatment, setSelectedInsightTreatment] = useState<Treatment | null>(null);
  
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  // Initialize bookings count from local storage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('hydra_bookings');
      if (stored) {
        const bookings = JSON.parse(stored);
        setActiveBookingsCount(bookings.length);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isBookingOpen, setIsBookingOpen,
        presetServiceId, setPresetServiceId,
        presetPrice, setPresetPrice,
        presetPackageName, setPresetPackageName,
        activeBookingsCount, setActiveBookingsCount,
        isBookingsPanelOpen, setIsBookingsPanelOpen,
        selectedInsightTreatment, setSelectedInsightTreatment,
        testimonials, setTestimonials,
        isReviewOpen, setIsReviewOpen
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
}
