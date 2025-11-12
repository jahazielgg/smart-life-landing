'use client'

import { motion } from 'framer-motion'
import { Star, Rocket, Wallet, Brain, Plus, Equal, Zap, RefreshCw, Smartphone, Clock, AlertTriangle } from 'lucide-react'

const Bundle = () => {
  return (
    <section id="bundle" className="relative py-20 bg-gradient-to-br from-emerald-500/5 via-bg-secondary to-green-500/5 overflow-hidden">
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
          className="max-w-2xl mx-auto"
        >
          <div
            className="rounded-3xl p-8 md:p-12 text-center relative backdrop-blur-sm overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '2px solid rgba(16, 185, 129, 0.5)',
              boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)',
            }}
          >
            {/* Badge with gradient */}
            <motion.div
              className="absolute -top-3 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#ffffff',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
              }}
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Star className="w-4 h-4" />
              Mejor Valor
            </motion.div>

            {/* Title with gradient effect */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <Rocket
                className="w-12 h-12"
                style={{
                  color: '#10b981',
                  filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.4))'
                }}
              />
              <h2
                className="text-3xl md:text-4xl font-extrabold"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #10b981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 20px rgba(16, 185, 129, 0.3))',
                }}
              >
                Ecosistema Smart Life Completo
              </h2>
            </div>

            <p className="text-lg text-text-secondary mb-8">
              Solo hoy: Obtén ambas plantillas con 20% de descuento y transforma tu vida completa en 30 días
            </p>

            {/* Visual package representation */}
            <div className="flex items-center justify-center gap-4 mb-8 flex-wrap">
              <motion.div
                className="text-center p-4 bg-white/5 border-2 border-primary rounded-lg shadow-card"
                whileHover={{ scale: 1.05 }}
              >
                <Wallet className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-semibold">Smart Finance</div>
              </motion.div>
              <Plus className="w-6 h-6 text-primary" />
              <motion.div
                className="text-center p-4 bg-white/5 border-2 border-primary rounded-lg shadow-card"
                whileHover={{ scale: 1.05 }}
              >
                <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-sm font-semibold">Smart Habits</div>
              </motion.div>
              <Equal className="w-6 h-6 text-primary" />
              <motion.div
                className="text-center p-4 bg-gradient-to-br from-primary to-primary-dark rounded-lg text-white shadow-glow"
                whileHover={{ scale: 1.05 }}
              >
                <Rocket className="w-8 h-8 mx-auto mb-2" />
                <div className="text-sm font-semibold">Ecosistema Completo</div>
              </motion.div>
            </div>

            {/* Pricing */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div
                className="text-5xl font-extrabold"
                style={{
                  color: '#10b981',
                  filter: 'drop-shadow(0 0 12px rgba(16, 185, 129, 0.5))'
                }}
              >
                $11.90
              </div>
              <div className="text-xl text-text-muted line-through">$14.80</div>
              <div className="bg-red-500/20 text-red-300 px-3 py-1 rounded-xl text-sm font-semibold">
                Ahorras $2.90 HOY
              </div>
            </div>

            {/* Breakdown */}
            <div className="bg-success/10 p-6 rounded-lg mb-8 text-left">
              <div className="flex justify-between items-center mb-2">
                <span className="text-text-secondary flex items-center gap-2">
                  <Wallet className="w-4 h-4" />
                  Smart Finance
                </span>
                <span className="text-text-muted line-through">$7.90</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-text-secondary flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Smart Habits
                </span>
                <span className="text-text-muted line-through">$6.90</span>
              </div>
              <hr className="border-gray-600 my-3" />
              <div className="flex justify-between items-center font-bold">
                <span className="text-primary-light flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  Ecosistema Completo
                </span>
                <span className="text-primary">$11.90</span>
              </div>
            </div>

            {/* CTA Button with gradient and neon glow */}
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 mb-6"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: '#ffffff',
                boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4), 0 0 20px rgba(16, 185, 129, 0.4)',
              }}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: '0 15px 40px rgba(16, 185, 129, 0.4), 0 0 30px rgba(16, 185, 129, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="w-5 h-5" />
              SÍ, Quiero Cambiar Mi Vida - $11.90
            </motion.a>

            {/* Trust signals */}
            <div className="flex justify-center gap-8 mb-6 flex-wrap text-sm text-text-muted">
              {[
                { icon: Zap, text: 'Instalación instantánea' },
                { icon: RefreshCw, text: 'Actualizaciones incluidas' },
                { icon: Smartphone, text: 'Atajos iPhone' },
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

            {/* Urgency indicator */}
            <motion.div
              className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-center"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <span className="font-semibold text-red-300">ATENCIÓN: Solo quedan 24 horas</span>
              </div>
              <span className="text-sm text-red-300">
                1,200+ personas ya cambiaron su vida. Mientras lees esto, 3 más acaban de comprar.
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Bundle