"use client"

import type { HTMLAttributes } from 'react'
import clsx from 'clsx'

type GlowProps = HTMLAttributes<HTMLDivElement> & {
  variant?: 'brand' | 'accent'
}

const variantClass: Record<NonNullable<GlowProps['variant']>, string> = {
  brand: 'bg-brand-500/[0.06]',
  accent: 'bg-brand-500/[0.06]',
}

/**
 * Simple absolute-ish glow blob helper (use with `position: absolute` in `className`).
 * Keep the gradient/blur details in the caller so Tailwind can see literal class strings.
 */
export function Glow({ variant = 'brand', className, ...props }: GlowProps) {
  return (
    <div
      aria-hidden
      className={clsx('rounded-full pointer-events-none', variantClass[variant], className)}
      {...props}
    />
  )
}

