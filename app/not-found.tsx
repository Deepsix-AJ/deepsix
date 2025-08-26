import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg text-text flex items-center justify-center relative noise">
      <div className="text-center z-10">
        <div className="text-8xl md:text-9xl font-bold text-primary mb-4">404</div>
        <h1 className="text-h2 font-bold text-text mb-6">Page Not Found</h1>
        <p className="text-xl text-muted max-w-2xl mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track to exploring amazing projects and services.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/projects" className="btn-secondary">
            View Projects
          </Link>
        </div>
        
        <div className="text-muted">
          <p>Or explore these popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link href="/about" className="text-primary hover:text-primary/80 transition-colors">
              About
            </Link>
            <Link href="/skills" className="text-primary hover:text-primary/80 transition-colors">
              Skills
            </Link>
            <Link href="/services" className="text-primary hover:text-primary/80 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-primary hover:text-primary/80 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-1 h-1 bg-primary rounded-full" style={{left: '20%', top: '30%'}}></div>
        <div className="absolute w-1 h-1 bg-primary rounded-full" style={{left: '80%', top: '70%'}}></div>
        <div className="absolute w-1 h-1 bg-primary rounded-full" style={{left: '60%', top: '20%'}}></div>
        <div className="absolute w-1 h-1 bg-primary rounded-full" style={{left: '40%', top: '80%'}}></div>
      </div>
    </div>
  )
}

