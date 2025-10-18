import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Analytics from '@/components/Analytics';
import CookieConsent from '@/components/CookieConsent';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Narayana Public School - Transforming Rural Education, Empowering Every Child.',
    template: '%s | Narayana Public School',
  },
  description:
    'Narayana Public School in Gopalganj, Bihar delivers modern, technology-enabled education that empowers rural children to thrive.',
  keywords: ['school', 'education', 'academy', 'learning', 'students', 'academics', 'admissions'],
  authors: [{ name: 'Narayana Public School' }],
  creator: 'Narayana Public School',
  publisher: 'Narayana Public School',
  metadataBase: new URL('https://narayanapublicschool.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://narayanapublicschool.vercel.app',
    siteName: 'Narayana Public School',
    title: 'Narayana Public School - Transforming Rural Education, Empowering Every Child.',
    description:
      'Narayana Public School delivers modern, technology-enabled education to rural communities in Gopalganj, Bihar.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Narayana Public School Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narayana Public School - Transforming Rural Education, Empowering Every Child.',
    description:
      'Narayana Public School in Gopalganj, Bihar empowers rural students with technology-rich, future-ready learning.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0B2A4A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
