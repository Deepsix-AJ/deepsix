'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    title: 'Backend',
    items: ['Python', 'Django', 'FastAPI', 'Node.js', 'Express', 'REST', 'GraphQL'],
    color: '#00E0FF',
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind', 'Framer Motion', 'R3F / three.js'],
    color: '#7C3AED',
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'Vercel', 'Render', 'Docker', 'CI/CD'],
    color: '#00FF87',
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis'],
    color: '#00E0FF',
  },
  {
    title: 'System Design',
    items: ['Microservices', 'Event‑Driven', 'Caching', 'Queues', 'Observability'],
    color: '#7C3AED',
  },
]

export function SkillCategories() {
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
            Technical Expertise
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            A comprehensive skill set built over 10+ years of shipping production software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="card-glass p-8 relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Background Glow */}
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${category.color} 0%, transparent 70%)`,
                }}
              />
              
              <div className="relative z-10">
                <h3
                  className="text-2xl font-bold mb-6 text-center"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="text-muted hover:text-text transition-colors duration-200 cursor-pointer text-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
                
                {/* Hover Effect */}
                <div
                  className="absolute inset-0 border-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ borderColor: category.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
