'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MobileCarousel } from '@/components/ui/MobileCarousel'

const categories = [
  {
    title: 'Beginners',
    href: '/courses/beginners',
    image: '/gallery/homepagebasic.webp',
    description: "Thinking about scuba diving? Our beginner programs focus on comfort, confidence, and fun—perfect for anyone curious about exploring the ocean for the first time.",
  },
  {
    title: 'Advanced',
    href: '/courses/advanced',
    image: '/gallery/homepageadv.webp',
    description: "Ready to step up as a diver? Our specialty courses are built to elevate your skills, confidence, and control—whether that means diving deeper, exploring wrecks, or experiencing the ocean after dark.",
  },
  {
    title: 'Professionals',
    href: '/courses/professionals',
    image: '/gallery/infoitc2.webp',
    description: "Where passion turns into purpose. From Divemaster to Instructor, our training is hands-on, high-standard, and fully dialed in—shaping professionals who represent the ocean the right way.",
  },
  {
    title: 'Packages',
    href: '/packages',
    image: '/gallery/homepageowd.webp',
    description: "Save time and money by combining courses. Our combo deals are designed for divers who want to progress faster and get the most out of their time on Koh Tao.",
  },
]

export function CategoryCarousel() {
  return (
    <MobileCarousel count={categories.length} desktopCols={2}>
      {categories.map((cat) => (
        <Link key={cat.title} href={cat.href} className="group snap-center shrink-0 w-[80vw] md:w-auto">
          <div className="flex flex-col h-full bg-[#F0EBD8] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="relative w-full aspect-[16/8]">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col flex-1 p-4 md:p-5">
              <h2
                className="text-xl md:text-2xl font-black uppercase text-[#0A1628] mb-2"
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                {cat.title}
              </h2>
              <p className="text-sm text-[#0A1628]/60 leading-relaxed flex-1 mb-3">
                {cat.description}
              </p>
              <div className="mt-1 flex justify-start">
                <span
                  className="text-base font-normal uppercase tracking-wider text-[#F8B85D] group-hover:underline underline-offset-4 transition-all"
                  style={{ fontFamily: 'var(--font-space-mono)' }}
                >
                  Explore Courses →
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </MobileCarousel>
  )
}
