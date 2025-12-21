export type Lang = 'en' | 'az'

export const en = {
  common: {
    brand: 'Khayal Najafsoy',
    nav: {
      home: 'Home',
      services: 'Services',
      prices: 'Prices',
      contact: 'Contact',
      about: 'About',
      blog: 'Blog',
      projects: 'Projects',
    },
    ctaCreate: 'Create Your Website',
    contact: 'Contact',
    rights: 'All rights reserved.',
    viewPrices: 'View Prices',
  },
  home: {
    heroTitle: 'Build your presence with a modern portfolio',
    heroDesc: 'I design and build clean, responsive websites that highlight your brand and convert visitors into clients.',
    viewServices: 'View services',
    aboutTitle: 'About Me',
    aboutDesc: 'Khayal Najafsoy — Creative Specialist | FullStack Developer. I craft fast, accessible, and beautiful web experiences using Next.js, TypeScript, and Tailwind CSS. My focus is blending solid engineering with thoughtful design to boost your business outcomes.',
    skills: 'Skills',
    services: 'Services',
    boost: 'Boost Your Business',
    projects: 'Projects',
    blog: 'From the Blog',
    viewAll: 'View all',
    contact: 'Contact',
    form: {
      name: 'Name',
      namePh: 'Your name',
      email: 'Email',
      emailPh: 'you@example.com',
      message: 'Message',
      messagePh: 'How can I help?',
      send: 'Send Message',
      note: 'This is a placeholder form. Connect to your preferred form service to receive submissions.'
    },
    heroCarousel: {
      webDesign: 'Modern Web Design',
      seo: 'SEO Optimization',
      performance: 'High Performance'
    },
    premiumSolutions: 'Premium Web Solutions'
  },
  services: {
    title: 'Services',
    description: 'I help businesses ship fast, beautiful, and effective web products. From idea to launch: design, development, and optimization.',
    discover: 'Discover',
    discoverText: 'Understand goals, users, and scope via a quick workshop.',
    designBuild: 'Design & Build',
    designBuildText: 'Design system + implementation with Next.js, TS, Tailwind.',
    launchOptimize: 'Launch & Optimize',
    launchOptimizeText: 'Ship, measure, and iterate for performance and SEO.',
    startProject: 'Start your project',
    menu: {
      all: 'All Services',
      law: 'Law Business',
      ecommerce: 'E-commerce',
      saas: 'SaaS Dashboards',
      landing: 'Landing Pages'
    },
    cards: {
      ecommerce: { title: 'E-commerce', desc: 'High-performance storefronts with secure checkout.' },
      saas: { title: 'SaaS Dashboards', desc: 'Data-rich, fast dashboards for your product.' },
      landing: { title: 'Landing Pages', desc: 'Conversion-focused pages that drive results.' },
      law: { title: 'Law Business', desc: 'Specialized websites for legal practices to win client trust.' },
      webDesign: { title: 'Web Design', desc: 'Clean, modern UI with a focus on usability.' },
      devOpt: { title: 'Development & Optimization', desc: 'Best practices with Next.js, TypeScript, SEO.' }
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Choose a plan that fits your scope. Custom quotes available for unique needs.',
      tiers: {
        basic: { name: 'Basic', price: '$399', desc: 'Single landing page, mobile-first, baseline SEO.' },
        standard: { name: 'Standard', price: '$999', desc: 'Up to 5 pages, CMS setup, on-page SEO best practices.' },
        premium: { name: 'Premium', price: '$1999', desc: 'Custom UI, integrations, performance tuning, analytics.' }
      },
      getStarted: 'Get started'
    }
  },
  projects: {
    title: 'Projects',
    categories: {
      all: 'All',
      web: 'Websites',
      ecommerce: 'E-commerce',
      saas: 'SaaS',
      landing: 'Landing Pages'
    }
  }
}

export type Dictionary = typeof en
