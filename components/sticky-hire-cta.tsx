'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, X, MessageCircle, Sparkles } from 'lucide-react'

export function StickyHireCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Show CTA after scrolling 50% of the page
      if (scrollY > (documentHeight - windowHeight) * 0.5) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isDismissed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 z-50"
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 100 }}
          transition={{ duration: 0.4, type: 'spring', stiffness: 300, damping: 25 }}
        >
          <div className="relative">
            {/* Enhanced Main CTA Card */}
            <div className="relative overflow-hidden bg-gradient-to-br from-surface/95 to-surface/80 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl shadow-2xl shadow-primary/30 min-w-[280px] sm:min-w-[320px] md:min-w-[360px]">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
                <div className="absolute top-2 right-2 w-16 h-16 sm:w-20 sm:h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-2 left-2 w-12 h-12 sm:w-16 sm:h-16 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000" />
              </div>
              
              {/* Floating Sparkles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-primary/60"
                    style={{
                      left: `${20 + (i * 30)}%`,
                      top: `${30 + (i * 20)}%`,
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  >
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.div>
                ))}
              </div>

              <div className="relative z-10 p-4 sm:p-6 md:p-7">
                {/* Header Section */}
                <div className="flex items-start justify-between mb-4 sm:mb-6">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="relative">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-primary/25">
                        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      {/* Pulse Ring */}
                      <div className="absolute inset-0 rounded-lg sm:rounded-xl border-2 border-primary/30 animate-ping" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-text mb-1">Ready to build?</h3>
                      <p className="text-xs sm:text-sm text-muted/80">Let's discuss your project</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setIsDismissed(true)}
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-muted hover:text-text transition-all duration-200 hover:scale-110"
                  >
                    <X className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
                
                {/* CTA Buttons Section */}
                <div className="space-y-3 sm:space-y-4">
                  {/* Primary Hire Button */}
                  <Link
                    href="/contact"
                    className="group relative w-full bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] flex items-center justify-center text-sm sm:text-base"
                  >
                    <span className="relative z-10">Hire Me Now</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    {/* Button Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                  </Link>
                  
                  {/* Secondary Action Buttons */}
                  <div className="flex space-x-2 sm:space-x-3">
                    <a
                      href="https://wa.me/256754925439"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium text-center transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 flex items-center justify-center"
                    >
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href="mailto:info@deepsixx.com"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium text-center transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 flex items-center justify-center"
                    >
                      <span>Email</span>
                    </a>
                  </div>
                </div>

                {/* Quick Contact Info */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-3 md:space-x-4 text-xs text-muted/60">
                    <span>📧 info@deepsixx.com</span>
                    <span className="hidden sm:inline">•</span>
                    <span>📱 +256777653639</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/30 rounded-xl sm:rounded-2xl opacity-30 blur-2xl -z-10 scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl sm:rounded-2xl opacity-20 blur-xl -z-20 scale-125" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
