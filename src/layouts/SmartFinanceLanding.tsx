'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Wallet, Brain, ArrowRight, BarChart3, Target, Smartphone, Infinity, Globe, CloudIcon, Home } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import VideoDemo from '../components/VideoDemo'
import ParallaxCard from '@/components/ParallaxCard'
import {
  containerVariants,
  itemVariants,
  buttonHoverVariants,
  cardHoverVariants,
  headerAnimation,
  fadeInAnimation,
  viewportConfig,
  createInfiniteScrollAnimation,
  gpuAcceleration,
} from '../utils/animationConfig'

const SmartFinanceLanding = () => {
  const gumroadUrl = 'https://gumroad.com/checkout?embed=true&product=xrfsb&quantity=1&price=799&referrer=https%3A%2F%2Fgumroad.com%2Fwidgets'

  // Color scheme from reference (--primary-green: #00FF85)
  const smartFinanceColors = {
    primaryGreen: '#00FF85',
    darkGreen: '#0d2818',
    bgDark: '#0a1a10',
    textWhite: '#ffffff',
    textGray: '#b0b0b0',
  }

  const benefits = [
    {
      icon: BarChart3,
      title: 'Dashboard visual con gráficas',
      description: 'Resúmenes automáticos y gráficas interactivas que te muestran tu situación financiera de un vistazo.',
      color: '#4CAF50',
    },
    {
      icon: Target,
      title: 'Control total en un lugar',
      description: 'Ingresos, gastos, cuentas bancarias y metas financieras organizadas en un sistema integral.',
      color: '#2196F3',
    },
    {
      icon: Smartphone,
      title: 'Registro rápido desde móvil',
      description: 'Atajos nativos para iPhone y Android que te permiten registrar gastos e ingresos en segundos desde tu móvil.',
      color: '#FF9800',
    },
    {
      icon: Infinity,
      title: 'Acceso de por vida',
      description: 'Una compra, acceso ilimitado. Incluye todas las actualizaciones y mejoras futuras sin costo adicional.',
      color: '#9C27B0',
    },
    {
      icon: CloudIcon,
      title: 'Respaldo y seguridad',
      description: 'Tus datos se guardan de manera confiable en Notion, con historial y sincronización automática en todos tus dispositivos.',
      color: '#E91E63',
    },
    {
      icon: Globe,
      title: 'Compatible en cualquier lugar',
      description: 'Accede a tu sistema desde computadora, tablet o móvil. Funciona en Windows, Mac, iOS y Android sin complicaciones.',
      color: '#00BCD4',
    },
  ]

  const testimonials = [
    {
      text: 'Desde que uso Smart Finance, tengo claridad total de mis gastos. Por fin puedo ahorrar de forma consistente. ¡Increíble!',
      author: 'Ana García',
      role: 'Diseñadora Freelance',
      avatar: 'A',
    },
    {
      text: 'La integración con iPhone es genial. Registrar gastos me toma literalmente 5 segundos. Mi vida financiera nunca fue tan organizada.',
      author: 'Miguel Rodríguez',
      role: 'Emprendedor',
      avatar: 'M',
    },
    {
      text: 'Después de probar muchas apps, Smart Finance es la solución definitiva. Simple, poderosa y hermosa. Vale cada peso.',
      author: 'Laura Méndez',
      role: 'Marketing Manager',
      avatar: 'L',
    },
    {
      text: 'La app de Android es espectacular. Los tiles services funcionan perfecto, registro gastos directo desde la barra de notificaciones. ¡Genial!',
      author: 'Carlos Fernández',
      role: 'Desarrollador de Software',
      avatar: 'C',
    },
    {
      text: 'He probado decenas de plantillas de Notion y esta es la mejor con diferencia. El soporte es excelente y las actualizaciones constantes.',
      author: 'Sofía Martínez',
      role: 'Contadora',
      avatar: 'S',
    },
    {
      text: 'Perfecto para freelancers como yo. Puedo separar gastos personales y de negocio fácilmente. Los reportes mensuales son muy útiles.',
      author: 'Diego Torres',
      role: 'Fotógrafo Profesional',
      avatar: 'D',
    },
  ]

  const includes = [
    'Plantilla completa Smart Finance para Notion',
    'Tutoriales paso a paso en video',
    'Atajos para iPhone y Android preconfigurados',
    'Acceso de por vida con actualizaciones',
    'Soporte por email personalizado',
    'Plantillas de presupuesto adicionales',
  ]

  // Memoize button hover animations
  const buttonHover = useMemo(
    () => buttonHoverVariants(smartFinanceColors.primaryGreen, 0.4),
    [smartFinanceColors.primaryGreen]
  )

  // Memoize infinite scroll animation
  const infiniteScroll = useMemo(
    () => createInfiniteScrollAnimation(testimonials.length, 416, 40),
    [testimonials.length]
  )

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: `linear-gradient(135deg, ${smartFinanceColors.bgDark} 0%, ${smartFinanceColors.darkGreen} 100%)` }}>
      {/* Background Pattern */}
      <div
        className="fixed inset-0 opacity-10 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300FF85' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10">
        {/* Header with back to home */}
        <motion.header
          className="fixed top-5 w-full z-50"
          {...headerAnimation}
          style={gpuAcceleration}
        >
          <div className="container mx-auto px-5">
            <div className="max-w-4xl mx-auto">
              <nav
                className="flex items-center justify-between gap-6 px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(0, 255, 133, 0.2)',
                  boxShadow: '0 0 15px rgba(0, 255, 133, 0.2)',
                }}
              >
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-extrabold text-white"
                >
                  <Image src="/assets/logo/logo-menu.png" alt="Smart Life Logo" width={32} height={32} />
                  Smart Life
                </Link>

                <motion.a
                  href={gumroadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${smartFinanceColors.primaryGreen} 0%, #00cc6a 100%)`,
                    color: smartFinanceColors.bgDark,
                    boxShadow: '0 5px 15px rgba(0, 255, 133, 0.4)',
                    ...gpuAcceleration,
                  }}
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Wallet className="w-4 h-4" />
                  Obtener ahora
                </motion.a>
              </nav>
            </div>
          </div>
        </motion.header>

        {/* Hero Section */}
        <section className="py-20 md:py-32 pt-32">
          <div className="container mx-auto px-5">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto"
            >
              {/* Hero Text */}
              <motion.div variants={itemVariants} className="text-center md:text-left">
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  style={{
                    background: `linear-gradient(135deg, ${smartFinanceColors.textWhite} 0%, ${smartFinanceColors.primaryGreen} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Smart Finance – Ahorra y duplica tus ganancias
                </h1>
                <p className="text-lg md:text-xl mb-10 leading-relaxed" style={{ color: smartFinanceColors.textGray }}>
                  El sistema definitivo en Notion para controlar tus ingresos, gastos, metas y suscripciones.
                </p>
                <motion.a
                  href={gumroadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-5 rounded-full font-semibold text-base uppercase tracking-wide transition-all duration-300 cursor-pointer text-center"
                  style={{
                    background: `linear-gradient(135deg, ${smartFinanceColors.primaryGreen} 0%, #00cc6a 100%)`,
                    color: smartFinanceColors.bgDark,
                    boxShadow: `0 10px 30px rgba(0, 255, 133, 0.3)`,
                    ...gpuAcceleration,
                    textDecoration: 'none',
                  }}
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Empieza ahora
                </motion.a>
              </motion.div>

              {/* Hero Mockup */}
              <div className="flex justify-center">
                <ParallaxCard
                  src="/assets/mockups/smartfinance-mockup.png"
                  alt="SmartFinance Mockup"
                  label="SmartFinance"
                  width={500}
                  tilt={16}
                  depth={18}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Video Demo Section */}
        <VideoDemo
          title="Ve Smart Finance en acción"
          videos={[
            {
              title: 'Demostración completa',
              url: 'https://www.youtube.com/watch?v=gF24GeTJB4M',
              icon: '',
            },
            {
              title: 'Configurar atajos en iPhone',
              url: 'https://www.youtube.com/watch?v=iGIIyOF_95I',
              icon: '',
            },
          ]}
          primaryColor={smartFinanceColors.primaryGreen}
          glowColor="rgba(0, 255, 133, 0.1)"
        />
        
        {/* Benefits Section */}
        <section className="py-20 md:py-28" style={{ background: 'rgba(0, 255, 133, 0.02)' }}>
          <div className="container mx-auto px-5">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-center mb-16"
                style={{ color: smartFinanceColors.primaryGreen }}
              >
                ¿Por qué Smart Finance?
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-10 rounded-3xl text-center backdrop-blur-sm transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(0, 255, 133, 0.1)',
                      ...gpuAcceleration,
                    }}
                    whileHover={cardHoverVariants(
                      smartFinanceColors.primaryGreen,
                      'rgba(0, 255, 133, 0.1)'
                    ).hover}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                      style={{
                        background: `${benefit.color}1A`,
                      }}
                    >
                      <benefit.icon className="w-8 h-8" style={{ color: benefit.color }} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4" style={{ color: smartFinanceColors.textWhite }}>
                      {benefit.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: smartFinanceColors.textGray }}>
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-28 overflow-hidden" style={{ background: 'rgba(0, 255, 133, 0.02)' }}>
          <div className="container mx-auto px-5">
            <motion.h2
              {...fadeInAnimation}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              style={{ color: smartFinanceColors.primaryGreen }}
            >
              Lo que dicen nuestros usuarios
            </motion.h2>

            {/* Infinite Scroll Carousel */}
            <div
              className="relative w-full overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              }}
            >
              <motion.div
                className="flex gap-8"
                {...infiniteScroll}
                style={{
                  width: 'max-content',
                  ...gpuAcceleration,
                }}
              >
                {/* Duplicate testimonials for infinite scroll */}
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div
                    key={index}
                    className="p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 flex-shrink-0"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(0, 255, 133, 0.1)',
                      minWidth: '400px',
                      maxWidth: '400px',
                    }}
                  >
                    <p className="italic mb-6 text-lg leading-relaxed" style={{ color: smartFinanceColors.textGray }}>
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center font-semibold flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${smartFinanceColors.primaryGreen}, #00cc6a)`,
                          color: smartFinanceColors.bgDark,
                        }}
                      >
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1" style={{ color: smartFinanceColors.textWhite }}>
                          {testimonial.author}
                        </h4>
                        <p className="text-sm" style={{ color: smartFinanceColors.textGray }}>
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-5">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-center mb-16"
                style={{ color: smartFinanceColors.primaryGreen }}
              >
                Qué incluye Smart Finance
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="max-w-2xl mx-auto p-10 rounded-3xl backdrop-blur-sm"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(0, 255, 133, 0.1)',
                }}
              >
                {includes.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 py-4"
                    style={{
                      borderBottom: index < includes.length - 1 ? '1px solid rgba(0, 255, 133, 0.1)' : 'none',
                    }}
                  >
                    <div className="text-2xl font-bold flex-shrink-0" style={{ color: smartFinanceColors.primaryGreen }}>
                      ✔️
                    </div>
                    <div className="text-lg" style={{ color: smartFinanceColors.textWhite }}>
                      {item}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          className="py-20 md:py-32 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 133, 0.1) 0%, rgba(0, 255, 133, 0.05) 100%)',
          }}
        >
          <div className="container mx-auto px-5">
            <motion.div {...fadeInAnimation}>
              <h2
                className="text-3xl md:text-5xl font-bold mb-8"
                style={{
                  background: `linear-gradient(135deg, ${smartFinanceColors.textWhite} 0%, ${smartFinanceColors.primaryGreen} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                No dejes tu dinero al azar
              </h2>
              <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: smartFinanceColors.textGray }}>
                Empieza hoy con Smart Finance y transforma tu vida financiera. Miles de personas ya están ahorrando más y gastando mejor.
              </p>
              <motion.a
                href={gumroadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 rounded-full font-semibold text-base uppercase tracking-wide transition-all duration-300 cursor-pointer text-center"
                style={{
                  background: `linear-gradient(135deg, ${smartFinanceColors.primaryGreen} 0%, #00cc6a 100%)`,
                  color: smartFinanceColors.bgDark,
                  boxShadow: `0 10px 30px rgba(0, 255, 133, 0.3)`,
                  ...gpuAcceleration,
                  textDecoration: 'none',
                }}
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
              >
                Obtener Smart Finance
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Smart Habits Option */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-5">
            <motion.div
              {...fadeInAnimation}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: smartFinanceColors.textWhite }}>
                ¿O prefieres desarrollar buenos hábitos?
              </h2>

              <Link href="/habits">
                <motion.div
                  className="group relative rounded-3xl p-10 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-sm"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 107, 53, 0.2)',
                    ...gpuAcceleration,
                  }}
                  whileHover={cardHoverVariants(
                    'rgba(255, 107, 53, 0.2)',
                    'rgba(255, 107, 53, 0.4)'
                  ).hover}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                    }}
                  />

                  <div className="relative z-10">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300"
                      style={{
                        background: 'rgba(255, 107, 53, 0.1)',
                        boxShadow: '0 0 20px rgba(255, 107, 53, 0.4)',
                      }}
                    >
                      <Brain className="w-10 h-10" style={{ color: '#FF6B35' }} />
                    </div>

                    <h3 className="text-3xl font-bold mb-4" style={{ color: smartFinanceColors.textWhite }}>
                      Desarrollar buenos hábitos
                    </h3>

                    <p className="text-lg mb-8 leading-relaxed" style={{ color: smartFinanceColors.textGray }}>
                      Sistema completo para construir rutinas efectivas y alcanzar tus metas personales.
                    </p>

                    <motion.div
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base uppercase tracking-wide transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 100%)',
                        color: '#ffffff',
                        boxShadow: '0 10px 30px rgba(255, 107, 53, 0.4)',
                      }}
                      whileHover={{
                        boxShadow: '0 15px 40px rgba(255, 107, 53, 0.4)',
                      }}
                    >
                      <span>Comenzar</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>


    </div>
  )
}

export default SmartFinanceLanding
