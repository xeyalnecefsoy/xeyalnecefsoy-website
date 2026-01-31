"use client"

import { useEffect, useState } from 'react'
import { getProjects, type Project } from '@/lib/data'
import { databases, appwriteConfig } from '@/lib/appwrite'
import Link from 'next/link'
import { Plus, Trash2, Edit } from 'lucide-react'
import Image from 'next/image'

export default function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  const fetchProjects = async () => {
    setLoading(true)
    const data = await getProjects()
    setProjects(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const handleDelete = async (id: string) => {
    if(!confirm('Are you sure?')) return
    try {
      await databases.deleteDocument(
        appwriteConfig.databaseId,
        appwriteConfig.projectsCollectionId,
        id
      )
      fetchProjects()
    } catch (error) {
      alert('Failed to delete')
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Link href="/admin/projects/new" className="flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-white hover:bg-brand-700">
          <Plus className="h-5 w-5" /> Add New
        </Link>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        {loading ? (
           <div className="p-8 text-center">Loading...</div>
        ) : projects.length === 0 ? (
           <div className="p-8 text-center text-gray-500">No projects found. Create one!</div>
        ) : (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {projects.map((project) => (
              <div key={project.$id} className="flex items-center gap-4 p-4">
                <div className="h-16 w-16 relative overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                   {project.image && <Image src={project.image} alt="" fill className="object-cover" />}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold">{project.title.en}</h3>
                  <div className="text-sm text-gray-500">{project.category}</div>
                </div>
                <div className="flex gap-2">
                   <button onClick={() => handleDelete(project.$id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                     <Trash2 className="h-5 w-5" />
                   </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
