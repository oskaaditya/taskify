'use client';

import Cta from '@/components/cta/v1/Cta';
import Footer from '@/components/footer/v1/footer';
import NavbarComponent from '@/components/navbar';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function LayoutVersionOne({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <NavbarComponent showBanner={pathname === '/'} />
      {children}
      <Cta />
      <Footer />
    </>
  );
}
