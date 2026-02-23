import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  updatedAt?: string
  author: string
  image?: string
  imageAlt?: string
  content: string
  featured?: boolean
}

const contentDirectory = path.join(process.cwd(), "content/blog")

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(contentDirectory)
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "")
      return getPostBySlug(slug)
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || "",
      excerpt: data.excerpt || "",
      date: data.date || "",
      updatedAt: data.updatedAt,
      author: data.author || "Martin Smestad Hansen",
      image: data.image,
      imageAlt: data.imageAlt,
      content,
      featured: data.featured || false,
    }
  } catch (error) {
    console.error(`Failed to load blog post: ${slug}`, error)
    return null
  }
}

export function getFeaturedPosts(): BlogPost[] {
  const posts = getAllPosts()
  const featured = posts.filter((post) => post.featured)
  
  // If we have featured posts, return them; otherwise return the 3 most recent
  if (featured.length >= 3) {
    return featured.slice(0, 3)
  }
  
  return posts.slice(0, 3)
}

export function getOlderPosts(excludeSlugs: string[]): BlogPost[] {
  const posts = getAllPosts()
  return posts.filter((post) => !excludeSlugs.includes(post.slug))
}

export function getRelatedPosts(currentSlug: string, count: number = 2): BlogPost[] {
  const posts = getAllPosts()
  return posts.filter((post) => post.slug !== currentSlug).slice(0, count)
}
