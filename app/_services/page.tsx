"use client"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Code, Layout, TrendingUp, ShoppingCart, Scale, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import type { Route } from 'next'
import { useI18n } from '@/components/i18n'
import { useParams } from 'next/navigation'
import { href, type Locale } from '@/lib/routes'

export default function ServicesPage() {
  const { t } = useI18n()
  const params = useParams<{ locale?: Locale }>()
  const locale: Locale = (params?.locale as Locale) || 'az'
  const cards = t.services.cards
  
  const services = [
    { 
      title: cards.ecommerce.title, 
      desc: cards.ecommerce.desc, 
      icon: ShoppingCart, 
      href: href(locale, 'services') + '/ecommerce' as Route,
      gradient: 'from-blue-500/10 to-cyan-500/10'
    },
    { 
      title: cards.saas.title, 
      desc: cards.saas.desc, 
      icon: Code, 
      href: href(locale, 'services') + '/saas-dashboards' as Route,
      gradient: 'from-purple-500/10 to-pink-500/10'
    },
    { 
      title: cards.landing.title, 
      desc: cards.landing.desc, 
      icon: Rocket, 
      href: href(locale, 'services') + '/landing-pages' as Route,
      gradient: 'from-orange-500/10 to-red-500/10'
    },
    { 
      title: cards.law.title, 
      desc: cards.law.desc, 
      icon: Scale, 
      href: href(locale, 'services') + '/law-business' as Route,
      gradient: 'from-green-500/10 to-emerald-500/10'
    },
    { 
      title: cards.webDesign.title, 
      desc: cards.webDesign.desc, 
      icon: Layout, 
      href: href(locale, 'services') as Route,
      gradient: 'from-indigo-500/10 to-blue-500/10'
    },
    { 
      title: cards.devOpt.title, 
      desc: cards.devOpt.desc, 
      icon: TrendingUp, 
      href: href(locale, 'services') as Route,
      gradient: 'from-yellow-500/10 to-orange-500/10'
    },
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="border-b border-gray-200 bg-gradient-to-b from-brand/5 via-brand/[0.02] to-transparent py-20 dark:border-gray-800">
          <div className="container text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{t.services.title}</h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">{t.services.description}</p>
            <Link 
              href={(href(locale,'home') + '#contact') as Route} 
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand to-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              {t.services.startProject}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container">
            <h2 className="mb-3 text-center text-2xl font-semibold tracking-tight md:text-3xl">What I Offer</h2>
            <p className="mb-12 text-center text-gray-600 dark:text-gray-400">
              Specialized services tailored to your business needs
            </p>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ title, desc, icon: Icon, href, gradient }) => (
                <Link 
                  key={title} 
                  href={href} 
                  className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br ${gradient} p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-brand/50 hover:-translate-y-2 dark:border-gray-800`}
                >
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex rounded-xl bg-white p-3 shadow-md dark:bg-gray-900">
                      <Icon className="h-6 w-6 text-brand" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{desc}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-brand">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                  <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-brand/5 transition-transform duration-500 group-hover:scale-150" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="border-y border-gray-200 bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-900/50">
          <div className="container">
            <h2 className="mb-3 text-center text-2xl font-semibold tracking-tight md:text-3xl">How It Works</h2>
            <p className="mb-12 text-center text-gray-600 dark:text-gray-400">
              Simple, transparent process from idea to launch
            </p>
            
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { step: '1', title: t.services.discover, text: t.services.discoverText }, 
                { step: '2', title: t.services.designBuild, text: t.services.designBuildText }, 
                { step: '3', title: t.services.launchOptimize, text: t.services.launchOptimizeText }
              ].map(({ step, title, text }, index) => (
                <div key={step} className="relative">
                  <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand to-blue-600 text-lg font-bold text-white shadow-lg">
                        {step}
                      </div>
                      <h3 className="text-xl font-bold">{title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{text}</p>
                  </div>
                  {index < 2 && (
                    <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 md:block">
                      <ArrowRight className="h-6 w-6 text-brand" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight md:text-3xl">Why Work With Me</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Fast turnaround times',
                  'Modern tech stack',
                  'SEO optimized',
                  'Responsive design',
                  'Clean, maintainable code',
                  'Ongoing support'
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-brand" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing CTA */}
        <section className="border-t border-gray-200 bg-gradient-to-b from-transparent via-brand/[0.02] to-transparent py-16 dark:border-gray-800">
          <div className="container">
            <div className="mx-auto max-w-3xl rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/5 to-transparent p-8 text-center shadow-lg dark:border-brand/20 md:p-12">
              <h2 className="mb-3 text-2xl font-bold md:text-3xl">{t.services.pricing.title}</h2>
              <p className="mb-6 text-gray-600 dark:text-gray-300">{t.services.pricing.subtitle}</p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link 
                  href={href(locale,'prices') as Route} 
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand to-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
                >
                  {t.common.viewPrices}
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link 
                  href={(href(locale,'home') + '#contact') as Route} 
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-brand bg-transparent px-6 py-3 font-semibold text-brand transition-all hover:bg-brand hover:text-white"
                >
                  {t.services.startProject}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
