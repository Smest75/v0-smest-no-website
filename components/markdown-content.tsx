"use client"

import React from "react"
import Link from "next/link"
import ReactMarkdown from "react-markdown"

interface MarkdownContentProps {
  content: string
}

interface ContentSegment {
  type: "normal" | "faktaboks"
  title?: string
  content: string
}

function parseContent(content: string): ContentSegment[] {
  const segments: ContentSegment[] = []
  const lines = content.split("\n")
  let currentLines: string[] = []
  let inFaktaboks = false
  let faktaboksTitle = ""
  let faktaboksLines: string[] = []

  for (const line of lines) {
    if (line.startsWith("## Faktaboks:")) {
      if (currentLines.length > 0) {
        segments.push({ type: "normal", content: currentLines.join("\n") })
        currentLines = []
      }
      inFaktaboks = true
      faktaboksTitle = line.replace("## Faktaboks:", "").trim()
      faktaboksLines = []
    } else if (inFaktaboks && line.trim() === "**Slutt på faktaboks**") {
      segments.push({ type: "faktaboks", title: faktaboksTitle, content: faktaboksLines.join("\n") })
      inFaktaboks = false
      faktaboksTitle = ""
      faktaboksLines = []
    } else if (inFaktaboks) {
      faktaboksLines.push(line)
    } else {
      currentLines.push(line)
    }
  }

  if (currentLines.length > 0) {
    segments.push({ type: "normal", content: currentLines.join("\n") })
  }

  return segments
}

const mdComponents = {
  h1: ({ children }: { children?: React.ReactNode }) => (
    <h1 className="text-3xl font-bold tracking-tight mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">{children}</h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>
  ),
  p: ({ children }: { children?: React.ReactNode }) => (
    <p className="text-foreground/90 leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }: { children?: React.ReactNode }) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-foreground/90">{children}</ul>
  ),
  ol: ({ children }: { children?: React.ReactNode }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground/90">{children}</ol>
  ),
  li: ({ children }: { children?: React.ReactNode }) => (
    <li className="leading-relaxed">{children}</li>
  ),
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) =>
    href ? (
      <Link
        href={href}
        className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
      >
        {children}
      </Link>
    ) : (
      <>{children}</>
    ),
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">
      {children}
    </blockquote>
  ),
  code: ({ children }: { children?: React.ReactNode }) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
  ),
  pre: ({ children }: { children?: React.ReactNode }) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">{children}</pre>
  ),
  hr: () => <hr className="my-8 border-border" />,
  strong: ({ children }: { children?: React.ReactNode }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  em: ({ children }: { children?: React.ReactNode }) => <em className="italic">{children}</em>,
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  const segments = parseContent(content)

  return (
    <>
      {segments.map((segment, i) =>
        segment.type === "faktaboks" ? (
          <aside
            key={i}
            className="my-8 rounded-xl border border-primary/20 bg-primary/5 px-6 py-5"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-3">
              Faktaboks
            </p>
            <h2 className="text-lg font-semibold mb-4">{segment.title}</h2>
            <ReactMarkdown components={mdComponents}>{segment.content}</ReactMarkdown>
          </aside>
        ) : (
          <ReactMarkdown key={i} components={mdComponents}>
            {segment.content}
          </ReactMarkdown>
        )
      )}
    </>
  )
}
