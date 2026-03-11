import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    title: 'Beginners',
    href: '/courses/beginners',
    image: '/gallery/photo1.webp',
    description: "Thinking about scuba diving? Our beginner programs focus on comfort, confidence, and fun—perfect for anyone curious about exploring the ocean for the first time.",
  },
  {
    title: 'Advanced',
    href: '/courses/advanced',
    image: '/gallery/photo3.webp',
    description: "Ready to step up as a diver? Our specialty courses are built to elevate your skills, confidence, and control—whether that means diving deeper, exploring wrecks, or experiencing the ocean after dark.",
  },
  {
    title: 'Professionals',
    href: '/courses/professionals',
    image: '/gallery/photo4.webp',
    description: "Where passion turns into purpose. From Divemaster to Instructor, our training is hands-on, high-standard, and fully dialed in—shaping professionals who represent the ocean the right way.",
  },
  {
    title: 'Packages',
    href: '/packages',
    image: '/gallery/photo2.webp',
    description: "Save time and money by combining courses. Our combo deals are designed for divers who want to progress faster and get the most out of their time on Koh Tao.",
  },
]

export default function CoursesPage() {
  return (
    <main className="bg-[#FFFAE7]">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase text-[#4D9995] mb-4"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Dive Programs
          </p>
          <h1
            className="text-4xl md:text-6xl font-black uppercase text-[#0A1628] mb-6"
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
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <Link key={cat.title} href={cat.href} className="group">
                <div className="flex flex-col h-full bg-[#F0EBD8] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  {/* Image */}
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5 md:p-6">
                    <h2
                      className="text-xl md:text-2xl font-black uppercase text-[#0A1628] mb-3"
                      style={{ fontFamily: 'var(--font-space-mono)' }}
                    >
                      {cat.title}
                    </h2>
                    <p className="text-sm text-[#0A1628]/60 leading-relaxed flex-1 mb-4">
                      {cat.description}
                    </p>
                    <span
                      className="text-xs font-black uppercase tracking-wider text-[#F8B85D] group-hover:underline underline-offset-4 transition-all"
                      style={{ fontFamily: 'var(--font-space-mono)' }}
                    >
                      Explore Courses →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dot Divider */}
      <div className="flex justify-center py-4">
        <div className="h-2 w-2 rounded-full bg-[#F8B85D]" />
      </div>

      {/* Already Certified? Fun Dives CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text */}
            <div className="text-center lg:text-left">
              <p
                className="text-xs font-bold tracking-[0.25em] uppercase text-[#F8B85D] mb-4"
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                Already Certified?
              </p>
              <h2
                className="text-3xl md:text-4xl font-black uppercase text-[#0A1628] mb-4"
                style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}
              >
                Skip the Course. <br />Just Dive.
              </h2>
              <p className="text-base text-[#0A1628]/60 leading-relaxed mb-6">
                Got your cert and ready to explore? Join us for guided fun dives at
                Koh Tao&apos;s best sites — vibrant reefs, dramatic pinnacles, and
                unforgettable marine life encounters. No classroom, no skills test.
                Just you, the ocean, and good vibes.
              </p>
              <Link
                href="/fun-dives/fun-dives"
                className="text-sm font-black uppercase tracking-wider text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300"
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                Explore Fun Dives →
              </Link>
            </div>
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/gallery/photo2.webp"
                alt="Fun diving in Koh Tao"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
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
            className="text-sm font-black uppercase tracking-wider text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </main>
  )
}
