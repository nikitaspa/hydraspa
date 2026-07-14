import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Spa Services & Massages | Hydra Spa Gachibowli',
  description: 'Explore our curated selection of luxury spa treatments. From our Signature Hydra Therapy to Deep Tissue Massages and Aromatherapy, experience ultimate rejuvenation.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
