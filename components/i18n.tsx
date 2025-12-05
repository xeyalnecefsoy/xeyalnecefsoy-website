"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { en, type Dictionary } from '@/i18n/en'
import { az } from '@/i18n/az'

export type Lang = 'en' | 'az'

type I18nContextType = {
  lang: Lang
  t: Dictionary
  setLang: (l: Lang) => void
}

const I18nContext = createContext<I18nContextType | null>(null)

const DICTS: Record<Lang, Dictionary> = {
  en,
  az,
}

const STORAGE_KEY = 'site-lang'

export function I18nProvider({ children, initialLang = 'en' as Lang }: { children: React.ReactNode; initialLang?: Lang }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? (localStorage.getItem(STORAGE_KEY) as Lang | null) : null
    if (stored && (stored === 'en' || stored === 'az')) {
      setLang(stored)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang)
      document.documentElement.setAttribute('lang', lang)
    }
  }, [lang])

  const value = useMemo(() => ({ lang, t: DICTS[lang], setLang }), [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
