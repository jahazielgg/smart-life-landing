'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer
      className="py-12 md:py-16"
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        borderTop: '1px solid rgba(16, 185, 129, 0.2)',
      }}
    >
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 md:gap-12"
        >
          {/* Column 1: Logo & Copyright */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/logo/logo-menu.png"
                alt="Smart Life Logo"
                width={40}
                height={40}
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.4))'
                }}
              />
              <span className="text-xl font-bold" style={{ color: '#10b981' }}>
                Smart Life
              </span>
            </div>
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
              </motion.div>
              <span className="text-sm" style={{ color: '#b0b0b0' }}>
                &copy; 2025 Smart Life
              </span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: '#808080' }}>
              Organiza tu vida. Alcanza tus metas. Creado para personas decididas a transformar su vida.
            </p>
          </div>

          {/* Column 2: Social Media */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold" style={{ color: '#ffffff' }}>
              Sígueme
            </h3>
            <div className="flex flex-col gap-3">
              <motion.a
                href="https://www.tiktok.com/@jahazielguerra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors duration-300"
                style={{ color: '#b0b0b0' }}
                whileHover={{
                  color: '#10b981',
                  x: 5,
                }}
              >
                TikTok
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@JahazielGuerra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors duration-300"
                style={{ color: '#b0b0b0' }}
                whileHover={{
                  color: '#10b981',
                  x: 5,
                }}
              >
                YouTube
              </motion.a>
              <motion.a
                href="https://www.instagram.com/jahazielgpz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors duration-300"
                style={{ color: '#b0b0b0' }}
                whileHover={{
                  color: '#10b981',
                  x: 5,
                }}
              >
                Instagram
              </motion.a>
            </div>
          </div>

          {/* Column 3: Products */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold" style={{ color: '#ffffff' }}>
              Productos
            </h3>
            <div className="flex flex-col gap-3">
              <motion.a
                href="https://jahazielgpz.gumroad.com/l/smartfinance2025"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors duration-300"
                style={{ color: '#b0b0b0' }}
                whileHover={{
                  color: '#10b981',
                  x: 5,
                }}
              >
                Smart Finance
              </motion.a>
              <motion.a
                href="https://jahazielgpz.gumroad.com/l/smarthabits"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors duration-300"
                style={{ color: '#b0b0b0' }}
                whileHover={{
                  color: '#10b981',
                  x: 5,
                }}
              >
                Smart Habits
              </motion.a>
              {/* <motion.a
                href="https://jahazielgpz.gumroad.com/l/smartlife-bundle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-semibold transition-colors duration-300"
                style={{ color: '#10b981' }}
                whileHover={{
                  color: '#059669',
                  x: 5,
                }}
              >
                <span className="text-xl">🚀</span>
                Ecosistema Completo
              </motion.a> */}
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  )
}

export default Footer