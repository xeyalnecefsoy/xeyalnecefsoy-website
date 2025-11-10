import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Code, Layout, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import type { Route } from 'next'

export const metadata = {
  title: 'Services | Portfolio',
  description: 'Services: Web Design, Development, and Optimization.'
}

export default function ServicesPage() {
  const services = [
    { title: 'E-commerce', desc: 'High-performance storefronts with secure checkout.', icon: Layout, href: '/services/ecommerce' as Route },
    { title: 'SaaS Dashboards', desc: 'Data-rich, fast dashboards for your product.', icon: Code, href: '/services/saas-dashboards' as Route },
    { title: 'Landing Pages', desc: 'Conversion-focused pages that drive results.', icon: TrendingUp, href: '/services/landing-pages' as Route },
    { title: 'Law Business', desc: 'Specialized websites for legal practices to win client trust.', icon: TrendingUp, href: '/services/law-business' as Route },
    { title: 'Web Design', desc: 'Clean, modern UI with a focus on usability.', icon: Layout, href: '/services' as Route },
    { title: 'Development & Optimization', desc: 'Best practices with Next.js, TypeScript, SEO.', icon: Code, href: '/services' as Route },
  ]

  return (
    <>
      <Header />
      <main className="flex-1 py-16">
        <div className="container">
          <h1 className="mb-4 text-3xl font-bold tracking-tight">Services</h1>
          <p className="mb-10 max-w-prose text-gray-600 dark:text-gray-300">
            I help businesses ship fast, beautiful, and effective web products. From idea to launch: design, development, and optimization.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, desc, icon: Icon, href }) => (
              <Link key={title} href={href} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                <Icon className="mb-3 h-6 w-6 text-brand" />
                <h3 className="mb-1 font-semibold">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[{ step: '1', title: 'Discover', text: 'Understand goals, users, and scope via a quick workshop.' }, { step: '2', title: 'Design & Build', text: 'Design system + implementation with Next.js, TS, Tailwind.' }, { step: '3', title: 'Launch & Optimize', text: 'Ship, measure, and iterate for performance and SEO.' }].map(({ step, title, text }) => (
              <div key={step} className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">{step}</div>
                <div className="font-semibold">{title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{text}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center">
            <Link href={'/#contact' as Route} className="btn btn-primary">Start your project</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
