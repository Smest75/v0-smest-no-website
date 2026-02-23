import { getAllPosts, getFeaturedPosts, getOlderPosts } from "@/lib/blog"
import { ArticleTeaser } from "@/components/blog/article-teaser"
import { ArticleListItem } from "@/components/blog/article-list-item"

export const metadata = {
  title: "Ressurser – Smest Rådgivning",
  description: "Artikler, guider og ressurser om praktisk bruk av kunstig intelligens for SMB-er og organisasjoner.",
}

export default function RessurserPage() {
  const featuredPosts = getFeaturedPosts()
  const featuredSlugs = featuredPosts.map((p) => p.slug)
  const olderPosts = getOlderPosts(featuredSlugs)

  const [mainPost, ...secondaryPosts] = featuredPosts

  return (
    <>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-balance">Ressurser</h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Artikler, guider og praktiske tips om bruk av kunstig intelligens.
            </p>
          </div>

          {/* Featured Section */}
          {mainPost && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
              {/* Large teaser */}
              <div className="lg:col-span-1">
                <ArticleTeaser post={mainPost} variant="large" />
              </div>

              {/* Two smaller teasers */}
              <div className="flex flex-col gap-6">
                {secondaryPosts.slice(0, 2).map((post) => (
                  <ArticleTeaser key={post.slug} post={post} variant="small" />
                ))}
              </div>
            </div>
          )}

          {/* Older articles list */}
          {olderPosts.length > 0 && (
            <div className="border-t border-border pt-12">
              <h2 className="text-2xl font-semibold mb-6">Tidligere artikler</h2>
              <div className="max-w-3xl">
                {olderPosts.map((post) => (
                  <ArticleListItem key={post.slug} post={post} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="bg-muted/30 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-balance">Vil du ha mer?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Meld deg på nyhetsbrevet for å motta praktiske tips og nyheter om KI direkte i innboksen.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors"
          >
            Meld deg på
          </a>
        </div>
      </section>

      {/* JSON-LD Structured Data for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Smest Rådgivning Ressurser",
            description: "Artikler og guider om praktisk bruk av kunstig intelligens",
            url: "https://smest.no/ressurser",
            author: {
              "@type": "Person",
              name: "Martin Smestad Hansen",
            },
          }),
        }}
      />
    </>
  )
}
