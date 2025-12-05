"use client"

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BlogSearch } from '@/components/blog-search'
import { posts } from '@/app/../data/blog'
import { useI18n } from '@/components/i18n'
import { useParams } from 'next/navigation'
import { routeMap } from '@/lib/routes'

export default function BlogPage() {
  const { lang } = useI18n()
  const params = useParams<{ locale?: string }>()
  const loc = (params?.locale as 'az' | 'en') || 'az'
  const locale = `/${loc}`
  const localized = posts.map(p => ({ id: p.slug, title: p.title[lang], summary: p.summary[lang], tags: p.tags, date: p.date, image: p.image }))

  return (
    <>
      <Header />
      <main className="py-16">
        <div className="container">
          <h1 className="mb-6 text-3xl font-bold tracking-tight">Blog</h1>
          <p className="mb-8 max-w-prose text-gray-600 dark:text-gray-300">
            Articles and notes about building modern, fast, accessible web experiences.
          </p>

          <BlogSearch posts={localized} pathPrefix={`${locale}/${routeMap[loc].blog}`} />
        </div>
      </main>
      <Footer />
    </>
  )
}
