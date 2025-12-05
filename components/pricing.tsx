"use client"

import { useI18n } from '@/components/i18n'

export function Pricing({ showHeading = true }: { showHeading?: boolean }) {
  const { t } = useI18n()
  const tiers = t.services.pricing.tiers
  const items = [tiers.basic, tiers.standard, tiers.premium]

  return (
    <section className="py-16">
      <div className="container">
        {showHeading && (
          <>
            <h2 className="mb-2 text-2xl font-semibold tracking-tight md:text-3xl">{t.services.pricing.title}</h2>
            <p className="mb-8 max-w-prose text-gray-600 dark:text-gray-300">{t.services.pricing.subtitle}</p>
          </>
        )}
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((tier) => (
            <div key={tier.name} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="text-sm font-semibold text-brand">{tier.name}</div>
              <div className="my-2 text-3xl font-bold">{tier.price}</div>
              <div className="mb-4 text-sm text-gray-600 dark:text-gray-300">{tier.desc}</div>
              <a href={`/contact?plan=${encodeURIComponent(tier.name)}`} className="btn btn-primary text-sm">{t.services.pricing.getStarted}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
