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
    heroTitle: 'Building products that matter.',
    heroDesc: 'Founder of Bitig.az, Danyeri.az, and TechTurk.az. I build digital platforms that serve Azerbaijani-speaking communities.',
    viewServices: 'View services',
    viewProjects: 'View Projects',
    aboutTitle: 'The Vision',
    aboutDesc: 'I believe in building products that solve real problems for real people. Every platform I create is driven by a mission — to empower Azerbaijani-speaking communities with modern digital tools. From preserving our literary heritage on Bitig.az to connecting people on Danyeri.az and covering innovation on TechTurk.az, my work is defined by impact, not just code.',
    moreAboutMe: 'About Me',
    skills: 'Tech Stack',
    services: 'Services',
    servicesDesc: 'Transforming ideas into digital reality with cutting-edge technologies.',
    boost: 'Boost Your Business',
    projects: 'Projects',
    blog: 'From the Blog',
    viewAll: 'View all',
    contact: 'Get in Touch',
    contactDesc: 'Have an idea worth building? Let\'s talk.',
    letstalk: 'Let\'s talk',
    form: {
      name: 'Name',
      namePh: 'Your name',
      email: 'Email',
      emailPh: 'you@example.com',
      message: 'Message',
      messagePh: 'Tell me about your project...',
      send: 'Send Message',
      sending: 'Sending...',
      sent: 'Message sent!',
      error: 'Something went wrong. Please try again.',
      note: 'This is a placeholder form.'
    },
    heroCarousel: {
      webDesign: 'Modern Web Design',
      seo: 'SEO Optimization',
      performance: 'High Performance'
    },
    premiumSolutions: 'Founder',
    stats: {
      frontend: 'Bitig.az',
      frontendDesc: 'Language & Literature',
      backend: 'Danyeri.az',
      backendDesc: 'Dating Platform',
      design: 'TechTurk.az',
      designDesc: 'Tech News Hub',
      strategy: 'Vision',
      strategyDesc: 'Impact Driven'
    },
    serviceItems: {
      webDev: 'Web Development',
      webDevDesc: 'High-performance websites using Next.js & React.',
      mobileApps: 'Mobile Apps',
      mobileAppsDesc: 'Cross-platform solutions tailored for iOS & Android.',
      uiUx: 'UI/UX Design',
      uiUxDesc: 'Intuitive designs that drive user engagement.',
      learnMore: 'Learn more'
    }
  },
  services: {
    title: 'Services',
    description: 'I help businesses ship fast, beautiful, and effective web products.',
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
      law: { title: 'Law Business', desc: 'Specialized websites for legal practices.' },
      webDesign: { title: 'Web Design', desc: 'Clean, modern UI with a focus on usability.' },
      devOpt: { title: 'Development & Optimization', desc: 'Best practices with Next.js, TypeScript, SEO.' }
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Choose a plan that fits your scope.',
      tiers: {
        basic: { name: 'Basic', price: '$399', desc: 'Single landing page, mobile-first.' },
        standard: { name: 'Standard', price: '$999', desc: 'Up to 5 pages, CMS setup.' },
        premium: { name: 'Premium', price: '$1999', desc: 'Custom UI, integrations, performance.' }
      },
      getStarted: 'Get started'
    },
    whatIOffer: 'What I Offer',
    offerDesc: 'Specialized services tailored to your needs',
    viewDetails: 'Learn more',
    howItWorks: 'How It Works',
    howItWorksDesc: 'Simple, transparent process from idea to launch',
    whyWorkWithMe: 'Why Work With Me',
    benefits: {
      fastTurnaround: 'Fast turnaround times',
      modernTech: 'Modern tech stack',
      seoOptimized: 'SEO optimized',
      responsiveDesign: 'Responsive design',
      cleanCode: 'Clean, maintainable code',
      ongoingSupport: 'Ongoing support'
    },
  },
  projects: {
    title: 'Projects',
    subtitle: 'Platforms I\'ve built to serve Azerbaijani-speaking communities.',
    categories: {
      all: 'All',
      web: 'Websites',
      ecommerce: 'E-commerce',
      saas: 'SaaS',
      landing: 'Landing Pages'
    },
    viewCaseStudy: 'Visit Project',
    noPreview: 'No Preview',
    filter: 'Filter'
  }
}

export type Dictionary = typeof en
