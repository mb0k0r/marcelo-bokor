import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Locale } from '@/lib/content'
import { getContent } from '@/lib/content'

type ProjectsSectionProps = {
  locale: Locale
}

export function ProjectsSection({ locale }: ProjectsSectionProps) {
  const content = getContent(locale)
  const projects = content.projects

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">{content.sections.projects.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {content.sections.projects.subtitle}
          </p>
        </div>

        {projects.length === 0 ? (
          <Card className="p-10 text-center border border-dashed border-border bg-card/50">
            <p className="text-muted-foreground">{content.sections.projects.empty}</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="p-6 border border-border bg-card hover:border-primary/50 transition-all duration-300 motion-safe:animate-fade-in-up"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="space-y-4">
                  {project.videoSrc ? (
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-border/50 bg-black/40">
                      <video
                        className="h-full w-full object-cover"
                        src={project.videoSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        poster={project.videoPoster}
                        preload="none"
                      />
                    </div>
                  ) : null}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-medium text-foreground">{content.sections.projects.labels.problem}:</span>{' '}
                      {project.problem}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-medium text-foreground">{content.sections.projects.labels.solution}:</span>{' '}
                      {project.solution}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="font-medium text-foreground">{content.sections.projects.labels.result}:</span>{' '}
                      {project.result}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
