'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const metrics = [
  { label: 'Years Experience', value: '10+', icon: '🚀' },
  { label: 'Projects Delivered', value: '100+', icon: '✨' },
  { label: 'Tech Stack', value: 'Python • JS • React • SQL • Cloud', icon: '⚡' },
]

export function MetricsStrip() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-surface/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #00E0FF 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #7C3AED 0%, transparent 50%)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {metric.icon}
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-base sm:text-lg text-muted">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
