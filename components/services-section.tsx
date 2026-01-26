import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import type { Locale } from '@/lib/content'
import { getContent } from '@/lib/content'

type ServicesSectionProps = {
  locale: Locale
}

export function ServicesSection({ locale }: ServicesSectionProps) {
  const content = getContent(locale)
  const services = content.services

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            {content.sections.services.title}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-pretty leading-relaxed">
            {content.sections.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group p-8 border border-border bg-gradient-to-br from-card via-card/80 to-primary/10 hover:border-primary/50 transition-all duration-300 motion-safe:animate-fade-in-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="space-y-4">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 group-hover:ring-primary/30 transition-all">
                  <service.icon className="h-6 w-6" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <Separator className="bg-border/60" />

                <div className="space-y-2 text-sm text-muted-foreground">
                  {service.deliverables.map((deliverable) => (
                    <div key={deliverable} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{deliverable}</span>
                    </div>
                  ))}
                </div>

                <Badge variant="secondary" className="w-fit text-xs">
                  {content.sections.services.outcomeLabel}: {service.outcomes}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
