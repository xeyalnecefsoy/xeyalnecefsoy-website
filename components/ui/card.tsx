"use client"

import type { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

export const cardBaseClass =
  'rounded-2xl border border-white/[0.05] bg-white/[0.02] backdrop-blur-xl'

export const cardHoverClass =
  'transition-all duration-300 hover:border-brand-500/30 hover:bg-brand-500/[0.03] hover:shadow-glow-brand'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  hover?: boolean
}

export function Card({ children, className, hover = true, ...props }: CardProps) {
  return (
    <div className={clsx(cardBaseClass, hover && cardHoverClass, className)} {...props}>
      {children}
    </div>
  )
}

