"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'

export default function NewProjectPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    slug: '',
    category: 'web' as 'web' | 'ecommerce' | 'saas' | 'landing',
    titleEn: '',
    titleAz: '',
    descEn: '',
    descAz: '',
    image: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const project = {
      slug: formData.slug,
      category: formData.category,
      title: { en: formData.titleEn, az: formData.titleAz },
      desc: { en: formData.descEn, az: formData.descAz },
      image: formData.image || undefined,
    }

    try {
      const res = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
      })

      if (res.ok) {
        router.push('/admin/projects')
      }
    } catch (error) {
      console.error('Failed to create project:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="mb-8">
        <Link
          href="/admin/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
        <h1 className="mt-4 text-3xl font-bold">Create New Project</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
          <h2 className="mb-4 text-lg font-semibold">Basic Information</h2>
          
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">Slug</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                  placeholder="my-project"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                  required
                >
                  <option value="web">Web</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="saas">SaaS</option>
                  <option value="landing">Landing</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Image URL</label>
              <input
                type="text"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-700 dark:bg-gray-800"
                placeholder="/projects/image.png"
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
              <label className="mb-2 block text-sm font-medium">Description (EN)</label>
              <textarea
                value={formData.descEn}
                onChange={(e) => setFormData({ ...formData, descEn: e.target.value })}
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
              <label className="mb-2 block text-sm font-medium">Description (AZ)</label>
              <textarea
                value={formData.descAz}
                onChange={(e) => setFormData({ ...formData, descAz: e.target.value })}
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
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand to-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl disabled:opacity-50"
          >
            <Save className="h-5 w-5" />
            {loading ? 'Creating...' : 'Create Project'}
          </button>
          <Link
            href="/admin/projects"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-semibold transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}
