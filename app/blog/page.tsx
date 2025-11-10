import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BlogSearch } from '@/components/blog-search'

export const metadata = {
  title: 'Blog | Portfolio',
  description: 'Insights on web development, performance, and design.'
}

export default function BlogPage() {
  const posts = [
    { id: 'p1', title: 'Boost Core Web Vitals in Next.js', summary: 'Practical steps to improve LCP, CLS, and INP.', tags: ['performance', 'nextjs'], date: '2025-01-05', image: '/blog/boost-core-web-vitals.svg' },
    { id: 'p2', title: 'Design Systems with Tailwind', summary: 'Scale your UI with tokens, components, and docs.', tags: ['design', 'tailwind'], date: '2025-02-12', image: '/blog/design-systems-tailwind.svg' },
    { id: 'p3', title: 'Type-Safe APIs with tRPC', summary: 'End-to-end type safety for modern apps.', tags: ['typescript', 'api'], date: '2025-03-01', image: '/blog/trpc-type-safe.svg' },
    { id: 'p4', title: 'SEO for Landing Pages', summary: 'Deliver organic traffic with technical SEO basics.', tags: ['seo', 'marketing'], date: '2025-04-22', image: '/blog/seo-landing-pages.svg' },
  ]

  return (
    <>
      <Header />
      <main className="py-16">
        <div className="container">
          <h1 className="mb-6 text-3xl font-bold tracking-tight">Blog</h1>
          <p className="mb-8 max-w-prose text-gray-600 dark:text-gray-300">
            Articles and notes about building modern, fast, accessible web experiences.
          </p>

          <BlogSearch posts={posts} />
        </div>
      </main>
      <Footer />
    </>
  )
}
