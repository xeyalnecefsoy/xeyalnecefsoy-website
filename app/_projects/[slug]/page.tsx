"use client"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useI18n } from '@/components/i18n'
import { projects } from '@/app/../data/projects'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { useParams } from 'next/navigation'

export default function ProjectDetail() {
  const { lang, t } = useI18n()
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find(p => p.slug === slug)
  if (!project) return notFound()

  return (
    <>
      <Header />
      <main className="flex-1 py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-[1.7fr_0.6fr]">
            <div>
              <h1 className="mb-3 text-3xl font-bold tracking-tight">{project.title[lang]}</h1>
              <p className="mb-6 max-w-prose text-gray-600 dark:text-gray-300">{project.desc[lang]}</p>
              <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
                <div className="relative aspect-video w-full">
                  <Image src={project.image ?? 'https://images.unsplash.com/photo-1519389950473-47ba0277781c'} alt="" fill className="object-cover" sizes="100vw" />
                </div>
              </div>
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <p>
                  This is a sample project detail page. Replace this content with real case study text, images, and outcomes.
                </p>
                <ul>
                  <li>Goals and constraints</li>
                  <li>Design approach and system</li>
                  <li>Technical stack and decisions</li>
                  <li>Results and metrics</li>
                </ul>
              </div>
            </div>
            <aside className="space-y-4 rounded-xl border border-gray-200 p-5 text-sm dark:border-gray-800">
              <div>
                <div className="font-semibold">Category</div>
                <div className="text-gray-600 dark:text-gray-300">{project.category}</div>
              </div>
              <div>
                <a href="/#contact" className="btn btn-primary text-sm">{t.common.ctaCreate}</a>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
