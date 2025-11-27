'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { createInfiniteScrollAnimation, gpuAcceleration } from '../utils/animationConfig'

const Testimonials = () => {
  const testimonials = [
    {
      text: "Smart Finance terminó con mis dolores de cabeza financieros. Ahora veo exactamente dónde va mi dinero y he ahorrado más en 3 meses que en todo el año pasado. 💰",
      author: "María González",
      role: "💼 Emprendedora",
      avatar: "M"
    },
    {
      text: "Los heatmaps de Smart Habits son increíbles. Ver mi progreso en colores me mantiene motivado. Llevo 4 meses sin fallar y es mi récord personal. 🔥",
      author: "Carlos Mendoza",
      role: "🎨 Diseñador UX",
      avatar: "C"
    },
    {
      text: "Dejé Excel para siempre. Smart Finance es visual, automático y hermoso. Lo que me tomaba horas ahora me toma minutos. ⚡",
      author: "Ana Vega",
      role: "📱 Product Manager",
      avatar: "A"
    },
    {
      text: "El ecosistema completo cambió mi vida. Finanzas y hábitos conectados en un lugar hermoso. Nunca había sido tan organizada. 🎯",
      author: "Laura Sánchez",
      role: "🎓 Estudiante",
      avatar: "L"
    },
    {
      text: "Smart Habits me ayudó a crear rutinas que realmente perduran. El sistema de rachas es adictivo en el mejor sentido. 🏆",
      author: "Diego Torres",
      role: "💻 Desarrollador",
      avatar: "D"
    },
    {
      text: "Por fin tengo control total de mis finanzas. Las gráficas automáticas me muestran exactamente cómo mejorar mi situación económica. 📈",
      author: "Javier López",
      role: "🤝 Consultor",
      avatar: "J"
    }
  ]

  // Memoize infinite scroll animation
  const infiniteScroll = useMemo(
    () => createInfiniteScrollAnimation(testimonials.length, 416, 40),
    [testimonials.length]
  )

  return (
    <section className="relative py-20 bg-gradient-to-br from-white/5 via-bg-primary to-gray-200/5 overflow-hidden">
      {/* Animated background with white gradient */}
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

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star
              className="w-8 h-8 text-yellow-400 fill-current"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(250, 204, 21, 0.4))'
              }}
            />
            <h2
              className="text-3xl md:text-5xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
              }}
            >
              Lo que dicen nuestros usuarios
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Más de 1,200 personas han transformado su productividad
          </p>

          {/* Social proof visual */}
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/20 rounded-xl">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white font-semibold">4.8/5 ⭐ promedio de satisfacción</span>
          </div>
        </motion.div>

        {/* Scrolling testimonials */}
        <div
          className="relative overflow-hidden"
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
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  minWidth: '400px',
                  maxWidth: '400px',
                }}
              >
                <p className="italic mb-6 text-lg leading-relaxed text-text-secondary">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-semibold flex-shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                      color: '#0a1a10',
                    }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-text-primary">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-text-secondary">
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
  )
}

export default Testimonials
