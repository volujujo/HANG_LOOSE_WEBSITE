import { MobileCarousel } from '@/components/ui/MobileCarousel'
import Image from 'next/image'
import Link from 'next/link'

const trips = [
  {
    title: 'The Maldives',
    href: '/liveaboard/maldives',
    image: '/gallery/uw-2026-04-18-60380.webp',
    date: 'Nov 21–28, 2026',
    boat: 'Emperor Voyager',
    dives: '18+ Dives',
    price: 'From €2,500',
    description: "Sail through the turquoise heart of the Indian Ocean. Iconic sites, sunlit atolls, mantas, whale sharks, and drift dives through channels and pinnacles.",
  },
  {
    title: 'Red Sea South, Egypt',
    href: '/liveaboard/egypt',
    image: '/gallery/egypt1.webp',
    date: 'June 12–19, 2027',
    boat: 'Emperor Asmaa',
    dives: '20+ Dives',
    price: 'From €1,550',
    description: "Cruise the southern gems of the Red Sea — Daedalus, Sataya and Elphinstone. Vibrant coral gardens, dramatic drop-offs, hammerheads, oceanic mantas and spinner dolphins.",
  },
]

export default function LiveaboardPage() {
  return (
    <main className="bg-[#FFFAE7]">
      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-sm font-normal tracking-[0.25em] uppercase text-[#F8B85D] mb-3" style={{ fontFamily: 'var(--font-space-mono)' }}>
            Once-in-a-Lifetime
          </p>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-[#0A1628] mb-5" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>
            Liveaboard Adventures
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-[#0A1628]/60 leading-relaxed">
            Leave the shore behind. Join Marga and Mery on a handpicked liveaboard
            experience — epic dive sites, premium boats, and the Hang Loose crew
            by your side for a week you&apos;ll never forget.
          </p>
        </div>
      </section>

      {/* Trip Cards */}
      <section className="pb-16 md:pb-24">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="mb-8 text-center text-xs font-bold uppercase tracking-[0.25em] text-[#F8B85D]" style={{ fontFamily: 'var(--font-space-mono)' }}>
            Hosted Small-Group Expeditions
          </div>
          <MobileCarousel count={2} desktopCols={2}>
            {trips.map((trip) => (
              <Link key={trip.title} href={trip.href} className="group snap-center shrink-0 w-[80vw] md:w-auto h-full flex flex-col">
                <div className="flex flex-col h-full bg-[#F0EBD8] rounded-2xl overflow-hidden border border-[#0A1628]/5 shadow-[0_18px_40px_rgba(10,22,40,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(10,22,40,0.45)]">
                  <div className="relative w-full aspect-[16/10]">
                    <Image src={trip.image} alt={trip.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
                    {/* Date badge */}
                    <div className="absolute top-4 left-4 bg-[#F8B85D] text-[#0A1628] px-3 py-1 rounded-full shadow-sm">
                      <span className="text-[11px] font-bold uppercase" style={{ fontFamily: 'var(--font-space-mono)' }}>{trip.date}</span>
                    </div>
                    {/* Boat badge */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm text-[11px] font-bold uppercase tracking-wider text-[#FFFAE7]" style={{ fontFamily: 'var(--font-space-mono)' }}>
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#F8B85D] text-[#0A1628]">
                        ⛵
                      </span>
                      <span>{trip.boat}</span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-5 md:p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-2xl md:text-3xl font-black uppercase text-[#0A1628]" style={{ fontFamily: 'var(--font-space-mono)' }}>
                        {trip.title}
                      </h2>
                      <span className="text-[11px] font-bold uppercase text-[#97ABB1]" style={{ fontFamily: 'var(--font-space-mono)' }}>
                        Hosted by Hang Loose
                      </span>
                    </div>
                    <p className="text-sm text-[#0A1628]/60 leading-relaxed flex-1 mb-4">
                      {trip.description}
                    </p>
                    <div className="flex items-center justify-between text-sm font-bold text-[#0A1628]/60 mb-3" style={{ fontFamily: 'var(--font-space-mono)' }}>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#97ABB1]" />
                          {trip.dives}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#97ABB1]" />
                          Small Group
                        </span>
                      </div>
                      <span className="text-sm font-bold text-[#0A1628]/60">
                        {trip.price}
                      </span>
                    </div>
                    <div className="flex justify-start">
                      <span className="text-base font-normal uppercase tracking-wide text-[#F8B85D] group-hover:underline underline-offset-4 transition-all" style={{ fontFamily: 'var(--font-space-mono)' }}>
                        View Trip Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </MobileCarousel>
        </div>
      </section>
    </main>
  )
}

