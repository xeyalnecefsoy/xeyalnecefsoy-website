"use client"

import { useEffect, useState } from 'react'
import { FileText, Briefcase, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalPosts: 0,
    totalProjects: 0,
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [postsRes, projectsRes] = await Promise.all([
          fetch('/api/admin/blog'),
          fetch('/api/admin/projects'),
        ])

        const posts = await postsRes.json()
        const projects = await projectsRes.json()

        setStats({
          totalPosts: posts.length || 0,
          totalProjects: projects.length || 0,
        })
      } catch (error) {
        console.error('Failed to fetch stats:', error)
      }
    }

    fetchStats()
  }, [])

  const cards = [
    {
      title: 'Blog Posts',
      value: stats.totalPosts,
      icon: FileText,
      href: '/admin/blog',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Projects',
      value: stats.totalProjects,
      icon: Briefcase,
      href: '/admin/projects',
      gradient: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Welcome to your admin panel. Manage your content here.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ title, value, icon: Icon, href, gradient }) => (
          <Link
            key={title}
            href={href}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="relative z-10">
              <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${gradient} p-3 text-white shadow-lg`}>
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold">{value}</div>
              <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">{title}</div>
            </div>
            <div className={`absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-gradient-to-br ${gradient} opacity-10 transition-transform duration-500 group-hover:scale-150`} />
          </Link>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-xl font-semibold">Quick Actions</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/admin/blog/new"
            className="rounded-lg border-2 border-dashed border-gray-300 p-4 text-center transition-colors hover:border-brand hover:bg-brand/5 dark:border-gray-700"
          >
            <FileText className="mx-auto mb-2 h-8 w-8 text-brand" />
            <div className="font-medium">Create New Blog Post</div>
          </Link>
          <Link
            href="/admin/projects/new"
            className="rounded-lg border-2 border-dashed border-gray-300 p-4 text-center transition-colors hover:border-brand hover:bg-brand/5 dark:border-gray-700"
          >
            <Briefcase className="mx-auto mb-2 h-8 w-8 text-brand" />
            <div className="font-medium">Create New Project</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
