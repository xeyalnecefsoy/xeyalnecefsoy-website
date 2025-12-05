"use client"

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Pricing } from '@/components/pricing'
import { useI18n } from '@/components/i18n'

export default function PricesPage() {
  const { t } = useI18n()
  return (
    <>
      <Header />
      <main className="flex-1 py-16">
        <div className="container">
          <h1 className="mb-4 text-3xl font-bold tracking-tight">{t.services.pricing.title}</h1>
          <p className="mb-8 max-w-prose text-gray-600 dark:text-gray-300">{t.services.pricing.subtitle}</p>
          <Pricing showHeading={false} />
        </div>
      </main>
      <Footer />
    </>
  )
}
