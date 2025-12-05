"use client"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useI18n } from '@/components/i18n'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function ContactPage() {
  const { t } = useI18n()
  const sp = useSearchParams()
  const prefillPlan = sp?.get('plan') ?? ''

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [plan, setPlan] = useState(prefillPlan)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (prefillPlan) setPlan(prefillPlan)
  }, [prefillPlan])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      // Placeholder submit. Integrate with your backend or service (e.g., Formspree) here.
      await new Promise((r) => setTimeout(r, 600))
      setStatus('success')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <>
      <Header />
      <main className="flex-1 py-16">
        <div className="container">
          <h1 className="mb-4 text-3xl font-bold tracking-tight">{t.common.nav.contact}</h1>
          <p className="mb-8 max-w-prose text-gray-600 dark:text-gray-300">
            {t.services.pricing.subtitle}
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label htmlFor="plan" className="mb-1 block text-sm">Plan</label>
                <input id="plan" value={plan} onChange={(e) => setPlan(e.target.value)} className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-brand dark:border-gray-700 dark:bg-gray-900" />
              </div>
              <div>
                <label htmlFor="name" className="mb-1 block text-sm">{t.home.form.name}</label>
                <input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder={t.home.form.namePh} className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-brand dark:border-gray-700 dark:bg-gray-900" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm">{t.home.form.email}</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t.home.form.emailPh} className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-brand dark:border-gray-700 dark:bg-gray-900" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm">{t.home.form.message}</label>
                <textarea id="message" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} placeholder={t.home.form.messagePh} className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-brand dark:border-gray-700 dark:bg-gray-900" />
              </div>
              <button type="submit" className="btn btn-primary">{status === 'submitting' ? 'Sending…' : t.home.form.send}</button>
              {status === 'success' && (
                <p className="text-xs text-green-600">Thanks! Your message has been sent.</p>
              )}
              {status === 'error' && (
                <p className="text-xs text-red-600">Something went wrong. Please try again.</p>
              )}
              <p className="text-xs text-gray-500">{t.home.form.note}</p>
            </form>

            <aside className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <p><strong>Email:</strong> you@domain.com</p>
                <p><strong>Location:</strong> Baku, Azerbaijan</p>
                <p><strong>Socials:</strong> <a href="#" className="text-brand hover:underline">LinkedIn</a> · <a href="#" className="text-brand hover:underline">GitHub</a></p>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
