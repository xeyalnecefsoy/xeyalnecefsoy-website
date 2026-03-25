"use client"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useI18n } from '@/components/i18n'
import { useMemo } from 'react'
import { projects as staticProjects } from '@/app/../data/projects'
import Link from 'next/link'
import Image from 'next/image'
import type { Route } from 'next'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useParams } from 'next/navigation'
import { href, type Locale } from '@/lib/routes'
import clsx from 'clsx'
import { cardBaseClass, cardHoverClass } from '@/components/ui/card'

export default function ProjectsPage() {
  const { t, lang } = useI18n()
  const params = useParams<{ locale?: Locale }>()
  const locale: Locale = (params?.locale as Locale) || 'az'
  const items = useMemo(() => staticProjects, [])

  return (
    <div className="flex min-h-screen flex-col bg-black text-gray-100">
      <Header />
      <main className="flex-1 py-16 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 pointer-events-none bg-radial-brand bg-no-repeat bg-center opacity-15" />
        <div className="absolute inset-0 pointer-events-none bg-mesh-brand bg-no-repeat bg-cover opacity-10" />
        <div className="container relative z-10">
          <div className="mb-12 text-center">
             <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-gradient inline-block">
               {t.projects.title}
             </h1>
             <p className="max-w-2xl mx-auto text-white/60 text-lg">
               {t.projects.subtitle}
             </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {items.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={`${href(locale,'projects')}/${p.slug}` as Route}
                    className={clsx(
                      'group relative block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:ring-offset-0',
                      cardBaseClass,
                      cardHoverClass,
                      'p-7 rounded-2xl'
                    )}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02]">
                      {p.image ? (
                        <Image
                          src={p.image}
                          alt={p.title[lang] || p.title['en']}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-white/[0.02]" />
                      )}
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-4">
                      <div className="h-10 w-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 font-bold border border-brand-500/10">
                        {(p.title?.[lang] || p.title?.['en'] || '').charAt(0)}
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-white/55 transition-all duration-300 group-hover:text-brand-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    <h3 className="mt-4 text-xl font-bold leading-tight group-hover:text-brand-400 transition-colors">
                      {p.title[lang] || p.title['en']}
                    </h3>
                    <p className="mt-2 text-sm text-white/55 line-clamp-2 leading-relaxed">
                      {p.desc[lang] || p.desc['en']}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
