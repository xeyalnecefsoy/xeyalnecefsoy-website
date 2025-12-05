import type { ReactNode } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { I18nProvider } from '@/components/i18n'
import { locales, type Locale } from '@/lib/routes'
import type { Metadata } from 'next'
import '@/app/globals.css'

import { az } from '@/i18n/az'
import { en } from '@/i18n/en'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: paramLocale } = await params
  const locale = locales.includes(paramLocale as Locale) ? (paramLocale as Locale) : 'az'
  const translations = locale === 'az' ? az : en
  
  return {
    title: `${translations.common.brand} | Portfolio`,
    description: 'Creative Specialist and FullStack Developer — clean, responsive, modern web experiences.',
    icons: {
      icon: '/logo.png',
    },
  }
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: paramLocale } = await params
  const locale = locales.includes(paramLocale as Locale) ? (paramLocale as Locale) : 'az'
  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100 flex flex-col">
        <ThemeProvider>
          <I18nProvider initialLang={locale as any}>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
