'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        {pathname === '/login' || pathname === '/register' ? (
          children
        ) : (
          <div>
            <Navbar />
            {children}
            <Footer />
          </div>
        )}
      </body>
    </html>
  );
}
