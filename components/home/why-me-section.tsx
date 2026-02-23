import { CheckCircle } from "lucide-react"

const reasons = [
  {
    title: "Over 25 års erfaring innen teknologi og kommunikasjon",
    description: "Lang erfaring med å forklare kompleks teknologi på en forståelig måte.",
  },
  {
    title: "Praktisk, rolig, ingen buzzwords",
    description: "Vi snakker klart og tydelig om hva som faktisk fungerer i praksis.",
  },
  {
    title: "Konkrete løsninger og trygghet i hverdagen",
    description: "Fokus på hva dere kan ta i bruk nå, og hvordan dere blir trygge på KI.",
  },
]

export function WhyMeSection() {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hvorfor jobbe med oss</h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
