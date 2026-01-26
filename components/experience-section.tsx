import type { Locale } from '@/lib/content'
import { getContent } from '@/lib/content'

type ExperienceSectionProps = {
  locale: Locale
}

export function ExperienceSection({ locale }: ExperienceSectionProps) {
  const content = getContent(locale)
  const experience = content.experience

  return (
    <section
      id="experience"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">{content.sections.experience.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {content.sections.experience.subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-border motion-safe:animate-fade-in-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-background" />

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                <ul className="space-y-2 text-muted-foreground">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">{'>'}</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
