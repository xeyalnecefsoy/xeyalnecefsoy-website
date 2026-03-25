"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '@/components/i18n'
import { href, type Locale } from '@/lib/routes'
import { useParams } from 'next/navigation'

export function Hero() {
  const { t } = useI18n()
  const params = useParams<{ locale?: Locale }>()
  const locale: Locale = (params?.locale as Locale) || 'az'

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/[0.07] blur-[150px] animate-glow" />
        {/* Top-right accent */}
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/[0.04] blur-[120px]" />
        {/* Bottom-left accent */}
        <div className="absolute -bottom-[10%] -left-[10%] w-[400px] h-[400px] rounded-full bg-brand-500/[0.03] blur-[100px]" />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="container relative py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge with spring-in animation */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
            className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-brand-500/20 bg-brand-500/[0.06] px-4 py-1.5 text-sm font-medium text-brand-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse-slow" />
            <span>{t.home.premiumSolutions}</span>
          </motion.div>

          {/* Title with staggered word reveal */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="mb-8 text-5xl font-extrabold tracking-tight md:text-7xl lg:text-[5.5rem] leading-[1.05] text-white"
          >
            {t.home.heroTitle}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.35 }}
            className="mb-12 max-w-xl mx-auto text-lg text-gray-500 md:text-xl leading-relaxed"
          >
            {t.home.heroDesc}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href={`${href(locale, 'home')}#projects` as any}
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/25 active:scale-[0.97]"
            >
              <span>{t.home.viewProjects}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
