import { Metadata } from 'next'
import { PrivacyContent } from '@/components/pages/privacy-content'

export const metadata: Metadata = {
  title: 'Privacy Policy - DEEPSIX DEV',
  description: 'Privacy Policy for DEEPSIX DEV - Learn how we protect and handle your personal information.',
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
