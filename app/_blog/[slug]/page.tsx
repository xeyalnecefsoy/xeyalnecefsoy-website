"use client"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { posts } from '@/app/../data/blog'
import { useI18n } from '@/components/i18n'
import { notFound } from 'next/navigation'
import { useParams } from 'next/navigation'
import Image from 'next/image'

export default function BlogDetail() {
  const { lang } = useI18n()
  const { slug } = useParams<{ slug: string }>()
  const post = posts.find(p => p.slug === slug)
  if (!post) return notFound()

  return (
    <>
      <Header />
      <main className="py-16">
        <div className="container">
          <article className="prose prose-sm dark:prose-invert max-w-none">
            <h1>{post.title[lang]}</h1>
            <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
            <div className="my-4 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="relative aspect-video w-full">
                <Image src={post.image ?? 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'} alt="" fill className="object-contain bg-[linear-gradient(to_tr,rgba(59,130,246,0.1),transparent)]" sizes="100vw" />
              </div>
            </div>
            <p>{post.summary[lang]}</p>
            <p>
              This is placeholder blog content. Replace with your actual article body, headings, images, and code samples.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
