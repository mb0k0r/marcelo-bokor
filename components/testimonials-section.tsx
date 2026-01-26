import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import type { Locale } from '@/lib/content'
import { getContent } from '@/lib/content'

type TestimonialsSectionProps = {
  locale: Locale
}

export function TestimonialsSection({ locale }: TestimonialsSectionProps) {
  const content = getContent(locale)
  const testimonials = content.testimonials

  return (
    <section
      id="testimonials"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">{content.sections.testimonials.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {content.sections.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 border border-border bg-card motion-safe:animate-fade-in-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed italic">
                  {`"${testimonial.content}"`}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar>
                    {testimonial.image ? (
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    ) : null}
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
