'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Menu, X, Command } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Experience', href: '/experience' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsCommandPaletteOpen(true)
      }
      if (e.key === 'Escape') {
        setIsCommandPaletteOpen(false)
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-bg/80 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">D</span>
              </div>
              <span className="text-lg sm:text-xl font-bold glow-text">DEEPSIX DEV</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted hover:text-primary transition-colors duration-200 relative group text-sm 2xl:text-base"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Command Palette Button */}
              <button
                onClick={() => setIsCommandPaletteOpen(true)}
                className="p-1.5 sm:p-2 text-muted hover:text-primary transition-colors duration-200"
                title="Open command palette (⌘K)"
              >
                <Command className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Search Button */}
              <button className="p-1.5 sm:p-2 text-muted hover:text-primary transition-colors duration-200">
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Hire CTA */}
              <Link
                href="/contact"
                className="btn-primary hidden md:inline-flex text-sm px-3 py-2 sm:px-4 sm:py-2.5"
              >
                Hire Me
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-1.5 sm:p-2 text-muted hover:text-primary transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="xl:hidden bg-surface/95 backdrop-blur-md border-t border-white/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-3 sm:px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-muted hover:text-primary transition-colors duration-200 py-2 sm:py-2.5 text-base sm:text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="btn-primary inline-block mt-4 sm:mt-6 w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hire Me
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Command Palette */}
      <AnimatePresence>
        {isCommandPaletteOpen && (
          <CommandPalette onClose={() => setIsCommandPaletteOpen(false)} />
        )}
      </AnimatePresence>
    </>
  )
}

function CommandPalette({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="max-w-2xl mx-auto mt-16 sm:mt-20 mx-3 sm:mx-6 bg-surface border border-white/20 rounded-xl shadow-2xl"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-3 sm:p-4 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <Command className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <input
              type="text"
              placeholder="Search commands, pages, or actions..."
              className="flex-1 bg-transparent text-text placeholder-muted outline-none text-sm sm:text-base"
              autoFocus
            />
            <kbd className="px-2 py-1 text-xs bg-white/10 rounded text-muted hidden sm:inline">
              ESC
            </kbd>
          </div>
        </div>
        <div className="p-3 sm:p-4">
          <div className="text-sm text-muted mb-3">Quick Actions</div>
          <div className="space-y-2">
            {navigation.map((item) => (
              <button
                key={item.name}
                className="w-full text-left p-2 sm:p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                onClick={() => {
                  window.location.href = item.href
                  onClose()
                }}
              >
                <div className="font-medium text-text text-sm sm:text-base">{item.name}</div>
                <div className="text-xs sm:text-sm text-muted">Navigate to {item.name.toLowerCase()}</div>
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
