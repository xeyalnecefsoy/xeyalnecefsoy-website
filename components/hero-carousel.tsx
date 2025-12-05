"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useI18n } from '@/components/i18n'
import { href, type Locale } from '@/lib/routes'
import { useParams } from 'next/navigation'

const SLIDES = [
  {
    titleKey: "webDesign",
    image: "/blog/design-systems-tailwind.svg",
    linkHash: "services",
  },
  {
    titleKey: "seo",
    image: "/blog/seo-landing-pages.svg",
    linkHash: "services",
  },
  {
    titleKey: "performance",
    image: "/blog/boost-core-web-vitals.svg",
    linkHash: "services",
  }
]

export function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const { t } = useI18n()
  const params = useParams<{ locale?: Locale }>()
  const locale: Locale = (params?.locale as Locale) || 'az'

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl group">
       {/* 16:9 Aspect Ratio Container */}
       <div className="relative aspect-video w-full">
         <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 cursor-pointer"
            >
               <Link href={`${href(locale, 'home')}#${SLIDES[index].linkHash}` as any} className="relative h-full w-full block">
                  <Image 
                    src={SLIDES[index].image} 
                    alt={t.home.heroCarousel?.[SLIDES[index].titleKey as keyof typeof t.home.heroCarousel]}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
               </Link>
            </motion.div>
         </AnimatePresence>

         {/* Overlay Content (Title) */}
         <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white pointer-events-none">
            <motion.h3 
               key={`text-${index}`}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="text-xl font-bold md:text-3xl tracking-tight drop-shadow-md"
            >
              {t.home.heroCarousel?.[SLIDES[index].titleKey as keyof typeof t.home.heroCarousel]}
            </motion.h3>
         </div>

         {/* Navigation Dots */}
         <div className="absolute bottom-4 right-4 flex gap-2 z-10">
            {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full transition-all shadow-sm ${
                    index === i ? "bg-brand w-6" : "bg-white/60 hover:bg-white"
                  }`}
                  aria-label={`Go to slide ${i+1}`}
                />
            ))}
         </div>
       </div>
    </div>
  )
}
