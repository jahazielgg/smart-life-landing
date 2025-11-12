'use client'

import { motion } from 'framer-motion'
import { Cloud, Smartphone, Zap, Lock, RefreshCw, Globe, Blocks, Database } from 'lucide-react'

const WhyNotion = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const reasons = [
    {
      icon: Cloud,
      title: 'Todo en la nube',
      description: 'Accede a tus datos desde cualquier dispositivo. Tu información siempre sincronizada y disponible.',
      color: '#ffffff',
    },
    {
      icon: Smartphone,
      title: 'Apps nativas móviles',
      description: 'Aplicaciones oficiales para iOS y Android. Experiencia fluida en móvil, tablet y computadora.',
      color: '#e0e0e0',
    },
    {
      icon: Zap,
      title: 'Rápido y potente',
      description: 'Interfaz intuitiva con velocidad impresionante. Sin complicaciones técnicas ni curvas de aprendizaje.',
      color: '#d0d0d0',
    },
    {
      icon: Lock,
      title: 'Seguro y confiable',
      description: 'Tus datos protegidos con encriptación de nivel empresarial. Respaldo automático incluido.',
      color: '#c0c0c0',
    },
    {
      icon: Blocks,
      title: 'Totalmente personalizable',
      description: 'Adapta cada plantilla a tu estilo. Notion se ajusta a tu forma de trabajar, no al revés.',
      color: '#ffffff',
    },
    {
      icon: Database,
      title: 'Bases de datos poderosas',
      description: 'Organiza información compleja con facilidad. Filtra, ordena y visualiza tus datos como prefieras.',
      color: '#e0e0e0',
    },
    {
      icon: RefreshCw,
      title: 'Sincronización instantánea',
      description: 'Cambios en tiempo real en todos tus dispositivos. Nunca pierdas información importante.',
      color: '#d0d0d0',
    },
    {
      icon: Globe,
      title: 'Compatible con todo',
      description: 'Funciona en Windows, Mac, Linux, iOS y Android. Una solución verdaderamente multiplataforma.',
      color: '#c0c0c0',
    },
  ]

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/5 via-bg-primary to-gray-200/5"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
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
      </motion.div>

      {/* Background pattern */}
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
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-center mb-6"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
            }}
          >
            ¿Por qué usar Notion?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-center mb-16 max-w-3xl mx-auto"
            style={{ color: '#b0b0b0' }}
          >
            Notion no es solo una herramienta más. Es el espacio de trabajo todo-en-uno que miles de personas usan para organizar su vida completa.
          </motion.p>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-2xl p-6 backdrop-blur-sm transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(255, 255, 255, 0.2)',
                  borderColor: 'rgba(255, 255, 255, 0.3)',
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `${reason.color}1A`,
                    boxShadow: `0 0 20px ${reason.color}40`,
                  }}
                >
                  <reason.icon
                    className="w-7 h-7"
                    style={{
                      color: reason.color,
                      filter: `drop-shadow(0 0 8px ${reason.color}60)`,
                    }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: '#ffffff' }}
                >
                  {reason.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#b0b0b0' }}
                >
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-lg mb-6" style={{ color: '#b0b0b0' }}>
              Más de <strong style={{ color: '#ffffff' }}>30 millones de usuarios</strong> confían en Notion para organizar su trabajo y su vida.
            </p>
            <motion.a
              href="https://notion.so"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)',
                borderColor: 'rgba(255, 255, 255, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-5 h-5" style={{ color: '#ffffff' }} />
              Conoce más sobre Notion
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyNotion
