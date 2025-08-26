import { ContactFormCritical } from '@/components/sections/contact-form-critical'
import { DirectContacts } from '@/components/sections/direct-contacts'

export const metadata = {
  title: 'Contact - DEEPSIX DEV',
  description: 'Get in touch with Deepsix Dev to discuss your next project. Contact via email, phone, or WhatsApp.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactFormCritical />
      <DirectContacts />
    </div>
  )
}
