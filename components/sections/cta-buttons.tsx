'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Mail, Phone, Calendar } from 'lucide-react'

const ctaButtons = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/256754925439',
    icon: MessageCircle,
    color: 'bg-green-600 hover:bg-green-700',
    description: 'Quick chat',
  },
  {
    label: 'Email',
    href: 'mailto:info@deepsixx.com',
    icon: Mail,
    color: 'bg-blue-600 hover:bg-blue-700',
    description: 'Send details',
  },
  {
    label: 'Call',
    href: 'tel:+256777653639',
    icon: Phone,
    color: 'bg-purple-600 hover:bg-purple-700',
    description: 'Direct call',
  },
  {
    label: 'Book a Call',
    href: 'https://calendly.com/your-calendly/intro-call',
    icon: Calendar,
    color: 'bg-orange-600 hover:bg-orange-700',
    description: 'Schedule meeting',
  },
]

export function CTAButtons() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-surface/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-h2 font-bold text-text mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Choose your preferred way to reach me. I'm ready to discuss your project and turn your vision into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ctaButtons.map((button, index) => {
            const Icon = button.icon
            return (
              <motion.a
                key={button.label}
                href={button.href}
                target={button.href.startsWith('http') ? '_blank' : undefined}
                rel={button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`${button.color} text-white p-6 rounded-xl text-center group hover:scale-105 transition-all duration-300 cursor-pointer`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {button.label}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {button.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="card-glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted mb-6">
              Let me know what you need, and I'll get back to you with a detailed proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary group"
              >
                Contact Me
              </a>
              <a
                href="/about"
                className="btn-secondary group"
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
