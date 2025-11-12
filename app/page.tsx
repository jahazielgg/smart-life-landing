'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import Selection from '../src/components/Selection'
import Testimonials from '../src/components/Testimonials'
import Products from '../src/components/Products'
import Bundle from '../src/components/Bundle'
import WhyNotion from '../src/components/WhyNotion'
import Footer from '../src/components/Footer'

export default function Home() {
  const searchParams = useSearchParams()
  const [productFocus, setProductFocus] = useState<'finance' | 'habits' | null>(null)

  useEffect(() => {
    const product = searchParams.get('product')
    console.log('Product param:', product)
    console.log('All search params:', Array.from(searchParams.entries()))

    if (product === 'finance' || product === 'habits') {
      console.log('Setting product focus to:', product)
      setProductFocus(product)

      // Scroll suave a la sección de productos después de que cargue la página
      setTimeout(() => {
        const productsSection = document.getElementById('products')
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 500)
    }
  }, [searchParams])

  return (
    <main className="min-h-screen bg-bg-primary">
      <Header />
      <Hero />
      <Selection />
      <Testimonials />
      <WhyNotion />
      <Footer />
    </main>
  )
}