export const locales = ['az', 'en'] as const
export type Locale = typeof locales[number]

export const routeMap: Record<Locale, Record<'home'|'services'|'projects'|'prices'|'blog'|'about'|'contact', string>> = {
  az: {
    home: '',
    services: 'xidmetler',
    projects: 'layiheler',
    prices: 'qiymetler',
    blog: 'bloq',
    about: 'haqqinda',
    contact: 'elaqe',
  },
  en: {
    home: '',
    services: 'services',
    projects: 'projects',
    prices: 'prices',
    blog: 'blog',
    about: 'about',
    contact: 'contact',
  }
}

export function href(locale: Locale, key: keyof typeof routeMap['az']) {
  const seg = routeMap[locale][key]
  return `/${locale}${seg ? '/' + seg : ''}`
}
