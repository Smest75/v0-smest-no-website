import Link from "next/link"
import Image from "next/image"
import { ArrowRight, RefreshCw } from "lucide-react"
import type { BlogPost } from "@/lib/blog"

interface ArticleTeaserProps {
  post: BlogPost
  variant?: "large" | "small"
}

export function ArticleTeaser({ post, variant = "small" }: ArticleTeaserProps) {
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

  if (variant === "large") {
    return (
      <article className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors">
        <Link href={`/ressurser/${post.slug}`} className="block">
          {post.image ? (
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ) : (
            <div className="aspect-[16/9] bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Ingen bilde</span>
            </div>
          )}
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <time>{formattedDate}</time>
              {formattedUpdatedAt && formattedUpdatedAt !== formattedDate && (
                <span className="flex items-center gap-1">
                  <RefreshCw className="h-3 w-3" />
                  Oppdatert {formattedUpdatedAt}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors text-balance">
              {post.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">
              {post.excerpt}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              Les artikkelen
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </article>
    )
  }

  return (
    <article className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors h-full flex flex-col">
      <Link href={`/ressurser/${post.slug}`} className="block flex-1 flex flex-col">
        {post.image ? (
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="aspect-[16/9] bg-muted flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Ingen bilde</span>
          </div>
        )}
        <div className="p-6 sm:p-8 flex-1 flex flex-col">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <time>{formattedDate}</time>
            {formattedUpdatedAt && formattedUpdatedAt !== formattedDate && (
              <span className="flex items-center gap-1">
                <RefreshCw className="h-3 w-3" />
                Oppdatert {formattedUpdatedAt}
              </span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-3 group-hover:text-primary transition-colors text-balance">
            {post.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4 flex-1 text-pretty">
            {post.excerpt}
          </p>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mt-auto">
            Les artikkelen
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  )
}
