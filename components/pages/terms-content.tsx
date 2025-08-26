'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

export function TermsContent() {
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
            <FileText className="w-8 h-8 text-primary" />
            <h1 className="text-h2 font-bold">Terms of Service</h1>
          </div>
          
          <p className="text-xl text-muted max-w-3xl">
            These terms govern your use of our services. Please read them carefully before proceeding.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Acceptance */}
          <div className="card-glass p-6 sm:p-8">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-text">Acceptance of Terms</h2>
            </div>
            <div className="space-y-4 text-muted">
              <p>
                By accessing and using our website and services, you accept and agree to be bound by these Terms of Service.
              </p>
              <p>
                If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="card-glass p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-text mb-4">Our Services</h2>
            <div className="space-y-4 text-muted">
              <p>
                DEEPSIX DEV provides full-stack development, system design, and consulting services including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Web application development</li>
                <li>Mobile app development</li>
                <li>System architecture design</li>
                <li>Cloud infrastructure setup</li>
                <li>Technical consulting</li>
                <li>Code review and optimization</li>
              </ul>
            </div>
          </div>

          {/* User Responsibilities */}
          <div className="card-glass p-6 sm:p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-text">User Responsibilities</h2>
            </div>
            <div className="space-y-4 text-muted">
              <p>When using our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Use our services for lawful purposes only</li>
                <li>Respect intellectual property rights</li>
                <li>Not interfere with the proper functioning of our services</li>
                <li>Maintain the confidentiality of your account</li>
              </ul>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="card-glass p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-text mb-4">Intellectual Property</h2>
            <div className="space-y-4 text-muted">
              <p>
                All content on this website, including text, graphics, logos, and software, is the property of DEEPSIX DEV and is protected by copyright laws.
              </p>
              <p>
                Custom code and applications developed for clients remain the client's property upon full payment, unless otherwise specified in the project agreement.
              </p>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="card-glass p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-text mb-4">Payment Terms</h2>
            <div className="space-y-4 text-muted">
              <p>
                Payment terms are specified in individual project agreements. Generally:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Projects require a deposit before work begins</li>
                <li>Final payment is due upon project completion</li>
                <li>Late payments may incur additional fees</li>
                <li>All fees are non-refundable unless otherwise specified</li>
              </ul>
            </div>
          </div>

          {/* Project Delivery */}
          <div className="card-glass p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-text mb-4">Project Delivery</h2>
            <div className="space-y-4 text-muted">
              <p>
                We strive to deliver projects on time and within budget. However:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Project timelines are estimates and may vary</li>
                <li>Client feedback delays may extend project duration</li>
                <li>Scope changes may affect timeline and cost</li>
                <li>We'll communicate any delays promptly</li>
              </ul>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="card-glass p-6 sm:p-8">
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-text">Limitation of Liability</h2>
            </div>
            <div className="space-y-4 text-muted">
              <p>
                DEEPSIX DEV shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services.
              </p>
              <p>
                Our total liability shall not exceed the amount paid by you for the specific service in question.
              </p>
            </div>
          </div>

          {/* Termination */}
          <div className="card-glass p-6 sm:p-8">
            <div className="flex items-center space-x-3 mb-4">
              <XCircle className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-text">Termination</h2>
            </div>
            <div className="space-y-4 text-muted">
              <p>
                Either party may terminate a service agreement with written notice. Upon termination:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Client is responsible for payment of work completed</li>
                <li>We'll deliver all completed work and source code</li>
                <li>Confidentiality obligations remain in effect</li>
              </ul>
            </div>
          </div>

          {/* Governing Law */}
          <div className="card-glass p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-text mb-4">Governing Law</h2>
            <div className="space-y-4 text-muted">
              <p>
                These terms are governed by the laws of Uganda. Any disputes shall be resolved through negotiation, mediation, or arbitration as specified in the project agreement.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="card-glass p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-text mb-4">Contact Information</h2>
            <div className="space-y-4 text-muted">
              <p>
                If you have questions about these Terms of Service, please contact us:
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
            <h2 className="text-2xl font-bold text-text mb-4">Updates to Terms</h2>
            <div className="space-y-4 text-muted">
              <p>
                We may update these Terms of Service from time to time. We will notify you of any material changes by posting the new terms on this page.
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
