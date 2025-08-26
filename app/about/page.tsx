import { BioSplit } from '@/components/sections/bio-split'
import { Timeline } from '@/components/sections/timeline'

export const metadata = {
  title: 'About - DEEPSIX DEV',
  description: 'Learn more about Deepsix Dev, a senior full-stack developer and system designer with 10+ years of experience.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <BioSplit />
      <Timeline />
    </div>
  )
}
