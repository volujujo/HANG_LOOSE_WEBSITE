'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function Accordion({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-[#0A1628]/10">
      <button onClick={() => setOpen(!open)} className="w-full py-4 flex items-center justify-between text-left group">
        <span className="text-sm md:text-base font-bold uppercase tracking-wider text-[#0A1628] group-hover:text-[#97ABB1] transition-colors" style={{ fontFamily: 'var(--font-space-mono)' }}>
          {title}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#F8B85D] transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-out ${open ? 'max-h-[2000px] pb-4' : 'max-h-0'}`}>
        {children}
      </div>
    </div>
  )
}

export default function MaldivesLiveaboardPage() {
  return (
    <main className="bg-[#FFFAE7]">
      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-36 md:pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/liveaboard" className="text-xs font-bold uppercase tracking-wider text-[#97ABB1] hover:text-[#F8B85D] transition-colors" style={{ fontFamily: 'var(--font-space-mono)' }}>
              Liveaboard
            </Link>
            <span className="text-[#97ABB1]">/</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A1628]" style={{ fontFamily: 'var(--font-space-mono)' }}>Maldives</span>
          </div>

          <div className="max-w-3xl">
            <p className="text-sm font-normal tracking-[0.25em] uppercase text-[#F8B85D] mb-3" style={{ fontFamily: 'var(--font-space-mono)' }}>
              Hang Loose Liveaboard
            </p>
            <h1 className="text-3xl md:text-5xl font-black uppercase text-[#0A1628] mb-4" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>
              The Best of the Maldives
            </h1>

            <div className="flex flex-wrap items-center gap-4 mb-5 text-sm font-bold" style={{ fontFamily: 'var(--font-space-mono)' }}>
              <span className="text-[#0A1628]">Nov 21–28, 2026</span>
              <span className="text-[#97ABB1]">·</span>
              <span className="text-[#0A1628]">North, South & Ari Atolls</span>
              <span className="text-[#97ABB1]">·</span>
              <span className="text-[#0A1628]">18+ Dives</span>
              <span className="text-[#97ABB1]">·</span>
              <span className="text-[#0A1628]">Emperor Voyager</span>
              <span className="text-[#97ABB1]">·</span>
              <span className="text-[#F8B85D]">From €2,500</span>
            </div>

            <p className="text-sm md:text-base text-[#0A1628]/60 leading-relaxed mb-6">
              Picture it: barefoot on deck, warm breeze, turquoise water in every direction and
              your next dive site always just a short cruise away. This trip is all about easy
              liveaboard living — wake, dive, eat, nap, repeat — with manta cleaning stations,
              whale shark chances and slow sunset cruises between the atolls. Good food, good
              company, and that Maldivian island-dream feeling the whole week.
            </p>

            <a
              href="https://wa.me/66971543171?text=Hi!%20I'm%20interested%20in%20the%20Maldives%20Liveaboard%20🤿"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-normal uppercase tracking-wide text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Reserve Your Spot →
            </a>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-6 md:py-8 px-6 md:px-12 lg:px-20">
        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-3">
          <div className="relative overflow-hidden rounded-2xl aspect-[3/2]">
            <Image src="/gallery/maldives1.webp" alt="Maldives liveaboard" fill className="object-cover" sizes="100vw" />
          </div>
          <div className="flex gap-3">
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] flex-1">
              <Image src="/gallery/maldives2.webp" alt="Liveaboard boat" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image src="/gallery/maldives3.webp" alt="Maldives diving" fill className="object-cover" sizes="50vw" />
              </div>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image src="/gallery/maldives4.webp" alt="Maldives ocean" fill className="object-cover" sizes="50vw" />
              </div>
            </div>
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden md:flex gap-4 h-[360px] lg:h-[430px]">
          <div className="relative overflow-hidden rounded-2xl flex-[4] min-w-0">
            <Image src="/gallery/maldives1.webp" alt="Maldives liveaboard" fill className="object-cover" sizes="50vw" />
          </div>
          <div className="relative overflow-hidden rounded-2xl flex-[2] min-w-0">
            <Image src="/gallery/maldives2.webp" alt="Liveaboard boat" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="flex flex-col gap-4 flex-[1.5] min-w-0">
            <div className="relative overflow-hidden rounded-2xl flex-1">
              <Image src="/gallery/maldives3.webp" alt="Maldives diving" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative overflow-hidden rounded-2xl flex-1">
              <Image src="/gallery/maldives4.webp" alt="Maldives ocean" fill className="object-cover" sizes="25vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Details */}
      <section className="py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Accordion title="Itinerary" defaultOpen={true}>
            <div className="space-y-4 text-sm text-[#0A1628]/60 leading-relaxed">
              <div><span className="font-bold text-[#F8B85D]" style={{ fontFamily: 'var(--font-space-mono)' }}>Day 1</span> — Board the Emperor Voyager. Settle into your cabin, meet the crew, gear up and get briefed.</div>
              <div><span className="font-bold text-[#F8B85D]" style={{ fontFamily: 'var(--font-space-mono)' }}>Day 2</span> — Check dive and sunrise drift at Rasdhoo Atoll. Hammerheads, coral gardens, reef sharks. Highlights: Rasdhoo Madivaru, Kuramathi Kandu.</div>
              <div><span className="font-bold text-[#F8B85D]" style={{ fontFamily: 'var(--font-space-mono)' }}>Day 3</span> — North Ari Atoll — manta cleaning stations, walls bursting with life, possible Maaya Thila night dive. Highlights: Maaya Thila, Fish Head, Fesdu Wreck.</div>
              <div><span className="font-bold text-[#F8B85D]" style={{ fontFamily: 'var(--font-space-mono)' }}>Day 4</span> — Whale shark hunting at Maamagili! Gorgeous pinnacles, healthy corals, incredible drift dives. Highlights: Kudarah Thila, Maamigili Beyru.</div>
              <div><span className="font-bold text-[#F8B85D]" style={{ fontFamily: 'var(--font-space-mono)' }}>Day 5</span> — Vaavu Atoll channels — soft coral wonderlands filled with action. Nurse sharks at night. Highlights: Miyaru Kandu, Alimatha Night Dive.</div>
              <div><span className="font-bold text-[#F8B85D]" style={{ fontFamily: 'var(--font-space-mono)' }}>Day 6</span> — Channels full of grey reef sharks, eagle rays, and serious current. Wrecks, caves, or one last manta moment. Highlights: Kandooma Thila, Cocoa Corner.</div>
              <div><span className="font-bold text-[#F8B85D]" style={{ fontFamily: 'var(--font-space-mono)' }}>Day 7</span> — Two final dives heading back toward Male. Wave goodbye to your underwater crew — sharks, rays, and all.</div>
              <div><span className="font-bold text-[#F8B85D]" style={{ fontFamily: 'var(--font-space-mono)' }}>Day 8</span> — Check out. 9:30am transfer to Male Airport.</div>
            </div>
          </Accordion>

          <Accordion title="The Boat — Emperor Voyager">
            <div className="space-y-2 text-sm text-[#0A1628]/60 leading-relaxed">
              <p>20 guests in 10 spacious twin and double ensuite cabins. Air-conditioned lounge with home theatre, locally stocked bar, outside dining lounge with sea view.</p>
              <p>Expansive sundeck with hammocks and sun chairs. Separate diving dhoni with Bauer compressors. 12-litre aluminum tanks (15-litre steel on request). Free Nitrox. Oxygen, first aid, and AED on board.</p>
            </div>
          </Accordion>

          <Accordion title="What's Included">
            <div className="space-y-2">
              {[
                "Airport transfers (Male)",
                "8 days / 7 nights on the Emperor Voyager",
                "Marga and Mery as your hosts",
                "3 meals a day + snacks",
                "18+ dives (weather permitting) with tanks, weights, and belts",
                "Free Nitrox (EANX)",
                "Dive guides on every dive",
                "All Marine Park, Port, and Fuel fees",
                "Professional photos and videos",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#97ABB1] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-[#0A1628]/60">{item}</span>
                </div>
              ))}
            </div>
          </Accordion>

          <Accordion title="Not Included">
            <div className="space-y-2">
              {[
                "Flight tickets",
                "Scuba gear rental: €270 for the full trip",
                "Diving insurance: €35 (mandatory, available onboard)",
                "Nitrox certification: €100 (if not already certified)",
                "Crew tip: €150",
                "Alcoholic beverages: pay as you go",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#F8B85D] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
                  </svg>
                  <span className="text-sm text-[#0A1628]/60">{item}</span>
                </div>
              ))}
            </div>
          </Accordion>

          <Accordion title="Pricing & Payment">
            <div className="space-y-3 text-sm text-[#0A1628]/60 leading-relaxed">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black text-[#F8B85D]" style={{ fontFamily: 'var(--font-space-mono)' }}>€2,500</span>
              </div>
              <p>Option 1: Full payment at time of booking.</p>
              <p>Option 2: €500 non-refundable deposit at booking. Balance due by May 1st, 2026.</p>
            </div>
          </Accordion>

          <Accordion title="How to Book">
            <div className="space-y-2 text-sm text-[#0A1628]/60 leading-relaxed">
              <p>1. Contact us via WhatsApp, Instagram DMs, or email.</p>
              <p>2. Once availability is confirmed, secure your spot with a €500 transfer.</p>
              <p>3. We&apos;ll reach out to collect all the info we need.</p>
              <p>4. Get stoked for an epic, once-in-a-lifetime adventure!</p>
            </div>
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-3xl font-black uppercase text-[#0A1628] mb-3" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>
            Limited Spots Available
          </h2>
          <p className="text-sm text-[#0A1628]/60 mb-6">20 guests max. This is the one you don&apos;t want to miss.</p>
          <a
            href="https://wa.me/66971543171?text=Hi!%20I'm%20interested%20in%20the%20Maldives%20Liveaboard%20🤿"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-normal uppercase tracking-wide text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Reserve Your Spot →
          </a>
        </div>
      </section>
    </main>
  )
}

