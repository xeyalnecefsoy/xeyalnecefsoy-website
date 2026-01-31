"use client"

import { useEffect, useState } from 'react'
import { account } from '@/lib/appwrite'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, FileText, FolderGit2, LogOut } from 'lucide-react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await account.get()
        setLoading(false)
      } catch {
        router.push('/admin')
      }
    }
    checkAuth()
  }, [])

  const logout = async () => {
    await account.deleteSession('current')
    router.push('/admin')
  }

  if (loading) return <div className="flex h-screen items-center justify-center">Loading...</div>

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white">
        <div className="p-6">
          <h2 className="text-xl font-bold">Admin Panel</h2>
        </div>
        <nav className="space-y-2 px-4">
          <Link href="/admin/dashboard" className="flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-white/10">
            <LayoutDashboard className="h-5 w-5" /> Dashboard
          </Link>
          <Link href="/admin/projects" className="flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-white/10">
            <FolderGit2 className="h-5 w-5" /> Projects
          </Link>
          <button onClick={logout} className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-red-400 hover:bg-white/10">
            <LogOut className="h-5 w-5" /> Logout
          </button>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-8 dark:bg-gray-900">
        {children}
      </main>
    </div>
  )
}
