import type { Metadata } from "next"
import Image from "next/image"
import { Check, ExternalLink } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Foredrag om kunstig intelligens – Smest Rådgivning",
  description:
    "Engasjerende foredrag om KI i praksis for ledere, konferanser og organisasjoner. Book Martin Smestad Hansen via Talerlisten.",
}

const talks = [
  {
    title: "AI i praksis for ledere",
    intro:
      "Et foredrag som gir ledere en praktisk innføring i hvordan KI kan brukes i organisasjonen, uten teknisk sjargong.",
    learningGoals: [
      "Forstå hva KI kan og ikke kan gjøre i praksis",
      "Identifisere konkrete bruksområder i egen virksomhet",
      "Vite hvordan man starter arbeidet med KI trygt og ansvarlig",
    ],
    audience: "Ledere i SMB-er, organisasjoner, offentlig sektor og næringsliv",
  },
  {
    title: "KI i kompetansebygging og læring",
    intro:
      "Hvordan kan KI-verktøy brukes til å effektivisere opplæring, lage bedre læringsmateriell og tilpasse innhold til ulike målgrupper?",
    learningGoals: [
      "Lære hvordan KI kan støtte læring og kompetanseutvikling",
      "Se konkrete eksempler på KI-verktøy for opplæring",
      "Forstå hvordan man kan tilpasse innhold med KI",
    ],
    audience: "HR, opplæringsansvarlige, lærere, fagforeninger og organisasjoner",
  },
  {
    title: "AI i markedsføring og kommunikasjon",
    intro:
      "Et praktisk foredrag om hvordan KI kan brukes til å produsere innhold, forbedre kommunikasjon og jobbe smartere med markedsføring.",
    learningGoals: [
      "Få oversikt over KI-verktøy for innholdsproduksjon",
      "Lære hvordan man skriver bedre prompts",
      "Forstå hvordan KI kan frigjøre tid til strategisk arbeid",
    ],
    audience: "Markedsførere, kommunikasjonsrådgivere, innholdsprodusenter og kreative team",
  },
]

const references = [
  {
    name: "Hege Winnem",
    organization: "Winnem Utvikling AS",
    quote:
      "Martin formidler det komplekse på en enkel måte og med en herlig lekenhet! Han evner å benytte relevante eksempler som gjør innholdet matnyttig og inspirerende, slik at deltakerne umiddelbart kan ta i bruk det de har lært.",
  },
  {
    name: "Martin Andre Hovden",
    organization: "Belief Group AS",
    quote:
      "Basert på mottatte svar på evalueringen, fikk vi udelt positiv respons. Deltakerne opplevde Martin som både pedagogisk og inspirerende, samtidig som han evnet å tilpasse nivået til målgruppen. Fint opplegg og godt gjennomført!",
  },
  {
    name: "Lars Kolberg",
    organization: "Computerworld - Event Manager",
    quote:
      "Martin holdt keynote-foredrag på vår konferanse Generativ AI i praksis. Foredraget hans 'AI og læring: Kompetanseheving med generativ AI' fikk svært positiv respons fra deltakerne. Hele 83 % (34 av 41) av de som svarte, var enten 'helt enig' eller 'litt enig' i at foredraget var interessant og inspirerende.",
  },
]

const faqs = [
  {
    question: "Hvor lang tid varer et foredrag?",
    answer:
      "Et standard foredrag varer 45-60 minutter, men kan tilpasses deres behov. Vi kan også holde kortere foredrag (20-30 min) eller lengre sesjoner (kurs og workshops) som er mer interaktive og lar deltakerne gjøre mer selv (2-3 timer).",
  },
  {
    question: "Kan foredraget tilpasses vår bransje?",
    answer:
      "Absolutt! Vi tilpasser alltid innholdet til målgruppen og kan fokusere på eksempler fra deres bransje eller sektor.",
  },
  {
    question: "Kan dere komme fysisk?",
    answer: "Ja, vi holder fysiske foredrag i Oslo- og østlandsområdet. Martin er småbarnsfar, og vil unngå lang reisevei med overnattinger.",
  },
  {
    question: "Hvordan booker vi dere?",
    answer: "Dere kan booke oss til foredragsjobber via Talerlisten.no!",
  },
]

export default function ForedragPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-balance">
                Foredrag om kunstig intelligens i praksis
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
                {"Engasjerende foredrag som gir publikum konkrete verktøy og trygghet til å ta i bruk KI.\n\nTalerlisten skriver: Martin er en engasjert og kunnskapsrik foredragsholder. Han evner å snakke om teknologi slik at alle henger med, og kan skreddersy nivået ut ifra hvem som sitter i salen. Med gode eksempler og steg-for-steg gjennomgang, senker han terskelen for å starte med AI."}  
              </p>
              <a
                href="https://talerlisten.no/profil/martin-smestad-hansen/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
              >
                Book Martin til et skreddersydd foredrag via Talerlisten
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden rounded-lg bg-muted">
              <Image
                src="/images/martin-portrait.jpg"
                alt="Martin Smestad Hansen holder foredrag"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Talk Topics */}
      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Foredragstitler</h2>
            <p className="mt-4 text-muted-foreground">Alle foredrag kan tilpasses ulike målgrupper og behov.</p>
          </div>

          <div className="space-y-8">
            {talks.map((talk, index) => (
              <article key={index} className="rounded-lg border border-border bg-card p-8">
                <h3 className="text-2xl font-bold mb-4">{talk.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{talk.intro}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-foreground">Læringsmål</h4>
                  <ul className="space-y-2">
                    {talk.learningGoals.map((goal, idx) => (
                      <li key={idx} className="flex gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Passer for:</span> {talk.audience}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hvem passer foredragene for?</h2>
          </div>

          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold mb-2">SMB-er og oppstartsbedrifter</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Perfekt for mindre virksomheter som vil forstå hvordan KI kan gi konkurransefortrinn uten store
                ressurser.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold mb-2">Organisasjoner og foreninger</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ideelt for medlemsorganisasjoner og frivillige som vil effektivisere arbeidet sitt.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold mb-2">Konferanser og arrangement</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Engasjerende innhold for konferanser innen teknologi, ledelse, kommunikasjon og innovasjon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tidligere oppdrag</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {references.map((ref, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-6">
                <p className="text-muted-foreground italic mb-4 leading-relaxed text-pretty">"{ref.quote}"</p>
                <p className="text-sm font-semibold">{ref.name}</p>
                <p className="text-sm text-muted-foreground">{ref.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ofte stilte spørsmål</h2>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl mb-6">
            Klar for et lunt og engasjerende foredrag?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Book Martin Smestad Hansen til neste arrangement via Talerlisten.
          </p>
          <a
            href="https://talerlisten.no/profil/martin-smestad-hansen/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary-foreground px-8 py-3 text-base font-medium text-primary shadow-sm hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary transition-colors"
          >
            Book via Talerlisten
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* JSON-LD Structured Data for EducationEvent */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationEvent",
            name: "Foredrag om kunstig intelligens i praksis",
            description: "Engasjerende foredrag om KI for ledere, organisasjoner og virksomheter",
            performer: {
              "@type": "Person",
              name: "Martin Smestad Hansen",
              jobTitle: "KI-rådgiver",
              url: "https://talerlisten.no/profil/martin-smestad-hansen/",
            },
            eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
            teaches: [
              "Praktisk bruk av kunstig intelligens",
              "KI-verktøy for ledere",
              "KI i kompetansebygging",
              "KI i markedsføring og kommunikasjon",
            ],
          }),
        }}
      />
    </>
  )
}
