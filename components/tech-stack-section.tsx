import { Card } from '@/components/ui/card'
import type { Locale } from '@/lib/content'
import { getContent } from '@/lib/content'

type TechStackSectionProps = {
  locale: Locale
}

export function TechStackSection({ locale }: TechStackSectionProps) {
  const content = getContent(locale)
  const techStack = content.techStack

  return (
    <section
      id="stack"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_55%)]" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">{content.sections.stack.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {content.sections.stack.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(techStack).map(([category, technologies], index) => (
            <Card
              key={category}
              className="p-6 border border-border bg-gradient-to-br from-card via-card/95 to-primary/10 motion-safe:animate-fade-in-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
