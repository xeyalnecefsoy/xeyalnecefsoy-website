"use client"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ShoppingCart, CreditCard, Package, Globe, Shield } from 'lucide-react'
import Link from 'next/link'
import type { Route } from 'next'
import { useParams } from 'next/navigation'
import { href, type Locale } from '@/lib/routes'

export default function EcommercePage() {
  const params = useParams<{ locale?: Locale }>()
  const locale: Locale = (params?.locale as Locale) || 'az'
  const features = [
    { title: 'Product Catalog', desc: 'Clean browsing and search with filters and variants.', icon: Package },
    { title: 'Checkout & Payments', desc: 'Secure and optimized checkout integrations.', icon: CreditCard },
    { title: 'Internationalization', desc: 'Multi-language and currency-ready experiences.', icon: Globe },
    { title: 'Security & Compliance', desc: 'Best practices for payments, privacy, and data.', icon: Shield },
    { title: 'Conversion UX', desc: 'Reduce friction and improve average order value.', icon: ShoppingCart },
  ]

  return (
    <>
      <Header />
      <main className="flex-1 py-16">
        <div className="container">
          <h1 className="mb-4 text-3xl font-bold tracking-tight">E-commerce Websites</h1>
          <p className="mb-10 max-w-prose text-gray-600 dark:text-gray-300">
            Build a fast, reliable store with modern UX, secure payments, and a conversion-focused design.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, desc, icon: Icon }) => (
              <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <Icon className="mb-3 h-6 w-6 text-brand" />
                <h3 className="mb-1 font-semibold">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center">
            <Link href={(href(locale,'home') + '#contact') as Route} className="btn btn-primary">Request a proposal</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
