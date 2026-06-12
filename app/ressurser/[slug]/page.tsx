import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, RefreshCw } from "lucide-react"
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog"
import { ArticleTeaser } from "@/components/blog/article-teaser"
import { MarkdownContent } from "@/components/markdown-content"

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Artikkel ikke funnet – Smest Rådgivning",
    }
  }

  return {
    title: `${post.title} – Smest Rådgivning`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedAt || post.date,
      authors: [post.author],
      images: post.image ? [post.image] : undefined,
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, 2)

  const formattedDate = new Date(post.date).toLocaleDateString("nb-NO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const formattedUpdatedAt = post.updatedAt
    ? new Date(post.updatedAt).toLocaleDateString("nb-NO", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null

  return (
    <>
      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/ressurser"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Tilbake til ressurser
          </Link>

          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              {post.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              {formattedUpdatedAt && formattedUpdatedAt !== formattedDate && (
                <div className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4" />
                  <span>Oppdatert {formattedUpdatedAt}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{formattedDate}</time>
              </div>
            </div>
          </header>

          {/* Featured image */}
          {post.image && (
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-10">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="prose-custom">
            <MarkdownContent content={post.content} />
          </div>
        </div>
      </article>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-8 text-center">Les også</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <ArticleTeaser key={relatedPost.slug} post={relatedPost} variant="small" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.date,
            dateModified: post.updatedAt || post.date,
            author: {
              "@type": "Person",
              name: post.author,
              url: "https://smest.no/om-martin",
            },
            publisher: {
              "@type": "Organization",
              name: "Smest Rådgivning",
              url: "https://smest.no",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://smest.no/ressurser/${slug}`,
            },
          }),
        }}
      />
    </>
  )
}
