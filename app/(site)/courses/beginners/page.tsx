import { MobileCarousel } from '@/components/ui/MobileCarousel'
import Image from 'next/image'
import Link from 'next/link'

const courses = [
  {
    title: 'Try Scuba',
    subtitle: 'Basic Diver',
    href: '/courses/beginners/try-scuba',
    image: '/gallery/infobasic.webp',
    duration: '1 Day',
    dives: '2 Dives',
    price: '3,500 THB',
    description: "Explore Koh Tao's underwater world with our Try Scuba Diving course, a relaxed one-day program perfect for first-time divers looking to try scuba in a safe and comfortable way.",
  },
  {
    title: 'Open Water Diver',
    subtitle: 'SSI Certification',
    href: '/courses/beginners/open-water',
    image: '/gallery/infoowd.webp',
    duration: '2.5 Days',
    dives: '6 Dives',
    price: '10,500 THB',
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

          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-sm font-normal tracking-[0.25em] uppercase text-[#97ABB1] mb-4"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Beginner Programs
            </p>
            <h1
              className="text-3xl md:text-4xl font-black uppercase text-[#0A1628] mb-6"
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

        </div>
      </section>

      {/* Course Cards */}
      <section className="pb-16 md:pb-24">
        <div className="px-6 md:px-12 lg:px-20">
          <MobileCarousel count={2} desktopCols={2}>
            {courses.map((course) => (
              <Link key={course.title} href={course.href} className="group snap-center shrink-0 w-[80vw] md:w-auto flex flex-col">
                <div className="flex flex-col flex-1 bg-[#F0EBD8] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  {/* Image */}
                  <div className="relative w-full aspect-[3/2]">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex flex-col flex-1 p-5 md:p-6 text-center items-center">
                    <h2
                      className="text-2xl md:text-3xl font-black uppercase text-[#0A1628] mb-3"
                      style={{ fontFamily: 'var(--font-space-mono)' }}
                    >
                      {course.title}
                    </h2>
                    <p className="text-sm text-[#0A1628]/60 leading-relaxed mb-4">
                      {course.description}
                    </p>
                    {/* Info row */}
                    <div className="flex items-center justify-center gap-2 md:gap-4 text-xs md:text-sm font-normal text-[#0A1628]/50 mb-4 mt-auto">
                      <div className="flex items-center gap-1.5">
                        <svg className="h-5 w-5 md:h-6 md:w-6 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="7" />
                          <path d="M12 9v3l2 2" />
                        </svg>
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="h-5 w-5 md:h-6 md:w-6 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 15c1.2 0 1.8-.5 2.4-1 .6-.5 1.2-1 2.4-1s1.8.5 2.4 1c.6.5 1.2 1 2.4 1s1.8-.5 2.4-1c.6-.5 1.2-1 2.4-1" />
                        </svg>
                        <span>{course.dives}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="h-5 w-5 md:h-6 md:w-6 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="7" width="20" height="10" rx="1.5" /><circle cx="12" cy="12" r="2.5" /><path d="M6 10v4M18 10v4" />
                        </svg>
                        <span>{course.price}</span>
                      </div>
                    </div>
                    {/* CTA */}
                    <div className="flex justify-center">
                      <span
                        className="text-base font-normal uppercase tracking-wider text-[#F8B85D] group-hover:underline underline-offset-4 transition-all"
                        style={{ fontFamily: 'var(--font-space-mono)' }}
                      >
                        Learn More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </MobileCarousel>
        </div>
      </section>


      {/* Ready for More? */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-sm font-normal tracking-[0.25em] uppercase text-[#97ABB1] mb-4"
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
              className="text-base font-normal uppercase tracking-wider text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Advanced Courses →
            </Link>
            <Link
              href="/fun-dives/fun-dives"
              className="text-base font-normal uppercase tracking-wider text-[#97ABB1] hover:underline underline-offset-4 transition-all duration-300"
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

