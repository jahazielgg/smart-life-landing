import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart Life - Organiza tu vida en Notion',
  description: 'Transforma el caos de tu día a día en un sistema organizado y visual. Finanzas, hábitos y productividad conectados en un solo lugar.',
  keywords: 'Notion, productividad, finanzas personales, hábitos, organización, plantillas',
  authors: [{ name: 'Smart Life Team' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: [
      { url: '/assets/favicon/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/favicon/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/assets/favicon/favicon.png',
    apple: '/assets/favicon/favicon.png',
  },
  openGraph: {
    title: 'Smart Life - Organiza tu vida en Notion',
    description: 'Sistema completo de productividad personal en Notion',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Life - Organiza tu vida en Notion',
    description: 'Sistema completo de productividad personal en Notion',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon.png?v=1" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon.png?v=1" />
        <link rel="shortcut icon" href="/assets/favicon/favicon.png?v=1" />
        <link rel="apple-touch-icon" href="/assets/favicon/favicon.png?v=1" />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div className="min-h-screen bg-bg-primary" />}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}