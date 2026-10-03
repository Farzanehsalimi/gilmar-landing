// src/app/layout.tsx
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import localFont from 'next/font/local';
import ThemeRegistry from '@/components/providers/ThemeRegistry';

const mainFont = localFont({
  src: [
    { path: '../fonts/AbarHighFaNum-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/AbarLowFaNum-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/AbarMidFaNum-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../fonts/AbarMidFaNum-ExtraBold.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-main',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'اقامتگاه بوم‌گردی گیلمار',
  description: 'اقامتگاه بوم‌گردی گیلمار، جایی که طبیعت خانه است.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={mainFont.variable}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
