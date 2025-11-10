"use client"

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import type { Route } from 'next'

const nav: Readonly<Array<{ href: Route; label: string }>> = [
  { href: '/' as Route, label: 'Home' },
  { href: '/services' as Route, label: 'Services' },
  { href: '/about' as Route, label: 'About' },
  { href: '/blog' as Route, label: 'Blog' },
]

const servicesMenu: Readonly<Array<{ href: Route; label: string }>> = [
  { href: '/services' as Route, label: 'All Services' },
  { href: '/services/law-business' as Route, label: 'Law Business' },
  { href: '/services/ecommerce' as Route, label: 'E-commerce' },
  { href: '/services/saas-dashboards' as Route, label: 'SaaS Dashboards' },
  { href: '/services/landing-pages' as Route, label: 'Landing Pages' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">
      <div className="container flex h-16 items-center justify-between">
        <Link href={'/' as Route} className="font-semibold tracking-tight">
          <span className="text-brand">Khayal</span> Najafsoy
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => {
            if (n.label === 'Services') {
              return (
                <div key={n.href} className="relative">
                  <button
                    className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    onClick={() => setServicesOpen((s) => !s)}
                    aria-haspopup="menu"
                    aria-expanded={servicesOpen}
                  >
                    Services <ChevronDown className="h-4 w-4" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-0 mt-2 w-48 overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
                      <ul className="py-1 text-sm">
                        {servicesMenu.map((s) => (
                          <li key={s.href}>
                            <Link href={s.href} className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setServicesOpen(false)}>
                              {s.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            }
            return (
              <Link key={n.href} href={n.href} className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                {n.label}
              </Link>
            )
          })}
          <Link href={'/#contact' as Route} className="btn btn-primary hidden md:inline-flex">
            Create Your Website
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button className="md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900 md:hidden">
          <div className="container flex flex-col py-2">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="py-2 text-sm" onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <div className="mt-1 rounded-md border border-gray-200 dark:border-gray-800">
              <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Services</div>
              {servicesMenu.map((s) => (
                <Link key={s.href} href={s.href} className="block px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setOpen(false)}>
                  {s.label}
                </Link>
              ))}
            </div>
            <Link href={'/#contact' as Route} className="btn btn-primary mt-2" onClick={() => setOpen(false)}>
              Create Your Website
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
