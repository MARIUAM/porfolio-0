import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Professional Portfolio | Web Developer & Graphic Designer',
  description: 'Experienced web developer and graphic designer specializing in creating beautiful, functional websites and digital experiences.',
  keywords: ['web developer', 'graphic designer', 'portfolio', 'frontend developer', 'UI/UX designer'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Professional Portfolio | Web Developer & Graphic Designer',
    description: 'Experienced web developer and graphic designer specializing in creating beautiful, functional websites and digital experiences.',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Portfolio | Web Developer & Graphic Designer',
    description: 'Experienced web developer and graphic designer specializing in creating beautiful, functional websites and digital experiences.',
    images: ['https://your-domain.com/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}