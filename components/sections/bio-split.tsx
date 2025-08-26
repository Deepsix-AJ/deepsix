'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Download, ArrowRight } from 'lucide-react'

export function BioSplit() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Photo */}
          <motion.div
            ref={ref}
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="text-8xl opacity-50">👨‍💻</div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
              <div className="absolute bottom-4 left-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl" />
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-20 blur-2xl -z-10" />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h1 className="text-h1 font-bold text-text mb-6">
                Deepsix Dev — Senior Full‑Stack & System Designer
              </h1>
              
              <div className="space-y-4 text-lg text-muted leading-relaxed">
                <p>
                  I build production‑grade platforms end‑to‑end.
                </p>
                <p>
                  Started coding at 15; 10+ years shipping software.
                </p>
                <p>
                  Founder of <span className="text-primary font-semibold">DEEPSIX TECH SOLUTIONS</span>.
                </p>
              </div>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <span className="text-muted">Full-Stack Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-secondary rounded-full" />
                <span className="text-muted">System Architecture</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full" />
                <span className="text-muted">Cloud & DevOps</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <span className="text-muted">3D & Motion</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/cv/deepsix-dev.pdf"
                className="btn-secondary group inline-flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                Download CV
              </Link>
              
              <Link
                href="/contact"
                className="btn-primary group inline-flex items-center justify-center"
              >
                Hire Me
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
