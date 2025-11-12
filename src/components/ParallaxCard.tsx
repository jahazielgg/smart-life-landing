'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

type ParallaxCardProps = {
  src: string
  alt: string
  width?: number
  label?: string
  tilt?: number          // intensidad de giro (grados)
  depth?: number         // desplazamiento máximo de capas (px)
  className?: string
}

export default function ParallaxCard({
  src,
  alt,
  width = 420,
  label,
  tilt = 16,
  depth = 18,
  className = '',
}: ParallaxCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Posición del mouse relativa al centro
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  // Springs suaves
  const springCfg = { damping: 22, stiffness: 260, mass: 0.8 }
  const rx = useSpring(useTransform(my, [-200, 200], [tilt, -tilt]), springCfg)  // rotateX
  const ry = useSpring(useTransform(mx, [-300, 300], [-tilt, tilt]), springCfg)  // rotateY

  // Glare y parallax de capas
  const l1x = useSpring(useTransform(mx, [-300, 300], [depth * 0.25, -depth * 0.25]), springCfg)
  const l1y = useSpring(useTransform(my, [-200, 200], [depth * 0.25, -depth * 0.25]), springCfg)
  const l2x = useSpring(useTransform(mx, [-300, 300], [depth * 0.5, -depth * 0.5]), springCfg)
  const l2y = useSpring(useTransform(my, [-200, 200], [depth * 0.5, -depth * 0.5]), springCfg)

  // Glare posición (0%..100%)
  const glareX = useTransform(mx, [-300, 300], [0, 100])
  const glareY = useTransform(my, [-200, 200], [0, 100])
  const glareOpacity = useSpring(0, { damping: 20, stiffness: 200 })

  function onMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    mx.set(e.clientX - cx)
    my.set(e.clientY - cy)
    glareOpacity.set(0.5)
  }

  function onLeave() {
    mx.set(0); my.set(0)
    glareOpacity.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative [transform-style:preserve-3d] will-change-transform ${className}`}
      style={{
        perspective: 1000,
      }}
      initial={false}
      animate={{}}
    >
      {/* Card tilt */}
      <motion.div
        className="relative rounded-2xl overflow-hidden"
        style={{
          rotateX: rx,
          rotateY: ry,
          transformOrigin: 'center',
        }}
        transition={{ type: 'spring', ...springCfg }}
      >
        {/* Capa base (mockup) */}
        <motion.img
          src={src}
          alt={alt}
          width={width}
          className="block h-auto will-change-transform select-none"
          draggable={false}
          style={{
            x: l1x,
            y: l1y,
          }}
          loading="eager"
        />

      </motion.div>
    </motion.div>
  )
}
