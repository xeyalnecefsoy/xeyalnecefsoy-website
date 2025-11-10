import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Scale, Briefcase, FileText, Shield, Users } from 'lucide-react'
import Link from 'next/link'
import type { Route } from 'next'
import { ImageCarousel } from '@/components/image-carousel'

export const metadata = {
  title: 'Law Business Websites | Services',
  description: 'High-converting, trustworthy websites tailored for law firms and legal practitioners.'
}

export default function LawBusinessPage() {
  const features = [
    { title: 'Practice Areas', desc: 'Clearly present your services: corporate, criminal, family, IP, and more.', icon: Scale },
    { title: 'Attorney Profiles', desc: 'Build trust with bios, credentials, awards, and bar admissions.', icon: Briefcase },
    { title: 'Case Studies', desc: 'Show outcomes and testimonials while respecting confidentiality.', icon: FileText },
    { title: 'Compliance & Privacy', desc: 'Best practices for disclaimers, cookies, and data handling.', icon: Shield },
    { title: 'Lead Capture', desc: 'Optimized contact flows to convert visitors into consultations.', icon: Users },
  ]
  const slides = [
    { src: '/blog/design-systems-tailwind.svg', alt: 'Clean design system for law firm websites' },
    { src: '/blog/seo-landing-pages.svg', alt: 'SEO-friendly landing pages for legal services' },
    { src: '/blog/boost-core-web-vitals.svg', alt: 'Fast performance and Core Web Vitals' },
    { src: '/blog/trpc-type-safe.svg', alt: 'Reliable, type-safe development foundation' },
  ]

  return (
    <>
      <Header />
      <main className="flex-1 py-16">
        <div className="container">
          <h1 className="mb-4 text-3xl font-bold tracking-tight">Law Business Websites</h1>
          <p className="mb-10 max-w-prose text-gray-600 dark:text-gray-300">
            Win client trust with a professional, fast, and compliant website tailored to legal services. I design and build experiences that communicate credibility and drive consultations.
          </p>

          <div className="mb-10">
            <ImageCarousel slides={slides} interval={5000} />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <Icon className="mb-3 h-6 w-6 text-brand" />
                <h3 className="mb-1 font-semibold">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-2 text-lg font-semibold">What you get</h2>
              <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-300">
                <li>Custom design aligned with your brand</li>
                <li>Clear information architecture for practice areas</li>
                <li>Attorney profile templates</li>
                <li>Consultation booking and lead capture</li>
                <li>Performance, SEO, and accessibility best practices</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-2 text-lg font-semibold">Timeline & Process</h2>
              <ol className="list-inside list-decimal text-sm text-gray-600 dark:text-gray-300">
                <li>Discovery call and scope</li>
                <li>Wireframes and design system</li>
                <li>Development and content integration</li>
                <li>QA, legal review, and launch</li>
              </ol>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center">
            <Link href={'/#contact' as Route} className="btn btn-primary">Request a proposal</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
