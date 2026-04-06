'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function StressAndRescuePage() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      title: "What's Included",
      content: (
        <div className="space-y-2.5">
          {[
            "CPR and First Aid training (SSI React Right course)",
            "Theory sessions covering stress recognition, management, and rescue techniques",
            "Practical rescue practice in confined water",
            "4 open water training dives",
            "Small-group training (maximum of four divers) for personalized attention",
            "Premium, well-maintained scuba diving equipment for comfort and safety",
            "SSI Stress and Rescue Specialty certification",
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
            "Be 12 years old or more",
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
            <p>The course begins with the React Right program, focusing on first aid, CPR, and oxygen administration. This dry session is highly practical and hands-on, giving you plenty of time to practice essential emergency skills in realistic situations.</p>
          </div>
          <div>
            <p className="font-bold text-[#0A1628] mb-1">Day 2</p>
            <p>The Stress and Rescue program starts at 9:00am with an academic session centered on stress recognition, prevention, and management in diving. After a lunch break, we head to the boat around noon to review existing skills and learn new ones in confined water. These techniques are then applied during open water dives through realistic rescue scenarios. The day wraps up around 5:00pm.</p>
          </div>
          <div>
            <p className="font-bold text-[#0A1628] mb-1">Day 3</p>
            <p>We begin at 9:00am with a final theory session focused on rescue procedures and accident management. At noon, we return to the boat for your last two dives, where you&apos;ll practice more advanced rescue techniques and build confidence through real-world scenarios. The course concludes at 5:00pm — time to celebrate your achievement!</p>
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
              Stress &amp; Rescue
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#4D9995] mb-2" style={{ fontFamily: 'var(--font-space-mono)' }}>
                Advanced &amp; Specialties
              </p>
              <h1 className="text-3xl md:text-5xl font-black uppercase text-[#0A1628] mb-4" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>
                Stress &amp; Rescue
              </h1>

              <div className="flex items-center gap-6 mb-5">
                <div className="flex items-center gap-1.5">
                  <svg className="h-6 w-6 text-[#4D9995]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="7" /><path d="M12 9v3l2 2" />
                  </svg>
                  <span className="text-base font-bold text-[#0A1628]" style={{ fontFamily: 'var(--font-space-mono)' }}>3 Days</span>
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
                  <span className="text-base font-bold text-[#F8B85D]" style={{ fontFamily: 'var(--font-space-mono)' }}>12,600 THB</span>
                </div>
              </div>

              <p className="text-sm md:text-base text-[#0A1628]/60 leading-relaxed">
                Get ready to transform your diving skills over three epic days with our Stress and Rescue Diver Course. The course is taught together with the React Right Course, combining CPR, first aid and oxygen provider training. From there, diving is at the heart of the Rescue course — combining confined and open water sessions with a variety of emergency scenarios. You&apos;ll leave better prepared, more capable, and a stronger contributor to dive safety.
              </p>

              <div className="mt-6">
                <a
                  href="https://wa.me/66971543171?text=Hi!%20I%27m%20interested%20in%20the%20Stress%20and%20Rescue%20course%20%F0%9F%A4%BF"
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
                alt="Stress and Rescue Course in Koh Tao"
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
            Be the Diver Everyone Wants in the Water
          </h2>
          <p className="text-sm text-[#0A1628]/60 leading-relaxed mb-6">
            Awareness, composure, and the skills to act when it counts.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="https://wa.me/66971543171?text=Hi!%20I%27m%20interested%20in%20the%20Stress%20and%20Rescue%20course%20%F0%9F%A4%BF"
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
