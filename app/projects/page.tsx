import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - DEEPSIX DEV',
  description: 'Explore the portfolio of projects built by Deepsix Dev, showcasing full-stack applications, system designs, and innovative solutions.',
}

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      image: '/api/placeholder/400/300',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Real-time Chat Application',
      description: 'WebSocket-based chat application with real-time messaging, file sharing, and user presence indicators.',
      technologies: ['Next.js', 'Socket.io', 'MongoDB', 'Redis', 'Docker'],
      image: '/api/placeholder/400/300',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Machine learning dashboard for business intelligence with data visualization and predictive analytics.',
      technologies: ['Python', 'React', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
      image: '/api/placeholder/400/300',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: '3D Web Experience',
      description: 'Immersive 3D web application built with Three.js and WebGL for interactive product visualization.',
      technologies: ['Three.js', 'WebGL', 'React', 'TypeScript', 'Webpack'],
      image: '/api/placeholder/400/300',
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Cloud Infrastructure Manager',
      description: 'Multi-cloud management platform for deploying and monitoring applications across AWS, Azure, and GCP.',
      technologies: ['Python', 'Terraform', 'Kubernetes', 'AWS', 'Azure'],
      image: '/api/placeholder/400/300',
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Mobile-First PWA',
      description: 'Progressive web application with offline capabilities, push notifications, and native app-like experience.',
      technologies: ['Next.js', 'PWA', 'Service Workers', 'IndexedDB', 'Workbox'],
      image: '/api/placeholder/400/300',
      link: '#',
      github: '#'
    }
  ]

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-h1 font-bold text-text mb-6">
            Featured <span className="glow-text">Projects</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            A showcase of my best work, demonstrating expertise in full-stack development, system design, and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card-glass group hover:scale-105 transition-transform duration-300">
              <div className="aspect-video bg-surface rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-muted text-sm">Project Preview</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a 
                  href={project.link} 
                  className="btn-primary text-sm px-4 py-2"
                >
                  Live Demo
                </a>
                <a 
                  href={project.github} 
                  className="btn-secondary text-sm px-4 py-2"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-h2 font-bold text-text mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-lg text-muted mb-8">
            Let's collaborate on your next project and bring your vision to life
          </p>
          <a href="/contact" className="btn-primary text-lg px-8 py-4">
            Start a Project
          </a>
        </div>
      </div>
    </div>
  )
}

