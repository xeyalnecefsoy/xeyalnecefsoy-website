"use client"

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export type ImageSlide = {
  src: string
  alt: string
}

export function ImageCarousel({ slides, interval = 4000 }: { slides: ImageSlide[]; interval?: number }) {
  const items = useMemo(() => slides ?? [], [slides])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (items.length <= 1) return
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), interval)
    return () => clearInterval(id)
  }, [items.length, interval])

  if (!items.length) return null

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const next = () => setIndex((i) => (i + 1) % items.length)

  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="relative aspect-[16/9] w-full">
        <Image
          key={items[index].src}
          src={items[index].src}
          alt={items[index].alt}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3">
        <button aria-label="Previous" className="btn btn-ghost px-2 py-2" onClick={prev}>
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
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
