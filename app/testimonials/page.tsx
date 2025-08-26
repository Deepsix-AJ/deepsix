import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Testimonials - DEEPSIX DEV',
  description: 'Client testimonials and recommendations for Deepsix Dev, showcasing successful project deliveries and client satisfaction.',
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechStart Inc.',
      content: 'Deepsix Dev transformed our startup\'s vision into a production-ready application. The attention to detail and performance optimization exceeded our expectations. Our users love the smooth experience!',
      rating: 5,
      project: 'E-commerce Platform',
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Product Manager',
      company: 'DataFlow Analytics',
      content: 'Working with Deepsix was a game-changer for our data platform. The system architecture is rock-solid and scales beautifully. We\'ve seen a 300% improvement in processing speed.',
      rating: 5,
      project: 'Data Analytics Platform',
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Founder',
      company: 'Creative Studios',
      content: 'The 3D web experience Deepsix built for us is absolutely stunning. Our clients are amazed by the interactive product visualization. It\'s become our biggest competitive advantage.',
      rating: 5,
      project: '3D Product Showcase',
      image: '/api/placeholder/80/80'
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Engineering Director',
      company: 'Enterprise Solutions',
      content: 'Deepsix\'s expertise in cloud architecture helped us migrate our entire infrastructure to AWS. The process was smooth, and we\'re now saving 40% on infrastructure costs.',
      rating: 5,
      project: 'Cloud Migration',
      image: '/api/placeholder/80/80'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'CEO',
      company: 'InnovateCorp',
      content: 'From concept to launch, Deepsix delivered our mobile-first PWA on time and under budget. The performance is exceptional, and our mobile engagement has doubled.',
      rating: 5,
      project: 'Progressive Web App',
      image: '/api/placeholder/80/80'
    },
    {
      id: 6,
      name: 'Robert Kim',
      position: 'Technical Lead',
      company: 'StartupXYZ',
      content: 'Deepsix\'s technical consulting helped us make the right technology decisions. Their architecture review saved us months of development time and potential technical debt.',
      rating: 5,
      project: 'Technical Consulting',
      image: '/api/placeholder/80/80'
    }
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '100%', label: 'On-Time Delivery' }
  ]

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-h1 font-bold text-text mb-6">
            Client <span className="glow-text">Testimonials</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Real feedback from clients who have experienced the quality and professionalism of DEEPSIX DEV
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card-glass group hover:scale-105 transition-transform duration-300">
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-text mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              
              {/* Project */}
              <div className="text-sm text-primary font-medium mb-4">
                Project: {testimonial.project}
              </div>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-text">{testimonial.name}</div>
                  <div className="text-sm text-muted">{testimonial.position}</div>
                  <div className="text-sm text-primary">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="card-glass p-8 mb-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">⭐</span>
              ))}
            </div>
            <blockquote className="text-xl text-text mb-6 italic max-w-4xl mx-auto">
              "Deepsix Dev is not just a developer; they're a true partner in our success. Their technical expertise, attention to detail, and commitment to delivering exceptional results have made them an invaluable asset to our team. Every project we've worked on together has exceeded our expectations."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mr-4">
                <span className="text-primary font-bold text-2xl">J</span>
              </div>
              <div>
                <div className="font-semibold text-text text-lg">James Wilson</div>
                <div className="text-muted">VP of Engineering, GlobalTech Solutions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-h2 font-bold text-text mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-lg text-muted mb-8">
            Let's work together to create something amazing that your clients will love
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary text-lg px-8 py-4">
              Start Your Project
            </a>
            <a href="/projects" className="btn-secondary text-lg px-8 py-4">
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

