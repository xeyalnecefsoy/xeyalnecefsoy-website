"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { Route } from 'next'
import { Plus, Edit, Trash2, Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'

type Project = {
  slug: string
  category: 'web' | 'ecommerce' | 'saas' | 'landing'
  title: { en: string; az: string }
  desc: { en: string; az: string }
  image?: string
}

export default function ProjectsListPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      setError(null)
      const res = await fetch('/api/admin/projects')
      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`)
      }
      const data = await res.json()
      setProjects(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Failed to fetch projects:', error)
      setError('Failed to load projects. Please refresh the page.')
      setProjects([])
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return

    try {
      const res = await fetch(`/api/admin/projects/${slug}`, { method: 'DELETE' })
      if (res.ok) {
        fetchProjects()
      }
    } catch (error) {
      console.error('Failed to delete project:', error)
      alert('Failed to delete project. Please try again.')
    }
  }

  if (loading) {
    return (
      <div>
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Projects</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Manage your portfolio projects
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 animate-pulse"
            >
              <div className="aspect-video w-full bg-gray-200 dark:bg-gray-800" />
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-20" />
                <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
                <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                <div className="flex gap-2 pt-2">
                  <div className="flex-1 h-9 bg-gray-200 dark:bg-gray-800 rounded" />
                  <div className="flex-1 h-9 bg-gray-200 dark:bg-gray-800 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Projects</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Manage your portfolio projects
            </p>
          </div>
        </div>
        <div className="rounded-xl border-2 border-red-300 bg-red-50 p-8 text-center dark:border-red-700 dark:bg-red-900/20">
          <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
          <button
            onClick={() => {
              setLoading(true)
              fetchProjects()
            }}
            className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Manage your portfolio projects
          </p>
        </div>
        <Link
          href={'/admin/projects/new' as Route}
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand to-blue-600 px-4 py-2 font-semibold text-white shadow-lg transition-all hover:shadow-xl"
        >
          <Plus className="h-5 w-5" />
          New Project
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            {project.image ? (
              <div className="relative aspect-video w-full bg-gray-100 dark:bg-gray-800">
                <Image
                  src={project.image}
                  alt={project.title.en}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex aspect-video w-full items-center justify-center bg-gray-100 dark:bg-gray-800">
                <ImageIcon className="h-12 w-12 text-gray-400" />
              </div>
            )}
            
            <div className="p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-full bg-brand/10 px-2 py-1 text-xs font-medium text-brand">
                  {project.category}
                </span>
              </div>
              <h3 className="mb-2 font-semibold">{project.title.en}</h3>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {project.desc.en}
              </p>
              
              <div className="flex gap-2">
                <Link
                  href={`/admin/projects/${project.slug}` as Route}
                  className="flex-1 rounded-lg border border-gray-300 py-2 text-center text-sm transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(project.slug)}
                  className="flex-1 rounded-lg border border-red-300 py-2 text-center text-sm text-red-600 transition-colors hover:bg-red-50 dark:border-red-700 dark:hover:bg-red-900/20"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

        {projects.length === 0 && (
          <div className="col-span-full rounded-xl border-2 border-dashed border-gray-300 p-12 text-center dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">No projects yet</p>
            <Link
              href={'/admin/projects/new' as Route}
              className="mt-4 inline-flex items-center gap-2 text-brand hover:underline"
            >
              <Plus className="h-4 w-4" />
              Create your first project
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
