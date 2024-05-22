'use client';

import Cta from '@/components/cta/v2/Cta';
import Footer from '@/components/footer/v2/footer';
import NavbarComponent from '@/components/navbar';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function LayoutVersionTwo({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <NavbarComponent showBanner={pathname === '/v2'} />
      {children}
      <Cta />
      <Footer />
    </>
  );
}
