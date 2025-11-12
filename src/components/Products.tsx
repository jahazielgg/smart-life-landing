'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Package, Wallet, Brain, Rocket, BarChart, Coins, Network, Smartphone, RefreshCw, Grid3x3, Flame, Lightbulb, ChevronDown } from 'lucide-react'
import ImageCarousel from './ImageCarousel'
import GumroadDialog from './GumroadDialog'

interface ProductsProps {
  productFocus?: 'finance' | 'habits' | null
}

const Products = ({ productFocus = null }: ProductsProps) => {
  const [isFinanceDialogOpen, setIsFinanceDialogOpen] = useState(false)
  const [isHabitsDialogOpen, setIsHabitsDialogOpen] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  }

  // Definir los productos como un array
  const products = [
    {
      id: 'finance',
      title: 'Smart Finance',
      icon: Wallet,
      description: 'Sistema completo de finanzas personales con dashboard visual, control de gastos automático y seguimiento de metas financieras.',
      thumbnail: '/assets/smartfinance/sf-thumb.png',
      features: [
        { icon: BarChart, text: 'Dashboard visual que te muestra exactamente dónde va cada peso' },
        { icon: Coins, text: 'Control absoluto de cuentas, suscripciones y metas de ahorro' },
        { icon: Smartphone, text: 'Atajos iPhone para registro ultra-rápido (3 segundos máximo)' },
        { icon: RefreshCw, text: 'Actualizaciones de por vida incluidas (valor de $200+)' },
      ],
      carousel: [
        { type: 'video' as const, src: 'https://youtu.be/gF24GeTJB4M' },
        { type: 'image' as const, src: '/assets/smartfinance/sf-1.png' },
        { type: 'image' as const, src: '/assets/smartfinance/sf-2.png' },
      ],
      onOpen: () => setIsFinanceDialogOpen(true),
    },
    {
      id: 'habits',
      title: 'Smart Habits',
      icon: Brain,
      description: 'Sistema visual de hábitos con heatmaps automáticos, seguimiento de rachas y análisis detallado de tu progreso personal.',
      thumbnail: '/assets/smarthabits/sh-thumb.png',
      features: [
        { icon: Grid3x3, text: 'Heatmaps visuales que cambian de color automáticamente' },
        { icon: Flame, text: 'Sistema avanzado de rachas que te hace adicto al progreso' },
        { icon: Smartphone, text: 'Atajos iPhone para registro ultra-rápido (3 segundos máximo)' },
      ],
      carousel: [
        { type: 'image' as const, src: '/assets/smarthabits/sh-1.png' },
        { type: 'image' as const, src: '/assets/smarthabits/sh-2.png' },
      ],
      onOpen: () => setIsHabitsDialogOpen(true),
    },
  ]

  // Ordenar productos según productFocus
  const orderedProducts = productFocus === 'habits'
    ? [products[1], products[0]]
    : products

  console.log('Products component - productFocus:', productFocus)
  console.log('Products component - orderedProducts:', orderedProducts.map(p => p.id))

  return (
    <section id="products" className="relative py-20 bg-gradient-to-br from-emerald-500/5 via-bg-secondary to-green-500/5 overflow-hidden">
      {/* Animated background with emerald gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 50%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, rgba(5, 150, 105, 0.06) 0%, transparent 50%)`,
        }}
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 2, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-5 relative z-10">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {orderedProducts.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="rounded-3xl p-8 text-center transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-sm"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  boxShadow: '0 0 0 rgba(16, 185, 129, 0)',
                }}
                whileHover={{
                  scale: 1.02,
                  y: -10,
                  boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)',
                  borderColor: 'rgba(16, 185, 129, 0.5)',
                }}
              >
                {/* Thumbnail */}
                <div className="relative w-full aspect-square max-w-sm mx-auto mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                  <h3 className="text-2xl font-bold text-text-primary">{product.title}</h3>
                </div>

                {/* Description */}
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="text-left mb-6 space-y-3">
                  {product.features.map((feature, idx) => {
                    const FeatureIcon = feature.icon
                    return (
                      <div key={idx} className="flex items-center gap-3 text-sm text-text-secondary">
                        <FeatureIcon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature.text}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Carousel */}
                <div className="mb-6">
                  <ImageCarousel
                    items={product.carousel}
                    alt={`${product.title} Dashboard`}
                  />
                </div>

                {/* CTA Button with gradient and neon glow */}
                <motion.button
                  onClick={product.onOpen}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base uppercase tracking-wide transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: '#ffffff',
                    boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4), 0 0 20px rgba(16, 185, 129, 0.4)',
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 15px 40px rgba(16, 185, 129, 0.4), 0 0 30px rgba(16, 185, 129, 0.4)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Package className="w-5 h-5" />
                  Obtener {product.title}
                </motion.button>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Gumroad Dialogs */}
      <GumroadDialog
        isOpen={isFinanceDialogOpen}
        onClose={() => setIsFinanceDialogOpen(false)}
        url="https://jahazielgpz.gumroad.com/l/smartfinance2025"
      />
      <GumroadDialog
        isOpen={isHabitsDialogOpen}
        onClose={() => setIsHabitsDialogOpen(false)}
        url="https://jahazielgpz.gumroad.com/l/smarthabits"
      />
    </section>
  )
}

export default Products