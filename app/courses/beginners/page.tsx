import Image from 'next/image'
import Link from 'next/link'

const courses = [
  {
    title: 'Try Scuba',
    subtitle: 'Basic Diver',
    href: '/courses/beginners/try-scuba',
    image: '/gallery/photo1.webp',
    duration: '1 Day',
    dives: '2 Dives',
    price: '3,500 THB',
    description: "Explore Koh Tao's underwater world with our Try Scuba Diving course, a relaxed one-day program perfect for first-time divers looking to try scuba in a safe and comfortable way.",
  },
  {
    title: 'Open Water Diver',
    subtitle: 'SSI Certification',
    href: '/courses/beginners/open-water',
    image: '/gallery/photo2.webp',
    duration: '2.5 Days',
    dives: '6 Dives',
    price: '9,900 THB',
    description: "The SSI Open Water Diver course is your gateway to scuba diving, certifying you to dive to 18 meters. This worldwide recognized and valid for life certification gives you the freedom to dive anywhere your travels take you.",
  },
]

export default function BeginnersPage() {
  return (
    <main className="bg-[#FFFAE7]">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link
              href="/courses"
              className="text-xs font-bold uppercase tracking-wider text-[#97ABB1] hover:text-[#F8B85D] transition-colors"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Courses
            </Link>
            <span className="text-[#97ABB1]">/</span>
            <span
              className="text-xs font-bold uppercase tracking-wider text-[#0A1628]"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Beginners
            </span>
          </div>

          <div className="max-w-3xl">
            <p
              className="text-xs font-bold tracking-[0.25em] uppercase text-[#4D9995] mb-4"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Beginner Programs
            </p>
            <h1
              className="text-4xl md:text-6xl font-black uppercase text-[#0A1628] mb-6"
              style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}
            >
              Start Your Diving Journey
            </h1>
            <p className="text-lg text-[#0A1628]/60 leading-relaxed">
              Thinking about scuba diving? Hang Loose Divers makes it easy to get started
              in Koh Tao. Our beginner programs focus on comfort, confidence, and fun—perfect
              for anyone curious about exploring the ocean for the first time. With friendly
              instructors and small groups, you&apos;ll enjoy a safe and laid-back learning
              experience in warm tropical waters.
            </p>
          </div>

          <div className="mt-8 h-2 w-2 rounded-full bg-[#F8B85D]" />
        </div>
      </section>

      {/* Course Cards */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Link key={course.title} href={course.href} className="group">
                <div className="flex flex-col h-full bg-[#F0EBD8] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  {/* Image */}
                  <div className="relative w-full aspect-[16/10]">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5 md:p-6">
                    <p
                      className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#4D9995] mb-1"
                      style={{ fontFamily: 'var(--font-space-mono)' }}
                    >
                      {course.subtitle}
                    </p>
                    <h2
                      className="text-xl md:text-2xl font-black uppercase text-[#0A1628] mb-3"
                      style={{ fontFamily: 'var(--font-space-mono)' }}
                    >
                      {course.title}
                    </h2>
                    <p className="text-sm text-[#0A1628]/60 leading-relaxed flex-1 mb-4">
                      {course.description}
                    </p>
                    {/* Info row */}
                    <div className="flex items-center gap-4 text-xs font-bold text-[#0A1628]/50 mb-4">
                      <div className="flex items-center gap-1.5">
                        <svg className="h-4 w-4 text-[#4D9995]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="7" />
                          <path d="M12 9v3l2 2" />
                        </svg>
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="h-4 w-4 text-[#4D9995]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 15c1.2 0 1.8-.5 2.4-1 .6-.5 1.2-1 2.4-1s1.8.5 2.4 1c.6.5 1.2 1 2.4 1s1.8-.5 2.4-1c.6-.5 1.2-1 2.4-1" />
                        </svg>
                        <span>{course.dives}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="h-4 w-4 text-[#4D9995]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="10" cy="12" r="3" />
                          <circle cx="14" cy="11" r="3" />
                        </svg>
                        <span>{course.price}</span>
                      </div>
                    </div>
                    {/* CTA */}
                    <span
                      className="text-xs font-black uppercase tracking-wider text-[#F8B85D] group-hover:underline underline-offset-4 transition-all"
                      style={{ fontFamily: 'var(--font-space-mono)' }}
                    >
                      Learn More →
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

      {/* Ready for More? */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase text-[#4D9995] mb-4"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            What&apos;s Next?
          </p>
          <h2
            className="text-2xl md:text-4xl font-black uppercase text-[#0A1628] mb-4"
            style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}
          >
            Ready to Go Further?
          </h2>
          <p className="text-base text-[#0A1628]/60 leading-relaxed mb-8">
            Once you&apos;re certified, the adventure is just beginning. Explore our
            advanced specialties or jump straight into fun dives around Koh Tao.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/courses/advanced"
              className="text-sm font-black uppercase tracking-wider text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Advanced Courses →
            </Link>
            <Link
              href="/fun-dives/fun-dives"
              className="text-sm font-black uppercase tracking-wider text-[#4D9995] hover:underline underline-offset-4 transition-all duration-300"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Fun Dives →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

