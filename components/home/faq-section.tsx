import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Hvem passer KI-rådgivning for?",
    answer:
      "KI-rådgivning passer for alle som jobber med teknologi, kommunikasjon, kundeservice, markedsføring eller innholdsproduksjon. Både SMB-er, organisasjoner, og selvstendige rådgivere kan ha stor nytte av det.",
  },
  {
    question: "Må vi ha teknisk kompetanse fra før?",
    answer:
      "Nei, du trenger ingen teknisk bakgrunn. Vi forklarer alt på en forståelig måte og tilpasser oss deres nivå og behov.",
  },
  {
    question: "Hvordan starter vi et samarbeid?",
    answer:
      "Vi starter med et møte der vi ser nærmere på behov og ambisjoner. Når vi er enige om at dette er en match bestemmer vi hvilken tjeneste eller pakke som passer best for dere nå.",
  },
  {
    question: "Kan dere jobbe fysisk hos oss?",
    answer:
      "Ja, vi kan jobbe fysisk hos dere i Oslo- og østlandsområdet, spesielt for dedikerte konsulenttjenester der vi skal delta i prosjekter eller produktarbeid. Noen ganger vil det være best å innrullere oss som konsulentbrukere i deres systemer.",
  },
  {
    question: "Hvordan sikrer dere personvern og sikkerhet?",
    answer:
      "Vi veileder i trygg bruk av KI-verktøy, og har god innsikt i personvern, sikkerhet og relevant regelverk: Personvernforordningen/GDPR, KI-forordningen/AI-Act og e-postforskriften. Vi er hverken jurister eller sikkerhetseksperter, og kan ikke gi juridiske og komplette sikkerhetsmessige råd. Disse rollene må fylles av ekspertise. Om dere ikke har denne kompetansen internt eller fra andre leverandører, kan vi anbefale eller hente inn noen fra vårt nettverk.",
  },
]

export function FaqSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ofte stilte spørsmål</h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
