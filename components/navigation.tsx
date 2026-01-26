'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
// import { useRouter } from 'next/navigation'
import type { Locale } from '@/lib/content'

type NavigationProps = {
  locale: Locale
  navigation: {
    services: string
    work: string
    process: string
    testimonials: string
    contactCta: string
    switchToEnglish: string
    switchToSpanish: string
  }
}

export function Navigation({ locale, navigation }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  // const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const setLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return
    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000`
    window.location.reload()
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            className="flex items-center gap-3 text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            <span className="sr-only">Marcelo Bokor</span>
            <span className="relative h-9 w-9 overflow-hidden rounded-full border border-border/70 transition-transform duration-300 hover:scale-110">
              <Image
                src="/profile.jpeg"
                alt="Marcelo Bokor"
                fill
                className="object-cover"
                sizes="36px"
                priority
              />
            </span>
          </a>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {navigation.services}
              </a>
              <a
                href="#projects"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {navigation.work}
              </a>
              <a
                href="#process"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {navigation.process}
              </a>
              <a
                href="#testimonials"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {navigation.testimonials}
              </a>
              <Button
                size="sm"
                className="group relative overflow-hidden border border-primary/40 bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
                asChild
              >
                <a href="#contact" className="relative z-10">
                  {navigation.contactCta}
                  <span className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.45),_transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-1 rounded-full border border-border bg-card/40 p-1">
              <Button
                type="button"
                variant={locale === 'en' ? 'secondary' : 'ghost'}
                size="sm"
                className="h-7 px-2 text-xs"
                onClick={() => setLocale('en')}
                aria-pressed={locale === 'en'}
                aria-label={navigation.switchToEnglish}
              >
                EN
              </Button>
              <Button
                type="button"
                variant={locale === 'es-419' ? 'secondary' : 'ghost'}
                size="sm"
                className="h-7 px-2 text-xs"
                onClick={() => setLocale('es-419')}
                aria-pressed={locale === 'es-419'}
                aria-label={navigation.switchToSpanish}
              >
                ES
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
