import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Services at the Best Gachibowli Hyderabad Spa | Hydra Spa',
  description: 'Explore curated luxury treatments at the premier Gachibowli Hyderabad spa. From our Signature Hydra Therapy to Deep Tissue Massages and Aromatherapy.',
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
