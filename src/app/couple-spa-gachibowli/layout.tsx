import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Romantic Couple Spa in Gachibowli | Hydra Spa',
  description: 'Book the best luxury couple spa in Gachibowli. Enjoy side-by-side massages, private jacuzzis, and an unforgettable romantic retreat at Hydra Spa Hyderabad.',
  alternates: {
    canonical: 'https://hydraspa.online/couple-spa-gachibowli',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
