"use client"

import type { ReactNode } from 'react'
import clsx from 'clsx'

type SectionHeader = {
  title: ReactNode
  subtitle?: ReactNode
  align?: 'center' | 'left'
}

type SectionProps = {
  id?: string
  className?: string
  containerClassName?: string
  header?: SectionHeader
  headerClassName?: string
  background?: ReactNode
  children: ReactNode
}

export function Section({
  id,
  className,
  containerClassName = 'container',
  header,
  headerClassName,
  background,
  children,
}: SectionProps) {
  return (
    <section id={id} className={clsx('relative', className)}>
      {background && <div className="absolute inset-0 pointer-events-none">{background}</div>}
      <div className={clsx(containerClassName, 'relative z-10')}>
        {header && (
          <div
            className={clsx(
              header.align === 'left' ? 'text-left' : 'text-center',
              'mx-auto',
              header.align === 'left' ? 'max-w-3xl' : 'max-w-2xl',
              headerClassName ?? 'mb-16'
            )}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4 text-white">
              {header.title}
            </h2>
            {header.subtitle && <p className="text-gray-500 leading-relaxed">{header.subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

