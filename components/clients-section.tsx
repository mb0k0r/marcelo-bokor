import Image from 'next/image'
import type { Locale } from '@/lib/content'
import { getContent } from '@/lib/content'

type ClientsSectionProps = {
  locale: Locale
}

export function ClientsSection({ locale }: ClientsSectionProps) {
  const content = getContent(locale)
  const clients = content.clients
  const mobileClients = clients.filter((client) => client.name !== 'Loyal')

  return (
    <section
      className="relative py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {content.sections.clients.eyebrow}
          </p>
        </div>
      </div>

      <div className="md:hidden max-w-7xl mx-auto grid grid-cols-2 gap-3 px-4 sm:px-6">
        {mobileClients.map((client) => (
          <div
            key={`${client.name}-mobile`}
            className="flex items-center justify-center rounded-xl border border-border/60 bg-card/50 px-3 py-4"
          >
            {client.href ? (
              <a
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={client.name}
                className="flex items-center justify-center w-full"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  sizes="(max-width: 768px) 40vw, 180px"
                  className="h-10 w-auto rounded-full object-contain opacity-95"
                />
              </a>
            ) : (
              <Image
                src={client.logo}
                alt={client.name}
                width={client.width}
                height={client.height}
                sizes="(max-width: 768px) 40vw, 180px"
                className="h-10 w-auto rounded-full object-contain opacity-95"
              />
            )}
          </div>
        ))}
      </div>

      <div className="relative hidden md:block overflow-hidden motion-reduce:hidden px-4 sm:px-6 lg:px-8">
        <div
          className="group flex animate-marquee gap-12 sm:gap-16 [animation-duration:45s] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          tabIndex={0}
          aria-label={content.sections.clients.eyebrow}
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
              aria-hidden={index >= clients.length}
            >
              {client.href ? (
                <a
                  href={client.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={client.name}
                  className="flex items-center justify-center rounded-full border border-border/60 bg-card/40 p-4 transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className="h-14 w-auto opacity-90 transition-all duration-300 hover:opacity-100 rounded-full"
                  />
                </a>
              ) : (
                <div className="flex items-center justify-center rounded-full border border-border/60 bg-card/40 p-4">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className="h-14 w-auto opacity-90 transition-all duration-300 hover:opacity-100 rounded-full"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="hidden motion-reduce:md:grid max-w-7xl mx-auto grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8">
        {clients.map((client) => (
          <div
            key={client.name}
            className="flex items-center justify-center rounded-lg border border-border/50 bg-card/40 px-4 py-6"
          >
            {client.href ? (
              <a
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={client.name}
                className="flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="h-14 w-auto opacity-90 rounded-full"
                />
              </a>
            ) : (
              <Image
                src={client.logo}
                alt={client.name}
                width={client.width}
                height={client.height}
                className="h-14 w-auto opacity-90 rounded-full"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
