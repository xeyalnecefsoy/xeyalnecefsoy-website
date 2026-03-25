export type Project = {
  slug: string
  category: 'web' | 'ecommerce' | 'saas' | 'landing' | 'platform'
  title: { en: string; az: string }
  desc: { en: string; az: string }
  image?: string
  url?: string
}

export const projects: Project[] = [
  {
    slug: 'bitig-az',
    category: 'platform',
    title: { en: 'Bitig.az', az: 'Bitig.az' },
    desc: {
      en: 'A platform dedicated to Azerbaijani language, literature, and culture. Bringing Azerbaijani written heritage to the digital age.',
      az: 'Azərbaycan dili, ədəbiyyatı və mədəniyyətinə həsr olunmuş platforma. Yazılı mirasımızı rəqəmsal dövrə gətiririk.'
    },
    url: 'https://bitig.az',
  },
  {
    slug: 'danyeri-az',
    category: 'platform',
    title: { en: 'Danyeri.az', az: 'Danyeri.az' },
    desc: {
      en: 'A modern dating platform built for Azerbaijan. Connecting people through meaningful conversations and shared values.',
      az: 'Azərbaycan üçün müasir tanışlıq platforması. İnsanları mənalı söhbətlər və ortaq dəyərlər vasitəsilə birləşdiririk.'
    },
    url: 'https://danyeri.az',
  },
  {
    slug: 'techturk-az',
    category: 'platform',
    title: { en: 'TechTurk.az', az: 'TechTurk.az' },
    desc: {
      en: 'Azerbaijan\'s tech news and innovation hub. Covering startups, technology trends, and the local tech ecosystem.',
      az: 'Azərbaycanın texnologiya xəbərləri və innovasiya mərkəzi. Startaplar, texnologiya trendləri və yerli texno-ekosistemin işıqlandırılması.'
    },
    url: 'https://techturk.az',
  },
]
