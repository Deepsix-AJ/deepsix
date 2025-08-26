'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    label: 'Backend',
    skills: ['Python', 'Node.js', 'Django', 'FastAPI', 'Express'],
    color: '#00E0FF',
  },
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind', 'Framer Motion', 'Three.js'],
    color: '#7C3AED',
  },
  {
    label: 'Cloud & DB',
    skills: ['AWS', 'Vercel', 'Postgres', 'Redis', 'Neon'],
    color: '#00FF87',
  },
]

export function SkillsWheel3D() {
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
          <h2 className="text-h2 font-bold text-text mb-6">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            A comprehensive skill set built over 10+ years of shipping production software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.label}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div
                className="card-glass p-6 sm:p-8 text-center relative overflow-hidden"
                style={{
                  '--category-color': category.color,
                } as React.CSSProperties}
              >
                {/* Background Glow */}
                <div
                  className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${category.color} 0%, transparent 70%)`,
                  }}
                />
                
                <h3
                  className="text-2xl font-bold mb-6 relative z-10"
                  style={{ color: category.color }}
                >
                  {category.label}
                </h3>
                
                <div className="space-y-3 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="text-muted hover:text-text transition-colors duration-200 cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 + skillIndex * 0.1 }}
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

        {/* Additional Skills */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="inline-flex flex-wrap justify-center gap-3 max-w-4xl">
            {['TypeScript', 'Zod', 'Zustand', 'tRPC', 'Playwright', 'Jest', 'Vitest', 'OpenAPI'].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-muted hover:text-primary hover:border-primary/50 transition-all duration-200 cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
