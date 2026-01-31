"use client"

import { Header } from '@/components/header'
import Link from 'next/link'
import { Hero } from '@/components/hero'
import type { Route } from 'next'
import Image from 'next/image'
import { Code, Cpu, Database, Gauge, Layout, Rocket, Server, TestTube2, TrendingUp, Globe, Smartphone, Palette, ArrowRight } from 'lucide-react'
import { Footer } from '@/components/footer'
import { useI18n } from '@/components/i18n'
import { projects } from '@/data/projects'
import { posts } from '@/data/blog'
import { useParams } from 'next/navigation'
import { href, type Locale } from '@/lib/routes'
import { motion, type Variants } from 'framer-motion'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

export default function HomePage() {
  const { t, lang } = useI18n()
  const params = useParams<{ locale?: Locale }>()
  const locale: Locale = (params?.locale as Locale) || 'az'
  
  const homeProjects = projects.slice(0, 3)
  const homePosts = posts.slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#020617] text-gray-900 dark:text-gray-100 selection:bg-brand-500/20 selection:text-brand-500">
      <Header />

      <main className="flex-1">
        <Hero />

        {/* Tech Stack Marquee / Grid */}
        <section className="border-y border-gray-100 py-12 dark:border-gray-800/50 bg-gray-50/50 dark:bg-gray-900/20">
          <div className="container overflow-hidden">
            <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              {t.home.skills}
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-70 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0">
               {[
                 { label: 'Next.js', icon: Rocket },
                 { label: 'React', icon: Layout },
                 { label: 'TypeScript', icon: Code },
                 { label: 'Tailwind', icon: Palette },
                 { label: 'Node.js', icon: Server },
                 { label: 'Database', icon: Database },
               ].map(({ label, icon: Icon }, i) => (
                 <div key={i} className="flex items-center gap-2 group">
                   <Icon className="h-6 w-6 text-brand-600 transition-transform group-hover:scale-110" />
                   <span className="text-lg font-medium">{label}</span>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 relative overflow-hidden">
           <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
           
           <div className="container">
             <div className="flex flex-col lg:flex-row gap-12 items-center justify-center max-w-5xl mx-auto">
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="relative shrink-0"
               >
                 <div className="relative aspect-square w-64 lg:w-96 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800 shadow-2xl border-4 border-white dark:border-gray-800">
                    <Image 
                      src="/profile.svg" 
                      alt="Khayal Najafsoy" 
                      fill 
                      className="object-cover"
                    />
                 </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="flex-1 text-center lg:text-left"
               >
                 <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                   {t.home.aboutTitle}
                 </h2>
                 <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                   {t.home.aboutDesc}
                 </p>
                 
                 <div className="grid sm:grid-cols-2 gap-6 mb-8 text-left">
                    {[
                      { l: t.home.stats.frontend, v: t.home.stats.frontendDesc },
                      { l: t.home.stats.backend, v: t.home.stats.backendDesc },
                      { l: t.home.stats.design, v: t.home.stats.designDesc },
                      { l: t.home.stats.strategy, v: t.home.stats.strategyDesc }
                    ].map((item) => (
                      <div key={item.l} className="border-l-2 border-brand-500 pl-4">
                        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{item.l}</div>
                        <div className="font-semibold">{item.v}</div>
                      </div>
                    ))}
                 </div>

                 <div className="flex justify-center lg:justify-start">
                   <Link href={href(locale, 'about') as Route} className="btn btn-outline gap-2">
                     {t.home.moreAboutMe} <ArrowRight className="h-4 w-4" />
                   </Link>
                 </div>
               </motion.div>
             </div>
           </div>
        </section>

        {/* Services - Glass Cards */}
        <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900/40 relative">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">{t.home.services}</h2>
              <p className="text-gray-600 dark:text-gray-400">{t.home.servicesDesc}</p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-3"
            >
              {[
                { title: t.home.serviceItems.webDev, desc: t.home.serviceItems.webDevDesc, icon: Globe },
                { title: t.home.serviceItems.mobileApps, desc: t.home.serviceItems.mobileAppsDesc, icon: Smartphone },
                { title: t.home.serviceItems.uiUx, desc: t.home.serviceItems.uiUxDesc, icon: Palette },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  className="group relative p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="mb-6 inline-flex p-3 rounded-lg bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                  <Link href={href(locale, 'services') as Route} className="text-sm font-semibold text-brand-600 dark:text-brand-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t.home.serviceItems.learnMore} <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="py-24">
          <div className="container">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.home.projects}</h2>
              <Link href={href(locale, 'projects') as Route} className="hidden sm:flex btn btn-ghost gap-2">
                {t.home.viewAll} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {homeProjects.map((p, i) => (
                <Link key={p.slug} href={`${href(locale,'projects')}/${p.slug}` as Route} className="group flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 mb-4 border border-gray-200 dark:border-gray-800">
                    <Image 
                      src={p.image ?? `https://source.unsplash.com/random/800x600?tech&sig=${i}`} // Better placeholder or real image
                      alt={p.title[lang]} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {p.title[lang]}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 line-clamp-2 text-sm">
                    {p.desc[lang]}
                  </p>
                </Link>
              ))}
            </div>
            
            <div className="mt-8 text-center sm:hidden">
              <Link href={href(locale, 'projects') as Route} className="btn btn-outline w-full">
                {t.home.viewAll}
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section - Clean & Centered */}
        <section id="contact" className="py-24 bg-brand-600 relative overflow-hidden text-white">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
           <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-900/50 to-transparent" />
           
           <div className="container relative z-10 text-center">
             <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">{t.home.contact}</h2>
             <p className="text-brand-100 text-lg max-w-2xl mx-auto mb-10">
               {t.home.contactDesc}
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="mailto:contact@xeyalnecefsoy.com" className="btn bg-white text-brand-600 hover:bg-gray-100 border-none shadow-xl">
                 {t.home.form.email}
               </Link>
               <Link href={href(locale, 'contact') as Route} className="btn bg-brand-700 text-white hover:bg-brand-800 border border-brand-500">
                 {t.home.contact}
               </Link>
             </div>
           </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
