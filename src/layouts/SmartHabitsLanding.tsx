'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Brain, Target, Zap, Calendar, Repeat, TrendingUp, Cloud, Globe, Home } from 'lucide-react'
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

const SmartHabitsLanding = () => {
  const gumroadUrl = 'https://gumroad.com/checkout?embed=true&product=sejth&quantity=1&price=799&referrer=https%3A%2F%2Fgumroad.com%2Fwidgets'

  // Color scheme Orange/Amber for Smart Habits
  const smartHabitsColors = {
    primaryOrange: '#FF6B35',
    secondaryOrange: '#F7931E',
    darkOrange: '#2d1810',
    bgDark: '#1a0f0a',
    textWhite: '#ffffff',
    textGray: '#b0b0b0',
  }

  const benefits = [
    {
      icon: Target,
      title: 'Metas claras y alcanzables',
      description: 'Define objetivos SMART y divídelos en pasos accionables que te acerquen a tus sueños cada día.',
      color: '#FF6B35',
    },
    {
      icon: Calendar,
      title: 'Seguimiento diario intuitivo',
      description: 'Registra tu progreso de manera simple y visual. Mantén la consistencia con un sistema que funciona.',
      color: '#F7931E',
    },
    {
      icon: Zap,
      title: 'Rutinas que transforman',
      description: 'Crea rutinas matutinas y nocturnas poderosas que establezcan la base de tu éxito diario.',
      color: '#FF8C42',
    },
    {
      icon: Repeat,
      title: 'Sistema de racha (Streaks)',
      description: 'Mantén la motivación con seguimiento de rachas que te impulsan a seguir mejorando cada día.',
      color: '#FFB84D',
    },
    {
      icon: Cloud,
      title: 'Respaldo automático en Notion',
      description: 'Tus datos siempre seguros y sincronizados en todos tus dispositivos, sin preocuparte por perder información.',
      color: '#FFA07A',
    },
    {
      icon: Globe,
      title: 'Acceso multiplataforma',
      description: 'Trabaja desde cualquier dispositivo: computadora, tablet o móvil. Tu sistema siempre contigo.',
      color: '#FF7F50',
    },
  ]

  const testimonials = [
    {
      text: 'Smart Habits cambió mi vida. He mantenido una racha de 90 días en mis hábitos matutinos. ¡Es increíble!',
      author: 'Carlos Mendoza',
      role: 'Emprendedor Digital',
      avatar: 'C',
    },
    {
      text: 'El sistema de seguimiento es súper simple pero efectivo. Por fin logro mantener mis rutinas consistentemente.',
      author: 'Ana López',
      role: 'Desarrolladora de Software',
      avatar: 'A',
    },
    {
      text: 'Las plantillas de rutinas me ahorraron horas de planificación. Todo está perfectamente organizado y es fácil de usar.',
      author: 'David Ramírez',
      role: 'Coach de Productividad',
      avatar: 'D',
    },
    {
      text: 'He probado muchas apps de hábitos, pero Smart Habits en Notion es diferente. Es flexible, poderoso y hermoso.',
      author: 'María González',
      role: 'Diseñadora UX',
      avatar: 'M',
    },
    {
      text: 'Los gráficos de progreso me mantienen motivado. Ver mi evolución visual es lo que necesitaba para seguir adelante.',
      author: 'Roberto Torres',
      role: 'Atleta',
      avatar: 'R',
    },
    {
      text: 'Perfecto para construir disciplina. Las reflexiones diarias me ayudan a mantener el enfoque en mis prioridades.',
      author: 'Lucía Fernández',
      role: 'Estudiante de Medicina',
      avatar: 'L',
    },
  ]

  const includes = [
    'Plantilla completa Smart Habits para Notion',
    'Sistema de tracking de hábitos diarios',
    'Rutinas matutinas y nocturnas preconfiguradas',
    'Dashboard visual de progreso y estadísticas',
    'Metas SMART con seguimiento',
    'Seguimiento de rachas (streaks) automático',
    'Tutoriales en video paso a paso',
    'Actualizaciones de por vida',
    'Soporte personalizado por email',
  ]

  // Memoize button hover animations
  const buttonHover = useMemo(
    () => buttonHoverVariants(smartHabitsColors.primaryOrange, 0.5),
    [smartHabitsColors.primaryOrange]
  )

  // Memoize infinite scroll animation
  const infiniteScroll = useMemo(
    () => createInfiniteScrollAnimation(testimonials.length, 416, 40),
    [testimonials.length]
  )

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: `linear-gradient(135deg, ${smartHabitsColors.bgDark} 0%, ${smartHabitsColors.darkOrange} 100%)` }}>
      {/* Background Pattern */}
      <div
        className="fixed inset-0 opacity-10 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B35' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
                  border: '1px solid rgba(255, 107, 53, 0.2)',
                  boxShadow: '0 0 15px rgba(255, 107, 53, 0.2)',
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
                    background: `linear-gradient(135deg, ${smartHabitsColors.primaryOrange} 0%, ${smartHabitsColors.secondaryOrange} 100%)`,
                    color: smartHabitsColors.textWhite,
                    boxShadow: '0 5px 15px rgba(255, 107, 53, 0.4)',
                    ...gpuAcceleration,
                  }}
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Brain className="w-4 h-4" />
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
              <motion.div variants={itemVariants} className="text-left">
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                  style={{
                    background: `linear-gradient(135deg, ${smartHabitsColors.textWhite} 0%, ${smartHabitsColors.primaryOrange} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Smart Habits – Construye la mejor versión de ti
                </h1>
                <p className="text-lg md:text-xl mb-10 leading-relaxed" style={{ color: smartHabitsColors.textGray }}>
                  El sistema completo en Notion para desarrollar hábitos positivos, alcanzar tus metas y crear una vida más productiva.
                </p>
                <motion.a
                  href={gumroadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-5 rounded-full font-semibold text-base uppercase tracking-wide transition-all duration-300 cursor-pointer text-center"
                  style={{
                    background: `linear-gradient(135deg, ${smartHabitsColors.primaryOrange} 0%, ${smartHabitsColors.secondaryOrange} 100%)`,
                    color: smartHabitsColors.textWhite,
                    boxShadow: `0 10px 30px rgba(255, 107, 53, 0.4)`,
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
              <ParallaxCard
                src="/assets/mockups/smarthabits-mockup.png"
                alt="SmartHabits Mockup"
                label="SmartHabits"
                tilt={16}
                depth={18}
                width={500}
              />
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-28" style={{ background: 'rgba(255, 107, 53, 0.02)' }}>
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
                style={{ color: smartHabitsColors.primaryOrange }}
              >
                ¿Por qué Smart Habits?
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-10 rounded-3xl text-center backdrop-blur-sm transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 107, 53, 0.1)',
                      ...gpuAcceleration,
                    }}
                    whileHover={cardHoverVariants(
                      smartHabitsColors.primaryOrange,
                      'rgba(255, 107, 53, 0.15)'
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
                    <h3 className="text-xl font-semibold mb-4" style={{ color: smartHabitsColors.textWhite }}>
                      {benefit.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: smartHabitsColors.textGray }}>
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Video Demo Section */}
        <VideoDemo
          title="Ve Smart Habits en acción"
          videos={[
            {
              title: 'Guía completa para usar la plantilla',
              url: 'https://youtu.be/1_DMTSY576U',
              icon: '',
            },
            {
              title: 'Configurar atajos de iPhone',
              url: 'https://youtu.be/F6nr30URE4c',
              icon: '',
            },
          ]}
          primaryColor={smartHabitsColors.primaryOrange}
          glowColor="rgba(255, 107, 53, 0.1)"
        />



        {/* Testimonials Section */}
        <section className="py-20 md:py-28 overflow-hidden" style={{ background: 'rgba(255, 107, 53, 0.02)' }}>
          <div className="container mx-auto px-5">
            <motion.h2
              {...fadeInAnimation}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              style={{ color: smartHabitsColors.primaryOrange }}
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
                      border: '1px solid rgba(255, 107, 53, 0.1)',
                      minWidth: '400px',
                      maxWidth: '400px',
                    }}
                  >
                    <p className="italic mb-6 text-lg leading-relaxed" style={{ color: smartHabitsColors.textGray }}>
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center font-semibold flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${smartHabitsColors.primaryOrange}, ${smartHabitsColors.secondaryOrange})`,
                          color: smartHabitsColors.textWhite,
                        }}
                      >
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1" style={{ color: smartHabitsColors.textWhite }}>
                          {testimonial.author}
                        </h4>
                        <p className="text-sm" style={{ color: smartHabitsColors.textGray }}>
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
                style={{ color: smartHabitsColors.primaryOrange }}
              >
                Qué incluye Smart Habits
              </motion.h2>

              <motion.div
                variants={itemVariants}
                className="max-w-2xl mx-auto p-10 rounded-3xl backdrop-blur-sm"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 107, 53, 0.1)',
                }}
              >
                {includes.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 py-4"
                    style={{
                      borderBottom: index < includes.length - 1 ? '1px solid rgba(255, 107, 53, 0.1)' : 'none',
                    }}
                  >
                    <div className="text-2xl font-bold flex-shrink-0" style={{ color: smartHabitsColors.primaryOrange }}>
                      ✔️
                    </div>
                    <div className="text-lg" style={{ color: smartHabitsColors.textWhite }}>
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
            background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(247, 147, 30, 0.05) 100%)',
          }}
        >
          <div className="container mx-auto px-5">
            <motion.div {...fadeInAnimation}>
              <h2
                className="text-3xl md:text-5xl font-bold mb-8"
                style={{
                  background: `linear-gradient(135deg, ${smartHabitsColors.textWhite} 0%, ${smartHabitsColors.primaryOrange} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Transforma tu vida, un hábito a la vez
              </h2>
              <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed" style={{ color: smartHabitsColors.textGray }}>
                Empieza hoy con Smart Habits y construye la disciplina que te llevará al éxito. Miles de personas ya están mejorando cada día.
              </p>
              <motion.a
                href={gumroadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 rounded-full font-semibold text-base uppercase tracking-wide transition-all duration-300 cursor-pointer text-center"
                style={{
                  background: `linear-gradient(135deg, ${smartHabitsColors.primaryOrange} 0%, ${smartHabitsColors.secondaryOrange} 100%)`,
                  color: smartHabitsColors.textWhite,
                  boxShadow: `0 10px 30px rgba(255, 107, 53, 0.4)`,
                  ...gpuAcceleration,
                  textDecoration: 'none',
                }}
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
              >
                Obtener Smart Habits
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Smart Finance Option */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-5">
            <motion.div
              {...fadeInAnimation}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: smartHabitsColors.textWhite }}>
                ¿O prefieres controlar tus finanzas?
              </h2>

              <Link href="/finance">
                <motion.div
                  className="group relative rounded-3xl p-10 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-sm"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(0, 255, 133, 0.2)',
                    ...gpuAcceleration,
                  }}
                  whileHover={cardHoverVariants(
                    'rgba(0, 255, 133, 0.2)',
                    'rgba(0, 255, 133, 0.4)'
                  ).hover}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #00FF85 0%, #00cc6a 100%)',
                    }}
                  />

                  <div className="relative z-10">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300"
                      style={{
                        background: 'rgba(0, 255, 133, 0.1)',
                        boxShadow: '0 0 20px rgba(0, 255, 133, 0.4)',
                      }}
                    >
                      <TrendingUp className="w-10 h-10" style={{ color: '#00FF85' }} />
                    </div>

                    <h3 className="text-3xl font-bold mb-4" style={{ color: smartHabitsColors.textWhite }}>
                      Controlar mis finanzas
                    </h3>

                    <p className="text-lg mb-8 leading-relaxed" style={{ color: smartHabitsColors.textGray }}>
                      El sistema definitivo en Notion para controlar tus ingresos, gastos, metas y suscripciones.
                    </p>

                    <motion.div
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base uppercase tracking-wide transition-all duration-300"
                      style={{
                        background: 'linear-gradient(135deg, #00FF85 0%, #00cc6a 100%)',
                        color: '#0a1a10',
                        boxShadow: '0 10px 30px rgba(0, 255, 133, 0.3)',
                      }}
                      whileHover={{
                        boxShadow: '0 15px 40px rgba(0, 255, 133, 0.4)',
                      }}
                    >
                      <span>Comenzar</span>
                      <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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

export default SmartHabitsLanding
