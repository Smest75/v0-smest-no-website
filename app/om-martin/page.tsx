import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Om Martin Smestad Hansen – Smest Rådgivning",
  description:
    "25 års erfaring innen teknologi og kommunikasjon. Praktisk KI-rådgivning uten buzzwords, for SMB-er og organisasjoner.",
}

const traits = [
  {
    title: "Praktisk",
    description: "Vi fokuserer alltid på hva som faktisk fungerer i praksis, ikke hva som er fancy i teorien.",
  },
  {
    title: "Tydelig",
    description: "Vi forklarer komplekse ting på en enkel måte, uten teknisk sjargong eller buzzwords.",
  },
  {
    title: "Trygg",
    description: "Vi hjelper deg med å ta i bruk KI på en ansvarlig måte, med fokus på personvern og sikkerhet.",
  },
]

export default function OmMartinPage() {
  return (
    <>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden rounded-lg bg-muted">
              <Image
                src="/images/martin-portrait.webp"
                alt="Martin Smestad Hansen"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Om Martin</h1>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p className="leading-relaxed">
                    Martin har jobbet med teknologi og kommunikasjon i over 25 år. Gjennom årene har han hjulpet alt fra
                    enkeltpersoner til store organisasjoner med å forstå og ta i bruk ny teknologi på en trygg og
                    praktisk måte.
                  </p>
                  <p className="leading-relaxed">
                    Når kunstig intelligens plutselig ble tilgjengelig for alle i 2022-2023, så han hvor mange som
                    strevde med å forstå hva KI egentlig kunne gjøre for dem. Det var utgangspunktet for å starte
                    Smest Rådgivning.
                  </p>
                  <p className="leading-relaxed">
                    I dag hjelper vi SMB-er, organisasjoner og ledere med å forstå KI, velge riktige verktøy, og
                    implementere løsninger som faktisk fungerer i hverdagen. Vi brenner for å gjøre teknologi
                    tilgjengelig og forståelig for alle.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Hvorfor vi jobber med KI</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Kunstig intelligens er den mest transformerende teknologien vi har sett noen sinne. Men det er også lett å bli overveldet av hype og frykt. Vi tror på at KI skal være tilgjengelig for alle, ikke bare for store bedrifter med massive IT-budsjetter. Og vi tror på at den beste måten å lære KI på, er ved å faktisk bruke det.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Dette kjennetegner oss som rådgivere</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {traits.map((trait, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto inline-flex rounded-full bg-primary/10 p-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{trait.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{trait.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Vil du vite mer?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ta kontakt for en uforpliktende prat om hvordan vi kan hjelpe dere.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
          >
            Kontakt oss
          </a>
        </div>
      </section>

      {/* JSON-LD Structured Data for ProfilePage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: "Om Martin Smestad Hansen",
            description: "25 års erfaring innen teknologi og kommunikasjon. Praktisk KI-rådgivning uten buzzwords.",
            url: "https://smest.no/om-martin",
            mainEntity: {
              "@type": "Person",
              "@id": "https://smest.no/#person",
              name: "Martin Smestad Hansen",
              jobTitle: "KI-rådgiver og foredragsholder",
              description:
                "25 års erfaring innen teknologi og kommunikasjon. Praktisk KI-rådgivning uten buzzwords, for SMB-er og organisasjoner.",
              email: "martin@smest.no",
              telephone: "+4792647314",
              url: "https://smest.no/om-martin",
              image: "https://smest.no/images/martin-portrait.webp",
              worksFor: {
                "@type": "Organization",
                "@id": "https://smest.no/#organization",
                name: "Smest AS",
              },
              sameAs: [
                "https://www.linkedin.com/in/martinsmestadhansen/",
                "https://talerlisten.no/profil/martin-smestad-hansen/",
              ],
              knowsAbout: [
                "Kunstig intelligens",
                "KI-rådgivning",
                "Teknologi",
                "Kommunikasjon",
                "Foredrag",
              ],
            },
          }),
        }}
      />
    </>
  )
}
