"use client"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useI18n } from '@/components/i18n'
import { useMemo, useState, useEffect } from 'react'
import { projects as staticProjects } from '@/app/../data/projects'
import { getProjects, type Project } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'
import type { Route } from 'next'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Filter, Loader2 } from 'lucide-react'
import { useParams } from 'next/navigation'
import { href, type Locale } from '@/lib/routes'

export default function ProjectsPage() {
  const { t, lang } = useI18n()
  const params = useParams<{ locale?: Locale }>()
  const locale: Locale = (params?.locale as Locale) || 'az'

  const [dbProjects, setDbProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      const data = await getProjects()
      if (data.length > 0) {
        setDbProjects(data)
      }
      setLoading(false)
    }
    fetch()
  }, [])

  const allProjects = useMemo(() => {
    // Combine static and db projects, preferring DB if slug matches (optional logic)
    // For now, just appending DB projects to static ones or replacing them. 
    // If you want pure Appwrite, you can ignore staticProjects when dbProjects has data.
    return [...(dbProjects.length > 0 ? [] : staticProjects), ...dbProjects]
  }, [dbProjects])

  const cats = t.projects.categories
  const filters = [
    { key: 'all', label: cats.all },
    { key: 'web', label: cats.web },
    { key: 'ecommerce', label: cats.ecommerce },
    { key: 'saas', label: cats.saas },
    { key: 'landing', label: cats.landing },
  ] as const

  const [active, setActive] = useState<typeof filters[number]['key']>('all')
  const items = useMemo(() => allProjects.filter(i => active === 'all' ? true : i.category === active), [active, allProjects])

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#020617] text-gray-900 dark:text-gray-100">
      <Header />
      <main className="flex-1 py-16">
        <div className="container">
          <div className="mb-12 text-center">
             <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-gradient inline-block">
               {t.projects.title}
             </h1>
             <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
               {t.projects.subtitle}
             </p>
          </div>

          {/* Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/50 px-3 py-1.5 text-sm text-gray-500 backdrop-blur dark:border-gray-800 dark:bg-gray-900/50">
               <Filter className="h-3.5 w-3.5" />
               <span className="text-xs uppercase font-bold tracking-wider">{t.projects.filter}</span>
            </div>
            {filters.map(f => (
              <button 
                key={f.key} 
                className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all ${active === f.key ? 'text-brand-600 dark:text-brand-400' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'}`} 
                onClick={() => setActive(f.key)}
              >
                {active === f.key && (
                  <motion.div 
                    layoutId="pill" 
                    className="absolute inset-0 rounded-full bg-brand-50 dark:bg-brand-900/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            ))}
          </div>
          
          {loading && allProjects.length === 0 ? (
             <div className="flex justify-center py-20">
               <Loader2 className="h-8 w-8 animate-spin text-brand-500" />
             </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                    <Link href={`${href(locale,'projects')}/${p.slug}` as Route} className="group relative block h-full overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800/60 transition-all hover:border-brand-500/50 hover:shadow-2xl">
                      <div className="relative aspect-[16/10] overflow-hidden border-b border-gray-100 dark:border-gray-800">
                        {p.image ? (
                          <Image
                            src={p.image}
                            alt={p.title[lang] || p.title['en']}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                              <span className="text-gray-400 dark:text-gray-600 font-mono text-xs">{t.projects.noPreview}</span>
                          </div>
                        )}
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black">
                              {t.projects.viewCaseStudy} <ArrowUpRight className="h-4 w-4" />
                            </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="mb-2 flex items-center justify-between">
                           <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">{p.category}</span>
                        </div>
                        <h3 className="mb-2 text-xl font-bold leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                          {p.title[lang] || p.title['en']}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                          {p.desc[lang] || p.desc['en']}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
