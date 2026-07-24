'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function DivemasterPage() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      title: "What's Included",
      content: (
        <div>
          <div className="space-y-2.5">
            {[
              "Digital training materials",
              "Diving equipment rental",
              "Theory lectures and workshops",
              "Confined water sessions",
              "Open water training dives",
              "Divemaster certification",
              "Science of Diving certification",
              "Deep Diving certification",
              "Enriched Air Nitrox certification",
              "Marine Ecology certification",
              "Computer Diving certification",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#97ABB1] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-sm text-[#0A1628]/60 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm font-bold uppercase tracking-wide text-[#0A1628]/40 mt-5 mb-2.5" style={{ fontFamily: 'var(--font-space-mono)' }}>Not included</p>
          <div className="space-y-2.5">
            {["Dive computer", "Diving insurance", "SMB with reel", "Accommodation"].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#0A1628]/30 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
                <span className="text-sm text-[#0A1628]/40 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Prerequisites",
      content: (
        <div className="space-y-2.5">
          {[
            "Be 18 years old or more",
            "Be a certified Stress & Rescue Diver (or equivalent) with minimum 40 logged dives",
            "Be fit for scuba diving with medical clearance within the last 12 months",
            "Certified in Emergency First Response (CPR, First Aid, oxygen provider) within the last 24 months",
            "Don't have all the prerequisites yet? We can help you get there!",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <svg className="w-4 h-4 text-[#F8B85D] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
              </svg>
              <span className="text-sm text-[#0A1628]/60 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Overview",
      content: (
        <div className="space-y-2 text-sm text-[#0A1628]/60 leading-relaxed">
          <p>The Divemaster program runs over six immersive weeks, giving you the time, repetition, and real-world exposure needed to grow into a confident, capable Divemaster. You&apos;ll be involved in the real day-to-day operations of a dive center, learning essential professional skills such as diver supervision, group control, safety procedures, dive site organization, and environmental awareness.</p>
          <p>You&apos;ll train alongside a close-knit group of future dive professionals, sharing dives, challenges, and unforgettable moments both above and below the surface. Conservation practices and responsible diving are woven into everything we do, ensuring you lead by example underwater.</p>
          <p>The program is demanding, rewarding, and — true to Hang Loose — kept fun, supportive, and motivating from start to finish.</p>
        </div>
      ),
    },
  ]

  return (
    <main className="bg-[#FFFAE7]">
      <section className="pt-32 pb-8 md:pt-36 md:pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/courses" className="text-xs font-bold uppercase tracking-wider text-[#97ABB1] hover:text-[#F8B85D] transition-colors" style={{ fontFamily: 'var(--font-space-mono)' }}>
              Courses
            </Link>
            <span className="text-[#97ABB1]">/</span>
            <Link href="/courses/professionals" className="text-xs font-bold uppercase tracking-wider text-[#97ABB1] hover:text-[#F8B85D] transition-colors" style={{ fontFamily: 'var(--font-space-mono)' }}>
              Professionals
            </Link>
            <span className="text-[#97ABB1]">/</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A1628]" style={{ fontFamily: 'var(--font-space-mono)' }}>
              Divemaster
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <p className="text-sm font-normal tracking-[0.25em] uppercase text-[#97ABB1] mb-2" style={{ fontFamily: 'var(--font-space-mono)' }}>
                Professional Program
              </p>
              <h1 className="text-3xl md:text-5xl font-black uppercase text-[#0A1628] mb-4" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>
                Divemaster
              </h1>

              <div className="flex items-center gap-3 md:gap-6 mb-5 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <svg className="h-5 w-5 md:h-6 md:w-6 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="7" /><path d="M12 9v3l2 2" />
                  </svg>
                  <span className="text-sm md:text-base font-bold text-[#0A1628]" style={{ fontFamily: 'var(--font-space-mono)' }}>6 Weeks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-5 w-5 md:h-6 md:w-6 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 15c1.2 0 1.8-.5 2.4-1 .6-.5 1.2-1 2.4-1s1.8.5 2.4 1c.6.5 1.2 1 2.4 1s1.8-.5 2.4-1c.6-.5 1.2-1 2.4-1" />
                  </svg>
                  <span className="text-sm md:text-base font-bold text-[#0A1628]" style={{ fontFamily: 'var(--font-space-mono)' }}>60+ Dives</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-5 w-5 md:h-6 md:w-6 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="10" rx="1.5" /><circle cx="12" cy="12" r="2.5" /><path d="M6 10v4M18 10v4" />
                  </svg>
                  <span className="text-sm md:text-base font-bold text-[#0A1628]/60" style={{ fontFamily: 'var(--font-space-mono)' }}>42,000 THB</span>
                </div>
              </div>

              <p className="text-sm md:text-base text-[#0A1628]/60 leading-relaxed">
                Hang Loose Divers Divemaster Program on Koh Tao is your gateway into the professional diving world — a serious step toward becoming a dive leader with real confidence. Led by our experienced Divemaster trainers, the program blends structured training, hands-on experience, and plenty of time underwater. This course prepares you to confidently guide certified divers, manage dives safely, and step into dive centers anywhere in the world. Training includes in-depth academic workshops, practical open-water sessions, and extensive course-assisting experience.
              </p>

              <div className="mt-6">
                <a
                  href="https://wa.me/66971543171?text=Hi!%20I%27m%20interested%20in%20the%20Divemaster%20program%20%F0%9F%A4%BF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-normal uppercase tracking-wide text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300"
                  style={{ fontFamily: 'var(--font-space-mono)' }}
                >
                  Apply Now →
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/gallery/infodm.webp"
                alt="Divemaster Program in Koh Tao"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-3 gap-2 mb-6">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`py-2 px-2 md:py-3 md:px-4 text-[11px] md:text-base font-normal uppercase tracking-wide rounded-xl transition-all duration-200 text-center leading-tight ${
                  activeTab === i
                    ? 'bg-[#F0EBD8] text-[#0A1628]'
                    : 'text-[#0A1628]/40 hover:text-[#0A1628]/70'
                }`}
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="min-h-[120px]">
            {tabs[activeTab].content}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-3xl font-black uppercase text-[#0A1628] mb-3" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>
            Start Your Professional Journey
          </h2>
          <p className="text-sm text-[#0A1628]/60 leading-relaxed mb-6">
            Turn passion into profession — this is where it starts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="https://wa.me/66971543171?text=Hi!%20I%27m%20interested%20in%20the%20Divemaster%20program%20%F0%9F%A4%BF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-normal uppercase tracking-wide text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Apply Now →
            </a>
            <Link
              href="/courses/professionals"
              className="text-base font-normal uppercase tracking-wide text-[#97ABB1] hover:underline underline-offset-4 transition-all duration-300"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              ← Back to Professionals
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
