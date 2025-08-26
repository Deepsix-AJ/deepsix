'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const timelineItems = [
  {
    year: 'Early',
    title: 'Started Programming at 15',
    detail: 'Built tools and automation scripts.',
    icon: '🚀',
  },
  {
    year: 'University',
    title: 'Kabale University',
    detail: 'BSc Computer Science.',
    icon: '🎓',
  },
  {
    year: 'Now',
    title: 'Senior Full‑Stack',
    detail: 'Design • Backend • Frontend • Cloud.',
    icon: '⚡',
  },
]

export function Timeline() {
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
            My Journey
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            From a curious teenager to a senior developer building the future.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="card-glass p-6 relative">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <div className="text-sm text-primary font-semibold mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-text mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted">
                      {item.detail}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-bg relative z-10" />

                {/* Year Label */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
                  <div className="text-4xl font-bold text-muted/30">
                    {item.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="card-glass p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-text mb-4">
              Ready to build something amazing?
            </h3>
            <p className="text-muted mb-6">
              Let's discuss your project and turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/256754925439"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                Start a Conversation
              </a>
              <a
                href="mailto:info@deepsixx.com"
                className="btn-secondary group"
              >
                Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
