import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ExternalLink, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import type { Locale } from '@/lib/content'
import { getContent } from '@/lib/content'

type ContactSectionProps = {
  locale: Locale
}

export function ContactSection({ locale }: ContactSectionProps) {
  const content = getContent(locale)

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-12 border border-border bg-gradient-to-br from-card to-card/50 motion-safe:animate-fade-in-up">
          <div className="text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">
              {content.contact.headline}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              {content.contact.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="gap-2 w-full sm:w-auto" asChild>
                <a href={`mailto:${content.contact.email}`}>
                  <Mail className="h-5 w-5" />
                  {content.contact.emailCta}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto bg-transparent" asChild>
                <a href={content.contact.calendly} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5" />
                  {content.contact.callCta}
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 pt-8 border-t border-border">
              <a
                href={content.socialLinks[0]?.href ?? 'https://github.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="text-sm font-medium">{content.socialLinks[0]?.label ?? 'GitHub'}</span>
              </a>
              <a
                href={content.socialLinks[1]?.href ?? 'https://linkedin.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm font-medium">{content.socialLinks[1]?.label ?? 'LinkedIn'}</span>
              </a>
              <a
                href={content.socialLinks[2]?.href ?? 'https://wa.me/59891352887'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="text-sm font-medium">{content.socialLinks[2]?.label ?? 'WhatsApp'}</span>
              </a>
            </div>
          </div>
        </Card>

        <footer className="text-center mt-12 text-sm text-muted-foreground">
          <p>{content.sections.contact.footer.replace('{year}', new Date().getFullYear().toString())}</p>
        </footer>
      </div>
    </section>
  )
}
