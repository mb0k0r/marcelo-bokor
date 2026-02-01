'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'

type HeroSectionProps = {
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
  socialLinks: Array<{ label: string; href: string }>
  contactEmail: string
}

export function HeroSection({ hero, socialLinks, contactEmail }: HeroSectionProps) {
  const [ended, setEnded] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-black"
    >
      <video
        className={`hero-video absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${ended ? 'opacity-0' : videoReady ? 'opacity-100' : 'opacity-0'}`}
        autoPlay
        muted
        playsInline
        preload="metadata"
        onCanPlay={() => setVideoReady(true)}
        onEnded={() => setEnded(true)}
      >
        <source src="/heromobile.mp4" media="(max-width: 768px)" />
        <source src="/hero.mp4" media="(min-width: 769px)" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent" />
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-1000 ${ended ? 'opacity-100' : 'opacity-0'}`}
      />

      <div className="relative max-w-5xl mx-auto text-center space-y-8 motion-safe:animate-fade-in-up">
        <div className="space-y-4">
          <a
            href={hero.availabilityHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 text-emerald-300 text-sm font-medium transition-colors hover:border-emerald-400/70 hover:text-emerald-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            {hero.availability}
          </a>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-foreground">
            {hero.name}
          </h1>

          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground text-balance">
            {hero.headline}
          </p>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
            {hero.subheadline}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="gap-2" asChild>
            <a href="#projects">
              {hero.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">{hero.ctaSecondary}</a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
          {hero.stats.map((stat) => (
            <span key={stat} className="rounded-full border border-border px-3 py-1">
              {stat}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 pt-4">
          <a
            href={socialLinks[0]?.href ?? 'https://github.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href={socialLinks[1]?.href ?? 'https://linkedin.com'}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href={`mailto:${contactEmail}`}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </section>
  )
}
