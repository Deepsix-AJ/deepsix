import { Metadata } from 'next'
import { TermsContent } from '@/components/pages/terms-content'

export const metadata: Metadata = {
  title: 'Terms of Service - DEEPSIX DEV',
  description: 'Terms of Service for DEEPSIX DEV - Read our terms and conditions for using our services.',
}

export default function TermsPage() {
  return <TermsContent />
}
