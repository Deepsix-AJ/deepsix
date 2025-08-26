'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface PerformanceOptimizerProps {
  children: React.ReactNode
  threshold?: number
  delay?: number
  className?: string
  priority?: 'low' | 'medium' | 'high'
}

export function PerformanceOptimizer({
  children,
  threshold = 0.1,
  delay = 0,
  className = '',
  priority = 'medium'
}: PerformanceOptimizerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    amount: threshold,
    once: true,
    margin: priority === 'high' ? '0px' : '50px'
  })

  const [shouldRender, setShouldRender] = useState(priority === 'high')

  useEffect(() => {
    if (priority === 'high') return

    const timer = setTimeout(() => {
      setShouldRender(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [priority, delay])

  if (!shouldRender) {
    return (
      <div ref={ref} className={`min-h-[200px] ${className}`}>
        <div className="flex items-center justify-center h-full">
          <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: delay + (isInView ? 0 : 0.1),
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}

// Lazy loading wrapper for images
export function LazyImage({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjIyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2FhYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+'
}: {
  src: string
  alt: string
  className?: string
  placeholder?: string
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageSrc, setImageSrc] = useState(placeholder)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setImageSrc(src)
      setIsLoaded(true)
    }
  }, [src])

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-50'
      } ${className}`}
      loading="lazy"
      decoding="async"
    />
  )
}

// Performance monitoring hook
export function usePerformanceMonitor(componentName: string) {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const startTime = performance.now()
      
      return () => {
        const endTime = performance.now()
        const duration = endTime - startTime
        
        // Log performance metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`🚀 ${componentName} render time: ${duration.toFixed(2)}ms`)
        }
        
        // Send to analytics in production
        if (process.env.NODE_ENV === 'production' && duration > 100) {
          // Log slow renders for monitoring
          console.warn(`⚠️ Slow render detected in ${componentName}: ${duration.toFixed(2)}ms`)
        }
      }
    }
  }, [componentName])
}

// Intersection observer hook for better performance
export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '50px',
    ...options
  }

  const [ref, setRef] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasIntersected) {
        setIsIntersecting(true)
        setHasIntersected(true)
      }
    }, defaultOptions)

    observer.observe(ref)

    return () => {
      if (ref) {
        observer.unobserve(ref)
      }
    }
  }, [ref, hasIntersected, defaultOptions])

  return [setRef, isIntersecting] as const
}
