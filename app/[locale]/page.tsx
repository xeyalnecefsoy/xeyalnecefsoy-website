"use client"

import { Header } from '@/components/header'
import Link from 'next/link'
import { Hero } from '@/components/hero'
import { Carousel } from '@/components/carousel'
import type { Route } from 'next'
import Image from 'next/image'
import { Code, Cpu, Database, Gauge, Layout, Rocket, Server, TestTube2, TrendingUp } from 'lucide-react'
import { Footer } from '@/components/footer'
import { useI18n } from '@/components/i18n'
import { projects } from '@/data/projects'
import { posts } from '@/data/blog'
import { useParams } from 'next/navigation'
import { href, type Locale } from '@/lib/routes'

export default function HomePage() {
  const { t, lang } = useI18n()
  const params = useParams<{ locale?: Locale }>()
  const locale: Locale = (params?.locale as Locale) || 'az'
  // pick a few projects and posts for the homepage
  const homeProjects = projects.slice(0, 3)
  const homePosts = posts.slice(0, 3)
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        {/* Hero Section */}
        <Hero />

        {/* About Me */}
        <section id="about" className="py-16">
          <div className="container container-prose">
            <h2 className="mb-4">{t.home.aboutTitle}</h2>
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <p className="max-w-prose text-gray-600 dark:text-gray-300">{t.home.aboutDesc}</p>
              <div className="justify-self-center">
                <Image src="/profile.svg" alt="Khayal Najafsoy" width={160} height={160} className="h-32 w-32 rounded-full border border-gray-200 dark:border-gray-800 md:h-40 md:w-40" />
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-y border-gray-200 py-16 dark:border-gray-800">
          <div className="container">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">{t.home.skills}</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[
                { label: 'Next.js', icon: Rocket },
                { label: 'TypeScript', icon: Code },
                { label: 'React', icon: Layout },
                { label: 'Tailwind CSS', icon: Layout },
                { label: 'Node.js', icon: Server },
                { label: 'REST & GraphQL', icon: Database },
                { label: 'Prisma & Databases', icon: Database },
                { label: 'Testing (Jest, RTL)', icon: TestTube2 },
                { label: 'Performance & SEO', icon: Gauge },
              ].map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 text-sm dark:border-gray-800 dark:bg-gray-900">
                  <Icon className="h-5 w-5 text-brand" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16">
          <div className="container">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">{t.home.services}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: 'Web Design', desc: 'Clean, modern UI with a focus on usability.', icon: Layout },
                { title: 'Development', desc: 'Next.js, TypeScript, Tailwind CSS best practices.', icon: Code },
                { title: 'Optimization', desc: 'SEO, performance, and accessibility improvements.', icon: TrendingUp },
              ].map(({ title, desc, icon: Icon }) => (
                <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                  <Icon className="mb-3 h-6 w-6 text-brand" />
                  <h3 className="mb-1 font-semibold">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Boost Your Business */}
        <section id="boost" className="border-y border-gray-200 py-16 dark:border-gray-800 bg-gradient-to-b from-transparent via-brand/[0.02] to-transparent">
          <div className="container">
            <h2 className="mb-3 text-center text-2xl font-semibold tracking-tight md:text-3xl">{t.home.boost}</h2>
            <p className="mb-12 text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Brendinizi önə çıxaran və ziyarətçiləri müştəriyə çevirən həllər
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { 
                  title: 'Convert More', 
                  desc: 'High-converting landing pages tailored to your audience.',
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                  gradient: 'from-blue-500/10 to-cyan-500/10'
                },
                { 
                  title: 'Faster Websites', 
                  desc: 'Performance-focused builds for better UX and SEO.',
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  gradient: 'from-purple-500/10 to-pink-500/10'
                },
                { 
                  title: 'Stronger Brand', 
                  desc: 'Clean design systems and consistent visual language.',
                  icon: (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  ),
                  gradient: 'from-orange-500/10 to-red-500/10'
                },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br ${item.gradient} p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-brand/50 hover:-translate-y-2 dark:border-gray-800`}
                >
                  <div className="relative z-10">
                    <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-brand shadow-md dark:bg-gray-900">
                      {item.icon}
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                  <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-brand/5 transition-transform duration-500 group-hover:scale-150" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16">
          <div className="container">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">{t.home.projects}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {homeProjects.map((p) => (
                <Link key={p.slug} href={`${href(locale,'projects')}/${p.slug}` as Route} className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-brand/50 hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-brand/50">
                  <div className="overflow-hidden">
                    <div className="relative aspect-video w-full bg-gradient-to-br from-brand/5 to-transparent">
                      <Image src={p.image ?? 'https://images.unsplash.com/photo-1519389950473-47ba0277781c'} alt={p.title[lang]} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width:768px) 100vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-lg font-semibold leading-tight group-hover:text-brand transition-colors">{p.title[lang]}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{p.desc[lang]}</p>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="rounded-full bg-brand/10 p-2 backdrop-blur-sm">
                      <svg className="h-4 w-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href={href(locale,'projects') as Route} className="group inline-flex items-center gap-2 rounded-lg border-2 border-brand/20 bg-brand/5 px-5 py-2.5 text-sm font-semibold text-brand transition-all hover:border-brand hover:bg-brand hover:text-white hover:shadow-lg hover:shadow-brand/20">
                {t.home.viewAll}
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Blog teaser */}
        <section id="blog" className="border-y border-gray-200 py-16 dark:border-gray-800">
          <div className="container">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{t.home.blog}</h2>
              <Link href={href(locale,'blog') as Route} className="group inline-flex items-center gap-2 rounded-lg border-2 border-brand/20 bg-brand/5 px-5 py-2.5 text-sm font-semibold text-brand transition-all hover:border-brand hover:bg-brand hover:text-white hover:shadow-lg hover:shadow-brand/20">
                {t.home.viewAll}
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {homePosts.map((p) => (
                <Link key={p.slug} href={`${href(locale,'blog')}/${p.slug}` as Route} className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-brand/50 hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-brand/50">
                  <div className="overflow-hidden">
                    <div className="relative aspect-video w-full bg-gradient-to-br from-brand/5 to-transparent">
                      <Image src={p.image ?? 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'} alt={p.title[lang]} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width:768px) 100vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-lg font-semibold leading-tight group-hover:text-brand transition-colors">{p.title[lang]}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{p.summary[lang]}</p>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="rounded-full bg-brand/10 p-2 backdrop-blur-sm">
                      <svg className="h-4 w-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 bg-gradient-to-b from-transparent via-brand/[0.02] to-transparent">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-2xl font-semibold tracking-tight md:text-3xl">{t.home.contact}</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Layihəniz haqqında danışaq və onu birlikdə həyata keçirək
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-brand/50 dark:border-gray-800 dark:bg-gray-900">
                  <div className="mb-3 inline-flex rounded-lg bg-brand/10 p-3 text-brand">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-semibold">Email</h3>
                  <a href="mailto:you@domain.com" className="text-sm text-gray-600 hover:text-brand dark:text-gray-400 dark:hover:text-brand transition-colors">
                    you@domain.com
                  </a>
                </div>

                <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-brand/50 dark:border-gray-800 dark:bg-gray-900">
                  <div className="mb-3 inline-flex rounded-lg bg-brand/10 p-3 text-brand">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-semibold">Location</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Your City, Country
                  </p>
                </div>

                <div className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-brand/50 dark:border-gray-800 dark:bg-gray-900">
                  <div className="mb-3 inline-flex rounded-lg bg-brand/10 p-3 text-brand">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-semibold">Socials</h3>
                  <div className="flex gap-3">
                    <Link href="#" className="text-sm text-brand hover:underline">LinkedIn</Link>
                    <span className="text-gray-300 dark:text-gray-700">·</span>
                    <Link href="#" className="text-sm text-brand hover:underline">GitHub</Link>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <form className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium" htmlFor="name">{t.home.form.name}</label>
                      <input 
                        id="name" 
                        placeholder={t.home.form.namePh} 
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20 dark:border-gray-700 dark:bg-gray-900" 
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium" htmlFor="email">{t.home.form.email}</label>
                      <input 
                        id="email" 
                        type="email" 
                        placeholder={t.home.form.emailPh} 
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20 dark:border-gray-700 dark:bg-gray-900" 
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="mb-2 block text-sm font-medium" htmlFor="message">{t.home.form.message}</label>
                    <textarea 
                      id="message" 
                      rows={6} 
                      placeholder={t.home.form.messagePh} 
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20 dark:border-gray-700 dark:bg-gray-900" 
                    />
                  </div>
                  <div className="mt-6">
                    <button type="button" className="w-full rounded-lg bg-brand px-6 py-3 font-semibold text-white transition-all hover:bg-brand/90 hover:shadow-lg sm:w-auto">
                      {t.home.form.send}
                    </button>
                    <p className="mt-3 text-xs text-gray-500">{t.home.form.note}</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
