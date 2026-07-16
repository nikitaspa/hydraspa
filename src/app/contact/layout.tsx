import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Reservations | Hydra Spa | Gachibowli Hyderabad Spa',
  description: 'Book your luxury experience at our Gachibowli Hyderabad spa today. Get in touch with the Hydra Spa concierge. Open 24 Hours.',
  alternates: {
    canonical: 'https://hydraspa.online/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
