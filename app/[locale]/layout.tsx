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
    title: {
      default: `${translations.common.brand} | Creative Specialist & FullStack Developer`,
      template: `%s | ${translations.common.brand}`,
    },
    description: translations.home.heroDesc,
    keywords: ['Xəyal Nəcəfsoy', 'Khayal Najafsoy', 'Web Developer', 'Front-end Developer', 'FullStack Developer', 'Veb saytların hazırlanması', 'Bakı', 'Azerbaijan', 'Portfolio'],
    authors: [{ name: 'Xəyal Nəcəfsoy', url: 'https://xeyalnecefsoy.com' }],
    creator: 'Xəyal Nəcəfsoy',
    metadataBase: new URL('https://xeyalnecefsoy.com'),
    openGraph: {
      title: `${translations.common.brand} | Creative Specialist & FullStack Developer`,
      description: translations.home.heroDesc,
      url: `https://xeyalnecefsoy.com/${locale}`,
      siteName: translations.common.brand,
      locale: locale,
      type: 'website',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/apple-touch-icon.png',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon.png',
      },
    },
  }
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale: paramLocale } = await params
  const locale = locales.includes(paramLocale as Locale) ? (paramLocale as Locale) : 'az'
  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen bg-white text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100 flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Xəyal Nəcəfsoy',
              alternateName: 'Khayal Najafsoy',
              url: 'https://xeyalnecefsoy.com',
              image: 'https://xeyalnecefsoy.com/profile.svg',
              jobTitle: 'FullStack Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance'
              },
              sameAs: [
                'https://www.linkedin.com/in/xeyalnecefsoy',
                'https://github.com/xeyalnecefsoy'
              ]
            })
          }}
        />
        <ThemeProvider>
          <I18nProvider initialLang={locale as any}>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
