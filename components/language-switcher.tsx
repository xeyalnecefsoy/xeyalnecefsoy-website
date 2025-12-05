"use client"

import { useI18n } from '@/components/i18n'
import { usePathname, useRouter } from 'next/navigation'
import { routeMap } from '@/lib/routes'

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n()
  const pathname = usePathname()
  const router = useRouter()

  const switchTo = (target: 'en' | 'az') => {
    if (target === lang) return
    setLang(target)

    // Current path segments
    const segments = pathname?.split('/').filter(Boolean) || []
    
    // If we are at root or just locale root
    if (segments.length <= 1) {
      router.push(`/${target}`)
      return
    }

    // Remove current locale from segments
    const currentLocale = segments[0] as 'en' | 'az'
    const pathSegments = segments.slice(1)
    
    // Map the first segment (main route)
    const mainRoute = pathSegments[0]
    let newMainRoute = mainRoute

    // Find the key for the current route in the current locale
    const routeKey = (Object.keys(routeMap[currentLocale]) as (keyof typeof routeMap['az'])[])
      .find(key => routeMap[currentLocale][key] === mainRoute)

    // If found, map to target locale
    if (routeKey) {
      newMainRoute = routeMap[target][routeKey]
    }

    // Construct new path
    // If newMainRoute is empty (e.g. home), we don't add it
    const newPathSegments: string[] = [target]
    if (newMainRoute) {
      newPathSegments.push(newMainRoute)
    }
    // Add remaining segments (slugs, sub-routes)
    if (pathSegments.length > 1) {
      newPathSegments.push(...pathSegments.slice(1))
    }

    router.push(`/${newPathSegments.join('/')}` as any)
  }
  return (
    <div className="flex items-center gap-1 text-xs">
      <button
        className={`rounded px-2 py-1 ${lang === 'en' ? 'bg-gray-200 dark:bg-gray-800 font-semibold' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
        onClick={() => switchTo('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        className={`rounded px-2 py-1 ${lang === 'az' ? 'bg-gray-200 dark:bg-gray-800 font-semibold' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
        onClick={() => switchTo('az')}
        aria-pressed={lang === 'az'}
      >
        AZ
      </button>
    </div>
  )
}
