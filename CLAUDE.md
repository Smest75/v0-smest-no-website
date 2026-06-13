# CLAUDE.md – smest.no

Kontekstfil for Claude Code. Lastes automatisk i hver sesjon.

---

## Hva er dette prosjektet?

**smest.no** er nettsiden til Smest AS — Martin Smestad Hansens enkeltpersonforetak for KI-rådgivning, opplæring og foredrag rettet mot norske SMB-er og fagpersoner. Siden er bygget av Martin med v0.dev og Claude Code, og drives uten CMS.

Martin har 25 års erfaring innen teknologi og kommunikasjon. Merkevaren er bygget på praktisk, ærlig og tilgjengelig kommunikasjon — ikke buzzwords.

---

## Tech stack

| Teknologi | Detalj |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, Tailwind CSS 4 |
| Språk | TypeScript (strict) |
| Innhold | MDX-filer i `content/blog/` |
| Ikoner | Lucide React |
| Font | Geist / Geist Mono (Vercel) |
| Hosting | Vercel — auto-deploy ved push til `main` |
| Repo | GitHub: `Smest75/v0-smest-no-website` |
| Node | 24+ kreves |

Alle sider er statisk generert (SSG). Ingen backend, ingen database, ingen CMS.

---

## Nøkkelfiler

| Fil | Formål |
|---|---|
| `lib/config.ts` | `siteConfig`: telefon, e-post, kalender-URL, baseUrl |
| `lib/blog.ts` | `BlogPost`-type, parsing, sortering av artikler |
| `content/blog/` | MDX-artikler (frontmatter + innhold) |
| `docs/brand-guidelines.md` | Full merkevaremanual — farger, typografi, tone, WCAG |
| `app/ressurser/[slug]/page.tsx` | Artikkelside-renderer |
| `components/blog/article-teaser.tsx` | Kortkomponent brukt på ressurser-siden |
| `app/layout.tsx` | Root layout med navigasjon og JSON-LD |

---

## Innholdsworkflow — legge til ny artikkel

1. Opprett `content/blog/[slug].mdx` med frontmatter:

```yaml
---
title: "Tittel"
excerpt: "Kort beskrivelse (brukes i kortvisning og meta)"
date: "YYYY-MM-DD"
updatedAt: "YYYY-MM-DD"   # valgfritt — vis kun om artikkelen er oppdatert
author: "Martin Smestad Hansen"
image: "/images/filnavn.webp"
imageAlt: "Beskrivende alt-tekst"
featured: true             # valgfritt — fremhevet på ressurser-siden
---
```

2. Legg bilde i `public/images/` (foretrekk `.webp` for ytelse).
3. Sortering skjer automatisk etter `updatedAt` (fallback: `date`) — nyeste øverst.
4. Commit og push til `main` → Vercel deployer automatisk.

---

## Deploy-flyt

```
Rediger lokalt → git add → git commit → git push origin main → Vercel auto-deploy
```

Ingen staging-miljø. Alle endringer går rett til produksjon. Test alltid med `npm run build` lokalt før push ved større endringer.

---

## SEO og EEAT

Siden er optimalisert for **AEO** (Answer Engine Optimization) og **EEAT** (Experience, Expertise, Authoritativeness, Trustworthiness).

### Schema.org — implementerte typer

Definert i `app/layout.tsx` og `app/ressurser/[slug]/page.tsx`:

| Type | Plassering |
|---|---|
| `Organization` | Root layout |
| `Person` | Root layout (Martin) |
| `WebSite` + `SearchAction` | Root layout |
| `ProfessionalService` | Root layout |
| `BlogPosting` | Artikkelside (inkl. `datePublished`, `dateModified`) |

### EEAT-prinsipper

- Martins navn og bilde fremtredende på alle relevante sider
- Eksplisitt "25 års erfaring"-referanse i merkevare og innhold
- Lenker til LinkedIn og Talerlisten i Person-schema
- Kildehenvisninger i artikler der det er relevant
- Ærlig tone — anerkjenn begrensninger, ikke overselg

### Metadata

- Alle sider har unik `title` og `description`
- OpenGraph-data satt per side
- `sitemap.xml` og `robots.txt` genereres automatisk
- **OBS:** `metadataBase` mangler i root layout — se Backlog

---

## Tilgjengelighet (WCAG 2.1 AA)

Fra `docs/brand-guidelines.md` — ikke forhandlingsbart:

- Kontrastratio minimum **4.5:1** for normal tekst, **3:1** for stor tekst
- Alle interaktive elementer: synlig **focus ring** (`ring-2 ring-ring ring-offset-2`)
- Alle bilder: meningsfull `alt`-tekst
- Semantisk HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<address>`
- Knapper med bare ikon: `aria-label` obligatorisk
- Respekter `prefers-reduced-motion: reduce` for animasjoner
- Mørk modus er tilgjengelig i CSS men ikke et aktivt krav — bruk ikke tid på å teste det

---

## Merkevare — hurtigreferanse

Full manual i `docs/brand-guidelines.md`. Kortversjon:

- **Primærfarge:** Smest Grønn `oklch(0.35 0.08 155)` — eneste aksentfarge, bruk sparsomt
- **Font:** Geist overalt — ikke introduser andre fonter
- **Tone:** Norsk bokmål, direkte, ærlig, faglig men tilgjengelig
- **Ikoner:** Lucide React, `w-6 h-6` standard
- **Hardkod aldri** telefon/e-post i JSX — bruk `siteConfig` fra `lib/config.ts`
- **Ingen nye farger** uten å oppdatere `globals.css` og brand-guidelines

---

## Nøkkelbeslutninger

| Beslutning | Begrunnelse |
|---|---|
| Ingen CMS | Innhold er sjeldent og kan vedlikeholdes direkte i MDX |
| Statisk generering (SSG) | Maksimal ytelse, ingen server-kostnad |
| Sortering etter `updatedAt` | Oppdaterte artikler er mer relevante enn nye men utdaterte |
| `updatedAt` vises til venstre for publiseringsdato | Mer relevant informasjon skal være mest synlig |
| Ingen søkefunksjon | For få artikler til at det gir verdi |
| Mørk modus ikke aktivt vedlikeholdt | CSS-tokens støtter det, men ikke testet/prioritert |
| Ingen analytics ennå | Ikke satt opp |
| Ingen nyhetsbrev-platform ennå | «Meld deg på»-CTA er på plass, men backend mangler |

---

## Backlog

### `metadataBase` — Next.js build-advarsel
**Symptom:** `Warning: metadataBase property in metadata export is not set` ved `npm run build`.  
**Årsak:** Root layout mangler `metadataBase`, så Next.js kan ikke resolve relative bilde-URLer for OpenGraph til absolutte URLer. Faller tilbake til `localhost:3000`.  
**Fix:** Legg til i `app/layout.tsx` metadata-eksporten:
```ts
metadataBase: new URL(siteConfig.baseUrl),
```
**Prioritet:** Lav — ingen feil, men bør fikses for korrekte sosiale delinger.

---

### Flere artikler
Nytt innhold kommer etter hvert. Følg innholdsworkflow-seksjonen over.

---

## Ikke relevant for dette prosjektet (ennå)

- `Smest-mal.dotx` og `lag-wordmal.py` i `C:\Users\marti\claude\smest-no-web\` — separat prosjekt, håndteres for seg
- Google Business-skjermbilder i `input/` — separat prosjekt
