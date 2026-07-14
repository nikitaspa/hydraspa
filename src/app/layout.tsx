import type { Metadata } from 'next';
import '../index.css';
import ClientLayoutWrapper from '../components/ClientLayoutWrapper';

export const metadata: Metadata = {
  title: 'Hydra Spa',
  description: 'Ultra-premium quiet luxury wellness spa in Gachibowli, Hyderabad, featuring bespoke Balinese, Swedish, and Aromatherapy treatments.',
  icons: {
    icon: '/logo.jpg',
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
