"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { Star } from "lucide-react"

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  stars?: number
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  autoPlayInterval?: number
}

export function TestimonialsSection({
  testimonials,
  autoPlayInterval = 5000,
}: TestimonialsSectionProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [itemsPerPage, setItemsPerPage] = useState(3)
  const containerRef = useRef<HTMLDivElement>(null)

  // Dynamically calculate items per page based on container width
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (!containerRef.current) return
      const width = containerRef.current.offsetWidth
      
      // Responsive breakpoints matching Tailwind's md (768px) and lg (1024px)
      if (width < 640) {
        setItemsPerPage(1)
      } else if (width < 1024) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(3)
      }
    }

    updateItemsPerPage()
    
    const resizeObserver = new ResizeObserver(updateItemsPerPage)
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => resizeObserver.disconnect()
  }, [])

  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  // Reset to first page if current page exceeds total pages after resize
  useEffect(() => {
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(totalPages - 1)
    }
  }, [totalPages, currentPage])

  const goToPage = useCallback(
    (pageIndex: number) => {
      if (pageIndex === currentPage) return
      setCurrentPage(pageIndex)
    },
    [currentPage]
  )

  const nextPage = useCallback(() => {
    const next = (currentPage + 1) % totalPages
    goToPage(next)
  }, [currentPage, totalPages, goToPage])

  useEffect(() => {
    if (isPaused || totalPages <= 1) return

    const interval = setInterval(() => {
      nextPage()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [nextPage, autoPlayInterval, isPaused, totalPages])

  if (testimonials.length === 0) {
    return null
  }

  // Calculate width percentage based on items per page
  const itemWidthPercent = 100 / itemsPerPage
  const gapRem = 2 // gap-8 = 2rem

  return (
    <section
      className="py-24 sm:py-32"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Dette sier kundene våre:
          </h2>
        </div>

        <div className="relative overflow-hidden" ref={containerRef}>
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              gap: `${gapRem}rem`,
              transform: `translateX(calc(-${currentPage * 100}% - ${currentPage * gapRem}rem))`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-lg border border-border bg-card p-6 flex flex-col"
                style={{
                  width: `calc(${itemWidthPercent}% - ${((itemsPerPage - 1) * gapRem) / itemsPerPage}rem)`,
                }}
              >
                <StarRating count={testimonial.stars ?? 5} />
                <p className="text-muted-foreground leading-relaxed text-pretty mb-6 flex-grow whitespace-pre-line">
                  {testimonial.quote}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots - only show if more than 1 page */}
        {totalPages > 1 && (
          <div className="flex justify-start gap-3 mt-8">
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <button
                key={pageIndex}
                onClick={() => goToPage(pageIndex)}
                className={`h-3 w-3 rounded-full transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  pageIndex === currentPage
                    ? "bg-foreground"
                    : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
                }`}
                aria-label={`Gå til side ${pageIndex + 1}`}
                aria-current={pageIndex === currentPage ? "true" : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
