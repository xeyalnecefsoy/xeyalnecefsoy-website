"use client"

import { useI18n } from '@/components/i18n'
import Link from 'next/link'
import type { Route } from 'next'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { t } = useI18n()
  return (
    <html>
      <body className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <div className="container py-20">
          <div className="mx-auto max-w-lg rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <h1 className="text-2xl font-semibold">Something went wrong</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">An unexpected error occurred. Please try again.</p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <button onClick={reset} className="btn btn-primary">Retry</button>
              <Link href={'/' as Route} className="btn btn-ghost">{t.common.nav.home}</Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
