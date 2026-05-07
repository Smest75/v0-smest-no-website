import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  verification: {
    google: "Xe6atORkRaoONlTSKescQDogi1WNmadQiB6Vz5-pR-A",
  },
  title: "Smest Rådgivning – Praktisk KI-rådgivning for SMB og organisasjoner",
  description:
    "Praktisk rådgivning og opplæring i bruk av kunstig intelligens for SMB-er, organisasjoner og ledere. 25 års erfaring med teknologi og kommunikasjon.",
  generator: "v0.app",
  openGraph: {
    title: "Smest Rådgivning – Praktisk KI-rådgivning",
    description: "Praktisk rådgivning og opplæring i bruk av kunstig intelligens for SMB-er, organisasjoner og ledere.",
    locale: "nb_NO",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="nb">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://smest.no/#organization",
                  name: "Smest AS",
                  alternateName: "Smest Rådgivning",
                  legalName: "Smest AS",
                  url: "https://smest.no",
                  logo: "https://smest.no/logo.png",
                  description:
                    "Praktisk rådgivning og opplæring i bruk av kunstig intelligens for SMB-er, organisasjoner og ledere.",
                  email: "martin@smest.no",
                  telephone: "+4792647314",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Øvre Slottsgate 3",
                    addressLocality: "Oslo",
                    postalCode: "0157",
                    addressCountry: "NO",
                  },
                  founder: {
                    "@type": "Person",
                    name: "Martin Smestad Hansen",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+4792647314",
                    email: "martin@smest.no",
                    contactType: "customer service",
                    areaServed: "NO",
                    availableLanguage: ["Norwegian", "English"],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://smest.no/#website",
                  url: "https://smest.no",
                  name: "Smest Rådgivning",
                  description:
                    "Praktisk rådgivning og opplæring i bruk av kunstig intelligens for SMB-er, organisasjoner og ledere.",
                  publisher: {
                    "@id": "https://smest.no/#organization",
                  },
                  inLanguage: "nb-NO",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: "https://smest.no/ressurser?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Person",
                  "@id": "https://smest.no/#person",
                  name: "Martin Smestad Hansen",
                  jobTitle: "KI-rådgiver og foredragsholder",
                  worksFor: {
                    "@id": "https://smest.no/#organization",
                  },
                  email: "martin@smest.no",
                  telephone: "+4792647314",
                  url: "https://smest.no/om-martin",
                  sameAs: [
                    "https://www.linkedin.com/in/martinsmestadhansen/",
                    "https://talerlisten.no/profil/martin-smestad-hansen/",
                  ],
                  description:
                    "25 års erfaring innen teknologi og kommunikasjon. Praktisk KI-rådgivning uten buzzwords.",
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://smest.no/#service",
                  name: "Smest Rådgivning",
                  description: "Praktisk rådgivning og opplæring i bruk av kunstig intelligens",
                  provider: {
                    "@id": "https://smest.no/#organization",
                  },
                  areaServed: "NO",
                  serviceType: ["Consulting", "Training", "Speaking"],
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "KI-rådgivning tjenester",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Basic",
                          description: "Gratis nyhetsbrev og tilgang til ressurser",
                        },
                        price: "0",
                        priceCurrency: "NOK",
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Extended",
                          description: "Månedlig abonnement med løpende rådgivning",
                        },
                        priceSpecification: {
                          "@type": "UnitPriceSpecification",
                          priceCurrency: "NOK",
                          billingPeriod: "Monthly",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Premium",
                          description: "Dedikert samarbeid med fysisk oppmøte",
                        },
                        priceSpecification: {
                          "@type": "UnitPriceSpecification",
                          priceCurrency: "NOK",
                          billingPeriod: "Weekly",
                        },
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
