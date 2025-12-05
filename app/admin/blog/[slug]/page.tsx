"use client"

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'
import type { Route } from 'next'

export default function EditBlogPostPage() {
  const router = useRouter()
  const params = useParams()
  const slug = params.slug as string
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    slug: '',
    titleEn: '',
    titleAz: '',
    summaryEn: '',
    summaryAz: '',
    tags: '',
    date: '',
    image: '',
  })

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/admin/blog/${slug}`)
        const post = await res.json()
        
        setFormData({
          slug: post.slug,
          titleEn: post.title.en,
          titleAz: post.title.az,
          summaryEn: post.summary.en,
          summaryAz: post.summary.az,
          tags: post.tags.join(', '),
          date: post.date,
          image: post.image || '',
        })
      } catch (error) {
        console.error('Failed to fetch post:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [slug])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    const post = {
      slug: formData.slug,
      title: { en: formData.titleEn, az: formData.titleAz },
      summary: { en: formData.summaryEn, az: formData.summaryAz },
      tags: formData.tags.split(',').map((t) => t.trim()),
      date: formData.date,
      image: formData.image || undefined,
    }

    try {
      const res = await fetch(`/api/admin/blog/${slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post),
      })

      if (res.ok) {
        router.push('/admin/blog')
      }
    } catch (error) {
      console.error('Failed to update post:', error)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          href={'/admin/blog' as Route}
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog Posts
        </Link>
        <h1 className="mt-4 text-3xl font-bold">Edit Blog Post</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-lg font-semibold">Basic Information</h2>
          
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Slug</label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                  required
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Image URL (optional)</label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-lg font-semibold">English Content</h2>
          
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Title (EN)</label>
              <input
                type="text"
                value={formData.titleEn}
                onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Summary (EN)</label>
              <textarea
                value={formData.summaryEn}
                onChange={(e) => setFormData({ ...formData, summaryEn: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                rows={3}
                required
              />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-lg font-semibold">Azerbaijani Content</h2>
          
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Title (AZ)</label>
              <input
                type="text"
                value={formData.titleAz}
                onChange={(e) => setFormData({ ...formData, titleAz: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Summary (AZ)</label>
              <textarea
                value={formData.summaryAz}
                onChange={(e) => setFormData({ ...formData, summaryAz: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                rows={3}
                required
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand to-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl disabled:opacity-50"
          >
            <Save className="h-5 w-5" />
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
          <Link
            href={'/admin/blog' as Route}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-semibold transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}
