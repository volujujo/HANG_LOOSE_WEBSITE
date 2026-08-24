'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function DecompressionPage() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      title: "What's Included",
      content: (
        <div className="space-y-2.5">
          {[
            "In-depth theory session to plan and execute decompression dives confidently",
            "Dive planning software workshop",
            "Confined water session with specialized equipment training",
            "Three open water training dives",
            "Premium, well-maintained scuba diving equipment including redundant air systems",
            "Small-group training (maximum of three divers) for personalized attention",
            "SSI Decompression Diving Certification",
            "Dive insurance",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <svg className="w-4 h-4 text-[#97ABB1] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            "Be 16 years old or more",
            "Be a certified Open Water Diver",
            "Have the Deep Diving certification",
            "Have the Enriched Air Nitrox 40 certification",
            "Have 24 logged dives",
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
            <p>Start with interactive theory sessions covering essential topics such as decompression theory, dive planning, gas management, equipment configuration, and safety procedures. You&apos;ll then move into a dry workshop to set up and fine-tune your redundant air system.</p>
          </div>
          <div>
            <p className="font-bold text-[#0A1628] mb-1">Day 2</p>
            <p>A dedicated confined-water training session, where you&apos;ll focus on precise buoyancy control, simulated decompression stops, gas-switching procedures, and emergency drills in a calm, controlled environment. Followed by 1 open water dive.</p>
          </div>
          <div>
            <p className="font-bold text-[#0A1628] mb-1">Day 3</p>
            <p>Head out for two open-water dives, applying everything you&apos;ve learned in real conditions.</p>
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
              Decompression Diving
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <p className="text-sm font-normal tracking-[0.25em] uppercase text-[#97ABB1] mb-2" style={{ fontFamily: 'var(--font-space-mono)' }}>
                Advanced &amp; Specialties
              </p>
              <h1 className="text-3xl md:text-5xl font-black uppercase text-[#0A1628] mb-4" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>
                Decompression Diving
              </h1>

              <div className="flex items-center gap-3 md:gap-6 mb-5 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <svg className="h-5 w-5 md:h-6 md:w-6 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="7" /><path d="M12 9v3l2 2" />
                  </svg>
                  <span className="text-sm md:text-base font-bold text-[#0A1628]" style={{ fontFamily: 'var(--font-space-mono)' }}>3 Days</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-5 w-5 md:h-6 md:w-6 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 15c1.2 0 1.8-.5 2.4-1 .6-.5 1.2-1 2.4-1s1.8.5 2.4 1c.6.5 1.2 1 2.4 1s1.8-.5 2.4-1c.6-.5 1.2-1 2.4-1" />
                  </svg>
                  <span className="text-sm md:text-base font-bold text-[#0A1628]" style={{ fontFamily: 'var(--font-space-mono)' }}>4 Dives</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-5 w-5 md:h-6 md:w-6 text-[#97ABB1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="10" rx="1.5" /><circle cx="12" cy="12" r="2.5" /><path d="M6 10v4M18 10v4" />
                  </svg>
                  <span className="text-sm md:text-base font-bold text-[#0A1628]/60" style={{ fontFamily: 'var(--font-space-mono)' }}>12,000 THB</span>
                </div>
              </div>

              <p className="text-sm md:text-base text-[#0A1628]/60 leading-relaxed">
                The SSI Decompression Diving Specialty is your gateway to longer dives, deeper sites, and a more serious level of underwater exploration. This program provides divers with the training necessary to independently plan and conduct decompression dives to a maximum depth of 40 meters, using an optimized nitrox blend of up to 40%, with a maximum accumulated decompression time of 15 minutes. During the course, you&apos;ll master real-world decompression procedures including advanced dive planning, precise buoyancy control, and effective task management.
              </p>

              <div className="mt-6">
                <a
                  href="https://wa.me/66971543171?text=Hi!%20I%27m%20interested%20in%20the%20Decompression%20Diving%20course%20%F0%9F%A4%BF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-normal uppercase tracking-wide text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300"
                  style={{ fontFamily: 'var(--font-space-mono)' }}
                >
                  Book Now →
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/gallery/infodecompression.webp"
                alt="Decompression Diving Course in Koh Tao"
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
            Go Beyond the Limits
          </h2>
          <p className="text-sm text-[#0A1628]/60 leading-relaxed mb-6">
            Longer dives, deeper sites, and a whole new level of exploration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="https://wa.me/66971543171?text=Hi!%20I%27m%20interested%20in%20the%20Decompression%20Diving%20course%20%F0%9F%A4%BF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-normal uppercase tracking-wide text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Book Now →
            </a>
            <Link
              href="/courses/advanced"
              className="text-base font-normal uppercase tracking-wide text-[#97ABB1] hover:underline underline-offset-4 transition-all duration-300"
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
