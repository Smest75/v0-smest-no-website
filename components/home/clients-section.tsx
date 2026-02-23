import { Building2, Heart, Landmark, Briefcase } from "lucide-react"

const clientTypes = [
  {
    name: "Virksomheter",
    description: "Små og mellomstore bedrifter som vil ta i bruk KI uten store budsjetter eller IT-avdelinger.",
    icon: Building2,
  },
  {
    name: "Frivillige og medlemsorganisasjoner",
    description: "Organisasjoner som trenger effektive verktøy med begrensede ressurser.",
    icon: Heart,
  },
  {
    name: "Offentlig og nær-offentlig sektor",
    description: "Offentlige virksomheter og institusjoner som jobber med digital transformasjon.",
    icon: Landmark,
  },
  {
    name: "Selvstendige rådgivere",
    description: "Konsulenter, rådgivere og foredragsholdere som vil bruke KI i egen praksis.",
    icon: Briefcase,
  },
]

export function ClientsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hvem vi hjelper</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {clientTypes.map((client) => {
            const Icon = client.icon
            return (
              <div key={client.name} className="text-center space-y-4">
                <div className="mx-auto inline-flex rounded-lg bg-primary/10 p-4 text-primary">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold">{client.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{client.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
