import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StickyHireCTA } from '@/components/sticky-hire-cta'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DEEPSIX DEV – Futuristic Full‑Stack Engineer',
  description: 'Senior full‑stack developer crafting cinematic, 3D‑driven, production‑grade software. Python, JavaScript, React, SQL, Cloud.',
  keywords: ['Full-Stack Developer', 'System Designer', 'Python', 'JavaScript', 'React', 'Next.js', 'Cloud', '3D Web'],
  authors: [{ name: 'Deepsix Dev' }],
  creator: 'Deepsix Dev',
  publisher: 'DEEPSIX TECH SOLUTIONS',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deepsixx.com',
    title: 'DEEPSIX DEV – Futuristic Full‑Stack Engineer',
    description: 'Senior full‑stack developer crafting cinematic, 3D‑driven, production‑grade software.',
    siteName: 'DEEPSIX DEV',
    images: [
      {
        url: '/og/hero.png',
        width: 1200,
        height: 630,
        alt: 'DEEPSIX DEV - Futuristic Full-Stack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DEEPSIX DEV – Futuristic Full‑Stack Engineer',
    description: 'Senior full‑stack developer crafting cinematic, 3D‑driven, production‑grade software.',
    images: ['/og/hero.png'],
    creator: '@deepsixdev',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#070815',
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="min-h-screen bg-bg text-text relative noise">
            <Header />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
            <StickyHireCTA />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
