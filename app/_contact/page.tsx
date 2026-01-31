"use client"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useI18n } from '@/components/i18n'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Loader2, Linkedin, Github } from 'lucide-react'

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
      // Placeholder submit
      await new Promise((r) => setTimeout(r, 1500))
      setStatus('success')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#020617] text-gray-900 dark:text-gray-100">
      <Header />
      <main className="flex-1 py-20 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-96 bg-brand-500/5 blur-3xl -z-10 rounded-full translate-y-[-50%]" />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side: Contact Info */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">
                {t.home.letstalk} <br/>
                <span className="text-gradient">conversation.</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-md">
                {t.home.contactDesc}
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
                  <div className="p-3 rounded-lg bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{t.home.form.email}</h3>
                    <a href="mailto:contact@xeyalnecefsoy.com" className="text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                      contact@xeyalnecefsoy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800">
                  <div className="p-3 rounded-lg bg-indigo-100/50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Baku, Azerbaijan <br/>
                      <span className="text-sm text-gray-400 dark:text-gray-500">(Remote Available)</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a href="#" className="p-3 rounded-full border border-gray-200 dark:border-gray-800 hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 transition-all hover:shadow-lg">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="p-3 rounded-full border border-gray-200 dark:border-gray-800 hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 transition-all hover:shadow-lg">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="glass rounded-3xl p-8 shadow-2xl relative"
            >
              <form onSubmit={submit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    {t.home.form.name}
                  </label>
                  <input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-gray-200/50 bg-white/50 px-4 py-3 outline-none transition-all placeholder:text-gray-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-800/50" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    {t.home.form.email}
                  </label>
                  <input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-gray-200/50 bg-white/50 px-4 py-3 outline-none transition-all placeholder:text-gray-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-800/50" 
                    required
                  />
                </div>
                {plan && (
                  <div>
                    <label htmlFor="plan" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Plan</label>
                    <input 
                      id="plan" 
                      value={plan} 
                      onChange={(e) => setPlan(e.target.value)} 
                      className="w-full rounded-xl border border-gray-200/50 bg-gray-50/50 px-4 py-3 font-semibold text-brand-600 outline-none focus:border-brand-500 dark:border-gray-700 dark:bg-gray-800/50 dark:text-brand-400" 
                    />
                  </div>
                )}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    {t.home.form.message}
                  </label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder={t.home.form.messagePh}
                    className="w-full rounded-xl border border-gray-200/50 bg-white/50 px-4 py-3 outline-none transition-all placeholder:text-gray-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-800/50" 
                    required
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={status === 'submitting' || status === 'success'}
                    className="w-full rounded-xl bg-brand-600 px-6 py-4 font-semibold text-white shadow-lg shadow-brand-500/30 transition-all hover:bg-brand-500 hover:shadow-brand-500/50 hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="h-5 w-5 animate-spin" /> {t.home.form.sending}
                      </span>
                    ) : status === 'success' ? (
                      <span className="flex items-center justify-center gap-2">
                        {t.home.form.sent} <Send className="h-5 w-5" />
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        {t.home.form.send} <Send className="h-4 w-4" />
                      </span>
                    )}
                  </button>
                </div>
                
                {status === 'error' && (
                  <p className="text-center text-sm text-red-500 animate-pulse">
                    {t.home.form.error}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
