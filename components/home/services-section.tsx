import Link from "next/link"
import { BookOpen, Users, Presentation } from "lucide-react"

const services = [
  {
    name: "Løpende KI-rådgivning",
    description: "Kontinuerlig støtte, veiledning og hjelp til å ta i bruk KI-verktøy på i virksomheten. Se Tjenester.",
    icon: BookOpen,
    href: "/tjenester#extended",
  },
  {
    name: "Workshops & større prosesser",
    description: "Tilpassede prosesser og en konsulent som blir en del av teamet",
    icon: Users,
    href: "/tjenester#premium",
  },
  {
    name: "Foredrag",
    description: "Skreddersydde foredrag om kunstig intelligens for konferanser og arrangementer.",
    icon: Presentation,
    href: "/foredrag",
  },
]

export function ServicesSection() {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Dette tilbyr vi</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.name}
                href={service.href}
                className="group relative rounded-lg border border-border bg-card p-8 hover:border-primary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
