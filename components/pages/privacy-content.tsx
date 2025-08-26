'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Eye, Database } from 'lucide-react'

export function PrivacyContent() {
  return (
    <div className="min-h-screen bg-bg text-text relative noise">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #00E0FF 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #7C3AED 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-muted hover:text-primary transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-h2 font-bold">Privacy Policy</h1>
          </div>
          
          <p className="text-xl text-muted max-w-3xl">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Information Collection */}
          <div className="card-glass p-6 sm:p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Database className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-text">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-muted">
              <p>
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contact us through our website forms</li>
                <li>Subscribe to our newsletter</li>
                <li>Request a quote or proposal</li>
                <li>Apply for a position</li>
              </ul>
              <p>
                This may include your name, email address, phone number, company information, and project details.
              </p>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="card-glass p-6 sm:p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-text">How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-muted">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you requested information about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Send you marketing communications (with your consent)</li>
              </ul>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="card-glass p-6 sm:p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Lock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-text">Information Sharing</h2>
            </div>
            <div className="space-y-4 text-muted">
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To trusted service providers who assist us in operating our website</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="card-glass p-6 sm:p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-text">Data Security</h2>
            </div>
            <div className="space-y-4 text-muted">
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>
                However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="card-glass p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-text mb-4">Cookies and Tracking</h2>
            <div className="space-y-4 text-muted">
              <p>
                We use cookies and similar technologies to enhance your experience on our website, analyze usage patterns, and provide personalized content.
              </p>
              <p>
                You can control cookie settings through your browser preferences, though disabling cookies may affect website functionality.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="card-glass p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-text mb-4">Your Rights</h2>
            <div className="space-y-4 text-muted">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Lodge a complaint with supervisory authorities</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="card-glass p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-text mb-4">Contact Us</h2>
            <div className="space-y-4 text-muted">
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> info@deepsixx.com</p>
                <p><strong>Phone:</strong> +256777653639</p>
                <p><strong>Address:</strong> Uganda</p>
              </div>
            </div>
          </div>

          {/* Updates */}
          <div className="card-glass p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-text mb-4">Updates to This Policy</h2>
            <div className="space-y-4 text-muted">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>
              <p className="text-sm">
                <strong>Last Updated:</strong> January 2024
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/"
            className="btn-primary inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
