import { MobileCarousel } from '@/components/ui/MobileCarousel'
import Image from 'next/image'
import Link from 'next/link'

const options = [
  {
    title: 'Fun Dives',
    href: '/fun-dives/fun-dives',
    image: '/gallery/photo2.webp',
    duration: '1 Day',
    dives: '2 Dives',
    price: '2,200 THB',
    description: "Dive into Koh Tao's most iconic reefs, pinnacles, wrecks, and night dives with Hang Loose Divers — where world-class diving meets laid-back island vibes. Small groups, expert guides, and unforgettable underwater encounters.",
  },
  {
    title: 'Refresh Program',
    href: '/fun-dives/refresh-program',
    image: '/gallery/photo1.webp',
    duration: '1 Day',
    dives: '2 Dives',
    price: '2,500 THB',
    description: "The Scuba Refresher is designed for certified divers who want a quick confidence boost before getting back into the ocean. Minimal theory, plenty of in-water practice, and 2 guided fun dives in calm, tropical conditions.",
  },
]

export default function FunDivesPage() {
  return (
    <main className="bg-[#FFFAE7]">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-sm font-normal tracking-[0.25em] uppercase text-[#97ABB1] mb-4"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Certified Divers
            </p>
            <h1
              className="text-3xl md:text-4xl font-black uppercase text-[#0A1628] mb-6"
              style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}
            >
              Jump In. Let&apos;s Dive.
            </h1>
            <p className="text-lg text-[#0A1628]/60 leading-relaxed">
              Certified and ready to go? Our daily fun dive trips take you to Koh Tao&apos;s
              best sites — vibrant reefs, dramatic pinnacles, legendary wrecks, and night
              dives for those who can&apos;t stop. Small groups, expert guides, and serious
              good times. If it&apos;s been a while, our Refresh Program gets you back in the
              water with confidence.
            </p>
          </div>

        </div>
      </section>

      {/* Cards */}
      <section className="pb-16 md:pb-24">
        <div className="px-6 md:px-12 lg:px-20">
          <MobileCarousel count={2} desktopCols={2}>
            {options.map((item) => (
              <Link key={item.title} href={item.href} className="group snap-center shrink-0 w-[80vw] md:w-auto flex flex-col">
                <div className="flex flex-col flex-1 bg-[#F0EBD8] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  {/* Image */}
                  <div className="relative w-full aspect-[3/2]">
                    <Image
                      src={item.image}
                      alt={item.title}
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
                      {item.title}
                    </h2>
                    <p className="text-sm text-[#0A1628]/60 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    {/* Info row */}
                    <div className="flex items-center justify-center gap-2 md:gap-4 text-xs md:text-sm font-normal text-[#0A1628]/50 mb-4 mt-auto">
                      <div className="flex items-center gap-1.5">
                        <svg className="h-5 w-5 md:h-6 md:w-6 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="7" />
                          <path d="M12 9v3l2 2" />
                        </svg>
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="h-5 w-5 md:h-6 md:w-6 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 15c1.2 0 1.8-.5 2.4-1 .6-.5 1.2-1 2.4-1s1.8.5 2.4 1c.6.5 1.2 1 2.4 1s1.8-.5 2.4-1c.6-.5 1.2-1 2.4-1" />
                        </svg>
                        <span>{item.dives}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="h-5 w-5 md:h-6 md:w-6 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="7" width="20" height="10" rx="1.5" /><circle cx="12" cy="12" r="2.5" /><path d="M6 10v4M18 10v4" />
                        </svg>
                        <span>{item.price}</span>
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

      {/* Bottom CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-sm font-normal tracking-[0.25em] uppercase text-[#F8B85D] mb-4"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Not Certified Yet?
          </p>
          <h2
            className="text-2xl md:text-4xl font-black uppercase text-[#0A1628] mb-4"
            style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}
          >
            Get Your Open Water First
          </h2>
          <p className="text-base text-[#0A1628]/60 leading-relaxed mb-8">
            All you need is an Open Water Diver certification to join our fun dives.
            Check out our beginner courses and get certified in just 2.5 days.
          </p>
          <Link
            href="/courses/beginners"
            className="text-base font-normal uppercase tracking-wider text-[#97ABB1] hover:underline underline-offset-4 transition-all duration-300"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Beginner Courses →
          </Link>
        </div>
      </section>
    </main>
  )
}
