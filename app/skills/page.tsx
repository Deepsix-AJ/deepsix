import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills - DEEPSIX DEV',
  description: 'Explore the technical skills and expertise of Deepsix Dev in full-stack development, system design, and cloud technologies.',
}

export default function SkillsPage() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-h1 font-bold text-text mb-6">
            Technical <span className="glow-text">Expertise</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, frameworks, and technologies
          </p>
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Frontend */}
          <div className="card-glass">
            <h3 className="text-h3 font-bold text-primary mb-4">Frontend</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-text">React/Next.js</span>
                <div className="w-24 bg-surface rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text">TypeScript</span>
                <div className="w-24 bg-surface rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text">Tailwind CSS</span>
                <div className="w-24 bg-surface rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '88%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="card-glass">
            <h3 className="text-h3 font-bold text-primary mb-4">Backend</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-text">Python</span>
                <div className="w-24 bg-surface rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '92%'}}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text">Node.js</span>
                <div className="w-24 bg-surface rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text">SQL/NoSQL</span>
                <div className="w-24 bg-surface rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="card-glass">
            <h3 className="text-h3 font-bold text-primary mb-4">Cloud & DevOps</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-text">AWS</span>
                <div className="w-24 bg-surface rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '88%'}}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text">Docker</span>
                <div className="w-24 bg-surface rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text">CI/CD</span>
                <div className="w-24 bg-surface rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{width: '82%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="text-center">
          <h2 className="text-h2 font-bold text-text mb-8">Additional Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['3D Web Development', 'System Design', 'API Design', 'Performance Optimization', 'Security', 'Testing', 'Agile', 'Leadership'].map((skill) => (
              <div key={skill} className="glass rounded-lg p-4 text-center">
                <span className="text-text font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
