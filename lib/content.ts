import type { LucideIcon } from 'lucide-react'
import {
  Bot,
  Code2,
  LayoutDashboard,
  Zap,
  MessageSquare,
  FileSearch,
  Code,
  Rocket,
} from 'lucide-react'

export type Locale = 'en' | 'es-419'

type ServiceItem = {
  icon: LucideIcon
  title: string
  description: string
  deliverables: string[]
  outcomes: string
}

type ProjectItem = {
  title: string
  problem: string
  solution: string
  result: string
  tech: string[]
  caseStudyHref: string
  videoSrc?: string
  videoPoster?: string
}

type ProcessStep = {
  icon: LucideIcon
  step: string
  title: string
  description: string
}

type ExperienceItem = {
  period: string
  role: string
  company: string
  description: string
  achievements: string[]
}

type TestimonialItem = {
  name: string
  role: string
  content: string
  initials: string
  image?: string
}

type ClientItem = {
  name: string
  logo: string
  width: number
  height: number
  href?: string
}

type ContentBundle = {
  localeLabel: string
  navigation: {
    services: string
    work: string
    process: string
    testimonials: string
    contactCta: string
    switchToEnglish: string
    switchToSpanish: string
  }
  hero: {
    name: string
    availability: string
    availabilityHref: string
    headline: string
    subheadline: string
    stats: string[]
    ctaPrimary: string
    ctaSecondary: string
  }
  sections: {
    services: { title: string; subtitle: string; outcomeLabel: string }
    clients: { eyebrow: string }
    projects: {
      title: string
      subtitle: string
      empty: string
      caseStudyCta: string
      labels: { problem: string; solution: string; result: string }
    }
    process: {
      title: string
      subtitle: string
      outcomesTitle: string
      engagement: string
      cardMeta: string
    }
    experience: { title: string; subtitle: string }
    stack: { title: string; subtitle: string }
    testimonials: { title: string; subtitle: string }
    contact: { footer: string }
  }
  services: ServiceItem[]
  clients: ClientItem[]
  projects: ProjectItem[]
  processSteps: ProcessStep[]
  processOutcomes: string[]
  experience: ExperienceItem[]
  techStack: Record<string, string[]>
  testimonials: TestimonialItem[]
  contact: {
    headline: string
    description: string
    email: string
    calendly: string
    emailCta: string
    callCta: string
  }
  socialLinks: Array<{ label: string; href: string }>
}

const sharedClients: ClientItem[] = [
  {
    name: 'Axxon',
    logo: '/trustedclients/trusted-axxon.png',
    width: 180,
    height: 60,
    href: 'https://www.axxonconsulting.com/',
  },
  {
    name: 'Loginter',
    logo: '/trustedclients/trusted-loginter.png',
    width: 180,
    height: 60,
    href: 'https://www.loginter.com.ar/',
  },
  {
    name: 'Loyal',
    logo: '/trustedclients/trusted-loyal.jpeg',
    width: 180,
    height: 60,
    href: 'https://loyal-solutions.com/es/',
  },
  {
    name: 'Neurostreet',
    logo: '/trustedclients/trusted-neurostreet.png',
    width: 200,
    height: 60,
    href: 'https://www.neurostreet.com/#home',
  },
  {
    name: 'Niuro',
    logo: '/trustedclients/trusted-niuro.jpeg',
    width: 180,
    height: 60,
    href: 'https://niuro.io/talent',
  },
  {
    name: 'Pink Coconut',
    logo: '/trustedclients/trusted-pinkcoconut.jpeg',
    width: 190,
    height: 60,
    href: 'https://www.pinkcoconut.studio/',
  },
  {
    name: 'Tald',
    logo: '/trustedclients/trusted-tald.png',
    width: 160,
    height: 60,
    href: 'https://www.tald.co/',
  },
  {
    name: 'Tickblaze',
    logo: '/trustedclients/trusted-tickblaze.webp',
    width: 190,
    height: 60,
    href: 'https://tickblaze.com/',
  },
  {
    name: 'Vokal',
    logo: '/trustedclients/trusted-vokal.jpeg',
    width: 160,
    height: 60,
    href: 'https://www.vokal.io/',
  },
]

const projectsEn: ProjectItem[] = [
  {
    title: 'Vokal',
    problem: 'An outdated site and slow UX were limiting visibility and conversions.',
    solution: 'Rebuilt the website from zero in Next.js with a fast, modern UI and clean CMS-ready structure.',
    result: 'Significant performance gains, faster loads, and a polished experience now live in production.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
    caseStudyHref: '/case-studies/vokal',
    videoSrc: '/featuredprojects/fp-vokal.mp4',
    videoPoster: '/featuredprojects/poster-vokal.png',
  },
  {
    title: 'TALD',
    problem: 'Legacy front-end and infrastructure were slowing feature delivery.',
    solution: 'Rebuilt the site from scratch in Next.js with optimized performance and scalable structure.',
    result: 'Production site is faster, more reliable, and built to scale for future growth.',
    tech: ['Next.js', 'React', 'MUI', 'Node.js'],
    caseStudyHref: '/case-studies/tald',
    videoSrc: '/featuredprojects/fp-tald.mp4',
    videoPoster: '/featuredprojects/poster-tald.png',
  },
  {
    title: 'Pink Coconut',
    problem: 'Brand presence needed a premium experience and faster launches.',
    solution: 'Rebuilt the site from zero in Next.js with a streamlined build system and optimized assets.',
    result: 'Faster launches, improved UX, and a production site used daily by clients.',
    tech: ['Next.js', 'TailwindCSS', 'React', 'Vercel'],
    caseStudyHref: '/case-studies/pink-coconut',
    videoSrc: '/featuredprojects/fp-pink.mp4',
    videoPoster: '/featuredprojects/poster-pink.png',
  },
  {
    title: 'Tickblaze',
    problem: 'Marketing site needed speed, clarity, and modern UX to convert.',
    solution: 'Rebuilt the website in Next.js with performance budgets and clean UI architecture.',
    result: 'Live production site with faster load times and stronger conversion flow.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS'],
    caseStudyHref: '/case-studies/tickblaze',
    videoSrc: '/featuredprojects/fp-tickblaze.mp4',
    videoPoster: '/featuredprojects/poster-tickblaze.png',
  },
]

const projectsEs: ProjectItem[] = [
  {
    title: 'Vokal',
    problem: 'Un sitio desactualizado y una UX lenta limitaban la visibilidad y conversión.',
    solution: 'Rehice el sitio desde cero en Next.js con UI moderna y estructura lista para CMS.',
    result: 'Mejora clara de performance, carga más rápida y experiencia pulida en producción.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
    caseStudyHref: '/case-studies/vokal',
    videoSrc: '/featuredprojects/fp-vokal.mp4',
    videoPoster: '/featuredprojects/poster-vokal.png',
  },
  {
    title: 'TALD',
    problem: 'El front legado y la infraestructura limitaban la velocidad de entrega.',
    solution: 'Rehice el sitio desde cero en Next.js con foco en performance y escalabilidad.',
    result: 'Sitio en producción más rápido, confiable y listo para crecer.',
    tech: ['Next.js', 'React', 'MUI', 'Node.js'],
    caseStudyHref: '/case-studies/tald',
    videoSrc: '/featuredprojects/fp-tald.mp4',
    videoPoster: '/featuredprojects/poster-tald.png',
  },
  {
    title: 'Pink Coconut',
    problem: 'La marca necesitaba una experiencia premium y lanzamientos más rápidos.',
    solution: 'Rehice el sitio desde cero en Next.js con build optimizado y assets ligeros.',
    result: 'Lanzamientos más rápidos, mejor UX y sitio en producción de uso diario.',
    tech: ['Next.js', 'TailwindCSS', 'React', 'Vercel'],
    caseStudyHref: '/case-studies/pink-coconut',
    videoSrc: '/featuredprojects/fp-pink.mp4',
    videoPoster: '/featuredprojects/poster-pink.png',
  },
  {
    title: 'Tickblaze',
    problem: 'El sitio necesitaba velocidad, claridad y UX moderna para convertir.',
    solution: 'Rehice el sitio en Next.js con presupuesto de performance y UI limpia.',
    result: 'Sitio en producción con carga más rápida y mejor conversión.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS'],
    caseStudyHref: '/case-studies/tickblaze',
    videoSrc: '/featuredprojects/fp-tickblaze.mp4',
    videoPoster: '/featuredprojects/poster-tickblaze.png',
  },
]

const sharedTechStack = {
  Frontend: [
    'React',
    'Next.js',
    'TypeScript',
    'TailwindCSS',
    'Framer Motion',
    'Zustand',
    'React Query',
    'Shadcn UI',
  ],
  Backend: ['Node.js', 'Express', 'tRPC', 'GraphQL', 'REST APIs', 'WebSocket', 'Prisma'],
  Database: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Supabase'],
  'DevOps & Tools': ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'CI/CD', 'Terraform', 'Monitoring', 'Git'],
}

const sharedExperience: ExperienceItem[] = [
  {
    period: 'Jun 2025 - Present',
    role: 'Full Stack Engineer (Remote)',
    company: 'Niuro',
    description:
      'Leading client engagement with NeuroStreet as Frontend Team Lead and delivering multiple high-impact platforms.',
    achievements: [
      'Led frontend architecture for trading management dashboards with AWS integrations, high-performance grids, and reactive charting in Next.js.',
      'Built a medical management platform for Pasley Hill and Patriot Medical Distributors with Svelte + Node.js, deployed on AWS.',
      'Designed a fully automated hiring platform, boosting hiring efficiency by 300%+ with end-to-end workflow automation.',
    ],
  },
  {
    period: 'Sep 2024 - Jun 2025',
    role: 'Full Stack Engineer (Remote - Chicago, IL)',
    company: 'Vokal',
    description:
      'Built and maintained vokal.io with Next.js and Tailwind CSS, improving performance and UX.',
    achievements: [
      'Delivered a patient scheduling platform for WellNow Urgent Care to reduce queues and improve throughput during flu season.',
      'Integrated social APIs and analytics (GA, Supermetrics) using Python and Next.js; deployed on AWS.',
    ],
  },
  {
    period: 'Aug 2024 - May 2025',
    role: 'Full Stack Engineer (Remote - Atlanta, GA)',
    company: 'TALD',
    description:
      'Rebuilt the core platform with Next.js, MUI, Node.js, and MongoDB to improve scalability.',
    achievements: [
      'Implemented Stripe and Customer.io flows, automating over 70% of user communication.',
      'Built an internal admin panel that reduced support tickets by 44%.',
    ],
  },
  {
    period: 'May 2022 - Oct 2024',
    role: 'Full Stack Engineer & Team Lead (Remote - Miami, FL)',
    company: 'Pink Coconut Creative',
    description:
      'Delivered high-end real estate sites using React-based stacks for clients like Neology Life and Natiivo.',
    achievements: [
      'Led a cross-functional team to design a custom CMS, reducing launch times by 70%.',
      'Built pinkcoconut.studio using Next.js and Tailwind, improving site speed and UX.',
    ],
  },
  {
    period: 'Oct 2021 - Aug 2024',
    role: 'Dynamics 365, F&O, Retail and Commerce (Remote - Buenos Aires, AR)',
    company: 'Axxon Consulting',
    description:
      'Improved POS operations for Retail clients like VU Security and DABRA through tailored Dynamics 365 solutions.',
    achievements: [
      'Developed .NET Core integrations that increased inventory sync performance by 60%.',
      'Extended ERP modules with Chain of Command, custom tables/fields, and X++ packages.',
      'Managed requirements for five major Retail & Commerce clients with fast delivery.',
    ],
  },
  {
    period: 'Jan 2021 - Oct 2021',
    role: '.NET Developer (Hybrid - Buenos Aires, AR)',
    company: 'Loginter S.A.',
    description:
      'Built internal tools with .NET Core and Google APIs to reduce manual workflows.',
    achievements: [
      'Improved client management by streamlining administrative workflows.',
      'Saved 10+ hours per week by automating recurring operational tasks.',
      'Built mobile and SSO tools with Blazor/Xamarin to unify access and logging.',
    ],
  },
  {
    period: 'Sep 2020 - Dec 2020',
    role: '.NET Developer (Remote - Buenos Aires, AR)',
    company: 'Loyal Solutions',
    description:
      'Built and maintained web apps for agrochemical platforms serving Bayer Paraguay and Bolivia.',
    achievements: [
      'Developed MVC applications with .NET Core and Razor for content and data management.',
      'Collaborated using Team Foundation Server (TFS) within an enterprise workflow.',
    ],
  },
  {
    period: 'Jan 2020 - Sep 2020',
    role: '.NET Developer (On-site - Buenos Aires, AR)',
    company: 'Koppen Group Ltd',
    description:
      'Supported and developed .NET MVC applications for customer data management systems.',
    achievements: [
      'Provided direct technical support to enterprise clients including Claro, Telecom, and American Tower.',
      'Worked with Bentley engine integrated with Oracle SQL for large-scale datasets.',
    ],
  },
]

const experienceEs: ExperienceItem[] = [
  {
    period: 'Jun 2025 - Presente',
    role: 'Full Stack Engineer (Remoto)',
    company: 'Niuro',
    description:
      'Liderando una relacion con NeuroStreet como Frontend Team Lead y entregando multiples plataformas de alto impacto.',
    achievements: [
      'Lidere la arquitectura frontend para dashboards de trading con integraciones en AWS, grillas de alto rendimiento y charting reactivo en Next.js.',
      'Construí una plataforma médica para Pasley Hill y Patriot Medical Distributors con Svelte + Node.js, desplegada en AWS.',
      'Diseñé una plataforma de hiring totalmente automatizada, mejorando la eficiencia en 300%+ con automatizacion end-to-end.',
    ],
  },
  {
    period: 'Sep 2024 - Jun 2025',
    role: 'Full Stack Engineer (Remoto - Chicago, IL)',
    company: 'Vokal',
    description:
      'Construí y mantuve vokal.io con Next.js y Tailwind CSS, mejorando performance y UX.',
    achievements: [
      'Desarrollé una plataforma de turnos para WellNow Urgent Care para reducir colas y mejorar el flujo en temporada de gripe.',
      'Integré APIs sociales y analíticas (GA, Supermetrics) con Python y Next.js; desplegado en AWS.',
    ],
  },
  {
    period: 'Aug 2024 - May 2025',
    role: 'Full Stack Engineer (Remoto - Atlanta, GA)',
    company: 'TALD',
    description:
      'Rehice la plataforma core con Next.js, MUI, Node.js y MongoDB para mejorar escalabilidad.',
    achievements: [
      'Implementé flujos con Stripe y Customer.io, automatizando mas del 70% de la comunicacion.',
      'Desarrollé un panel interno que redujo tickets de soporte en 44%.',
    ],
  },
  {
    period: 'May 2022 - Oct 2024',
    role: 'Full Stack Engineer & Team Lead (Remoto - Miami, FL)',
    company: 'Pink Coconut Creative',
    description:
      'Entregué sitios inmobiliarios de alto nivel con stacks React para clientes como Neology Life y Natiivo.',
    achievements: [
      'Lidere un equipo cross-funcional para diseñar un CMS a medida, reduciendo tiempos de lanzamiento en 70%.',
      'Construí pinkcoconut.studio con Next.js y Tailwind, mejorando velocidad y UX.',
    ],
  },
  {
    period: 'Oct 2021 - Aug 2024',
    role: 'Dynamics 365, F&O, Retail and Commerce (Remoto - Buenos Aires, AR)',
    company: 'Axxon Consulting',
    description:
      'Mejoré operaciones POS en Retail para clientes como VU Security y DABRA con soluciones Dynamics 365.',
    achievements: [
      'Desarrollé integraciones .NET Core que aumentaron la performance de sincronizacion de inventario en 60%.',
      'Extendí modulos ERP con Chain of Command, tablas/campos custom y paquetes X++.',
    ],
  },
  {
    period: 'Jan 2021 - Oct 2021',
    role: '.NET Developer (Hibrido - Buenos Aires, AR)',
    company: 'Loginter S.A.',
    description:
      'Construí herramientas internas con .NET Core y Google APIs para reducir trabajo manual.',
    achievements: [
      'Mejoré la gestion de clientes con flujos administrativos mas eficientes.',
      'Ahorre 10+ horas semanales automatizando tareas recurrentes.',
      'Construí herramientas mobile y SSO con Blazor/Xamarin para unificar acceso y logging.',
    ],
  },
  {
    period: 'Sep 2020 - Dec 2020',
    role: '.NET Developer (Remoto - Buenos Aires, AR)',
    company: 'Loyal Solutions',
    description:
      'Construí y mantuve apps web para plataformas agroquimicas de Bayer Paraguay y Bolivia.',
    achievements: [
      'Desarrollé aplicaciones MVC con .NET Core y Razor para contenido y datos.',
      'Colaboré con Team Foundation Server (TFS) en un flujo enterprise.',
    ],
  },
  {
    period: 'Jan 2020 - Sep 2020',
    role: '.NET Developer (Presencial - Buenos Aires, AR)',
    company: 'Koppen Group Ltd',
    description:
      'Soporté y desarrollé aplicaciones .NET MVC para sistemas de gestion de clientes.',
    achievements: [
      'Brindé soporte técnico directo a clientes enterprise como Claro, Telecom y American Tower.',
      'Trabajé con Bentley engine integrado con Oracle SQL para datasets a gran escala.',
    ],
  },
]


const sharedTestimonials: TestimonialItem[] = [
  {
    name: 'Nic Rosental',
    role: 'Fractional CTO, Tech Founder',
    content:
      "Marcelo is a great developer that can be counted on to deliver solid work, communicate well, and lift up the entire team. He has a great combination of skills and morale. He's a great team member that can be depended upon.",
    initials: 'NR',
    image: '/testimonial/nicpic.jpeg',
  },
  {
    name: 'Lautaro Gallardo',
    role: 'Full Stack Engineer',
    content:
      'The proactivity with which Marcelo faces challenges is undoubtedly one of the effective management ways to handle them, with good problem-solving and time-management skills, making him an asset to any team.',
    initials: 'LG',
    image: '/testimonial/lautapic.jpeg',
  },
  {
    name: 'Manuel Guerrero',
    role: 'Senior Product Manager',
    content:
      'Marcelo brought deep technical leadership to our team. Their ability to solve complex problems, unblock priorities fast, and communicate clearly across product and engineering made a lasting impact on delivery.',
    initials: 'MG',
    image: '/testimonial/manupic.jpeg',
  },
]

const content: Record<Locale, ContentBundle> = {
  en: {
    localeLabel: 'EN',
    navigation: {
      services: 'Services',
      work: 'Work',
      process: 'Process',
      testimonials: 'Testimonials',
      contactCta: 'Start a Project',
      switchToEnglish: 'Switch to English',
      switchToSpanish: 'Switch to Spanish',
    },
  hero: {
    name: 'Marcelo Bokor',
    availability: 'Available',
    headline: 'I build high-performance web platforms and automate business workflows with AI.',
    subheadline: 'Full-stack developer delivering SaaS products, internal tools, and AI automation for founders and CTOs.',
    stats: ['6+ years', 'Next.js', 'Full-stack', 'AI automation'],
    ctaPrimary: 'View Work',
    ctaSecondary: 'Book a Call',
    availabilityHref: 'https://wa.me/59891352887',
  },
    sections: {
      services: {
        title: 'Professional Services',
        subtitle: 'Comprehensive technical solutions designed to accelerate your business growth and operational efficiency.',
        outcomeLabel: 'Typical outcome',
      },
      clients: { eyebrow: 'Trusted by' },
      projects: {
        title: 'Featured Projects',
        subtitle: 'A selection of recent work showcasing full-stack expertise and modern development practices',
        empty: 'New case studies are being prepared. Check back soon.',
        caseStudyCta: 'Read case study',
        labels: {
          problem: 'Problem',
          solution: 'Solution',
          result: 'Result',
        },
      },
      process: {
        title: 'How I Work',
        subtitle: 'A structured approach to delivering high-quality solutions on time and within budget.',
        outcomesTitle: 'What you get',
        engagement: 'Flexible engagement models: project-based, retainer, or ongoing partner support.',
        cardMeta: 'Clear milestones and weekly check-ins',
      },
      experience: {
        title: 'Experience',
        subtitle: '6+ years building exceptional web applications',
      },
      stack: {
        title: 'Tech Stack',
        subtitle: 'Modern technologies and tools I use to build exceptional applications',
      },
      testimonials: {
        title: 'Testimonials',
        subtitle: 'What colleagues and clients say about working with me',
      },
      contact: {
        footer: '(c) {year} Marcelo Bokor. Built with Next.js and deployed on Vercel.',
      },
    },
    services: [
      {
        icon: Code2,
        title: 'Full-stack Websites & SaaS',
        description:
          'Production-ready web platforms built for growth, reliability, and clean handoff. From MVP to scale.',
        deliverables: ['Product strategy + scope', 'Responsive UI + API layer', 'Deployment + observability'],
        outcomes: 'Launch-ready stack with clear scaling path',
      },
      {
        icon: Bot,
        title: 'AI Automation (custom agents, integrations)',
        description:
          'Automate repetitive workflows with AI agents and integrations that actually stick.',
        deliverables: ['Custom AI agents + prompts', 'Workflow automations', 'Slack, CRM, and data sync'],
        outcomes: 'Hours saved every week through automation',
      },
      {
        icon: LayoutDashboard,
        title: 'Custom Dashboards & Internal Tools',
        description: 'Purpose-built tools that give your team clarity, faster decisions, and consistent operations.',
        deliverables: ['Admin dashboards', 'Role-based access', 'Reporting + exports'],
        outcomes: 'Single source of truth for your team',
      },
      {
        icon: Zap,
        title: 'AI-Powered Business Optimization',
        description: 'Identify bottlenecks and ship AI-powered improvements that reduce costs and increase throughput.',
        deliverables: ['Workflow audit', 'Automation roadmap', 'Performance improvements'],
        outcomes: 'Measurable efficiency gains in 30-60 days',
      },
    ],
    clients: sharedClients,
    projects: projectsEn,
    processSteps: [
      {
        icon: MessageSquare,
        step: '01',
        title: 'Discovery',
        description: 'Goals, constraints, and success metrics aligned in a focused kickoff.',
      },
      {
        icon: FileSearch,
        step: '02',
        title: 'Plan & Architecture',
        description: 'Technical plan, milestones, and scope lock with clear delivery path.',
      },
      {
        icon: Code,
        step: '03',
        title: 'Build & Iterate',
        description: 'Weekly demos, rapid feedback, and quality assurance baked in.',
      },
      {
        icon: Rocket,
        step: '04',
        title: 'Launch & Support',
        description: 'Ship with confidence, monitor performance, and refine post-launch.',
      },
    ],
    processOutcomes: [
      'Product requirements + technical documentation',
      'Clean handoff with tests and QA checklist',
      'CI/CD setup with staging and production',
      'Monitoring, analytics, and release notes',
    ],
    experience: sharedExperience,
    techStack: sharedTechStack,
    testimonials: sharedTestimonials,
    contact: {
      headline: 'Ready to build something great?',
      description:
        'Available for select projects. Whether you need a technical partner to build your SaaS, automate workflows, or scale operations, let\'s discuss how I can help.',
      email: 'dev.mbokor@gmail.com',
      calendly: 'https://calendly.com/dev-mbokor/30min',
      emailCta: 'Email me',
      callCta: 'Book a call',
    },
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/mb0k0r' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marcelo-bokor-336097197/' },
      { label: 'WhatsApp', href: 'https://wa.me/59891352887' },
    ],
  },
  'es-419': {
    localeLabel: 'ES',
    navigation: {
      services: 'Servicios',
      work: 'Proyectos',
      process: 'Proceso',
      testimonials: 'Testimonios',
      contactCta: 'Iniciar proyecto',
      switchToEnglish: 'Cambiar a inglés',
      switchToSpanish: 'Cambiar a español',
    },
  hero: {
    name: 'Marcelo Bokor',
    availability: 'Disponible',
    headline: 'Creo plataformas web de alto rendimiento y automatizo flujos de negocio con IA.',
    subheadline:
      'Desarrollador full-stack que entrega SaaS, herramientas internas y automatizaciones con IA para founders y CTOs.',
    stats: ['6+ años', 'Next.js', 'Full-stack', 'Automatización IA'],
    ctaPrimary: 'Ver trabajo',
    ctaSecondary: 'Agendar llamada',
    availabilityHref: 'https://wa.me/59891352887',
  },
    sections: {
      services: {
        title: 'Servicios profesionales',
        subtitle: 'Soluciones técnicas integrales para acelerar el crecimiento y la eficiencia operativa.',
        outcomeLabel: 'Resultado típico',
      },
      clients: { eyebrow: 'Con la confianza de' },
      projects: {
        title: 'Proyectos destacados',
        subtitle: 'Una selección de trabajos recientes con enfoque full-stack y prácticas modernas',
        empty: 'Nuevos casos de estudio en camino. Vuelve pronto.',
        caseStudyCta: 'Ver caso de estudio',
        labels: {
          problem: 'Problema',
          solution: 'Solución',
          result: 'Resultado',
        },
      },
      process: {
        title: 'Cómo trabajo',
        subtitle: 'Un proceso claro para entregar soluciones de calidad, a tiempo y dentro del presupuesto.',
        outcomesTitle: 'Lo que recibes',
        engagement: 'Modelos flexibles: por proyecto, retainer o soporte continuo.',
        cardMeta: 'Hitos claros y seguimiento semanal',
      },
      experience: {
        title: 'Experiencia',
        subtitle: '6+ años construyendo aplicaciones web de alto nivel',
      },
      stack: {
        title: 'Stack tecnológico',
        subtitle: 'Tecnologías modernas que uso para construir productos excepcionales',
      },
      testimonials: {
        title: 'Testimonios',
        subtitle: 'Referencias de profesionales y clientes',
      },
      contact: {
        footer: '(c) {year} Marcelo Bokor. Construido con Next.js y desplegado en Vercel.',
      },
    },
    services: [
      {
        icon: Code2,
        title: 'Webs full-stack y SaaS',
        description:
          'Plataformas listas para producción, pensadas para crecer, escalar y entregar valor rápido.',
        deliverables: ['Estrategia + alcance', 'UI responsiva + API', 'Deploy + observabilidad'],
        outcomes: 'Stack listo para lanzamiento y escalamiento',
      },
      {
        icon: Bot,
        title: 'Automatización con IA (agentes personalizados, integraciones)',
        description: 'Automatizo tareas repetitivas con agentes de IA e integraciones efectivas.',
        deliverables: ['Agentes personalizados + prompts', 'Automatizaciones de flujo', 'Integraciones con CRM y datos'],
        outcomes: 'Horas ahorradas cada semana',
      },
      {
        icon: LayoutDashboard,
        title: 'Dashboards y herramientas internas',
        description: 'Herramientas a medida para decisiones rápidas y operaciones consistentes.',
        deliverables: ['Paneles administrativos', 'Acceso por roles', 'Reportes y exportaciones'],
        outcomes: 'Fuente única de verdad para tu equipo',
      },
      {
        icon: Zap,
        title: 'Optimización del negocio con IA',
        description: 'Detecto cuellos de botella y aplico mejoras con IA que reducen costos.',
        deliverables: ['Auditoría de flujo', 'Roadmap de automatización', 'Mejoras de performance'],
        outcomes: 'Mejoras medibles en 30-60 días',
      },
    ],
    clients: sharedClients,
    projects: projectsEs,
    processSteps: [
      {
        icon: MessageSquare,
        step: '01',
        title: 'Descubrimiento',
        description: 'Alineamos objetivos, restricciones y métricas de éxito.',
      },
      {
        icon: FileSearch,
        step: '02',
        title: 'Plan y arquitectura',
        description: 'Definimos plan técnico, hitos y alcance con claridad.',
      },
      {
        icon: Code,
        step: '03',
        title: 'Construcción e iteración',
        description: 'Demos semanales, feedback rápido y QA continuo.',
      },
      {
        icon: Rocket,
        step: '04',
        title: 'Lanzamiento y soporte',
        description: 'Publicamos con confianza y refinamos post-lanzamiento.',
      },
    ],
    processOutcomes: [
      'Requisitos + documentación técnica',
      'Entrega limpia con tests y checklist QA',
      'CI/CD con staging y producción',
      'Monitoreo, analíticas y notas de versión',
    ],
    experience: experienceEs,
    techStack: sharedTechStack,
    testimonials: [
      {
        name: 'Nic Rosental',
        role: 'CTO fraccional, fundador tech',
        content:
          'Marcelo es un gran desarrollador en quien se puede confiar para entregar trabajo sólido, comunicarse bien y elevar al equipo. Tiene una excelente combinación de habilidades y actitud. Es un gran compañero en quien se puede depender.',
        initials: 'NR',
        image: '/testimonial/nicpic.jpeg',
      },
      {
        name: 'Lautaro Gallardo',
        role: 'Full Stack Engineer',
        content:
          'La proactividad con la que Marcelo enfrenta desafíos es, sin duda, una de las formas más efectivas de gestionarlos, con buenas habilidades de resolución de problemas y manejo del tiempo, lo que lo convierte en un gran activo para cualquier equipo.',
        initials: 'LG',
        image: '/testimonial/lautapic.jpeg',
      },
      {
        name: 'Manuel Guerrero',
        role: 'Senior Product Manager',
        content:
          'Marcelo aportó liderazgo técnico profundo al equipo. Su capacidad para resolver problemas complejos, destrabar prioridades rápido y comunicarse claramente entre producto e ingeniería tuvo un impacto real en la entrega.',
        initials: 'MG',
        image: '/testimonial/manupic.jpeg',
      },
    ],
    contact: {
      headline: '¿Listo para construir algo grande?',
        description:
          'Disponible para proyectos exclusivos. Si necesitas un socio técnico para tu SaaS, automatizar flujos o escalar operaciones, hablemos.',
      email: 'dev.mbokor@gmail.com',
      calendly: 'https://calendly.com/dev-mbokor/30min',
      emailCta: 'Escribime',
      callCta: 'Agendar llamada',
    },
    socialLinks: [
      { label: 'GitHub', href: 'https://github.com/mb0k0r' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/marcelo-bokor-336097197/' },
      { label: 'WhatsApp', href: 'https://wa.me/59891352887' },
    ],
  },
}

export function getContent(locale: Locale): ContentBundle {
  if (locale in content) {
    return content[locale]
  }
  return content.en
}
