import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Rocket, Megaphone, TrendingUp, MousePointerClick, Search } from 'lucide-react'
import Link from 'next/link'
import type { Route } from 'next'

export const metadata = {
  title: 'Landing Pages | Services',
  description: 'High-converting landing pages focused on clarity and results.'
}

export default function LandingPagesPage() {
  const features = [
    { title: 'Clear Value Props', desc: 'Concise messaging and visual hierarchy that convert.', icon: Megaphone },
    { title: 'Conversion UX', desc: 'Optimized CTAs, forms, and lead capture flows.', icon: MousePointerClick },
    { title: 'Performance & SEO', desc: 'Fast loads and technical SEO for organic reach.', icon: Search },
    { title: 'A/B Ready', desc: 'Modular sections to test headlines and offers.', icon: TrendingUp },
    { title: 'Quick Launch', desc: 'Ship fast with a modern stack and solid patterns.', icon: Rocket },
  ]

  return (
    <>
      <Header />
      <main className="flex-1 py-16">
        <div className="container">
          <h1 className="mb-4 text-3xl font-bold tracking-tight">Landing Pages</h1>
          <p className="mb-10 max-w-prose text-gray-600 dark:text-gray-300">
            Launch effective landing pages that communicate value, build trust, and drive action.
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
            <Link href={'/#contact' as Route} className="btn btn-primary">Request a proposal</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
