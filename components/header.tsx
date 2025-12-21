"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import type { Route } from 'next'
import { useI18n } from '@/components/i18n'
import { useParams } from 'next/navigation'
import { href, type Locale } from '@/lib/routes'
import { LanguageSwitcher } from '@/components/language-switcher'

type NavItem = { href: Route; key: 'home' | 'services' | 'prices' | 'contact' | 'about' | 'blog' | 'projects' }
const nav: Readonly<Array<NavItem>> = [
  { href: '/' as Route, key: 'home' },
  { href: '/services' as Route, key: 'services' },
  { href: '/projects' as Route, key: 'projects' },
  { href: '/prices' as Route, key: 'prices' },
  { href: '/blog' as Route, key: 'blog' },
  { href: '/about' as Route, key: 'about' },
  { href: '/contact' as Route, key: 'contact' },
]

const servicesMenuLinks: Readonly<Array<{ href: Route; key: 'all' | 'law' | 'ecommerce' | 'saas' | 'landing' }>> = [
  { href: '/services' as Route, key: 'all' },
  { href: '/services/law-business' as Route, key: 'law' },
  { href: '/services/ecommerce' as Route, key: 'ecommerce' },
  { href: '/services/saas-dashboards' as Route, key: 'saas' },
  { href: '/services/landing-pages' as Route, key: 'landing' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { t } = useI18n()
  const params = useParams<{ locale?: Locale }>()
  const locale: Locale = (params?.locale as Locale) || 'az'

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/90 backdrop-blur-md shadow-sm dark:border-gray-800/50 dark:bg-gray-900/90">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href={href(locale,'home') as Route} className="group flex items-center gap-2.5 font-bold tracking-tight text-lg transition-all hover:scale-105">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg transition-transform group-hover:rotate-12">
            <Image src="/logo.png" alt="Logo" fill className="object-cover" />
          </div>
          <span className="text-gray-900 dark:text-white">{t.common.brand}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 whitespace-nowrap lg:flex">
          {nav.map((n) => {
            if (n.href === ('/services' as Route)) {
              return (
                <div key={n.href} className="relative">
                  <button
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setServicesOpen((s) => !s)}
                    aria-haspopup="menu"
                    aria-expanded={servicesOpen}
                  >
                    {t.common.nav.services} <ChevronDown className="h-4 w-4" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-0 mt-2 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
                      <ul className="py-2">
                        {servicesMenuLinks.map((s) => (
                          <li key={s.href}>
                            <Link 
                              href={("/"+locale+s.href.replace('/services', '/' + href(locale,'services').split('/').slice(2).join('/'))) as Route} 
                              className="block px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-brand/5 hover:text-brand dark:text-gray-300 dark:hover:bg-brand/10 dark:hover:text-brand" 
                              onClick={() => setServicesOpen(false)}
                            >
                              {t.services.menu[s.key]}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            }
            const key = n.key as 'home'|'services'|'projects'|'prices'|'blog'|'about'|'contact'
            return (
              <Link 
                key={n.href} 
                href={href(locale, key) as Route} 
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                {t.common.nav[n.key]}
              </Link>
            )
          })}
          <Link 
            href={(href(locale,'home') + '#contact') as Route} 
            className="ml-2 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:shadow-brand/30 hover:scale-105"
          >
            {t.common.ctaCreate}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button 
            className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden" 
            onClick={() => setOpen((o) => !o)} 
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 lg:hidden">
          <div className="container flex flex-col py-4 space-y-1">
            {nav.map((n) => {
              const key = n.key as 'home'|'services'|'projects'|'prices'|'blog'|'about'|'contact'
              return (
                <Link 
                  key={n.href} 
                  href={href(locale, key) as Route} 
                  className="rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800" 
                  onClick={() => setOpen(false)}
                >
                  {t.common.nav[n.key]}
                </Link>
              )
            })}
            <div className="mt-2 rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-800/50">
              <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-gray-500">{t.common.nav.services}</div>
              {servicesMenuLinks.map((s) => (
                <Link 
                  key={s.href} 
                  href={("/"+locale+s.href) as Route} 
                  className="block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white dark:hover:bg-gray-900" 
                  onClick={() => setOpen(false)}
                >
                  {t.services.menu[s.key]}
                </Link>
              ))}
            </div>
            <Link 
              href={(href(locale,'home') + '#contact') as Route} 
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md" 
              onClick={() => setOpen(false)}
            >
              {t.common.ctaCreate}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
