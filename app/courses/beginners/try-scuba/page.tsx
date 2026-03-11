'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#0A1628]/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-4 flex items-center justify-between text-left group"
      >
        <span
          className="text-sm md:text-base font-bold uppercase tracking-wider text-[#0A1628] group-hover:text-[#4D9995] transition-colors"
          style={{ fontFamily: 'var(--font-space-mono)' }}
        >
          {title}
        </span>
        <span
          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#F8B85D] transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-out ${open ? 'max-h-[600px] pb-4' : 'max-h-0'}`}>
        {children}
      </div>
    </div>
  )
}

export default function TryScubaPage() {
  return (
    <main className="bg-[#FFFAE7]">
      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-36 md:pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link href="/courses" className="text-xs font-bold uppercase tracking-wider text-[#97ABB1] hover:text-[#F8B85D] transition-colors" style={{ fontFamily: 'var(--font-space-mono)' }}>
              Courses
            </Link>
            <span className="text-[#97ABB1]">/</span>
            <Link href="/courses/beginners" className="text-xs font-bold uppercase tracking-wider text-[#97ABB1] hover:text-[#F8B85D] transition-colors" style={{ fontFamily: 'var(--font-space-mono)' }}>
              Beginners
            </Link>
            <span className="text-[#97ABB1]">/</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A1628]" style={{ fontFamily: 'var(--font-space-mono)' }}>
              Try Scuba
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Text */}
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#4D9995] mb-2" style={{ fontFamily: 'var(--font-space-mono)' }}>
                Beginner Program
              </p>
              <h1 className="text-3xl md:text-5xl font-black uppercase text-[#0A1628] mb-4" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>
                Try Scuba Diving
              </h1>

              {/* Quick Stats */}
              <div className="flex items-center gap-5 mb-5">
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-[#4D9995]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="7" /><path d="M12 9v3l2 2" />
                  </svg>
                  <span className="text-sm font-bold text-[#0A1628]" style={{ fontFamily: 'var(--font-space-mono)' }}>1 Day</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-[#4D9995]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 15c1.2 0 1.8-.5 2.4-1 .6-.5 1.2-1 2.4-1s1.8.5 2.4 1c.6.5 1.2 1 2.4 1s1.8-.5 2.4-1c.6-.5 1.2-1 2.4-1" />
                  </svg>
                  <span className="text-sm font-bold text-[#0A1628]" style={{ fontFamily: 'var(--font-space-mono)' }}>2 Dives</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-[#4D9995]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="10" cy="12" r="3" /><circle cx="14" cy="11" r="3" />
                  </svg>
                  <span className="text-sm font-bold text-[#F8B85D]" style={{ fontFamily: 'var(--font-space-mono)' }}>3,500 THB</span>
                </div>
              </div>

              <p className="text-sm md:text-base text-[#0A1628]/60 leading-relaxed">
                Discover scuba diving in Koh Tao, one of Thailand&apos;s top dive destinations,
                with Hang Loose Divers. With a calm, professional approach and a deep connection
                to the ocean, we offer an easy and welcoming way to take your first breath underwater.
                You&apos;ll dive to a maximum depth of 12 metres, in small groups of no more
                than four divers per instructor. No pressure, no rush — just an unforgettable first
                step into the underwater world.
              </p>

              {/* Book Now CTA */}
              <div className="mt-6">
                <a
                  href="https://wa.me/66971543171?text=Hi!%20I'm%20interested%20in%20the%20Try%20Scuba%20course%20🤿"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-black uppercase tracking-wider text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300"
                  style={{ fontFamily: 'var(--font-space-mono)' }}
                >
                  Book Now →
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/gallery/photo1.webp"
                alt="Try Scuba Diving in Koh Tao"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Details */}
      <section className="py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <Accordion title="What's Included">
            <div className="space-y-2.5">
              {[
                "A fun and hands-on theory session",
                "2 open water dives at some of Koh Tao's top dive sites",
                "Supportive, expert SSI instructors who make learning easy and enjoyable",
                "Small-group training with a maximum of four divers per group",
                "Top-quality scuba equipment",
                "Dive insurance",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#4D9995] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-[#0A1628]/60 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </Accordion>

          <Accordion title="Prerequisites">
            <div className="space-y-2.5">
              {[
                "Be 10 years old or more",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <svg className="w-4 h-4 text-[#F8B85D] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
                  </svg>
                  <span className="text-sm text-[#0A1628]/60 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </Accordion>

          <Accordion title="Schedule">
            <div className="space-y-2 text-sm text-[#0A1628]/60 leading-relaxed">
              <p>
                We start at 10am with an introductory theory session of approximately 60
                minutes. After a short break we head to our amazing diving boat.
              </p>
              <p>
                We&apos;ll do two dives at different dive sites, both reaching a maximum
                depth of 12 metres, and practice some basic diving skills along the way.
              </p>
              <p>
                We finish at around 4:30pm. Back at Hang Loose you will receive your
                Basic Diver Recognition Card.
              </p>
            </div>
          </Accordion>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-xl md:text-3xl font-black uppercase text-[#0A1628] mb-3"
            style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}
          >
            Ready to Take the Plunge?
          </h2>
          <p className="text-sm text-[#0A1628]/60 leading-relaxed mb-6">
            No experience needed — just bring your curiosity and good vibes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="https://wa.me/66971543171?text=Hi!%20I'm%20interested%20in%20the%20Try%20Scuba%20course%20🤿"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-black uppercase tracking-wider text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Book Now →
            </a>
            <Link
              href="/courses/beginners"
              className="text-sm font-black uppercase tracking-wider text-[#4D9995] hover:underline underline-offset-4 transition-all duration-300"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              ← Back to Beginners
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}


