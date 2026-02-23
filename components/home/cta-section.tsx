export function CtaSection() {
  return (
    <section className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl mb-6 text-balance">
          Vil du se hvordan KI kan brukes hos dere?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
          La oss ta en prat om hvordan dere kan få solid støtte i bruken av kunstig intelligens i virksomheten.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Ring button - visible on mobile only */}
          <a
            href="tel:+47926473314"
            className="sm:hidden inline-flex items-center justify-center rounded-md bg-primary-foreground px-8 py-3 text-base font-medium text-primary shadow-sm hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary transition-colors"
          >
            Ring nå!
          </a>
          {/* Book a call button - visible on all devices */}
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0-Zjvavs0QkkZqrmAvN8LxfxIK3Vxlg4IKclDx3hANaf6CaEPHkventvJqQM6XEkbGzqVj0S3C"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary-foreground px-8 py-3 text-base font-medium text-primary shadow-sm hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary transition-colors"
          >
            Book et videomøte!
          </a>
        </div>
      </div>
    </section>
  )
}
