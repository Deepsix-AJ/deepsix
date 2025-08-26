'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { ExternalLink, ArrowRight, X, Globe } from 'lucide-react'

const projects = [
  {
    title: 'Servant of Hope',
    slug: 'servant-of-hope',
    media: '/media/projects/servant-of-hope.jpg',
    badges: ['Donations', 'CMS', 'SEO'],
    website: 'https://servantofhope.org',
    description: 'Charity platform with integrated donations and modern CMS.',
  },
  {
    title: 'Campus Mart',
    slug: 'campus-mart',
    media: '/media/projects/campus-mart.jpg',
    badges: ['Marketplace', 'Auth', 'Responsive'],
    website: 'https://campusmart.deepsixx.com',
    description: 'Marketplace application for students with scalable backend.',
  },
]

export function ProjectsTeaser() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const openProjectPreview = (project: typeof projects[0]) => {
    setSelectedProject(project)
  }

  const closeProjectPreview = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <section className="py-20 bg-surface/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-h2 font-bold text-text mb-6">Featured Projects</h2>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              A showcase of production-grade applications I've built and shipped.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                className="card-glass group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                onClick={() => openProjectPreview(project)}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl opacity-50">🚀</div>
                  {/* Website Link Indicator */}
                  <div className="absolute top-3 right-3 bg-primary/20 backdrop-blur-sm rounded-full p-2">
                    <Globe className="w-4 h-4 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-muted mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      openProjectPreview(project)
                    }}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 group/link"
                  >
                    Preview Website
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </button>
                  
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center text-muted hover:text-primary transition-colors duration-200"
                  >
                    Visit Site
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/projects"
              className="btn-primary group inline-flex items-center"
            >
              View All Projects
              <ExternalLink className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Project Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectPreview}
          >
            <motion.div
              className="fixed inset-4 sm:inset-8 lg:inset-16 bg-surface border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-surface/50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-text">{selectedProject.title}</h3>
                    <p className="text-sm text-muted">{selectedProject.website}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <a
                    href={selectedProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm px-3 py-2"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Site
                  </a>
                  <button
                    onClick={closeProjectPreview}
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-muted hover:text-text transition-all duration-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Iframe Container */}
              <div className="flex-1 relative bg-white">
                <iframe
                  src={selectedProject.website}
                  className="w-full h-full border-0"
                  title={`${selectedProject.title} Preview`}
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                />
                
                {/* Loading State */}
                <div className="absolute inset-0 bg-surface/80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-muted">Loading {selectedProject.title}...</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
