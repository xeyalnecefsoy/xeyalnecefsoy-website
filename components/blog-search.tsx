"use client"

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Post = {
  id: string
  title: string
  summary: string
  tags: string[]
  date: string // ISO
  image?: string
}

export function BlogSearch({ posts }: { posts: Post[] }) {
  const allTags = useMemo(() => {
    const set = new Set<string>()
    posts.forEach((p) => p.tags.forEach((t) => set.add(t)))
    return Array.from(set).sort()
  }, [posts])

  const [q, setQ] = useState('')
  const [selected, setSelected] = useState<string | null>(null)
  const [sort, setSort] = useState<'newest' | 'oldest'>('newest')

  const filtered = useMemo(() => {
    const text = q.trim().toLowerCase()
    let out = posts.filter((p) => {
      const textMatch = !text || p.title.toLowerCase().includes(text) || p.summary.toLowerCase().includes(text)
      const tagMatch = !selected || p.tags.includes(selected)
      return textMatch && tagMatch
    })
    out.sort((a, b) => (sort === 'newest' ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)))
    return out
  }, [posts, q, selected, sort])

  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search posts..."
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-brand dark:border-gray-700 dark:bg-gray-900 md:max-w-sm"
        />
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={selected ?? ''}
            onChange={(e) => setSelected(e.target.value || null)}
            className="rounded-md border border-gray-300 bg-white px-2 py-2 text-sm outline-none focus:border-brand dark:border-gray-700 dark:bg-gray-900"
            aria-label="Filter by tag"
          >
            <option value="">All tags</option>
            {allTags.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as 'newest' | 'oldest')}
            className="rounded-md border border-gray-300 bg-white px-2 py-2 text-sm outline-none focus:border-brand dark:border-gray-700 dark:bg-gray-900"
            aria-label="Sort posts"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {filtered.map((p) => (
          <article key={p.id} className="rounded-xl border border-gray-200 bg-white p-5 transition hover:shadow-sm dark:border-gray-800 dark:bg-gray-900">
            {p.image && (
              <div className="mb-3 overflow-hidden rounded-md">
                <div className="relative aspect-video w-full">
                  <Image src={p.image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
              </div>
            )}
            <div className="text-xs text-gray-500">{new Date(p.date).toLocaleDateString()}</div>
            <h2 className="mt-1 text-lg font-semibold">{p.title}</h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{p.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelected((s) => (s === t ? null : t))}
                  className={`rounded-full border px-2 py-1 text-xs ${selected === t ? 'border-brand text-brand' : 'border-gray-300 text-gray-600 dark:border-gray-700 dark:text-gray-300'}`}
                >
                  #{t}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <Link href="#" className="text-sm text-brand hover:underline">Read more</Link>
            </div>
          </article>
        ))}
        {filtered.length === 0 && (
          <div className="rounded-md border border-gray-200 p-6 text-sm text-gray-600 dark:border-gray-800 dark:text-gray-300">
            No posts found.
          </div>
        )}
      </div>
    </div>
  )
}
