import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import '../index.css';
import ClientLayoutWrapper from '../components/ClientLayoutWrapper';

export const metadata: Metadata = {
  metadataBase: new URL('https://hydraspa.online'),
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
    url: 'https://hydraspa.online',
    siteName: 'Hydra Spa',
    images: [
      {
        url: '/og-image.png',
        width: 1024,
        height: 1024,
        alt: 'Premium Luxury Spa in Gachibowli',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://hydraspa.online',
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["Spa", "HealthAndBeautyBusiness", "LocalBusiness", "Organization"],
  "name": "Hydra Spa",
  "image": "https://hydraspa.online/og-image.png",
  "url": "https://hydraspa.online",
  "telephone": "+918999384340",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gachibowli",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
      <GoogleAnalytics gaId="G-0QCC6T1D8Q" />
    </html>
  );
}
