import { Hero3D } from '@/components/sections/hero-3d'
import { MetricsStrip } from '@/components/sections/metrics-strip'
import { AboutPreview } from '@/components/sections/about-preview'
import { ProjectsTeaser } from '@/components/sections/projects-teaser'
import { SkillsWheel3D } from '@/components/sections/skills-wheel-3d'
import { CTABannerGlass } from '@/components/sections/cta-banner-glass'

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section with 3D Background */}
      <Hero3D />
      
      {/* Metrics Strip */}
      <MetricsStrip />
      
      {/* About Preview */}
      <AboutPreview />
      
      {/* Projects Teaser */}
      <ProjectsTeaser />
      
      {/* Skills Wheel 3D */}
      <SkillsWheel3D />
      
      {/* CTA Banner */}
      <CTABannerGlass />
    </div>
  )
}
