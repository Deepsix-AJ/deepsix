'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react'

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/deepsixdev', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/deepsixdev', icon: Instagram },
  { name: 'Twitter', href: 'https://x.com/deepsixdev', icon: Twitter },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/deepsixdev', icon: Linkedin },
  { name: 'GitHub', href: 'https://github.com/Deepsix-AJ', icon: Github },
]

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Services', href: '/services' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
]

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'info@deepsixx.com', href: 'mailto:info@deepsixx.com' },
  { icon: Phone, label: 'Phone', value: '+256777653639', href: 'tel:+256777653639' },
  { icon: MapPin, label: 'Location', value: 'Uganda', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-surface/80 border-t border-white/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #00E0FF 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, #7C3AED 0%, transparent 50%)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="col-span-1 sm:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-lg">D</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold glow-text">DEEPSIX DEV</span>
              </Link>
              
              <p className="text-muted mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                Senior Full‑Stack Developer & System Designer. I build the future and ship it to production.
              </p>
              
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-all duration-200"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-text mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted hover:text-primary transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-text mb-4 sm:mb-6">Contact</h3>
              <ul className="space-y-3 sm:space-y-4">
                {contactInfo.map((contact) => {
                  const Icon = contact.icon
                  return (
                    <li key={contact.label}>
                      <a
                        href={contact.href}
                        className="flex items-center space-x-2 sm:space-x-3 text-muted hover:text-primary transition-colors duration-200"
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm text-muted/60">{contact.label}</div>
                          <div className="text-text text-sm sm:text-base truncate">{contact.value}</div>
                        </div>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 sm:py-6 md:py-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            <div className="text-muted text-xs sm:text-sm text-center sm:text-left">
              © 2024 DEEPSIX TECH SOLUTIONS. All rights reserved.
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-xs sm:text-sm text-muted">
              <Link href="/privacy" className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-primary transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
