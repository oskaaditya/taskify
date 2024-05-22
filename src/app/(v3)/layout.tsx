'use client';

import Cta from '@/components/cta/v3/Cta';
import Footer from '@/components/footer/v3/footer';
import NavbarComponent from '@/components/navbar';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function LayoutVersionTwo({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <NavbarComponent showBanner={pathname === '/v3'} />
      {children}
      <Cta />
      <Footer />
    </>
  );
}
