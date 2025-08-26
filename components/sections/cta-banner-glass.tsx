'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CTABannerGlass() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="card-glass p-6 sm:p-8 md:p-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Floating Sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-primary"
                style={{
                  left: `${20 + (i * 15)}%`,
                  top: `${20 + (i * 10)}%`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
            ))}
          </div>

          <motion.h2
            className="text-xl sm:text-2xl md:text-h2 font-bold text-text mb-4 sm:mb-6 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to build with a senior who ships?
          </motion.h2>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted mb-6 sm:mb-8 max-w-2xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let's turn your vision into production-ready software. I deliver on time with future-ready design.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="btn-primary group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link
              href="/contact"
              className="btn-secondary group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto text-center"
            >
              Let's Discuss
            </Link>
          </motion.div>

          {/* Quick Contact Info */}
          <motion.div
            className="mt-8 pt-8 border-t border-white/10 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted">
              <span>📧 info@deepsixx.com</span>
              <span className="hidden sm:inline">•</span>
              <span>📱 +256777653639</span>
              <span className="hidden sm:inline">•</span>
              <span>📍 Uganda</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
