import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deep Tissue Massage in Gachibowli | Hydra Spa',
  description: 'Relieve chronic muscle tension with our expert Deep Tissue Massage in Gachibowli, Hyderabad. Targeted therapy for sports recovery, back pain, and deep relaxation.',
  alternates: {
    canonical: 'https://hydraspa.online/deep-tissue-massage',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
