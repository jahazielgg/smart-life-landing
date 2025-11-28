'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Rocket, Bot } from 'lucide-react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-5 w-full transform z-50 transition-all duration-300 ${
        scrolled
          ? 'scale-[0.98]'
          : 'scale-100'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-5">
        <div className="max-w-4xl mx-auto">
          <nav
            className="flex items-center justify-between gap-6 px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-lg"
            style={{
              background: scrolled ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.03)',
              border: scrolled ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: scrolled ? '0 0 30px rgba(255, 255, 255, 0.2)' : '0 0 15px rgba(255, 255, 255, 0.15)',
            }}
          >
        <motion.a
          href="#"
          className="flex items-center gap-2 text-lg font-extrabold text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image src="/assets/logo/logo-menu.png" alt="Smart Life Logo" width={32} height={32} />
          Smart Life
        </motion.a>

        <motion.a
          href="#selection"
          className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
            color: '#0a1a10',
            boxShadow: '0 5px 15px rgba(255, 255, 255, 0.3), 0 0 10px rgba(255, 255, 255, 0.2)',
          }}
          whileHover={{
            y: -2,
            scale: 1.05,
            boxShadow: '0 8px 20px rgba(255, 255, 255, 0.4), 0 0 15px rgba(255, 255, 255, 0.3)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Rocket className="w-4 h-4" />
          Ver Plantillas
        </motion.a>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}

export default Header