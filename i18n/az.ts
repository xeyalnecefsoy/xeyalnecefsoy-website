import type { Dictionary } from './en'

export const az: Dictionary = {
  common: {
    brand: 'Xəyal Nəcəfsoy',
    nav: {
      home: 'Ana səhifə',
      services: 'Xidmətlər',
      prices: 'Qiymətlər',
      contact: 'Əlaqə',
      about: 'Haqqımda',
      blog: 'Bloq',
      projects: 'Layihələr',
    },
    ctaCreate: 'Saytınızı yaradın',
    contact: 'Əlaqə',
    rights: 'Bütün hüquqlar qorunur.',
    viewPrices: 'Qiymətlərə bax',
  },
  home: {
    heroTitle: 'Biznesiniz üçün Peşəkar və Müasir Veb Həllər',
    heroDesc: 'Brendinizi önə çıxaran, ziyarətçiləri müştəriyə çevirən sürətli və keyfiyyətli veb saytlar hazırlayıram.',
    viewServices: 'Xidmətlərə bax',
    aboutTitle: 'Haqqımda',
    aboutDesc: 'Xəyal Nəcəfsoy — Kreativ Mütəxəssis | FullStack Developer. Next.js, TypeScript və Tailwind CSS ilə sürətli, əlçatan və gözəl veb təcrübələr yaradıram. Məqsədim möhkəm mühəndisliyi düşünülmüş dizaynla birləşdirərək biznes nəticələrinizi yaxşılaşdırmaqdır.',
    moreAboutMe: 'Haqqımda daha çox',
    skills: 'İstifadə etdiyim texnologiyalar',
    services: 'Xidmətlər',
    servicesDesc: 'İdeyaları qabaqcıl texnologiyalarla rəqəmsal reallığa çevirirəm.',
    boost: 'Biznesinizi gücləndirin',
    projects: 'Layihələr',
    blog: 'Bloq',
    viewAll: 'Hamısına bax',
    contact: 'Əlaqə',
    contactDesc: 'Layihənizi müzakirə etmək üçün yazın. Hər zaman yeni ideyalara açığam.',
    letstalk: 'Gəlin danışaq',
    form: {
      name: 'Ad',
      namePh: 'Adınız',
      email: 'Email',
      emailPh: 'siz@example.com',
      message: 'Mesaj',
      messagePh: 'Layihəniz barədə danışın...',
      send: 'Mesajı göndər',
      sending: 'Göndərilir...',
      sent: 'Mesaj göndərildi!',
      error: 'Xəta baş verdi, yenidən cəhd edin.',
      note: 'Bu form demo rejimdədir.'
    },
    heroCarousel: {
      webDesign: 'Müasir Veb Dizayn',
      seo: 'SEO Optimizasiyası',
      performance: 'Yüksək Performans'
    },
    premiumSolutions: 'Premium Veb Həlləri',
    stats: {
      frontend: 'Frontend',
      frontendDesc: 'Müasir & Responsiv',
      backend: 'Backend',
      backendDesc: 'Miqyaslanan & Təhlükəsiz',
      design: 'Dizayn',
      designDesc: 'Təmiz & Estetik',
      strategy: 'Strategiya',
      strategyDesc: 'İnkişaf yönümlü'
    },
    serviceItems: {
      webDev: 'Veb İnkişafı',
      webDevDesc: 'Next.js və React istifadə edərək yüksək performanslı saytlar.',
      mobileApps: 'Mobil Tətbiqlər',
      mobileAppsDesc: 'iOS və Android üçün çarpaz platformalı həllər.',
      uiUx: 'UI/UX Dizayn',
      uiUxDesc: 'İstifadəçi əlaqəsini artıran intuitiv dizaynlar.',
      learnMore: 'Daha ətraflı'
    }
  },
  services: {
    title: 'Xidmətlər',
    description: 'Fikirdən yayıma qədər: dizayn, inkişaf və optimizasiya ilə sürətli, gözəl və effektiv veb məhsullar hazırlayıram.',
    discover: 'Kəşf',
    discoverText: 'Məqsədlər, istifadəçilər və çərçivəni qısa workshop-la müəyyən edirik.',
    designBuild: 'Dizayn və İnkişaf',
    designBuildText: 'Design system + Next.js, TS, Tailwind ilə implementasiya.',
    launchOptimize: 'Yayım və Optimizasiya',
    launchOptimizeText: 'Performans və SEO üçün ölç, təkmilləşdir və yenilə.',
    startProject: 'Layihənizə başlayın',
    menu: {
      all: 'Bütün xidmətlər',
      law: 'Hüquq biznesi',
      ecommerce: 'E-ticarət',
      saas: 'SaaS Dashboardlar',
      landing: 'Landing səhifələr'
    },
    cards: {
      ecommerce: { title: 'E-ticarət', desc: 'Yüksək performanslı vitrin və təhlükəsiz ödəniş.' },
      saas: { title: 'SaaS Dashboardlar', desc: 'Məlumat yönümlü, sürətli idarəetmə panelləri.' },
      landing: { title: 'Landing səhifələr', desc: 'Konversiyaya yönəlmiş səhifələr.' },
      law: { title: 'Hüquq biznesi', desc: 'Hüquq firmaları üçün etibarı artıran saytlər.' },
      webDesign: { title: 'Veb Dizayn', desc: 'İstifadə rahatlığına fokuslanan təmiz, müasir UI.' },
      devOpt: { title: 'İnkişaf və Optimizasiya', desc: 'Next.js, TypeScript, SEO üzrə ən yaxşı təcrübələr.' }
    },
    pricing: {
      title: 'Qiymətlər',
      subtitle: 'Tipik tələblər üçün şəffaf paketlər. Fərdi təkliflər mümkündür.',
      tiers: {
        basic: { name: 'Basic', price: '$399', desc: '1 səhifə landing, responsiv, əsas SEO.' },
        standard: { name: 'Standard', price: '$999', desc: '5 səhifəyə qədər, CMS hazır, on-page SEO.' },
        premium: { name: 'Premium', price: '$1999', desc: 'Fərdi dizayn, inteqrasiyalar, performans və analitika.' }
      },
      getStarted: 'Başla'
    },
    whatIOffer: 'Təklif etdiklərim',
    offerDesc: 'Biznes ehtiyaclarınıza uyğunlaşdırılmış xüsusi xidmətlər',
    viewDetails: 'Ətraflı bax',
    howItWorks: 'Necə İşləyir',
    howItWorksDesc: 'İdeyadan yayıma qədər sadə, şəffaf proses',
    whyWorkWithMe: 'Niyə Məni Seçməlisiniz',
    benefits: {
      fastTurnaround: 'Sürətli Təhvil',
      modernTech: 'Müasir Texnologiyalar',
      seoOptimized: 'SEO Optimizasiya',
      responsiveDesign: 'Responsiv Dizayn',
      cleanCode: 'Təmiz Kod',
      ongoingSupport: 'Davamlı Dəstək'
    },
  },
  projects: {
    title: 'Layihələr',
    subtitle: 'Son işlərimə nəzər salın və bizneslərin böyüməsinə necə kömək etdiyimi görün.',
    categories: {
      all: 'Hamısı',
      web: 'Saytlar',
      ecommerce: 'E-ticarət',
      saas: 'SaaS',
      landing: 'Landing səhifələr'
    },
    viewCaseStudy: 'Case Study',
    noPreview: 'Görüntü yoxdur',
    filter: 'Filtr'
  }
}
