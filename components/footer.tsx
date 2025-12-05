"use client"

import { useI18n } from '@/components/i18n'

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()
  return (
    <footer className="mt-auto border-t border-gray-200 py-6 text-center text-sm text-gray-500 dark:border-gray-800">
      {year} {t.common.brand}. {t.common.rights}
    </footer>
  )
}
