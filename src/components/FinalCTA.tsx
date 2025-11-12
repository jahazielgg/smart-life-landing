'use client'

import { motion } from 'framer-motion'
import { Trophy, Rocket, Verified, Infinity as InfinityIcon, Headphones, Shield } from 'lucide-react'

const FinalCTA = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-emerald-500/5 via-bg-primary to-green-500/5 text-center overflow-hidden">
      {/* Animated background with emerald gradient */}
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

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title with gradient effect */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <Trophy
              className="w-12 h-12"
              style={{
                color: '#10b981',
                filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.4))'
              }}
            />
            <h2
              className="text-3xl md:text-5xl font-extrabold"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.3))',
              }}
            >
              Esto es lo último que intentarás
            </h2>
          </div>

          <p className="text-xl text-text-secondary mb-12 max-w-3xl mx-auto">
            Mientras sigues buscando la solución perfecta, 1,200+ personas ya están viviendo la vida que tú quieres.
            <strong className="text-text-primary"> Hoy puedes ser una de ellas o seguir posponiendo tu transformación.</strong>
          </p>

          {/* Social proof stats */}
          <div className="flex justify-center gap-8 md:gap-16 mb-12 flex-wrap">
            {[
              { value: '1,200+', label: 'Vidas transformadas' },
              { value: '4.8/5', label: 'Calificación promedio' },
              { value: '89%', label: 'Mejora en productividad' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div
                  className="text-3xl md:text-4xl font-extrabold mb-1"
                  style={{
                    color: '#10b981',
                    filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.4))'
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Main CTA with gradient and neon glow */}
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 mb-8"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              color: '#ffffff',
              boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4), 0 0 20px rgba(16, 185, 129, 0.4)',
            }}
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: '0 15px 40px rgba(16, 185, 129, 0.4), 0 0 30px rgba(16, 185, 129, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 10px 30px rgba(16, 185, 129, 0.4), 0 0 20px rgba(16, 185, 129, 0.4)',
                '0 15px 40px rgba(16, 185, 129, 0.6), 0 0 35px rgba(16, 185, 129, 0.6)',
                '0 10px 30px rgba(16, 185, 129, 0.4), 0 0 20px rgba(16, 185, 129, 0.4)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <Rocket className="w-6 h-6" />
            SÍ, Quiero Cambiar Mi Vida - $11.90
          </motion.a>

          {/* Trust signals */}
          <div className="flex justify-center gap-8 mb-8 flex-wrap text-sm text-text-muted">
            {[
              { icon: Verified, text: 'Acceso inmediato' },
              { icon: InfinityIcon, text: 'Actualizaciones de por vida' },
              { icon: Headphones, text: 'Soporte incluido' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-primary" />
                  {item.text}
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FinalCTA