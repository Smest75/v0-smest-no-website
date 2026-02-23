// Testimonials data - easy to edit and add new testimonials
// Each testimonial will be displayed in the carousel on the home page
// Use template literals (backticks) for quotes to support line breaks

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  stars?: number // defaults to 5
}

export const testimonials: Testimonial[] = [
  {
    quote: `Winnem Utvikling har vært så heldig og hatt Martin som gjesteforeleser i karriereutviklingsprogrammet Karrierekraft. Her loset Martin deltakerne igjennom hvordan de kan anvende kunstig intelligens i egen karriereutvikling og i jobbsøkerprosessen.

Martin formidler det komplekse på en enkel måte og med en herlig lekenhet!

Han evner å benytte relevante eksempler som gjør innholdet matnyttig og inspirerende.`,
    name: "Hege Winnem",
    role: "Daglig leder",
    company: "Winnem Utvikling AS",
    stars: 5,
  },
  {
    quote: `Martin har stått for gjennomføring av «AI-panel» hos oss internt og for våre inviterte gjester to ganger nå. Først har han innledet med foredrag, og så fasilitert en workshop med deltakerne der de spør, svarer og deler erfaringer med KI i praksis.

Nå sist, basert på mottatte svar på evalueringen, fikk vi udelt positiv respons. Deltakerne opplevde Martin som både pedagogisk og inspirerende, samtidig som han evnet å tilpasse nivået til målgruppen.

Fint opplegg og godt gjennomført!`,
    name: "Martin Andre Hovden",
    role: "Partner",
    company: "Belief Group AS",
    stars: 5,
  },
  {
    quote: `Martin holdt keynote-foredrag på vår konferanse Generativ AI i praksis. Foredraget hans 'AI og læring: Kompetanseheving med generativ AI' fikk svært positiv respons fra deltakerne. Hele 83 % av de som svarte var enten 'helt enig' eller 'litt enig' i at foredraget var interessant og inspirerende.`,
    name: "Lars Kolberg",
    role: "Event Manager",
    company: "Computerworld",
    stars: 5,
  },
  {
    quote: `Imponerende AI-rådgivning som kombinerer teknologi og forretningsforståelse på en sjelden god måte. Gir rask verdi og smarte løsninger – nesten som magi! Anbefales på det sterkeste`,
    name: "Siri Helene Taugbøl",
    role: "Grunnlegger",
    company: "Return Real Estate Advisory",
    stars: 5,
  },
  {
    quote: `Jeg hadde nylig gleden av å motta skreddersydd opplæring i Kunstig Intelligens (KI) av Martin i Smest AS. Opplæringen var rettet mot personlig bruk, spesielt relevant for meg etter avsluttet mange år i arbeidslivet hvor jeg ønsket å oppdatere mine digitale ferdigheter.

Undervisningen ga meg en solid trygghet i hvordan jeg nå kan bruke KI på en mer presis og strukturert måte. Martin tilpasset hele opplegget utmerket til mine spesifikke behov og bruksområder, og benyttet seg av praktiske og relevante eksempler.

Jeg lærte konkret hvordan KI kan brukes effektivt til innsikt, analyse og sammenligning av selskaper. Jeg sitter igjen med et konkret og anvendbart sett med verktøy og ferdigheter som jeg kan ta i bruk umiddelbart.`,
    name: "Stein Mathiesen",
    role: "Tidligere konsernsjef",
    company: "Stiftelsen Anker Studentboliger og Hotel",
    stars: 5,
  },
]
