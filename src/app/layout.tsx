import type { Metadata } from 'next';
import '../index.css';
import ClientLayoutWrapper from '../components/ClientLayoutWrapper';

export const metadata: Metadata = {
  title: {
    template: '%s | Hydra Spa',
    default: 'Hydra Spa | Luxury Gachibowli Hyderabad Spa',
  },
  description: 'Ultra-premium quiet luxury Gachibowli Hyderabad spa, featuring bespoke Balinese, Swedish, and Aromatherapy treatments.',
  icons: {
    icon: '/logo.jpg',
  },
  openGraph: {
    title: 'Hydra Spa | Luxury Gachibowli Hyderabad Spa',
    description: 'Ultra-premium quiet luxury Gachibowli Hyderabad spa, featuring bespoke Balinese, Swedish, and Aromatherapy treatments.',
    url: 'https://hydraspa.in',
    siteName: 'Hydra Spa',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
