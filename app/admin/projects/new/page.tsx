"use client"

import { useState } from 'react'
import { databases, appwriteConfig } from '@/lib/appwrite'
import { useRouter } from 'next/navigation'
import { Loader2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { ID } from 'appwrite'

export default function NewProject() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  
  // Form State
  const [slug, setSlug] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('web')
  
  // Localized Fields
  const [titleEn, setTitleEn] = useState('')
  const [titleAz, setTitleAz] = useState('')
  const [descEn, setDescEn] = useState('')
  const [descAz, setDescAz] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const payload = {
        slug,
        image,
        category,
        title: JSON.stringify({ en: titleEn, az: titleAz }),
        desc: JSON.stringify({ en: descEn, az: descAz }),
        // Add content/link if needed
      }

      await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.projectsCollectionId,
        ID.unique(),
        payload
      )
      
      router.push('/admin/projects')
    } catch (error: any) {
      alert('Error: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <Link href="/admin/projects" className="flex items-center gap-2 text-sm text-gray-500 hover:text-brand-600">
           <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>
        <h1 className="text-3xl font-bold mt-2">New Project</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-sm dark:bg-gray-800">
        {/* Core Info */}
        <div className="grid gap-4 sm:grid-cols-2">
           <div>
             <label className="block text-sm font-medium mb-1">Slug (URL)</label>
             <input required value={slug} onChange={e => setSlug(e.target.value)} className="w-full border rounded-lg p-2 dark:bg-gray-700" placeholder="my-project" />
           </div>
           <div>
             <label className="block text-sm font-medium mb-1">Category</label>
             <select value={category} onChange={e => setCategory(e.target.value)} className="w-full border rounded-lg p-2 dark:bg-gray-700">
               <option value="web">Web Development</option>
               <option value="ecommerce">E-commerce</option>
               <option value="saas">SaaS</option>
               <option value="landing">Landing Page</option>
             </select>
           </div>
        </div>

        <div>
           <label className="block text-sm font-medium mb-1">Image URL</label>
           <input required value={image} onChange={e => setImage(e.target.value)} className="w-full border rounded-lg p-2 dark:bg-gray-700" placeholder="https://..." />
        </div>

        {/* English Content */}
        <div className="border-t pt-4">
           <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">English Content</h3>
           <div className="space-y-4">
             <div>
               <label className="block text-sm font-medium mb-1">Title (EN)</label>
               <input required value={titleEn} onChange={e => setTitleEn(e.target.value)} className="w-full border rounded-lg p-2 dark:bg-gray-700" />
             </div>
             <div>
               <label className="block text-sm font-medium mb-1">Description (EN)</label>
               <textarea required rows={3} value={descEn} onChange={e => setDescEn(e.target.value)} className="w-full border rounded-lg p-2 dark:bg-gray-700" />
             </div>
           </div>
        </div>

        {/* Azerbaijani Content */}
        <div className="border-t pt-4">
           <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Azerbaijani Content</h3>
           <div className="space-y-4">
             <div>
               <label className="block text-sm font-medium mb-1">Başlıq (AZ)</label>
               <input required value={titleAz} onChange={e => setTitleAz(e.target.value)} className="w-full border rounded-lg p-2 dark:bg-gray-700" />
             </div>
             <div>
               <label className="block text-sm font-medium mb-1">Təsvir (AZ)</label>
               <textarea required rows={3} value={descAz} onChange={e => setDescAz(e.target.value)} className="w-full border rounded-lg p-2 dark:bg-gray-700" />
             </div>
           </div>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-brand-600 text-white rounded-lg py-3 font-semibold hover:bg-brand-700 transition"
        >
          {loading ? <Loader2 className="mx-auto animate-spin" /> : 'Create Project'}
        </button>
      </form>
    </div>
  )
}
