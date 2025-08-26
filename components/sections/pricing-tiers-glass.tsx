'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, Star } from 'lucide-react'

const pricingTiers = [
  {
    name: 'Prototype',
    price: 'Contact',
    description: 'Perfect for MVPs and concept validation',
    features: ['UX/UI Design', 'Landing Page', 'Basic Animations', 'Responsive Design', 'SEO Setup'],
    popular: false,
    color: 'from-primary to-primary/80',
  },
  {
    name: 'Product',
    price: 'Contact',
    description: 'Full-featured applications ready for production',
    features: ['Full-Stack Development', 'Authentication System', 'Payment Integration', 'Advanced Animations', 'Database Design', 'API Development'],
    popular: true,
    color: 'from-secondary to-accent',
  },
  {
    name: 'Enterprise',
    price: 'Contact',
    description: 'Scalable solutions for growing businesses',
    features: ['High-Scale Architecture', 'Performance Optimization', 'CI/CD Pipeline', 'Monitoring & Analytics', 'Security Audits', 'SLA Support'],
    popular: false,
    color: 'from-accent to-primary',
  },
]

export function PricingTiersGlass() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-h1 font-bold text-text mb-6">
            Choose Your Project Type
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Flexible solutions tailored to your needs. All projects include consultation, planning, and ongoing support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative ${tier.popular ? 'md:-mt-4' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-secondary to-accent text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`card-glass p-8 h-full relative overflow-hidden ${tier.popular ? 'border-2 border-secondary/50' : ''}`}>
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-5 rounded-xl`} />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-text mb-2">
                    {tier.name}
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">
                      {tier.price}
                    </span>
                  </div>
                  
                  <p className="text-muted mb-6">
                    {tier.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full btn-primary group">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="card-glass p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-text mb-6">
              What's Included in Every Project
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-muted">Project Planning & Consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-muted">Regular Updates & Communication</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-muted">Testing & Quality Assurance</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-muted">Deployment & Hosting Setup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-muted">Documentation & Training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-muted">30 Days Post-Launch Support</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
