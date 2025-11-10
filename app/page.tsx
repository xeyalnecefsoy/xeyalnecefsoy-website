import { Header } from '@/components/header'
import Link from 'next/link'
import { Carousel } from '@/components/carousel'
import type { Route } from 'next'
import Image from 'next/image'
import { Code, Cpu, Database, Gauge, Layout, Rocket, Server, TestTube2, TrendingUp } from 'lucide-react'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="border-b border-gray-200 bg-gradient-to-b from-brand/5 to-transparent py-20 dark:border-gray-800">
          <div className="container grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
                Build your presence with a modern portfolio
              </h1>
              <p className="mb-8 max-w-prose text-gray-600 dark:text-gray-300">
                I design and build clean, responsive websites that highlight your brand and convert visitors into clients.
              </p>
              <div className="flex gap-3">
                <a href="#contact" className="btn btn-primary">Create Your Website</a>
                <a href="#services" className="btn btn-ghost">View services</a>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="aspect-video w-full rounded-md bg-gradient-to-tr from-brand/20 via-brand/5 to-transparent" />
            </div>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="py-16">
          <div className="container container-prose">
            <h2 className="mb-4">About Me</h2>
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <p className="max-w-prose text-gray-600 dark:text-gray-300">
                <strong>Khayal Najafsoy</strong> — Creative Specialist | FullStack Developer. I craft fast, accessible, and beautiful web experiences using Next.js, TypeScript, and Tailwind CSS. My focus is blending solid engineering with thoughtful design to boost your business outcomes.
              </p>
              <div className="justify-self-center">
                <Image src="/profile.svg" alt="Khayal Najafsoy" width={160} height={160} className="h-32 w-32 rounded-full border border-gray-200 dark:border-gray-800 md:h-40 md:w-40" />
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-y border-gray-200 py-16 dark:border-gray-800">
          <div className="container">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">Skills</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[
                { label: 'Next.js', icon: Rocket },
                { label: 'TypeScript', icon: Code },
                { label: 'React', icon: Layout },
                { label: 'Tailwind CSS', icon: Layout },
                { label: 'Node.js', icon: Server },
                { label: 'REST & GraphQL', icon: Database },
                { label: 'Prisma & Databases', icon: Database },
                { label: 'Testing (Jest, RTL)', icon: TestTube2 },
                { label: 'Performance & SEO', icon: Gauge },
              ].map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 text-sm dark:border-gray-800 dark:bg-gray-900">
                  <Icon className="h-5 w-5 text-brand" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16">
          <div className="container">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">Services</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: 'Web Design', desc: 'Clean, modern UI with a focus on usability.', icon: Layout },
                { title: 'Development', desc: 'Next.js, TypeScript, Tailwind CSS best practices.', icon: Code },
                { title: 'Optimization', desc: 'SEO, performance, and accessibility improvements.', icon: TrendingUp },
              ].map(({ title, desc, icon: Icon }) => (
                <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                  <Icon className="mb-3 h-6 w-6 text-brand" />
                  <h3 className="mb-1 font-semibold">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Boost Your Business - Carousel */}
        <section id="boost" className="border-y border-gray-200 py-16 dark:border-gray-800">
          <div className="container">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">Boost Your Business</h2>
            <Carousel
              items={[
                { title: 'Convert More', desc: 'High-converting landing pages tailored to your audience.' },
                { title: 'Faster Websites', desc: 'Performance-focused builds for better UX and SEO.' },
                { title: 'Stronger Brand', desc: 'Clean design systems and consistent visual language.' },
              ]}
            />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16">
          <div className="container">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">Projects</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
                  <div className="aspect-video w-full bg-gradient-to-tr from-brand/20 via-brand/5 to-transparent transition group-hover:scale-105" />
                  <div className="p-4">
                    <div className="font-medium">Project {i}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Short description goes here.</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog teaser */}
        <section id="blog" className="border-y border-gray-200 py-16 dark:border-gray-800">
          <div className="container">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">From the Blog</h2>
              <Link href={'/blog' as Route} className="text-sm text-brand hover:underline">View all</Link>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <article key={i} className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
                  <div className="mb-3 aspect-video w-full rounded-md bg-gradient-to-tr from-brand/10 via-brand/5 to-transparent" />
                  <h3 className="font-medium">Blog Post Title {i}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Short summary of the post.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16">
          <div className="container">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight md:text-3xl">Contact</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <form className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm" htmlFor="name">Name</label>
                  <input id="name" placeholder="Your name" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-brand dark:border-gray-700 dark:bg-gray-900" />
                </div>
                <div>
                  <label className="mb-1 block text-sm" htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="you@example.com" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-brand dark:border-gray-700 dark:bg-gray-900" />
                </div>
                <div>
                  <label className="mb-1 block text-sm" htmlFor="message">Message</label>
                  <textarea id="message" rows={5} placeholder="How can I help?" className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-brand dark:border-gray-700 dark:bg-gray-900" />
                </div>
                <button type="button" className="btn btn-primary">Send Message</button>
                <p className="text-xs text-gray-500">This is a placeholder form. Connect to your preferred form service to receive submissions.</p>
              </form>

              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <p><strong>Email:</strong> you@domain.com</p>
                  <p><strong>Location:</strong> Your City, Country</p>
                  <p><strong>Socials:</strong> <Link href="#" className="text-brand hover:underline">LinkedIn</Link> · <Link href="#" className="text-brand hover:underline">GitHub</Link></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
