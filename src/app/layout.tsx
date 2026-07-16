import type { Metadata } from 'next';
import Script from 'next/script';
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
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-0QCC6T1D8Q"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-0QCC6T1D8Q');
            `,
          }}
        />
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
      </body>
    </html>
  );
}
