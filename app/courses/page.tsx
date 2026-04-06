import Link from 'next/link'
import { CategoryCarousel } from '@/components/courses/CategoryCarousel'

export default function CoursesPage() {
  return (
    <main className="bg-[#FFFAE7]">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p
            className="text-sm font-normal tracking-[0.25em] uppercase text-[#4D9995] mb-4"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Dive Programs
          </p>
          <h1
            className="text-3xl md:text-4xl font-black uppercase text-[#0A1628] mb-6"
            style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}
          >
            Find Your Course
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#0A1628]/60 leading-relaxed">
            From your very first breath underwater to professional certifications,
            we have a program built for every level. Small groups, expert instructors,
            and the best dive sites on Koh Tao.
          </p>
          <div className="mx-auto mt-8 h-2 w-2 rounded-full bg-[#F8B85D]" />
        </div>
      </section>

      {/* Category Cards */}
      <section className="pb-16 md:pb-20">
        <div className="px-6 md:px-12 lg:px-20">
          <CategoryCarousel />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-2xl md:text-4xl font-black uppercase text-[#0A1628] mb-4"
            style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}
          >
            Not Sure Where to Start?
          </h2>
          <p className="text-base text-[#0A1628]/60 leading-relaxed mb-8">
            No worries — reach out and we&apos;ll help you find the perfect fit based
            on your experience, goals, and time on the island.
          </p>
          <Link
            href="/contact"
            className="text-sm font-normal uppercase tracking-wider text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </main>
  )
}
