"use client"

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ArrowUpRight } from 'lucide-react'
import { Footer } from '@/components/footer'
import { useI18n } from '@/components/i18n'
import { projects } from '@/data/projects'
import { useParams } from 'next/navigation'
import { type Locale } from '@/lib/routes'
import { motion, type Variants } from 'framer-motion'
import clsx from 'clsx'
import { Glow } from '@/components/ui/glow'
import { Section } from '@/components/ui/section'
import { cardBaseClass, cardHoverClass } from '@/components/ui/card'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18
    }
  }
}

export default function HomePage() {
  const { t, lang } = useI18n()
  const params = useParams<{ locale?: Locale }>()
  const locale: Locale = (params?.locale as Locale) || 'az'

  return (
    <div className="flex min-h-screen flex-col bg-black text-gray-100">
      <Header />

      <main className="flex-1">
        <Hero />

        {/* About / Vision Section */}
        <Section
          id="about"
          className="py-28 relative overflow-hidden noise-overlay"
          containerClassName="container relative"
          background={
            <>
              <Glow
                variant="brand"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[180px] bg-brand-500/[0.03]"
              />
              <Glow
                variant="accent"
                className="absolute -top-[20%] -right-[10%] w-[420px] h-[420px] blur-[150px] bg-brand-500/[0.02]"
              />
            </>
          }
        >
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-8 text-white">
                {t.home.aboutTitle}
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-14 max-w-2xl mx-auto">
                {t.home.aboutDesc}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto"
            >
              {[
                { l: t.home.stats.frontend, v: t.home.stats.frontendDesc },
                { l: t.home.stats.backend, v: t.home.stats.backendDesc },
                { l: t.home.stats.design, v: t.home.stats.designDesc },
                { l: t.home.stats.strategy, v: t.home.stats.strategyDesc },
              ].map((item) => (
                <motion.div
                  key={item.l}
                  variants={itemVariants}
                  className={clsx(cardBaseClass, cardHoverClass, 'p-5')}
                >
                  <div className="text-xs font-semibold tracking-wider uppercase mb-1 bg-gradient-to-r from-brand-400 to-blue-400 bg-clip-text text-transparent">
                    {item.l}
                  </div>
                  <div className="font-medium text-white/90">{item.v}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* Divider line */}
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-brand-500/[0.20] to-transparent" />
        </div>

        {/* Projects Section */}
        <Section
          id="projects"
          className="py-28 relative overflow-hidden noise-overlay"
          containerClassName="container relative"
          background={
            <>
              <div className="absolute inset-0 pointer-events-none bg-radial-brand bg-no-repeat bg-center opacity-35" />
              <div className="absolute inset-0 pointer-events-none bg-mesh-brand bg-no-repeat bg-cover opacity-22" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/45 via-transparent to-black/55" />
            </>
          }
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="text-center mb-16 relative z-10"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4 text-white">
              {t.home.projects}
            </h2>
            <p className="text-white/55 max-w-lg mx-auto">{t.projects.subtitle}</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto relative z-10"
          >
            {projects.map((p) => (
              <motion.div key={p.slug} variants={itemVariants}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    'group flex flex-col h-full p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:ring-offset-0',
                    cardBaseClass,
                    cardHoverClass
                  )}
                >
                  {/* Project Header */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="h-11 w-11 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 font-bold text-lg border border-brand-500/10">
                      {p.title[lang].charAt(0)}
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-white/55 transition-all duration-300 group-hover:text-brand-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <h3 className="text-lg font-bold mb-2.5 text-white group-hover:text-brand-400 transition-colors duration-300">
                    {p.title[lang]}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed flex-1">{p.desc[lang]}</p>

                  {p.url && (
                    <div className="mt-5 pt-4 border-t border-white/[0.06]">
                      <span className="text-xs font-mono text-white/45 group-hover:text-brand-400/70 transition-colors duration-300">
                        {p.url.replace('https://', '')}
                      </span>
                    </div>
                  )}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </Section>

      </main>
      <Footer />
    </div>
  )
}
