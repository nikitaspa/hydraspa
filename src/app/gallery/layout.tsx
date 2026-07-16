import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visual Journey | Inside Our Gachibowli Hyderabad Spa',
  description: 'Take a visual tour of Hydra Spa\'s stunning interiors. View the serene massage rooms, hydro-basins, and couples suites at our Gachibowli Hyderabad spa.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
