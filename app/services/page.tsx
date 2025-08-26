import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - DEEPSIX DEV',
  description: 'Professional services offered by Deepsix Dev including full-stack development, system design, cloud solutions, and technical consulting.',
}

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development from concept to deployment, including frontend, backend, and database design.',
      features: [
        'Custom web applications',
        'API development & integration',
        'Database design & optimization',
        'Performance optimization',
        'Security implementation'
      ],
      icon: '💻',
      price: 'From $5,000'
    },
    {
      id: 2,
      title: 'System Architecture',
      description: 'Design and implementation of scalable, robust system architectures for complex business requirements.',
      features: [
        'System design & planning',
        'Scalability architecture',
        'Microservices design',
        'Performance optimization',
        'Technical documentation'
      ],
      icon: '🏗️',
      price: 'From $3,000'
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure setup, migration, and optimization using AWS, Azure, and Google Cloud Platform.',
      features: [
        'Cloud migration',
        'Infrastructure as Code',
        'DevOps automation',
        'Monitoring & alerting',
        'Cost optimization'
      ],
      icon: '☁️',
      price: 'From $4,000'
    },
    {
      id: 4,
      title: '3D Web Development',
      description: 'Immersive 3D web experiences using Three.js, WebGL, and modern web technologies.',
      features: [
        '3D visualization',
        'Interactive experiences',
        'Performance optimization',
        'Cross-platform compatibility',
        'Custom 3D assets'
      ],
      icon: '🎨',
      price: 'From $6,000'
    },
    {
      id: 5,
      title: 'Technical Consulting',
      description: 'Expert technical guidance for technology decisions, architecture reviews, and development strategy.',
      features: [
        'Technology assessment',
        'Architecture reviews',
        'Performance audits',
        'Security assessments',
        'Team training'
      ],
      icon: '🔍',
      price: '$150/hour'
    },
    {
      id: 6,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support for existing applications and systems.',
      features: [
        'Bug fixes & updates',
        'Security patches',
        'Performance monitoring',
        '24/7 support',
        'Regular maintenance'
      ],
      icon: '🛠️',
      price: 'From $500/month'
    }
  ]

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-h1 font-bold text-text mb-6">
            Professional <span className="glow-text">Services</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs, delivered with expertise and precision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className="card-glass group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-text">
                    <span className="text-primary mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <div className="text-lg font-bold text-primary mb-3">{service.price}</div>
                <a href="/contact" className="btn-primary w-full">
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-h2 font-bold text-text mb-6">Why Choose DEEPSIX DEV?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-bold text-text mb-2">Fast Delivery</h3>
              <p className="text-muted">Quick turnaround times without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-bold text-text mb-2">Quality Assured</h3>
              <p className="text-muted">Rigorous testing and quality assurance processes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-lg font-bold text-text mb-2">24/7 Support</h3>
              <p className="text-muted">Round-the-clock support and maintenance</p>
            </div>
          </div>
          
          <a href="/contact" className="btn-primary text-lg px-8 py-4">
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  )
}

