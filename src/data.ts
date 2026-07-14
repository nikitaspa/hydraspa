import { Treatment, Therapist, Testimonial, GalleryItem } from './types';

export const TREATMENTS: Treatment[] = [
  {
    id: 'swedish-massage',
    name: 'Swedish Massage',
    duration: '60 Min',
    price: 2999,
    description: 'A classic full-body therapy designed to improve circulation, soothe the nervous system, and melt away surface-level physical tension.',
    category: 'massage',
    image: '/images/optimized_1.webp',
    benefits: [
      'Relieves superficial muscular tension and tightness',
      'Improves cardiovascular circulation and oxygenation',
      'Reduces physiological stress markers',
      'Enhances flexibility and range of physical motion'
    ],
    recommendedFor: 'Perfect for those seeking classical, soothing full-body muscle relaxation.'
  },
  {
    id: 'balinese-massage',
    name: 'Balinese Massage',
    duration: '90 Min',
    price: 3499,
    description: 'Deep tissue work combined with holistic stretches, reflexology, and aromatherapy inspired by the ancient ritualistic healing traditions of Bali.',
    category: 'ritual',
    image: '/images/optimized_2.webp',
    benefits: [
      'Alleviates deep-rooted chronic muscular tension',
      'Stimulates the lymphatic system and blood circulation',
      'Aids in holistic muscular recovery and flexibility',
      'Provides a deeply meditative, relaxed state of mind'
    ],
    recommendedFor: 'Excellent for deep physical fatigue and targeted chronic muscle knots.'
  },
  {
    id: 'aromatherapy',
    name: 'Aromatherapy Session',
    duration: '60 Min',
    price: 3999,
    description: 'A sensory wellness journey utilizing premium, custom-blended essential oils to harmonize your body\'s natural energy pathways and sensory centers.',
    category: 'aromatherapy',
    image: '/images/optimized_3.webp',
    benefits: [
      'Balances mood and alleviates emotional stress',
      'Promotes deep, restful sleep and sleep quality',
      'Boosts immune response through pure natural oils',
      'Improves respiratory comfort and full-body vitality'
    ],
    recommendedFor: 'Best for spiritual restoration, mental fatigue, and stress relief.'
  },
  {
    id: 'deep-tissue-intense',
    name: 'Intense Deep Tissue',
    duration: '90 Min',
    price: 4299,
    description: 'A highly structured therapeutic massage targeting deep muscular tissues and fascia, restoring structural alignment and posture.',
    category: 'massage',
    image: '/images/optimized_4.webp',
    benefits: [
      'Breaks down stubborn muscle adhesions and scar tissue',
      'Improves posture and physical structural alignment',
      'Speeds up sports performance recovery',
      'Alleviates chronic back and shoulder stiffness'
    ],
    recommendedFor: 'Highly recommended for athletes and those experiencing rigorous muscle stiffness.'
  }
];

export const THERAPISTS: Therapist[] = [
  {
    id: 'elena',
    name: 'Elena',
    role: 'Master Balinese Specialist',
    specialty: 'Traditional Balinese, Reflexology & Energy Work',
    rating: 4.9,
    avatar: '/images/optimized_5.webp',
    bio: 'With over 12 years of luxury hospitality experience in Bali and across Southeast Asia, Elena is renowned for her precise intuitive pressure and peaceful holistic healing rituals.'
  },
  {
    id: 'akiro',
    name: 'Akiro',
    role: 'Aromatherapy & Facial Master',
    specialty: 'Essential Oil Alchemy, Advanced Facial Treatments',
    rating: 4.8,
    avatar: '/images/optimized_4.webp',
    bio: 'Akiro brings precision to custom botanical blending. He specializes in marrying pure sensory-calming essential oils with delicate facial skin therapies.'
  },
  {
    id: 'rajesh',
    name: 'Rajesh',
    role: 'Therapeutic Deep Tissue Expert',
    specialty: 'Anatomical Alignment, Pain Relief, Trigger Point Therapy',
    rating: 5.0,
    avatar: '/images/optimized_5.webp',
    bio: 'Rajesh has a deep understanding of musculoskeletal dynamics. He specializes in high-intensity deep tissue, helping clients recover from postural stiffness and pain.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ananya Sharma',
    role: 'CEO, Tech Innovators',
    quote: 'An unparalleled oasis of calm in the city. The Swedish massage was truly transformative, accompanied by exemplary hospitality and absolute hygiene.',
    rating: 5,
    avatar: '/images/optimized_5.webp'
  },
  {
    id: '2',
    name: 'Vikram Reddy',
    role: 'Senior Managing Director',
    quote: 'Hydra Spa remains the only wellness center I trust in Hyderabad. The Balinese Deep Tissue treatment restores my physical balance like nothing else.',
    rating: 5,
    avatar: '/images/optimized_5.webp'
  },
  {
    id: '3',
    name: 'Meera Deshmukh',
    role: 'Classical Artist & Musician',
    quote: 'The Aromatherapy session combined with the serene environment and botanical infusions represents quiet luxury at its ultimate pinnacle.',
    rating: 5,
    avatar: '/images/optimized_5.webp'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'img1',
    category: 'treatments',
    image: '/images/optimized_6.webp',
    caption: 'Atmospheric aromatics and candles in our deep stone therapy chambers'
  },
  {
    id: 'img2',
    category: 'treatments',
    image: '/images/optimized_7.webp',
    caption: 'Floating botanical petals prepared for sensory Balinese bath infusions'
  },
  {
    id: 'img3',
    category: 'products',
    image: '/images/optimized_8.webp',
    caption: 'Bespoke custom-formulated essential oils in protective dark amber glass'
  },
  {
    id: 'img4',
    category: 'rooms',
    image: '/images/optimized_9.webp',
    caption: 'High-end relaxation lounges wrapped in deep charcoal velvet and warm ambient light'
  }
];

export const STANDARD_PACKAGES = [
  {
    id: 'pkg-essential',
    name: 'Essential Escape',
    price: 2999,
    description: 'Perfect for quick revitalization and deep physical ease.',
    inclusions: [
      '60 Min Swedish Massage',
      'Essential Oil Upgrade',
      'Post-Treatment Tea'
    ]
  },
  {
    id: 'pkg-royal',
    name: 'Royal Hydra Journey',
    price: 5499,
    isPopular: true,
    description: 'Our signature ritual focusing on holistic recovery and rejuvenation.',
    inclusions: [
      '90 Min Balinese/Deep Tissue',
      'Signature Body Scrub',
      'Steam & Sauna Access',
      'Welcome Botanical Drink'
    ]
  },
  {
    id: 'pkg-ultimate',
    name: 'Ultimate Renewal',
    price: 8999,
    description: 'The supreme quiet luxury experience for total mind-body escape.',
    inclusions: [
      '120 Min Luxury Suite Session',
      'Full Body Exfoliation & Wrap',
      'Advanced Facial Treatment',
      'Private Jacuzzi Access'
    ]
  }
];

export const FAQS = [
  {
    question: 'Is prior booking mandatory?',
    answer: 'Yes. To maintain our standard of bespoke, quiet luxury and dedicate complete attention to each guest, we operate strictly by appointment. Reservations are highly recommended for weekend sessions.'
  },
  {
    question: 'What is your cancellation/rescheduling policy?',
    answer: 'We understand schedules change. You can reschedule or cancel your reservation free of charge up to 4 hours prior to your slot. Within 4 hours, a 50% retention fee may apply.'
  },
  {
    question: 'How do I choose the correct treatment or therapist?',
    answer: 'Our professional therapists are all certified experts. If you prefer deep physical muscle tension release, we recommend our Balinese or Deep Tissue treatments with Elena or Rajesh. For stress relief, mental fatigue, and skin rejuvenation, Akiro\'s Aromatherapy and facials are peerless.'
  },
  {
    question: 'What should I wear for my session?',
    answer: 'We provide premium custom-tailored linen robes, disposable undergarments, and slippers. You do not need to bring any specialized clothing; simply arrive 15 minutes before your session to unwind with our welcome botanical infusion.'
  }
];
