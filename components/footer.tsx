import Link from "next/link"
import { siteConfig } from "@/lib/config"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link
              href="/"
              className="inline-block mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              <img src="/smest-logo.svg" alt="Smest Rådgivning" className="h-7 w-auto" />
            </Link>
            <h3 className="text-base font-semibold text-foreground mb-4">Smest Rådgivning</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-1">
              <p>Smest AS</p>
              <p>v/ SoCentral, Sentralen
Øvre Slottsgate 3</p>
              <p>0157 Oslo</p>
              <p className="mt-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">Meny</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/tjenester"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  Tjenester
                </Link>
              </li>
              <li>
                <Link
                  href="/foredrag"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  Foredrag
                </Link>
              </li>
              <li>
                <Link
                  href="/om-martin"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  Om Martin
                </Link>
              </li>
              <li>
                <Link
                  href="/ressurser"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  Ressurser
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-foreground mb-4">Lenker</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://www.linkedin.com/in/martinsmestadhansen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  Martins profil på LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://talerlisten.no/profil/martin-smestad-hansen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  Martins profil på Talerlisten.no
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>Org.nr.: 916 849 710</p>
          <Link
            href="/personvern"
            className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            Personvern og cookies
          </Link>
        </div>
      </div>
    </footer>
  )
}
