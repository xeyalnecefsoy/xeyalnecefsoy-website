"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import type { Route } from 'next'
import { useI18n } from '@/components/i18n'
import { useParams } from 'next/navigation'
import { href, type Locale } from '@/lib/routes'
import { LanguageSwitcher } from '@/components/language-switcher'

type NavItem = { href: Route; key: 'home' | 'projects' }
const nav: Readonly<Array<NavItem>> = [
  { href: '/' as Route, key: 'home' },
  { href: '/projects' as Route, key: 'projects' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const { t } = useI18n()
  const params = useParams<{ locale?: Locale }>()
  const locale: Locale = (params?.locale as Locale) || 'az'

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-black/70 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href={href(locale,'home') as Route} className="group flex items-center gap-2.5 font-bold tracking-tight text-lg transition-all">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg">
            <Image src="/logo.png" alt="Logo" fill className="object-cover" />
          </div>
          <span className="text-white">{t.common.brand}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 whitespace-nowrap md:flex">
          {nav.map((n) => {
            const key = n.key as 'home' | 'projects'
            return (
              <Link 
                key={n.href} 
                href={href(locale, key) as Route} 
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-400 transition-all hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
              >
                {t.common.nav[n.key]}
              </Link>
            )
          })}
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button 
            className="rounded-lg p-2 transition-colors hover:bg-white/5 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40" 
            onClick={() => setOpen((o) => !o)} 
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/8 bg-black/70 backdrop-blur-xl md:hidden">
          <div className="container flex flex-col py-4 space-y-1">
            {nav.map((n) => {
              const key = n.key as 'home' | 'projects'
              return (
                <Link 
                  key={n.href} 
                  href={href(locale, key) as Route} 
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40" 
                  onClick={() => setOpen(false)}
                >
                  {t.common.nav[n.key]}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
