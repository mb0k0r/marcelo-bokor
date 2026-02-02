import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { ClientsSection } from '@/components/clients-section'
import { ProjectsSection } from '@/components/projects-section'
// import { ProcessSection } from '@/components/process-section'
import { ExperienceSection } from '@/components/experience-section'
import { TechStackSection } from '@/components/tech-stack-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactSection } from '@/components/contact-section'
import { Navigation } from '@/components/navigation'
import type { Locale } from '@/lib/content'
import { getContent } from '@/lib/content'

type HomePageProps = {
  locale: Locale
}

export function HomePage({ locale }: HomePageProps) {
  const content = getContent(locale)

  return (
    <div lang={locale === 'es-419' ? 'es' : 'en'} className="relative min-h-screen bg-background">
      <Navigation locale={locale} navigation={content.navigation} />
      <main className="relative">
        <HeroSection
          hero={content.hero}
          socialLinks={content.socialLinks}
          contactEmail={content.contact.email}
        />
        <ServicesSection locale={locale} />
        <ClientsSection locale={locale} />
        <ProjectsSection locale={locale} />
        {/* <ProcessSection locale={locale} /> */}
        <ExperienceSection locale={locale} />
        <TechStackSection locale={locale} />
        <TestimonialsSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
    </div>
  )
}
