"use client"

import { Header } from '@/components/header'
import Link from 'next/link'
import { Hero } from '@/components/hero'
import type { Route } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { Footer } from '@/components/footer'
import { useI18n } from '@/components/i18n'
import { projects } from '@/data/projects'
import { useParams } from 'next/navigation'
import { href, type Locale } from '@/lib/routes'
import { motion, type Variants } from 'framer-motion'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18
    }
  }
}

export default function HomePage() {
  const { t, lang } = useI18n()
  const params = useParams<{ locale?: Locale }>()
  const locale: Locale = (params?.locale as Locale) || 'az'

  return (
    <div className="flex min-h-screen flex-col bg-black text-gray-100">
      <Header />

      <main className="flex-1">
        <Hero />

        {/* About / Vision Section */}
        <section id="about" className="py-28 relative overflow-hidden">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/[0.03] rounded-full blur-[180px] pointer-events-none" />
           
           <div className="container relative">
             <div className="max-w-3xl mx-auto text-center">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ type: "spring", stiffness: 100, damping: 20 }}
               >
                 <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-8 text-white">
                   {t.home.aboutTitle}
                 </h2>
                 <p className="text-lg text-gray-400 leading-relaxed mb-14 max-w-2xl mx-auto">
                   {t.home.aboutDesc}
                 </p>
               </motion.div>
                 
               <motion.div 
                 variants={containerVariants}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto"
               >
                  {[
                    { l: t.home.stats.frontend, v: t.home.stats.frontendDesc },
                    { l: t.home.stats.backend, v: t.home.stats.backendDesc },
                    { l: t.home.stats.design, v: t.home.stats.designDesc },
                    { l: t.home.stats.strategy, v: t.home.stats.strategyDesc }
                  ].map((item) => (
                    <motion.div 
                      key={item.l} 
                      variants={itemVariants}
                      className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-5 transition-colors duration-300 hover:border-brand-500/20 hover:bg-brand-500/[0.03]"
                    >
                      <div className="text-xs text-brand-400 font-semibold tracking-wider uppercase mb-1">{item.l}</div>
                      <div className="font-medium text-gray-200">{item.v}</div>
                    </motion.div>
                  ))}
               </motion.div>
             </div>
           </div>
        </section>

        {/* Divider line */}
        <div className="container"><div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" /></div>

        {/* Projects Section */}
        <section id="projects" className="py-28 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/[0.015] to-transparent pointer-events-none" />
          
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4 text-white">{t.home.projects}</h2>
              <p className="text-gray-500 max-w-lg mx-auto">{t.projects.subtitle}</p>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto"
            >
              {projects.map((p) => (
                <motion.div key={p.slug} variants={itemVariants}>
                  <a 
                    href={p.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex flex-col h-full rounded-2xl border border-white/[0.04] bg-white/[0.015] p-7 transition-all duration-500 hover:border-brand-500/30 hover:bg-brand-500/[0.04] hover:shadow-2xl hover:shadow-brand-500/[0.05]"
                  >
                    {/* Project Header */}
                    <div className="mb-5 flex items-center justify-between">
                      <div className="h-11 w-11 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 font-bold text-lg border border-brand-500/10">
                        {p.title[lang].charAt(0)}
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-gray-700 transition-all duration-300 group-hover:text-brand-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2.5 text-white group-hover:text-brand-400 transition-colors duration-300">
                      {p.title[lang]}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
                      {p.desc[lang]}
                    </p>
                    
                    {p.url && (
                      <div className="mt-5 pt-4 border-t border-white/[0.04]">
                        <span className="text-xs font-mono text-gray-600 group-hover:text-brand-500/60 transition-colors duration-300">
                          {p.url.replace('https://', '')}
                        </span>
                      </div>
                    )}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
