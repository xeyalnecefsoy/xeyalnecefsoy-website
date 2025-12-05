"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { Route } from 'next'
import Image from 'next/image'
import { Plus, Edit, Trash2, Calendar, Image as ImageIcon } from 'lucide-react'

type BlogPost = {
  slug: string
  title: { en: string; az: string }
  summary: { en: string; az: string }
  tags: string[]
  date: string
  image?: string
}

export default function BlogListPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/admin/blog')
      const data = await res.json()
      setPosts(data)
    } catch (error) {
      console.error('Failed to fetch posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return

    try {
      const res = await fetch(`/api/admin/blog/${slug}`, { method: 'DELETE' })
      if (res.ok) {
        fetchPosts()
      }
    } catch (error) {
      console.error('Failed to delete post:', error)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Blog Posts</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Manage your blog content
          </p>
        </div>
        <Link
          href={'/admin/blog/new' as Route}
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand to-blue-600 px-4 py-2 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
        >
          <Plus className="h-5 w-5" />
          New Post
        </Link>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            {/* Thumbnail */}
            <div className="flex-shrink-0">
              {post.image ? (
                <div className="relative h-24 w-32 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={post.image}
                    alt={post.title.en}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="flex h-24 w-32 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                  <ImageIcon className="h-8 w-8 text-gray-400" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{post.title.en}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {post.summary.en}
              </p>
              <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-brand/10 px-2 py-1 text-xs font-medium text-brand"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <Link
                href={`/admin/blog/${post.slug}` as Route}
                className="rounded-lg border border-gray-300 p-2 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                <Edit className="h-5 w-5" />
              </Link>
              <button
                onClick={() => handleDelete(post.slug)}
                className="rounded-lg border border-red-300 p-2 text-red-600 transition-colors hover:bg-red-50 dark:border-red-700 dark:hover:bg-red-900/20"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}

        {posts.length === 0 && (
          <div className="rounded-xl border-2 border-dashed border-gray-300 p-12 text-center dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">No blog posts yet</p>
            <Link
              href={'/admin/blog/new' as Route}
              className="mt-4 inline-flex items-center gap-2 text-brand hover:underline"
            >
              <Plus className="h-4 w-4" />
              Create your first post
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
