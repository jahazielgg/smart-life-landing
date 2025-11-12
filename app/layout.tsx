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
    icon: '/assets/favicon/favicon.png',
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
      <body className={inter.className}>
        <Suspense fallback={<div className="min-h-screen bg-bg-primary" />}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}