'use client'

import { motion } from 'framer-motion'
import { Wallet, Brain, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const Selection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const options = [
    {
      icon: Wallet,
      title: 'Controlar mis finanzas',
      description: 'El sistema definitivo en Notion para controlar tus ingresos, gastos, metas y suscripciones.',
      link: '/finance',
      primaryColor: '#10b981', // emerald-500
      secondaryColor: '#059669', // emerald-600
      glowColor: 'rgba(16, 185, 129, 0.4)',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      bgDark: '#0a1a10',
      darkGreen: '#0d2818',
    },
    {
      icon: Brain,
      title: 'Desarrollar buenos hábitos',
      description: 'Sistema completo para construir rutinas efectivas y alcanzar tus metas personales.',
      link: '/habits',
      primaryColor: '#FF6B35',
      secondaryColor: '#F7931E',
      glowColor: 'rgba(255, 107, 53, 0.4)',
      gradient: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
      bgDark: '#1a0f0a',
      darkGreen: '#2d1810',
    },
  ]

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background with emerald gradient matching Smart Finance */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-bg-primary to-green-500/5">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 70% 80%, rgba(5, 150, 105, 0.08) 0%, transparent 50%)`,
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
      </div>

      {/* Background pattern with emerald color */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Title with gradient effect matching Smart Finance emerald color */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #10b981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.2',
              filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.3))',
            }}
          >
            ¿Qué te gustaría lograr?
          </motion.h2>

          {/* Options Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {options.map((option, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <Link href={option.link}>
                  <motion.div
                    className="group relative rounded-3xl p-10 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-sm"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: `1px solid ${option.primaryColor}33`,
                      boxShadow: `0 0 0 ${option.glowColor}00`,
                    }}
                    whileHover={{
                      scale: 1.02,
                      y: -10,
                      boxShadow: `0 0 30px ${option.glowColor}`,
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Hover gradient overlay with neon effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      style={{
                        background: option.gradient,
                      }}
                    />

                    <div className="relative z-10">
                      {/* Icon with glow effect and neon illumination */}
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300"
                        style={{
                          background: `${option.primaryColor}1A`,
                          boxShadow: `0 0 20px ${option.glowColor}, 0 0 40px ${option.glowColor}33`,
                        }}
                      >
                        <option.icon
                          className="w-10 h-10 transition-all duration-300"
                          style={{
                            color: option.primaryColor,
                            filter: `drop-shadow(0 0 8px ${option.glowColor})`,
                          }}
                        />
                      </div>

                      {/* Title */}
                      <h3
                        className="text-3xl font-bold mb-4"
                        style={{ color: '#ffffff' }}
                      >
                        {option.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-lg mb-8 leading-relaxed"
                        style={{ color: '#b0b0b0' }}
                      >
                        {option.description}
                      </p>

                      {/* CTA Button with gradient and neon glow */}
                      <motion.div
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base uppercase tracking-wide transition-all duration-300"
                        style={{
                          background: option.gradient,
                          color: '#ffffff',
                          boxShadow: `0 10px 30px ${option.glowColor}, 0 0 20px ${option.glowColor}`,
                        }}
                        whileHover={{
                          boxShadow: `0 15px 40px ${option.glowColor}, 0 0 30px ${option.glowColor}`,
                        }}
                      >
                        <span>Comenzar</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.div>
                    </div>

                    {/* Glow effect on hover with neon effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"
                      style={{
                        boxShadow: `0 20px 60px ${option.glowColor}, 0 0 40px ${option.glowColor}`,
                      }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Selection
