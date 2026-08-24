import Image from 'next/image'
import Link from 'next/link'
import { MobileCarousel } from '@/components/ui/MobileCarousel'

const courses = [
  {
    title: 'Advanced Open Water',
    href: '/courses/advanced/advanced-open-water',
    image: '/gallery/infoadvanced.webp',
    duration: '2 Days',
    dives: '5 Dives',
    price: '9,500 THB',
    description: "The Advanced Open Water Diver course is your next underwater adventure—combining deep dives, night diving, wreck exploration, buoyancy control, and underwater navigation.",
  },
  {
    title: 'Deep Diving',
    href: '/courses/advanced/deep-diving',
    image: '/gallery/infodeep.webp',
    duration: '2 Days',
    dives: '4 Dives',
    price: '8,000 THB',
    description: "Dive deeper into Koh Tao's underwater world. Over two days, you'll learn to plan and execute dives down to 40 meters with control, confidence, and safety.",
  },
  {
    title: 'Enriched Air Nitrox',
    href: '/courses/advanced/nitrox',
    image: '/gallery/infonitrox.webp',
    duration: '1 Day',
    dives: '2 Dives',
    price: '7,000 THB',
    description: "Want to get more out of every dive? The Nitrox Diver Specialty introduces you to enriched air diving, helping you enjoy longer bottom times and more relaxed surface intervals.",
  },
  {
    title: 'Perfect Buoyancy',
    href: '/courses/advanced/perfect-buoyancy',
    image: '/gallery/infoperfectbuoyancy.webp',
    duration: '1 Day',
    dives: '2 Dives',
    price: '6,000 THB',
    description: "Smoother dives start with better buoyancy. In one focused day with two training dives, you'll refine trim, kicking, and breathing techniques to improve control and efficiency.",
  },
  {
    title: 'Night & Limited Visibility',
    href: '/courses/advanced/night-diving',
    image: '/gallery/infonight.webp',
    duration: '2 Days',
    dives: '2 Dives',
    price: '7,000 THB',
    description: "Night dives reveal a side of the ocean few divers ever see. Learn how to plan, navigate, and dive confidently in low-light conditions.",
  },
  {
    title: 'Navigation',
    href: '/courses/advanced/navigation',
    image: '/gallery/infonavigation.webp',
    duration: '1 Day',
    dives: '2 Dives',
    price: '6,000 THB',
    description: "Being able to navigate underwater opens up a whole new level of freedom. Sharpen your awareness, improve dive efficiency, and move through the ocean with purpose and ease.",
  },
  {
    title: 'Stress & Rescue',
    href: '/courses/advanced/stress-and-rescue',
    image: '/gallery/inforescue.webp',
    duration: '3 Days',
    dives: '4 Dives',
    price: '12,600 THB',
    description: "Take your diving abilities to a whole new level. Learn how to recognize, prevent, and manage diving emergencies with awareness and problem-solving skills.",
  },
  {
    title: 'Wreck Penetration',
    href: '/courses/advanced/wreck-penetration',
    image: '/gallery/infowreckpenetration.webp',
    duration: '3 Days',
    dives: '4 Dives',
    price: '10,000 THB',
    description: "Designed for experienced divers, this course introduces you to controlled wreck penetration with precision, situational awareness, and technical skills.",
  },
  {
    title: 'Recreational Sidemount',
    href: '/courses/advanced/sidemount',
    image: '/gallery/inforecreationalsidemount.webp',
    duration: '3 Days',
    dives: '4 Dives',
    price: '13,000 THB',
    description: "Dive with two independent tanks worn at your sides, offering improved balance, comfort, and control for a more confident underwater experience.",
  },
  {
    title: 'Decompression Diving',
    href: '/courses/advanced/decompression',
    image: '/gallery/infodecompression.webp',
    duration: '3 Days',
    dives: '4 Dives',
    price: '12,000 THB',
    description: "Go beyond no-decompression limits and unlock longer, deeper, more rewarding dives with the SSI Decompression Diving Specialty.",
  },
  {
    title: 'Independent Diver',
    href: '/courses/advanced/independent-diver',
    image: '/gallery/infoindependent.webp',
    duration: '2 Days',
    dives: '4 Dives',
    price: '12,000 THB',
    description: "Unlock complete freedom beneath the surface. This premium course is designed for confident, experienced divers ready to dive solo without sacrificing safety.",
  },
]

export default function AdvancedPage() {
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
              Advanced
            </span>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-sm font-normal tracking-[0.25em] uppercase text-[#97ABB1] mb-4"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Advanced & Specialties
            </p>
            <h1
              className="text-3xl md:text-4xl font-black uppercase text-[#0A1628] mb-6"
              style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}
            >
              Level Up Your Diving
            </h1>
            <p className="text-lg text-[#0A1628]/60 leading-relaxed">
              Ready to step up as a diver or take on your next challenge underwater?
              Our specialty courses are built to elevate your skills, confidence, and
              control—whether that means diving deeper, extending bottom time with nitrox,
              exploring wrecks, mastering sidemount, navigating with precision, or
              experiencing the ocean after dark. With expert instruction, hands-on training,
              and real-world diving scenarios, you&apos;ll become a stronger, smarter, and
              more capable diver every time you hit the water.
            </p>
          </div>

        </div>
      </section>

      {/* Course Cards */}
      <section className="pb-16 md:pb-24">
        <div className="px-6 md:px-12 lg:px-20">
          <MobileCarousel count={11} desktopCols={3}>
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex flex-col flex-1 p-4 md:p-5 text-center items-center">
                    <h2
                      className="text-base md:text-lg font-black uppercase text-[#0A1628] mb-2"
                      style={{ fontFamily: 'var(--font-space-mono)' }}
                    >
                      {course.title}
                    </h2>
                    <p className="text-sm text-[#0A1628]/60 leading-relaxed mb-3">
                      {course.description}
                    </p>
                    {/* Info row */}
                    <div className="flex items-center justify-center gap-2 md:gap-3 text-xs md:text-sm font-normal text-[#0A1628]/50 mb-3 mt-auto">
                      <div className="flex items-center gap-1.5">
                        <svg className="h-5 w-5 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="7" />
                          <path d="M12 9v3l2 2" />
                        </svg>
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="h-5 w-5 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 15c1.2 0 1.8-.5 2.4-1 .6-.5 1.2-1 2.4-1s1.8.5 2.4 1c.6.5 1.2 1 2.4 1s1.8-.5 2.4-1c.6-.5 1.2-1 2.4-1" />
                        </svg>
                        <span>{course.dives}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="h-5 w-5 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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

      {/* Dot Divider */}
      <div className="flex justify-center py-4">
        <div className="h-2 w-2 rounded-full bg-[#F8B85D]" />
      </div>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-sm font-normal tracking-[0.25em] uppercase text-[#97ABB1] mb-4"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Save More
          </p>
          <h2
            className="text-2xl md:text-4xl font-black uppercase text-[#0A1628] mb-4"
            style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}
          >
            Combine & Save with Packages
          </h2>
          <p className="text-base text-[#0A1628]/60 leading-relaxed mb-8">
            Looking to do more than one specialty? Check out our combo deals—save
            time, save money, and progress faster.
          </p>
          <Link
            href="/packages"
            className="text-base font-normal uppercase tracking-wider text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            View Packages →
          </Link>
        </div>
      </section>
    </main>
  )
}

