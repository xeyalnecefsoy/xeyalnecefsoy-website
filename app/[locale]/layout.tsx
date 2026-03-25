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
      default: `${translations.common.brand} | Qurucu`,
      template: `%s | ${translations.common.brand}`,
    },
    description: translations.home.heroDesc,
    keywords: ['Xəyal Nəcəfsoy', 'Khayal Najafsoy', 'Founder', 'Qurucu', 'Bitig.az', 'Danyeri.az', 'TechTurk.az', 'Azerbaijan', 'Startup'],
    authors: [{ name: 'Xəyal Nəcəfsoy', url: 'https://xeyalnecefsoy.com' }],
    creator: 'Xəyal Nəcəfsoy',
    metadataBase: new URL('https://xeyalnecefsoy.com'),
    openGraph: {
      title: `${translations.common.brand} | Qurucu`,
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
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen bg-black text-gray-100 antialiased flex flex-col">
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
              jobTitle: 'Founder & Engineer',
              worksFor: [
                { '@type': 'Organization', name: 'Bitig.az', url: 'https://bitig.az' },
                { '@type': 'Organization', name: 'Danyeri.az', url: 'https://danyeri.az' },
                { '@type': 'Organization', name: 'TechTurk.az', url: 'https://techturk.az' },
              ],
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
