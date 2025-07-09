

import './globals.css';
import { Inter, Playfair_Display, Tangerine } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const tangerine = Tangerine(
  {
    weight: '400',
    subsets: ['latin'],
    variable: '--font-tangerine'
  }
);

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

// Metadata object remains the same, just without the TypeScript type annotation
export const metadata = {
  title: 'Palm Bliss Resort - Premium Luxury Resort Experience',
  description: 'Experience the ultimate luxury at Palm Bliss Resort. Wellness, yoga, natural pools, and world-class amenities in a serene natural setting.',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${tangerine.variable} `}>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}