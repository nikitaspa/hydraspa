import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Hydra Spa | Luxury Gachibowli Hyderabad Spa',
  description: 'Discover the philosophy behind Hydra Spa, the premier luxury Gachibowli Hyderabad spa. Meet our expert therapists and explore our commitment to holistic healing.',
  alternates: {
    canonical: 'https://hydraspa.online/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
