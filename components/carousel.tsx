"use client"

import { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Item = { title: string; desc: string }

export function Carousel({ items, interval = 4000 }: { items: Item[]; interval?: number }) {
  const slides = useMemo(() => items ?? [], [items])
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (slides.length <= 1) return
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval)
    return () => clearInterval(id)
  }, [slides.length, interval, paused])

  if (!slides.length) return null

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-brand/5 via-transparent to-brand/10 p-6 dark:border-gray-800"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Highlights"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') prev()
        if (e.key === 'ArrowRight') next()
      }}
    >
      <div className="min-h-[160px] md:min-h-[180px] flex items-center">
        <div className="transition-all">
          <h3 className="text-xl font-semibold md:text-2xl">{slides[index].title}</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 md:text-base">{slides[index].desc}</p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button aria-label="Previous" className="btn btn-ghost px-2 py-2" onClick={prev}>
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${i === index ? 'bg-brand' : 'bg-gray-300 dark:bg-gray-700'}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button aria-label="Next" className="btn btn-ghost px-2 py-2" onClick={next}>
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
