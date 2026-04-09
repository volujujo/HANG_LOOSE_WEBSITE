"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function GallerySection() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="gallery"
      ref={ref}
      className="bg-[#FFFAE7] px-6 md:px-12 lg:px-20 pb-0 md:pb-14"
    >
      {/* Mobile layout: 2-column masonry-style */}
      <div
        className={`md:hidden flex flex-col gap-3 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Top row: large photo1 — full width, matches height of photo2 */}
        <div className="relative overflow-hidden rounded-2xl aspect-[3/2]">
          <Image
            src="/gallery/photo1.webp"
            alt="Diving experience in Koh Tao"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Two side by side */}
        <div className="flex gap-3">
          <div className="relative overflow-hidden rounded-2xl aspect-[3/4] flex-1">
            <Image
              src="/gallery/photo2.webp"
              alt="Diving boat and ocean view"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div className="flex flex-col gap-3 flex-1">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <Image
                src="/gallery/photo3.webp"
                alt="Underwater scene with diver"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <Image
                src="/gallery/photo4.webp"
                alt="Dive center atmosphere"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout: exact match to reference image */}
      {/* Layout: Left ~50% photo1 (tall), Middle ~25% photo2 (tall), Right ~25% photo3 + photo4 (stacked) */}
      <div
        className={`hidden md:flex gap-4 h-[360px] lg:h-[430px] xl:h-[460px] transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Left: Large photo1 ~50% width, full height */}
        <div className="relative overflow-hidden rounded-2xl flex-[1.1] min-w-0">
          <Image
            src="/gallery/photo1.webp"
            alt="Diving experience in Koh Tao"
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
        </div>

        {/* Middle: photo2 ~25% width, full height */}
        <div className="relative overflow-hidden rounded-2xl flex-[0.55] min-w-0">
          <Image
            src="/gallery/photo2.webp"
            alt="Diving boat and ocean view"
            fill
            className="object-cover"
            sizes="25vw"
          />
        </div>

        {/* Right column: photo3 + photo4 stacked, ~25% width */}
        <div className="flex flex-col gap-4 flex-[0.45] min-w-0">
          <div className="relative overflow-hidden rounded-2xl flex-1">
            <Image
              src="/gallery/photo3.webp"
              alt="Underwater scene with diver"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl flex-1">
            <Image
              src="/gallery/photo4.webp"
              alt="Dive center atmosphere"
              fill
              className="object-cover"
              sizes="25vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

