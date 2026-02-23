"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Hjem", href: "/" },
    { name: "Tjenester", href: "/tjenester" },
    { name: "Foredrag", href: "/foredrag" },
    { name: "Om Martin", href: "/om-martin" },
    { name: "Ressurser", href: "/ressurser" },
    { name: "Kontakt", href: "/kontakt" },
  ]

  useEffect(() => {
    const pathSegments = pathname.split("/").filter(Boolean)
    if (pathSegments.length === 0) return

    const breadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Hjem",
          item: "https://smest.no/",
        },
      ],
    }

    pathSegments.forEach((segment, index) => {
      const name = navigation.find((nav) => nav.href === `/${segment}`)?.name || segment
      breadcrumbList.itemListElement.push({
        "@type": "ListItem",
        position: index + 2,
        name,
        item: `https://smest.no/${pathSegments.slice(0, index + 1).join("/")}`,
      })
    })

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(breadcrumbList)
    script.id = "breadcrumb-jsonld"

    const existingScript = document.getElementById("breadcrumb-jsonld")
    if (existingScript) {
      existingScript.remove()
    }

    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.getElementById("breadcrumb-jsonld")
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label="Smest Rådgivning - Hjem"
          >
            <img src="/smest-logo.svg" alt="Smest Rådgivning" className="h-20 w-auto sm:h-28" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Åpne hovedmeny"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium leading-6 text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-1"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border">
          <div className="space-y-1 px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
