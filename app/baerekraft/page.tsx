import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Bærekraft – Smest Rådgivning",
  description:
    "Smest AS er sertifisert gjennom Miljøcert og arbeider systematisk med ansvarlig bruk av teknologi, miljøledelse og kontinuerlig forbedring.",
}

export default function BaerekraftPage() {
  return (
    <>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                Miljøsertifisert
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
              Ansvarlig bruk av teknologi
            </h1>

            <div className="prose prose-gray max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground">
                Når kunstig intelligens brukes riktig, kan den redusere unødvendig arbeid, gjøre arbeidsdagen enklere og frigjøre tid til det som faktisk skaper verdi.
              </p>
              <p>
                Samtidig vet vi at kunstig intelligens, skylagring og digitale tjenester krever energi og datakraft, og har et miljøavtrykk. Derfor ønsker vi å bruke teknologien på en ansvarlig måte, både i egen virksomhet og i arbeidet vi gjør for kundene våre.
              </p>
              <p>
                Smest er sertifisert gjennom Miljøcert. Sertifiseringen bekrefter at vi arbeider systematisk med miljøledelse, ansvarlig ressursbruk og kontinuerlig forbedring.
              </p>
            </div>

            {/* TODO: Legg til bilde av Miljøsertifikat og lenke til sertifisering når det er klart */}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Miljøpolicy</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Vi ønsker å bruke teknologi på en måte som skaper verdi for mennesker, virksomheter og samfunn. Derfor arbeider vi systematisk med å redusere unødvendig ressursbruk, ta bevisste valg i egen drift og bidra til en mer ansvarlig og bærekraftig bruk av kunstig intelligens hos kundene våre.
              </p>
              <p>
                Miljøpolicyen er forankret i virksomheten og beskriver prinsippene som ligger til grunn for hvordan vi arbeider med miljø, ressursbruk og ansvarlig bruk av teknologi.
              </p>
              {/* TODO: Legg til "Les vår miljøpolicy her" med lenke til sertifikatet når det er klart */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Hvordan vi jobber</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Smest har et lavt direkte klimaavtrykk. Mye av arbeidet skjer digitalt gjennom videomøter, digitale arbeidsflater og nettbasert opplæring. Vårt beregnede klimafotavtrykk er 0,03 tonn CO₂e per år, hvor de største utslippene er knyttet til energibruk og transport.
              </p>
              <p>
                Vår største mulighet til å påvirke miljøet ligger i arbeidet vi gjør sammen med kundene våre. Når kunstig intelligens brukes på en smart måte, kan virksomheter redusere unødvendig ressursbruk, effektivisere arbeidsprosesser og frigjøre tid til mer verdiskapende arbeid.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Våre mål fremover</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Gjennom miljøsertifiseringen har vi satt konkrete mål for hvordan vi kan redusere ressursbruk og styrke bærekraftsarbeidet vårt gjennom ansvarlig bruk av teknologi.
              </p>
              <p>Vi skal blant annet:</p>
              <ul className="space-y-2 mt-2">
                {[
                  "Utvikle metoder for mer ressurseffektiv bruk av kunstig intelligens",
                  "Redusere unødvendig datalagring og rydde i digitale arbeidsflater",
                  "Bidra til økt bevissthet om ressursbruk hos kunder",
                  "Prioritere miljøvennlige transportformer og digitale møter",
                ].map((goal) => (
                  <li key={goal} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
              <p className="pt-2">
                Gjennom vårt bærekraftsarbeid ønsker vi å hjelpe virksomheter med å bruke kunstig intelligens på en måte som skaper verdi, reduserer unødvendig ressursbruk og gir mer tid til mennesker, samarbeid og utvikling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
