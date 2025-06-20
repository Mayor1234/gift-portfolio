import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
  Plus_Jakarta_Sans,
  Poppins,
} from 'next/font/google';
import '../globals.css';
import Header from '@/components/headers/Headers';
import FooterSection from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '700'], // Specify valid weights
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  display: 'swap',
  style: 'normal',
  subsets: ['latin'],
  weight: ['400', '700'], // Specify valid weights
});

export const metadata: Metadata = {
  title: 'Gift Portfolio',
  description:
    'A simple blog built with Next.js, Tailwind CSS, and TypeScript.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${jakarta.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          {/* Main content */}
          {children}
          {/* Footer or additional content can go here */}
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
