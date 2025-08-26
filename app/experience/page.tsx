import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience - DEEPSIX DEV',
  description: 'Professional experience and career journey of Deepsix Dev, showcasing expertise in full-stack development and system design.',
}

export default function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full-Stack Engineer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Leading development of enterprise-scale applications, mentoring junior developers, and architecting scalable solutions.',
      achievements: [
        'Led a team of 8 developers in building a microservices-based e-commerce platform',
        'Improved application performance by 40% through optimization and caching strategies',
        'Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes',
        'Mentored 5 junior developers and conducted technical interviews'
      ],
      technologies: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'InnovateWeb Studios',
      period: '2020 - 2022',
      description: 'Developed custom web applications for clients across various industries, focusing on user experience and performance.',
      achievements: [
        'Built 15+ client websites with 99.9% uptime and excellent performance scores',
        'Developed a real-time collaboration tool used by 10,000+ users',
        'Implemented responsive design principles ensuring cross-device compatibility',
        'Reduced page load times by 60% through optimization techniques'
      ],
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Vercel']
    },
    {
      id: 3,
      title: 'Backend Developer',
      company: 'DataFlow Systems',
      period: '2018 - 2020',
      description: 'Specialized in backend development, API design, and database optimization for data-intensive applications.',
      achievements: [
        'Designed and implemented RESTful APIs serving 1M+ requests daily',
        'Optimized database queries reducing response time by 70%',
        'Built a data processing pipeline handling 100GB+ of data daily',
        'Implemented comprehensive testing with 95% code coverage'
      ],
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Docker']
    },
    {
      id: 4,
      title: 'Frontend Developer',
      company: 'Creative Digital Agency',
      period: '2016 - 2018',
      description: 'Focused on creating engaging user interfaces and interactive web experiences for creative projects.',
      achievements: [
        'Developed 20+ interactive websites with modern animations and effects',
        'Created a 3D product visualization tool using Three.js',
        'Implemented PWA features improving mobile user engagement by 80%',
        'Collaborated with designers to create pixel-perfect implementations'
      ],
      technologies: ['React', 'Three.js', 'WebGL', 'CSS3', 'JavaScript', 'PWA']
    }
  ]

  const education = [
    {
      id: 1,
      degree: 'Master of Computer Science',
      school: 'Tech University',
      period: '2014 - 2016',
      description: 'Specialized in Software Engineering and Distributed Systems'
    },
    {
      id: 2,
      degree: 'Bachelor of Computer Science',
      school: 'State University',
      period: '2010 - 2014',
      description: 'Major in Computer Science with minor in Mathematics'
    }
  ]

  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023'
    },
    {
      id: 2,
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      year: '2022'
    },
    {
      id: 3,
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      year: '2021'
    }
  ]

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-h1 font-bold text-text mb-6">
            Professional <span className="glow-text">Experience</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            A decade of experience building innovative solutions and leading technical teams
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-20">
          <h2 className="text-h2 font-bold text-text mb-12 text-center">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="card-glass relative">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-1/3">
                    <div className="text-sm text-primary font-medium mb-2">{exp.period}</div>
                    <h3 className="text-xl font-bold text-text mb-2">{exp.title}</h3>
                    <div className="text-lg text-primary mb-3">{exp.company}</div>
                    <p className="text-muted text-sm">{exp.description}</p>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <h4 className="font-semibold text-text mb-3">Key Achievements:</h4>
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm text-text">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="text-h2 font-bold text-text mb-8 text-center">Education</h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id} className="card-glass">
                  <div className="text-sm text-primary font-medium mb-2">{edu.period}</div>
                  <h3 className="text-lg font-bold text-text mb-2">{edu.degree}</h3>
                  <div className="text-primary mb-2">{edu.school}</div>
                  <p className="text-muted text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-h2 font-bold text-text mb-8 text-center">Certifications</h2>
            <div className="space-y-6">
              {certifications.map((cert) => (
                <div key={cert.id} className="card-glass">
                  <div className="text-sm text-primary font-medium mb-2">{cert.year}</div>
                  <h3 className="text-lg font-bold text-text mb-2">{cert.name}</h3>
                  <div className="text-primary text-sm">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className="text-h2 font-bold text-text mb-6">Ready to Work Together?</h2>
          <p className="text-lg text-muted mb-8">
            Let's discuss how my experience can benefit your next project
          </p>
          <a href="/contact" className="btn-primary text-lg px-8 py-4">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}

