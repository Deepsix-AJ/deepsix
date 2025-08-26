'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+256777653639',
    href: 'tel:+256777653639',
    description: 'Call me directly',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+256754925439',
    href: 'https://wa.me/256754925439',
    description: 'Quick chat',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@deepsixx.com',
    href: 'mailto:info@deepsixx.com',
    description: 'Send me an email',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Uganda',
    href: '#',
    description: 'Based in Uganda',
  },
]

export function DirectContacts() {
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
            Get in Touch
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Multiple ways to reach me. Choose what works best for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card-glass p-6 group hover:scale-105 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text mb-1">
                      {method.label}
                    </h3>
                    <p className="text-primary font-medium mb-1">
                      {method.value}
                    </p>
                    <p className="text-sm text-muted">
                      {method.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="card-glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text mb-4">
              Response Time
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2-4h</div>
                <div className="text-muted">Email Response</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Instant</div>
                <div className="text-muted">WhatsApp</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-muted">Project Quote</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
