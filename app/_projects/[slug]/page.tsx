"use client"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useI18n } from '@/components/i18n'
import { projects } from '@/app/../data/projects'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import clsx from 'clsx'
import { cardBaseClass } from '@/components/ui/card'
import { Mail } from 'lucide-react'

export default function ProjectDetail() {
  const { lang, t } = useI18n()
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find(p => p.slug === slug)
  if (!project) return notFound()

  return (
    <>
      <Header />
      <main className="flex-1 py-16 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 pointer-events-none bg-radial-brand bg-no-repeat bg-center opacity-15" />
        <div className="absolute inset-0 pointer-events-none bg-mesh-brand bg-no-repeat bg-cover opacity-10" />
        <div className="container relative z-10">
          <div className="grid gap-8 md:grid-cols-[1.7fr_0.6fr]">
            <div>
              <h1 className="mb-3 text-3xl font-bold tracking-tight text-white">
                {project.title[lang] || project.title.en}
              </h1>
              <p className="mb-8 max-w-prose text-white/60 leading-relaxed">
                {project.desc[lang] || project.desc.en}
              </p>

              <div className="mb-8 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="relative aspect-video w-full">
                  <Image
                    src={project.image ?? 'https://images.unsplash.com/photo-1519389950473-47ba0277781c'}
                    alt={project.title[lang] || project.title.en}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <h2 className="text-xl font-semibold text-white mb-2">Case study</h2>
                <p className="text-white/60 leading-relaxed">
                  Bu layihə üzrə geniş case study məzmunu (məqsədlər, yanaşma, nəticələr) tezliklə əlavə ediləcək.
                  Eyni tip problemə fokuslanan layihə istəyirsinizsə, aşağıdakı CTA-dan mənə yazın.
                </p>
              </div>
            </div>

            <aside className="space-y-4">
              <div className={clsx(cardBaseClass, 'p-5')}>
                <div className="flex items-center gap-2 mb-4">
                  <Mail className="h-5 w-5 text-brand-400" />
                  <div className="font-semibold text-white">{t.common.ctaCreate}</div>
                </div>

                <a
                  href="mailto:contact@xeyalnecefsoy.com?subject=Project%20Inquiry"
                  className="btn btn-primary w-full text-sm"
                >
                  Send email
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
