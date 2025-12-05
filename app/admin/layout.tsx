import type { ReactNode } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { I18nProvider } from '@/components/i18n'
import '@/app/globals.css'

export default function AdminRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <I18nProvider initialLang="en">
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
