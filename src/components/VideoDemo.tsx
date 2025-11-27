'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

interface Video {
  title: string
  url: string
  icon?: string
}

interface VideoDemoProps {
  title: string
  videos: Video[]
  primaryColor: string
  glowColor: string
}

const VideoDemo = ({ title, videos, primaryColor, glowColor }: VideoDemoProps) => {
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

  return (
    <section id="demo" className="relative py-20 md:py-28 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 30% 50%, ${glowColor} 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, ${glowColor.replace('0.1', '0.08')} 0%, transparent 50%)`,
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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            style={{
              background: `linear-gradient(135deg, #ffffff 0%, ${primaryColor} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: `drop-shadow(0 0 20px ${glowColor})`,
            }}
          >
            {title}
          </motion.h2>

          {/* Video Grid */}
          <div className={`grid ${videos.length > 1 ? 'md:grid-cols-2' : ''} gap-8 max-w-6xl mx-auto`}>
            {videos.map((video, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-3xl p-8 backdrop-blur-sm transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${primaryColor}33`,
                }}
                whileHover={{
                  y: -10,
                  boxShadow: `0 20px 40px ${glowColor}`,
                  borderColor: `${primaryColor}66`,
                }}
              >
                {/* Video Title */}
                <h3
                  className="text-2xl font-bold mb-6 flex items-center gap-3"
                  style={{ color: '#ffffff' }}
                >
                  {video.icon && <span className="text-3xl">{video.icon}</span>}
                  {video.title}
                </h3>

                {/* Video Container */}
                <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={video.url.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      border: 'none',
                      borderRadius: '1rem',
                    }}
                  />
                </div>

                {/* Play indicator overlay (decorative) */}
                <div className="mt-4 flex items-center justify-center gap-2 text-sm" style={{ color: primaryColor }}>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoDemo
