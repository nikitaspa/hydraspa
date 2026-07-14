import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Reservations | Hydra Spa Gachibowli',
  description: 'Book your luxury spa experience today. Get in touch with the Hydra Spa concierge in Gachibowli, Hyderabad. Open 24 Hours.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
