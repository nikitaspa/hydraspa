import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Massage Spa in Hyderabad | Hydra Spa',
  description: 'Looking for the best massage spa in Hyderabad? Hydra Spa offers authentic body therapies, deep tissue, and relaxation massages in a premium luxury setting.',
  alternates: {
    canonical: 'https://hydraspa.online/massage-spa-hyderabad',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
