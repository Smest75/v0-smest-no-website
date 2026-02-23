import type { Metadata } from "next"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { ClientsSection } from "@/components/home/clients-section"
import { WhyMeSection } from "@/components/home/why-me-section"
import { FaqSection } from "@/components/home/faq-section"
import { CtaSection } from "@/components/home/cta-section"
import { testimonials } from "@/content/testimonials"

export const metadata: Metadata = {
  title: "Smest Rådgivning – Praktisk KI-rådgivning for SMB og organisasjoner",
  description:
    "Praktisk rådgivning og opplæring i bruk av kunstig intelligens for SMB-er, organisasjoner og ledere. Book en prat med Martin Smestad Hansen.",
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection testimonials={testimonials} />
      <ClientsSection />
      <WhyMeSection />
      <FaqSection />
      <CtaSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Hvem passer KI-rådgivning for?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "KI-rådgivning passer for alle som jobber med teknologi, kommunikasjon, kundeservice, markedsføring eller innholdsproduksjon. Både SMB-er, organisasjoner, og selvstendige rådgivere kan ha stor nytte av det.",
                },
              },
              {
                "@type": "Question",
                name: "Må vi ha teknisk kompetanse fra før?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nei, du trenger ingen teknisk bakgrunn. Vi forklarer alt på en forståelig måte og tilpasser oss deres nivå og behov.",
                },
              },
              {
                "@type": "Question",
                name: "Hvordan starter vi et samarbeid?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vi starter med en uforpliktende samtale der vi kartlegger deres behov. Deretter foreslår jeg hvilken tjeneste eller pakke som passer best for dere.",
                },
              },
              {
                "@type": "Question",
                name: "Kan dere jobbe fysisk hos oss?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ja, vi kan jobbe fysisk hos dere i Oslo- og Østlandsområdet, spesielt for workshops og dedikerte samarbeid.",
                },
              },
              {
                "@type": "Question",
                name: "Hvordan sikrer dere personvern og sikkerhet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vi veileder alltid i trygg bruk av KI-verktøy, med fokus på personvern, GDPR og sikkerhet. Dette er en integrert del av alle våre tjenester.",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}
