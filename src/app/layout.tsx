import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

import Providers from './providers';

const manrope = Manrope({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Taskify - Project Management Website',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
