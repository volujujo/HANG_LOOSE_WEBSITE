'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function DeepDivingPage() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      title: "What's Included",
      content: (
        <div className="space-y-2.5">
          {[
            "In-depth theory sessions covering essential topics such as dive planning, gas management, and safety protocols",
            "4 open water dives reaching a maximum depth of 40 metres",
            "Small-group training (maximum of four divers) for personalized attention",
            "Premium, well-maintained scuba diving equipment for comfort and safety",
            "SSI Deep Diving Certification",
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
      ),
    },
    {
      title: "Prerequisites",
      content: (
        <div className="space-y-2.5">
          {[
            "Be 15 years old or more",
            "Be a certified Open Water Diver",
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
      title: "Schedule",
      content: (
        <div className="space-y-3 text-sm text-[#0A1628]/60 leading-relaxed">
          <div>
            <p className="font-bold text-[#0A1628] mb-1">Day 1</p>
            <p>We begin the program with an engaging academic session focused on safe and confident dive planning. Topics include surface air consumption, non-decompression planning, dive computer setup, navigation, and more. After the theory, we head out for the first two training dives, reaching depths of up to 30 meters.</p>
          </div>
          <div>
            <p className="font-bold text-[#0A1628] mb-1">Day 2</p>
            <p>The second day starts early with your final two dives, reaching a maximum depth of 40 meters while exploring some of Koh Tao&apos;s most iconic dive sites. We return to Hang Loose by noon.</p>
          </div>
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
            <Link href="/courses/advanced" className="text-xs font-bold uppercase tracking-wider text-[#97ABB1] hover:text-[#F8B85D] transition-colors" style={{ fontFamily: 'var(--font-space-mono)' }}>
              Advanced
            </Link>
            <span className="text-[#97ABB1]">/</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A1628]" style={{ fontFamily: 'var(--font-space-mono)' }}>
              Deep Diving
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#4D9995] mb-2" style={{ fontFamily: 'var(--font-space-mono)' }}>
                Advanced &amp; Specialties
              </p>
              <h1 className="text-3xl md:text-5xl font-black uppercase text-[#0A1628] mb-4" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>
                Deep Diving
              </h1>

              <div className="flex items-center gap-6 mb-5">
                <div className="flex items-center gap-1.5">
                  <svg className="h-6 w-6 text-[#4D9995]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="7" /><path d="M12 9v3l2 2" />
                  </svg>
                  <span className="text-base font-bold text-[#0A1628]" style={{ fontFamily: 'var(--font-space-mono)' }}>2 Days</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-6 w-6 text-[#4D9995]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 15c1.2 0 1.8-.5 2.4-1 .6-.5 1.2-1 2.4-1s1.8.5 2.4 1c.6.5 1.2 1 2.4 1s1.8-.5 2.4-1c.6-.5 1.2-1 2.4-1" />
                  </svg>
                  <span className="text-base font-bold text-[#0A1628]" style={{ fontFamily: 'var(--font-space-mono)' }}>4 Dives</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-6 w-6 text-[#4D9995]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="10" rx="1.5" /><circle cx="12" cy="12" r="2.5" /><path d="M6 10v4M18 10v4" />
                  </svg>
                  <span className="text-base font-bold text-[#F8B85D]" style={{ fontFamily: 'var(--font-space-mono)' }}>8,000 THB</span>
                </div>
              </div>

              <p className="text-sm md:text-base text-[#0A1628]/60 leading-relaxed">
                Get ready for an epic plunge into the heart of Koh Tao&apos;s underwater wonderland. Our Deep Diving Specialty Course is your ticket to exploring the thrilling depths of the ocean over two action-packed days. You&apos;ll experience four diverse dives at mind-blowing spots like Chumpton Pinnacle, Southwest Pinnacle and Green Rock — building confidence and comfort all the way down to 40 meters.
              </p>

              <div className="mt-6">
                <a
                  href="https://wa.me/66971543171?text=Hi!%20I%27m%20interested%20in%20the%20Deep%20Diving%20course%20%F0%9F%A4%BF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-black uppercase tracking-wider text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300"
                  style={{ fontFamily: 'var(--font-space-mono)' }}
                >
                  Book Now →
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/gallery/photo4.webp"
                alt="Deep Diving Course in Koh Tao"
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
                className={`py-3 px-4 text-sm font-normal uppercase tracking-wide rounded-xl transition-all duration-200 ${
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
            Dive Deeper. See More.
          </h2>
          <p className="text-sm text-[#0A1628]/60 leading-relaxed mb-6">
            Chumpton Pinnacle awaits — 40 meters of pure adrenaline.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="https://wa.me/66971543171?text=Hi!%20I%27m%20interested%20in%20the%20Deep%20Diving%20course%20%F0%9F%A4%BF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-black uppercase tracking-wider text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Book Now →
            </a>
            <Link
              href="/courses/advanced"
              className="text-sm font-black uppercase tracking-wider text-[#4D9995] hover:underline underline-offset-4 transition-all duration-300"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              ← Back to Advanced
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
