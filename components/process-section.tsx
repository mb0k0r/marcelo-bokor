import { Card } from '@/components/ui/card'
import type { Locale } from '@/lib/content'
import { getContent } from '@/lib/content'

type ProcessSectionProps = {
  locale: Locale
}

export function ProcessSection({ locale }: ProcessSectionProps) {
  const content = getContent(locale)

  return (
    <section
      id="process"
      className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            {content.sections.process.title}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-pretty leading-relaxed">
            {content.sections.process.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.processSteps.map((step, index) => (
            <Card
              key={index}
              className="relative p-6 border border-border bg-card motion-safe:animate-fade-in-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="inline-flex p-2.5 rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="text-5xl font-bold text-muted-foreground/10">{step.step}</span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="h-1 w-1 rounded-full bg-primary" />
                  <span>{content.sections.process.cardMeta}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">{content.sections.process.outcomesTitle}</h3>
            <div className="grid gap-3 sm:grid-cols-2 text-sm text-muted-foreground">
              {content.processOutcomes.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card/70 p-5 text-sm text-muted-foreground">
            {content.sections.process.engagement}
          </div>
        </div>
      </div>
    </section>
  )
}
