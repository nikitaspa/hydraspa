import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Rated Spa in Gachibowli | Hydra Spa Hyderabad',
  description: 'Experience the ultimate relaxation at the best spa in Gachibowli, Hyderabad. Hydra Spa offers premium massages, facials, and holistic wellness treatments.',
  alternates: {
    canonical: 'https://hydraspa.online/spa-in-gachibowli',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
