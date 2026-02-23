import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog"

interface ArticleListItemProps {
  post: BlogPost
}

export function ArticleListItem({ post }: ArticleListItemProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("nb-NO", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <article className="group py-4 border-b border-border last:border-b-0">
      <Link
        href={`/ressurser/${post.slug}`}
        className="flex items-center justify-between gap-4 hover:text-primary transition-colors"
      >
        <div className="flex-1 min-w-0">
          <h3 className="font-medium truncate group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <time className="text-sm text-muted-foreground hidden sm:block">
            {formattedDate}
          </time>
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </Link>
    </article>
  )
}
