import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export const metadata = {
  title: "Kontakt – Smest Rådgivning",
  description: "Ta kontakt med Martin Smestad Hansen for KI-rådgivning. E-post, telefon eller book en prat direkte.",
}

export default function KontaktPage() {
  return (
    <>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Kontakt</h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Vil du se hvordan KI kan hjelpe virksomheten deres? Ta kontakt, så tar vi en uforpliktende prat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Kontaktinformasjon</h2>
                <address className="not-italic space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">E-post</p>
                      <a
                        href="mailto:martin@smest.no"
                        className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                      >
                        martin@smest.no
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Telefon</p>
                      <a
                        href="tel:+4792647314"
                        className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                      >
                        +47 926 47 314
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Besøksadresse</p>
                      <p className="text-muted-foreground">
                        Sentralen
                        <br />
                        Øvre Slottsgate 3<br />
                        0157 Oslo
                      </p>
                    </div>
                  </div>
                </address>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Lenker</h3>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/martinsmestadhansen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a
                    href="https://talerlisten.no/profil/martin-smestad-hansen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Talerlisten
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-8">
              <h2 className="text-2xl font-bold mb-6">Book en prat</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {"Den enkleste måten å komme i gang på er å booke et møte direkte i kalenderen min. Velg et tidspunkt som passer for deg, så tar vi en prat.\n\nDenne funksjonen setter opp videomøter, men jeg tar veldig gjerne fysiske møter også – særlig om vi ikke har møttes tidligere!"}
              </p>
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0-Zjvavs0QkkZqrmAvN8LxfxIK3Vxlg4IKclDx3hANaf6CaEPHkventvJqQM6XEkbGzqVj0S3C"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary w-full px-6 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
              >
                Book møte
                <ExternalLink className="h-4 w-4" />
              </a>

              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Eller send meg en e-post på{" "}
                  <a
                    href="mailto:martin@smest.no"
                    className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    martin@smest.no
                  </a>{" "}
                  eller ring{" "}
                  <a
                    href="tel:+4792647314"
                    className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    +47 926 47 314
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data for ContactPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Kontakt Smest Rådgivning",
            description: "Ta kontakt med Martin Smestad Hansen for KI-rådgivning",
            url: "https://smest.no/kontakt",
            mainEntity: {
              "@type": "Organization",
              name: "Smest AS",
              email: "martin@smest.no",
              telephone: "+4792647314",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Øvre Slottsgate 3",
                addressLocality: "Oslo",
                postalCode: "0157",
                addressCountry: "NO",
              },
            },
          }),
        }}
      />
    </>
  )
}
