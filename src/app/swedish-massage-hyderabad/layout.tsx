import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Swedish Massage in Hyderabad | Hydra Spa',
  description: 'Experience the best classic Swedish Massage in Hyderabad. Hydra Spa offers gentle, full-body relaxation therapies designed to improve circulation and relieve stress.',
  alternates: {
    canonical: 'https://hydraspa.online/swedish-massage-hyderabad',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
