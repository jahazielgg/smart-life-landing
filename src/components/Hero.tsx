'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { TrendingUp, Rocket, Wallet, Brain, BarChart3, Verified, RefreshCw, Headphones } from 'lucide-react'
import { useCountUp } from '../hooks/useCountUp'
import { useInView } from '../hooks/useInView'
import { useRef, useState, useEffect } from 'react'
import ParallaxCard from './ParallaxCard'

const Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.3 })
  const count1200 = useCountUp(1200, inView, 2000)
  const count89 = useCountUp(89, inView, 2000)
  const count32 = useCountUp(3.2, inView, 2000)
  const count48 = useCountUp(4.8, inView, 2000)

  // Mobile carousel state
  const [currentSlide, setCurrentSlide] = useState(0)
  const mockups = [
    {
      src: '/assets/mockups/smartfinance-mockup.png',
      alt: 'SmartFinance Mockup',
      label: 'SmartFinance',
    },
    {
      src: '/assets/mockups/smarthabits-mockup.png',
      alt: 'SmartHabits Mockup',
      label: 'SmartHabits',
    },
  ]

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockups.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Mouse movement values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring animations
  const springConfig = { damping: 25, stiffness: 700 }
  const x1 = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), springConfig)
  const y1 = useSpring(useTransform(mouseY, [-300, 300], [-10, 10]), springConfig)
  const rotateX1 = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), springConfig)
  const rotateY1 = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), springConfig)

  const x2 = useSpring(useTransform(mouseX, [-300, 300], [15, -15]), springConfig)
  const y2 = useSpring(useTransform(mouseY, [-300, 300], [-8, 8]), springConfig)
  const rotateX2 = useSpring(useTransform(mouseY, [-300, 300], [3, -3]), springConfig)
  const rotateY2 = useSpring(useTransform(mouseX, [-300, 300], [8, -8]), springConfig)

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(event.clientX - centerX)
    mouseY.set(event.clientY - centerY)
  }

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

  const floatVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="relative pt-32 pb-20 text-center overflow-hidden">
      {/* Animated background with white gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-bg-primary to-gray-200/5">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
                        radial-gradient(circle at 70% 80%, rgba(240, 240, 240, 0.06) 0%, transparent 50%)`,
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

      {/* Background pattern with white color */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Mobile Carousel - Only visible on mobile */}
          <motion.div
            variants={itemVariants}
            className="md:hidden mb-8 relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <motion.div
                className="flex"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {mockups.map((mockup, index) => (
                  <div
                    key={index}
                    className="min-w-full flex justify-center items-center px-4"
                  >
                    <img
                      src={mockup.src}
                      alt={mockup.alt}
                      className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {mockups.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    background: currentSlide === index
                      ? 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)'
                      : 'rgba(255, 255, 255, 0.3)',
                    width: currentSlide === index ? '24px' : '8px',
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Title with gradient effect in white */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
            }}
          >
            Organiza tu vida completa
            <br />
            en Notion
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
          >
            Transforma el caos de tu día a día en un sistema organizado y visual.
            <strong className="text-text-primary"> Finanzas, hábitos y productividad</strong> conectados en un solo lugar.
          </motion.p>

          {/* Mockup Images - Desktop only */}
          <motion.div
            variants={itemVariants}
            className="mt-16 hidden md:flex justify-center gap-8 flex-wrap"
          >
            <motion.div
              initial={{ rotate: -3 }}
              animate={{ rotate: -3 }}
              className="transform"
            >
              <ParallaxCard
                src="/assets/mockups/smartfinance-mockup.png"
                alt="SmartFinance Mockup"
                label="SmartFinance"
                className="shadow-2xl"
                tilt={16}
                depth={18}
              />
            </motion.div>

            <motion.div
              initial={{ rotate: 2 }}
              animate={{ rotate: 2 }}
              className="transform"
            >
              <ParallaxCard
                src="/assets/mockups/smarthabits-mockup.png"
                alt="SmartHabits Mockup"
                label="SmartHabits"
                className="shadow-2xl"
                tilt={-16}
                depth={18}
              />
            </motion.div>
          </motion.div>

          {/* CTA Button with gradient and neon glow */}
          <motion.div
            variants={itemVariants}
            className="mt-12 mb-8"
          >
            <motion.a
              href="#selection"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                color: '#0a1a10',
                boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 15px 40px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="w-5 h-5" />
              Comenzar ahora
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-8 mt-8 flex-wrap text-sm text-text-muted"
          >
            {[
              { icon: Verified, text: 'Instalación instantánea' },
              { icon: RefreshCw, text: 'Actualizaciones de por vida' },
              { icon: Headphones, text: 'Soporte incluido' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <item.icon className="w-4 h-4 text-white" />
                {item.text}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero