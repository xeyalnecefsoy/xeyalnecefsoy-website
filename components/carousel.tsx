"use client"

import { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Item = { title: string; desc: string }

export function Carousel({ items, interval = 4000 }: { items: Item[]; interval?: number }) {
  const slides = useMemo(() => items ?? [], [items])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval)
    return () => clearInterval(id)
  }, [slides.length, interval])

  if (!slides.length) return null

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
      <div className="min-h-[140px]">
        <div className="transition-all">
          <h3 className="text-xl font-semibold">{slides[index].title}</h3>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{slides[index].desc}</p>
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
              className={`h-2 w-2 rounded-full ${i === index ? 'bg-brand' : 'bg-gray-300 dark:bg-gray-700'}`}
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
