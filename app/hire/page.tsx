import { PricingTiersGlass } from '@/components/sections/pricing-tiers-glass'
import { CTAButtons } from '@/components/sections/cta-buttons'

export const metadata = {
  title: 'Hire Me - DEEPSIX DEV',
  description: 'Hire Deepsix Dev for your next project. Full-stack development, system design, and cloud solutions.',
}

export default function HirePage() {
  return (
    <div className="pt-20">
      <PricingTiersGlass />
      <CTAButtons />
    </div>
  )
}
