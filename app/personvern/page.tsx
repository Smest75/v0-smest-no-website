export const metadata = {
  title: "Personvern og cookies – Smest Rådgivning",
  description:
    "Personvernerklæring for Smest Rådgivning. Informasjon om hvordan vi behandler personopplysninger og cookies.",
}

export default function PersonvernPage() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">Personvern og cookies</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Om denne erklæringen</h2>
            <p className="text-muted-foreground leading-relaxed">
              Smest Rådgivning (Smest AS, org.nr. 917 742 601) er behandlingsansvarlig for personopplysninger som
              behandles i forbindelse med våre tjenester. Vi tar personvernet ditt på alvor og behandler
              personopplysninger i samsvar med gjeldende personvernlovgivning, herunder GDPR.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Hvilke opplysninger samler vi inn?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vi samler inn og behandler følgende typer personopplysninger:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Kontaktinformasjon: Navn, e-postadresse, telefonnummer</li>
              <li>Bedriftsinformasjon: Organisasjonsnavn, bransje, rolle</li>
              <li>Kommunikasjon: E-postutveksling, møtenotater, samtaleopptegnelser (kun med samtykke)</li>
              <li>Tekniske data: IP-adresse, nettlesertype, enhetsinformasjon (via Google Analytics)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Hvordan bruker vi opplysningene?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vi bruker personopplysninger til følgende formål:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Levere rådgivningstjenester og oppfylle avtaler</li>
              <li>Kommunikasjon og kundeservice</li>
              <li>Sende nyhetsbrev og relevant informasjon (kun med samtykke)</li>
              <li>Forbedre våre tjenester og nettside</li>
              <li>Oppfylle lovpålagte forpliktelser</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Deling av opplysninger</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vi deler ikke personopplysninger med tredjeparter med mindre det er nødvendig for å levere våre tjenester
              eller påkrevd av lov. Vi kan dele opplysninger med:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
              <li>Leverandører av IT-tjenester (e-post, kalender, CRM)</li>
              <li>Google Analytics for statistikk og analyse</li>
              <li>Offentlige myndigheter når det er lovpålagt</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Cookies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vi bruker cookies for å forbedre brukeropplevelsen på nettsiden. Cookies er små tekstfiler som lagres i
              nettleseren din.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">Vi bruker følgende typer cookies:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>Nødvendige cookies:</strong> Sikrer grunnleggende funksjonalitet på nettsiden
              </li>
              <li>
                <strong>Analysecookies (Google Analytics):</strong> Hjelper oss forstå hvordan besøkende bruker
                nettsiden
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Du kan blokkere cookies i nettleserens innstillinger, men vær oppmerksom på at dette kan påvirke
              funksjonaliteten på nettsiden.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Dine rettigheter</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Du har følgende rettigheter i henhold til GDPR:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>Innsyn:</strong> Du har rett til å få informasjon om hvilke opplysninger vi har om deg
              </li>
              <li>
                <strong>Retting:</strong> Du kan be oss rette feilaktige eller ufullstendige opplysninger
              </li>
              <li>
                <strong>Sletting:</strong> Du kan be oss slette opplysninger om deg (med visse unntak)
              </li>
              <li>
                <strong>Begrensning:</strong> Du kan be om at behandlingen av opplysninger begrenses
              </li>
              <li>
                <strong>Dataportabilitet:</strong> Du kan be om å få utlevert opplysninger i et strukturert format
              </li>
              <li>
                <strong>Tilbaketrekking av samtykke:</strong> Du kan når som helst trekke tilbake samtykke
              </li>
              <li>
                <strong>Klage:</strong> Du kan klage til Datatilsynet hvis du mener vi behandler opplysninger ulovlig
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Sikkerhet</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vi bruker tekniske og organisatoriske sikkerhetstiltak for å beskytte personopplysninger mot tap, misbruk
              og uautorisert tilgang. Dette inkluderer kryptering, tilgangskontroll og regelmessige
              sikkerhetsvurderinger.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Lagringstid</h2>
            <p className="text-muted-foreground leading-relaxed">
              Vi lagrer personopplysninger bare så lenge det er nødvendig for å oppfylle formålet med behandlingen,
              eller som påkrevd av lov. Etter dette slettes eller anonymiseres opplysningene.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Kontakt oss</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hvis du har spørsmål om personvern, eller ønsker å utøve dine rettigheter, kan du kontakte oss:
            </p>
            <address className="not-italic text-muted-foreground">
              <p>Smest AS</p>
              <p>Martin Smestad Hansen</p>
              <p>
                E-post:{" "}
                <a href="mailto:martin@smest.no" className="text-primary hover:underline">
                  martin@smest.no
                </a>
              </p>
              <p>
                Telefon:{" "}
                <a href="tel:+4792647314" className="text-primary hover:underline">
                  +47 926 47 314
                </a>
              </p>
              <p>Adresse: Øvre Slottsgate 3, 0157 Oslo</p>
            </address>
          </div>

          <div>
            <p className="text-sm text-muted-foreground italic">Sist oppdatert: 1. desember 2024</p>
          </div>
        </div>
      </div>
    </section>
  )
}
