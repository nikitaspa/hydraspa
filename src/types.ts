export interface Treatment {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
  category: 'massage' | 'ritual' | 'aromatherapy' | 'facial';
  image: string;
  benefits: string[];
  recommendedFor: string;
}

export interface Therapist {
  id: string;
  name: string;
  role: string;
  specialty: string;
  rating: number;
  avatar: string;
  bio: string;
}

export interface Booking {
  id: string;
  serviceId: string;
  serviceName: string;
  price: number;
  therapistId: string;
  therapistName: string;
  date: string;
  time: string;
  guestName: string;
  guestPhone: string;
  guestEmail: string;
  specialRequests?: string;
  status: 'confirmed' | 'rescheduled' | 'cancelled';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  category: 'rooms' | 'pool' | 'products' | 'treatments';
  image: string;
  caption: string;
}
