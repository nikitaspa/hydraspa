import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Hydra Spa | Luxury Wellness Sanctuary in Gachibowli',
  description: 'Discover the philosophy behind Hydra Spa, Hyderabad\'s premier luxury wellness sanctuary. Meet our expert therapists and explore our commitment to holistic healing.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
