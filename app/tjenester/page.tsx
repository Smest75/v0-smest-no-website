import type { Metadata } from "next"
import { Check } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Tjenester – Smest Rådgivning",
  description:
    "KI-rådgivning og opplæring for SMB-er, organisasjoner og ledere. Velg mellom Basic, Medium og Premium-pakken.",
}

const CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0-Zjvavs0QkkZqrmAvN8LxfxIK3Vxlg4IKclDx3hANaf6CaEPHkventvJqQM6XEkbGzqVj0S3C"

const BASIC_SIGNUP_URL = "mailto:martin@smest.no?subject=Basic-registrering"

const packages = [
  {
    id: "basic",
    name: "Basic",
    price: "Gratis",
    description: "For deg som vil holde deg oppdatert og bli tryggere på bruk av KI – uten å binde deg.",
    features: [
      "Nyhetsbrev med praktiske KI-tips",
      "Tilgang til våre KI-ressurser og verktøylister",
      "Invitasjoner til åpne kurs og arrangementer",
      "Digitale mini-introer og faglige oppdateringer"
    ],
    footerText: "Mange starter her – og går videre til Medium når de ser behov for å akselerere.",
    cta: "Registrer deg gratis",
    ctaHref: BASIC_SIGNUP_URL,
    highlighted: false,
  },
  {
    id: "medium",
    name: "Medium",
    price: "Fast samarbeid for ledere og team: 19.950 kr / mnd + mva",
    description: "For virksomheter som vil bruke KI mer strukturert og effektivt i hverdagen – uten å ansette egne folk. Dette er den mest brukte modellen for samarbeid.",
    features: [
      "Løpende rådgivning tilpasset ledere og nøkkelroller",
      "Prioritert støtte via e-post og chat",
      "Research og vurdering av relevante verktøy",
      "Praktisk hjelp til mindre løsninger og arbeidsflyt",
      "Fast, reservert kapasitet hver måned"
    ],
    footerText: "Typisk resultat:\n– bedre flyt i arbeidsprosesser\n– tryggere bruk av KI i teamet\n– mindre tid brukt på prøving og feiling",
    cta: "Book intromøte!",
    ctaHref: CALENDAR_URL,
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "Dedikert rådgiver og utviklingspartner: 49.950 kr / mnd + mva",
    description: "For virksomheter som vil jobbe systematisk og ambisiøst med KI – og ha oss tett på som en del av laget. Vi reserverer fast kapasitet og gir dere høyeste prioritet.",
    features: [
      "Dedikert rådgiver med reservert kapasitet",
      "Fast, regelmessig samarbeid (digitalt og/eller fysisk)",
      "Garantert responstid (SLA)",
      "Workshops, prosess- og innsiktsarbeid",
      "Opplæring av ledere og team",
      "Utvikling av interne KI-assistenter og løsninger",
      "Prioritet ved nye initiativer og behov",
    ],
    footerText: "Passer for virksomheter som:\n– vil bygge intern kompetanse\n– vil effektivisere kjerneprosesser\n– ser KI som et strategisk verktøy\n\nVi har begrenset kapasitet til premiumkunder. Ta kontakt!",
    cta: "Book intromøte!",
    ctaHref: CALENDAR_URL,
    highlighted: false,
  },
]

const faqs = [
  {
    question: "Er det binding?",
    answer:
      "Nei, alle abonnementspakker kan sies opp med én måneds varsel. Vi jobber best når samarbeidet føles riktig for begge parter.",
  },
  {
    question: "Hvordan kjøper vi ekstra timer?",
    answer:
      "Ekstra timer kan kjøpes enkelt underveis i samarbeidet. Vi sender en faktura for de ekstra timene som brukes utover pakken.",
  },
  {
    question: "Kan dere jobbe fysisk hos oss?",
    answer:
      "Ja, Premium-pakken er satt opp slik at vi kan (men ikke må) være fast hos dere i Oslo- og østlandsområdet. Med Medium-pakken kan vi også avtale fysiske møter ved behov.",
  },
  {
    question: "Hva kan inngå i samarbeidet?",
    answer:
      "Vi kan levere rådgivning, opplæring, workshops, verktøyvurderinger, prosessarbeid, utvikling av løsninger, konseptprosesser og mye mer. Vi tilpasser innholdet til konkrete behov.",
  },
]

export default function TjenesterPage() {
  return (
    <>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Tjenester</h1>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                id={pkg.id}
                className={`relative rounded-lg border ${
                  pkg.highlighted ? "border-primary shadow-lg ring-2 ring-primary/20" : "border-border"
                } bg-card p-8 flex flex-col`}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                    Populær
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-4">{pkg.price}</p>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {pkg.footerText && (
                  <div className="mb-6 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">{pkg.footerText}</p>
                  </div>
                )}

                <div className="mt-auto">
                  <a
                    href={pkg.ctaHref}
                    {...(pkg.ctaHref.startsWith("/") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                    className={`w-full inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                      pkg.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {pkg.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto max-w-2xl text-center mt-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Usikker på hvilket nivå som passer?<br />
              <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Book en kort avklaringssamtale
              </a>, så finner vi riktig løsning sammen.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hva passer for hvem?</h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-8">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg font-semibold mb-3">Basic – Nyhetsbrev og tilgang til ressurser</h3>
              <p className="text-muted-foreground leading-relaxed">
                Perfekt for deg som vil høre fra oss iblant og ha tilgang til ressursene vi oppdaterer, samt invitasjoner til åpne kurs, foredrag og eventer.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg font-semibold mb-3">Medium – Månedlig støtte</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fleksibel tilgang på rådgivning for organisasjoner, team og ledere i nøkkelroller som ønsker regelmessig veiledning og støtte. Få hjelp til konkrete utfordringer, verktøyvalg og implementering av KI i hverdagen.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg font-semibold mb-3">Premium – Dedikerte konsulenttjenester</h3>
              <p className="text-muted-foreground leading-relaxed">
                For virksomheter som ønsker en dedikert rådgiver som en del av teamet. Perfekt om dere vil investere i intern kompetansebygging og rådgivning eller utvikle egne KI-løsninger, med fleksibilitet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ofte stilte spørsmål</h2>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={`item-${index}`} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Er det binding?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nei, alle abonnementspakker kan sies opp med én måneds varsel. Vi jobber best når samarbeidet føles riktig for begge parter.",
                },
              },
              {
                "@type": "Question",
                name: "Hvordan kjøper vi ekstra timer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ekstra timer kan kjøpes enkelt underveis i samarbeidet. Vi sender en faktura for de ekstra timene som brukes utover pakken.",
                },
              },
              {
                "@type": "Question",
                name: "Kan dere jobbe fysisk hos oss?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, spesielt i Premium-pakken kan vi være fysisk tilstede hos dere i Oslo- og Østlandsområdet. For Medium-pakken kan vi avtale enkelte fysiske møter ved behov.",
                },
              },
              {
                "@type": "Question",
                name: "Hva kan inngå i samarbeidet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vi kan levere rådgivning, opplæring, workshops, verktøyvurderinger, prosessarbeid, utvikling av løsninger, konseptprosesser og mye mer. Vi tilpasser innholdet til konkrete behov.",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
