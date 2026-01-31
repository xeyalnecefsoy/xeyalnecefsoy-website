"use client"

import { useState } from 'react'
import { account } from '@/lib/appwrite'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await account.createEmailPasswordSession(email, password)
      router.push('/admin/dashboard')
    } catch (err: any) {
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
        <h1 className="mb-6 text-center text-2xl font-bold">Admin Login</h1>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-2.5 dark:border-gray-600 dark:bg-gray-700"
              required 
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-2.5 dark:border-gray-600 dark:bg-gray-700"
              required 
            />
          </div>
          
          {error && <p className="text-sm text-red-500">{error}</p>}
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full rounded-lg bg-brand-600 px-5 py-2.5 text-center font-medium text-white hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? <Loader2 className="mx-auto animate-spin" /> : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
