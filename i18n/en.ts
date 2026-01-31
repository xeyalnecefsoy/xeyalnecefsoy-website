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
    moreAboutMe: 'More About Me',
    skills: 'Tech Stack',
    services: 'Services',
    servicesDesc: 'Transforming ideas into digital reality with cutting-edge technologies.',
    boost: 'Boost Your Business',
    projects: 'Projects',
    blog: 'From the Blog',
    viewAll: 'View all',
    contact: 'Contact',
    contactDesc: 'Interested in working together? Fill out the form or reach out directly. I\'m always open to discussing new projects and ideas.',
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
      note: 'This is a placeholder form. Connect to your preferred form service to receive submissions.'
    },
    heroCarousel: {
      webDesign: 'Modern Web Design',
      seo: 'SEO Optimization',
      performance: 'High Performance'
    },
    premiumSolutions: 'Premium Web Solutions',
    stats: {
      frontend: 'Frontend',
      frontendDesc: 'Modern & Responsive',
      backend: 'Backend',
      backendDesc: 'Scalable & Secure',
      design: 'Design',
      designDesc: 'Clean & Aesthetic',
      strategy: 'Strategy',
      strategyDesc: 'Growth Oriented'
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
    },
    whatIOffer: 'What I Offer',
    offerDesc: 'Specialized services tailored to your business needs',
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
    subtitle: 'Browse through my recent work and see how I help businesses grow.',
    categories: {
      all: 'All',
      web: 'Websites',
      ecommerce: 'E-commerce',
      saas: 'SaaS',
      landing: 'Landing Pages'
    },
    viewCaseStudy: 'View Case Study',
    noPreview: 'No Preview',
    filter: 'Filter'
  }
}

export type Dictionary = typeof en
