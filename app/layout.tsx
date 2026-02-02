import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Marcelo Bokor - Full-Stack Developer',
  description:
    'Full-stack developer building SaaS platforms, AI automation, and custom tools for founders and CTOs.',
  generator: 'v0.app',
  openGraph: {
    title: 'Marcelo Bokor - Full-Stack Developer',
    description:
      'Full-stack developer building SaaS platforms, AI automation, and custom tools for founders and CTOs.',
    images: [
      {
        url: '/og.svg',
        width: 1200,
        height: 630,
        alt: 'Marcelo Bokor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcelo Bokor - Full-Stack Developer',
    description:
      'Full-stack developer building SaaS platforms, AI automation, and custom tools for founders and CTOs.',
    images: ['/og.svg'],
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' ? <Analytics /> : null}
      </body>
    </html>
  )
}
