import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'

export const metadata = {
  title: 'About | Portfolio',
  description: 'About Khayal Najafsoy — Creative Specialist and FullStack Developer.'
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-16">
        <div className="container">
          <div className="grid items-start gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight">About Me</h1>
              <p className="max-w-prose text-gray-600 dark:text-gray-300">
                I’m <strong>Khayal Najafsoy</strong>, a Creative Specialist and FullStack Developer who blends design and engineering to build clean, fast, and accessible web experiences. I focus on solving business problems with thoughtful UX, strong technical foundations, and maintainable code.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-gray-700 dark:text-gray-300">
                <p>• Core stack: Next.js, TypeScript, React, Tailwind CSS, Node.js</p>
                <p>• Practices: Performance, Accessibility, SEO, Testing</p>
                <p>• Services: Product websites, landing pages, dashboards, and more</p>
              </div>
            </div>
            <div className="justify-self-center">
              <Image src="/profile.svg" alt="Khayal Najafsoy" width={200} height={200} className="h-40 w-40 rounded-full border border-gray-200 dark:border-gray-800 md:h-52 md:w-52" />
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-2 text-lg font-semibold">Experience</h2>
              <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-300">
                <li>5+ years building production web apps</li>
                <li>Delivered multi-page marketing sites and SaaS dashboards</li>
                <li>Led performance and accessibility improvements</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-2 text-lg font-semibold">Values</h2>
              <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-300">
                <li>User-first: clarity and accessibility</li>
                <li>Engineering excellence: testing and maintainability</li>
                <li>Business impact: measurable outcomes</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-2 text-lg font-semibold">Stack & Tools</h2>
              <ul className="list-inside list-disc text-sm text-gray-600 dark:text-gray-300">
                <li>Next.js, React, TypeScript</li>
                <li>Tailwind CSS, Radix/shadcn</li>
                <li>Node.js, Prisma, PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
