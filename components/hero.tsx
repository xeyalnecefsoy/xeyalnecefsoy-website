"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import { HeroCarousel } from '@/components/hero-carousel'
import { useI18n } from '@/components/i18n'
import { href, type Locale } from '@/lib/routes'
import { useParams } from 'next/navigation'

export function Hero() {
  const { t } = useI18n()
  const params = useParams<{ locale?: Locale }>()
  const locale: Locale = (params?.locale as Locale) || 'az'

  return (
    <section className="relative overflow-hidden border-b border-gray-200 dark:border-gray-800">
      {/* Background Gradients - Simplified */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand/5 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-brand/5 blur-[120px]" />
      </div>

      <div className="container relative py-20 md:py-32 grid items-center gap-12 lg:grid-cols-2">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-sm font-medium text-brand"
          >
            <Sparkles className="h-4 w-4" />
            <span>Premium Web Solutions</span>
          </motion.div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl leading-[1.1] mx-auto lg:mx-0">
            <span className="block">{t.home.heroTitle.split(' ').slice(0, 2).join(' ')}</span>
            <span className="text-brand">
               {t.home.heroTitle.split(' ').slice(2).join(' ')}
            </span>
          </h1>

          <p className="mb-8 max-w-lg text-lg text-gray-600 dark:text-gray-400 md:text-xl mx-auto lg:mx-0">
            {t.home.heroDesc}
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              href={`${href(locale, 'home')}#contact` as any}
              className="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand/90 hover:ring-4 hover:ring-brand/20"
            >
              <span>{t.common.ctaCreate}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={`${href(locale, 'home')}#services` as any}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              {t.home.viewServices}
            </Link>
          </div>
        </motion.div>

        {/* Carousel Side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-xl lg:mx-0"
        >
           <HeroCarousel />
        </motion.div>
      </div>
    </section>
  )
}
