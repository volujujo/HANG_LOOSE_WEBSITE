'use client'

import { useRef, useState, useCallback, ReactNode } from 'react'

export function MobileCarousel({
  count,
  desktopCols = 3,
  children,
}: {
  count: number
  desktopCols?: number
  children: ReactNode
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  const onScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const index = Math.round(el.scrollLeft / (el.scrollWidth / count))
    setCurrent(Math.min(Math.max(index, 0), count - 1))
  }, [count])

  const goTo = (i: number) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollTo({ left: (el.scrollWidth / count) * i, behavior: 'smooth' })
    setCurrent(i)
  }

  const colsClass =
    desktopCols === 2
      ? 'md:grid-cols-2'
      : desktopCols === 3
        ? 'md:grid-cols-3'
        : 'md:grid-cols-4'

  return (
    <div className="relative">
      {/* Scroll container */}
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className={`flex md:grid ${colsClass} gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scrollbar-hide`}
      >
        {children}
      </div>

      {/* Mobile-only controls */}
      <div className="md:hidden">
        {/* Prev arrow */}
        <button
          onClick={() => goTo(Math.max(0, current - 1))}
          aria-label="Previous"
          className={`absolute left-0 top-[42%] -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center transition-opacity duration-200 ${
            current === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <svg className="w-4 h-4 text-[#0A1628]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next arrow */}
        <button
          onClick={() => goTo(Math.min(count - 1, current + 1))}
          aria-label="Next"
          className={`absolute right-0 top-[42%] -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center transition-opacity duration-200 ${
            current === count - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <svg className="w-4 h-4 text-[#0A1628]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-5 bg-[#F8B85D]' : 'w-1.5 bg-[#0A1628]/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
