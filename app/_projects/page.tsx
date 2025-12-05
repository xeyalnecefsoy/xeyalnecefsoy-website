"use client"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useI18n } from '@/components/i18n'
import { useMemo, useState } from 'react'
import { projects } from '@/app/../data/projects'
import Link from 'next/link'
import type { Route } from 'next'

export default function ProjectsPage() {
  const { t, lang } = useI18n()
  const cats = t.projects.categories
  const filters = [
    { key: 'all', label: cats.all },
    { key: 'web', label: cats.web },
    { key: 'ecommerce', label: cats.ecommerce },
    { key: 'saas', label: cats.saas },
    { key: 'landing', label: cats.landing },
  ] as const

  const [active, setActive] = useState<typeof filters[number]['key']>('all')
  const items = useMemo(() => projects.filter(i => active === 'all' ? true : i.category === active), [active])

  return (
    <>
      <Header />
      <main className="flex-1 py-16">
        <div className="container">
          <h1 className="mb-6 text-3xl font-bold tracking-tight">{t.projects.title}</h1>
          <div className="mb-8 flex flex-wrap gap-2">
            {filters.map(f => (
              <button key={f.key} className={`rounded-md border px-3 py-1 text-sm ${active === f.key ? 'border-brand text-brand' : 'border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800'}`} onClick={() => setActive(f.key)}>
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {items.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}` as Route} className="group overflow-hidden rounded-lg border border-gray-200 bg-white p-3 transition hover:shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-3 aspect-[4/3] w-full rounded-md bg-gradient-to-tr from-brand/20 via-brand/5 to-transparent" />
                <div className="font-medium leading-tight">{p.title[lang]}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{p.desc[lang]}</div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
