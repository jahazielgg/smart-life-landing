// Optimized animation configurations for better performance

// Use reduced motion preference
export const prefersReducedMotion = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false

// Shared easing functions
export const easings = {
  smooth: [0.25, 0.8, 0.25, 1] as const,
  spring: [0.6, 0.01, -0.05, 0.95] as const,
  ease: [0.4, 0, 0.2, 1] as const,
}

// Container animation with optimized stagger
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : 0.08,
      delayChildren: prefersReducedMotion ? 0 : 0.05,
    },
  },
}

// Item animation with GPU acceleration
export const itemVariants = {
  hidden: {
    y: prefersReducedMotion ? 0 : 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: prefersReducedMotion ? 0 : 0.4,
      ease: easings.smooth,
    },
  },
}

// Optimized hover animations with GPU acceleration
export const createHoverAnimation = (options: {
  y?: number
  scale?: number
  boxShadow?: string
  duration?: number
}) => ({
  y: options.y ?? -5,
  scale: options.scale ?? 1.02,
  ...(options.boxShadow && { boxShadow: options.boxShadow }),
  transition: {
    duration: options.duration ?? 0.2,
    ease: easings.ease,
  },
})

// Optimized tap animation
export const tapAnimation = {
  scale: 0.98,
  transition: {
    duration: 0.1,
    ease: easings.ease,
  },
}

// Button hover preset
export const buttonHoverVariants = (primaryColor: string, glowOpacity: number = 0.4) => ({
  hover: {
    y: -2,
    scale: 1.02,
    boxShadow: `0 8px 20px ${primaryColor}${Math.round(glowOpacity * 255).toString(16)}`,
    transition: {
      duration: 0.2,
      ease: easings.ease,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
})

// Card hover preset with GPU optimization
export const cardHoverVariants = (borderColor: string, shadowColor: string) => ({
  hover: {
    y: -8,
    borderColor,
    boxShadow: `0 20px 40px ${shadowColor}`,
    transition: {
      duration: 0.25,
      ease: easings.ease,
    },
  },
})

// Viewport configuration for better performance
export const viewportConfig = {
  once: true, // Only animate once
  amount: 0.2, // Trigger when 20% is visible
  margin: '0px 0px -10% 0px', // Start animation slightly before entering viewport
}

// Header animation
export const headerAnimation = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    duration: prefersReducedMotion ? 0 : 0.5,
    ease: easings.ease,
  },
}

// Fade in animation
export const fadeInAnimation = {
  initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportConfig,
  transition: {
    duration: prefersReducedMotion ? 0 : 0.5,
    ease: easings.smooth,
  },
}

// Infinite scroll animation configuration
export const createInfiniteScrollAnimation = (
  itemCount: number,
  itemWidth: number,
  speed: number = 40
) => {
  const totalWidth = itemCount * itemWidth
  return {
    animate: {
      x: [0, -totalWidth],
    },
    transition: {
      duration: speed,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop' as const,
    },
  }
}

// GPU acceleration styles
export const gpuAcceleration = {
  transform: 'translateZ(0)',
  willChange: 'transform',
  backfaceVisibility: 'hidden' as const,
}

// Hover GPU acceleration (only apply during hover)
export const hoverGpuAcceleration = {
  willChange: 'transform, box-shadow, opacity',
}
