"use client"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BarChart4, Cpu, Database, ShieldCheck, Zap } from 'lucide-react'
import Link from 'next/link'
import type { Route } from 'next'
import { useParams } from 'next/navigation'
import { href, type Locale } from '@/lib/routes'

export default function SaasDashboardsPage() {
  const params = useParams<{ locale?: Locale }>()
  const locale: Locale = (params?.locale as Locale) || 'az'
  
  const features = [
    { title: 'Data Visualization', desc: 'Charts, tables, and KPIs that are clear and responsive.', icon: BarChart4 },
    { title: 'Realtime & Caching', desc: 'Optimized data fetching with caching and streaming.', icon: Zap },
    { title: 'Role-based Access', desc: 'Secure views and permissions for different user roles.', icon: ShieldCheck },
    { title: 'Scalable Stack', desc: 'Solid architecture with TypeScript and modern tooling.', icon: Cpu },
    { title: 'Persistent Storage', desc: 'Best practices for schema design and querying.', icon: Database },
  ]

  return (
    <>
      <Header />
      <main className="flex-1 py-16">
        <div className="container">
          <h1 className="mb-4 text-3xl font-bold tracking-tight">SaaS Dashboards</h1>
          <p className="mb-10 max-w-prose text-gray-600 dark:text-gray-300">
            Build performant dashboards that make complex data easy to understand and act upon.
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
