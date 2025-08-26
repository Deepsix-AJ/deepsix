'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, MessageCircle } from 'lucide-react'

export function ContactFormCritical() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      budget: '',
      timeline: '',
      message: '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-h1 font-bold text-text mb-6">
            Let's build your next big thing.
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            I reply fast. Your idea stays confidential.
          </p>
        </motion.div>

        <motion.div
          className="card-glass p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="name"
                type="text"
                placeholder="Your Name *"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-text placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200"
              />
              
              <input
                name="email"
                type="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-text placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200"
              />
            </div>

            <input
              name="company"
              type="text"
              placeholder="Company (Optional)"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-text placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200"
              >
                <option value="">Select Budget *</option>
                <option value="< 1k">Less than $1,000</option>
                <option value="1k–5k">$1,000 - $5,000</option>
                <option value="5k–20k">$5,000 - $20,000</option>
                <option value="> 20k">More than $20,000</option>
              </select>

              <select
                name="timeline"
                required
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-text focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200"
              >
                <option value="">Select Timeline *</option>
                <option value="< 2 weeks">Less than 2 weeks</option>
                <option value="2–6 weeks">2-6 weeks</option>
                <option value="6–12 weeks">6-12 weeks</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>

            <textarea
              name="message"
              rows={6}
              placeholder="Project Brief *"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-text placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200 resize-none"
            />

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary flex-1 justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                    Send Message
                  </>
                )}
              </button>

              <a
                href="https://wa.me/256754925439"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 justify-center group"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                WhatsApp
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
