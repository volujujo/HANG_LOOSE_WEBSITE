import Image from 'next/image'
import Link from 'next/link'

export default function HowWeWorkPage() {
  return (
    <main className="bg-[#FFFAE7]">
      {/* Hero */}
      <section className="pt-32 pb-8 md:pt-36 md:pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link href="/about/who-we-are" className="text-xs font-bold uppercase tracking-wider text-[#97ABB1] hover:text-[#F8B85D] transition-colors" style={{ fontFamily: 'var(--font-space-mono)' }}>
              About
            </Link>
            <span className="text-[#97ABB1]">/</span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0A1628]" style={{ fontFamily: 'var(--font-space-mono)' }}>
              How We Work
            </span>
          </div>

          <div className="max-w-3xl">
            <p className="text-sm font-normal tracking-[0.25em] uppercase text-[#97ABB1] mb-3" style={{ fontFamily: 'var(--font-space-mono)' }}>
              Our Approach
            </p>
            <h1 className="text-4xl md:text-6xl font-black uppercase text-[#0A1628] mb-6" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>
              How We Work
            </h1>
          </div>
        </div>
      </section>

      {/* Beachfront Based */}
      <section className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            <div>
              <p className="text-sm font-normal tracking-[0.25em] uppercase text-[#F8B85D] mb-3" style={{ fontFamily: 'var(--font-space-mono)' }}>
                Location
              </p>
              <h2 className="text-2xl md:text-4xl font-black uppercase text-[#0A1628] mb-5" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>
                Beachfront Based
              </h2>
              <div className="space-y-3 text-sm md:text-base text-[#0A1628]/60 leading-relaxed">
                <p>
                  Our location on Sairee Beach means fast, easy boat access and a stress-free
                  start to your dives—no crowded pier, no delays, just straight into the ocean.
                </p>
                <p>
                  And when the dives are done, you&apos;re already in the perfect spot to unwind
                  by the sea, catch the sunset, and enjoy good times with friends right on the beach.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto rounded-xl overflow-hidden">
              <Image
                src="/gallery/aboutbeachfrontinfo.webp"
                alt="Hang Loose Divers beachfront location on Sairee Beach"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top-Notch Dive Professionals */}
      <section className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            <div className="lg:order-2">
              <p className="text-sm font-normal tracking-[0.25em] uppercase text-[#F8B85D] mb-3" style={{ fontFamily: 'var(--font-space-mono)' }}>
                Our Team
              </p>
              <h2 className="text-2xl md:text-4xl font-black uppercase text-[#0A1628] mb-5" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>
                Top-Notch Dive Professionals
              </h2>
              <div className="space-y-3 text-sm md:text-base text-[#0A1628]/60 leading-relaxed">
                <p>
                  Our team is built on a strong foundation of training and experience, developed
                  under the guidance of our SSI Award winner in-house Instructor Trainer. This
                  ensures consistently high teaching standards, clear progression at every level,
                  and training you can trust—delivered by professionals who know how to turn great
                  instruction into great dives.
                </p>
                <p>
                  Our Divemasters bring the highest level of commitment to every dive, leading
                  guests through unforgettable underwater experiences with strong knowledge,
                  awareness, and a clear focus on safety.
                </p>
                <p>
                  Our instructors teach a wide range of specialties, from marine ecology to
                  recreational sidemount and advanced wreck diving, allowing divers to explore
                  and grow in different directions.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto rounded-xl overflow-hidden lg:order-1">
              <Image
                src="/gallery/abouttopnotchinstrutorsinfo.webp"
                alt="Hang Loose Divers professional dive team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand New Diving Gear */}
      <section className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            <div>
              <p className="text-sm font-normal tracking-[0.25em] uppercase text-[#F8B85D] mb-3" style={{ fontFamily: 'var(--font-space-mono)' }}>
                Equipment
              </p>
              <h2 className="text-2xl md:text-4xl font-black uppercase text-[#0A1628] mb-5" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>
                Brand New Diving Gear
              </h2>
              <div className="space-y-3 text-sm md:text-base text-[#0A1628]/60 leading-relaxed">
                <p>
                  At Hang Loose Divers, we invest in high-quality, carefully maintained scuba
                  equipment so every dive feels smooth, comfortable, and stress-free. Our gear
                  is selected with divers in mind—easy to use, well fitted, and consistently
                  serviced to the highest safety standards.
                </p>
                <p>
                  From wetsuits and masks to regulators and BCDs, everything is prepared so
                  you can focus on enjoying the dive, improving your skills, and making the
                  most of your time underwater. Quality equipment isn&apos;t a luxury—it&apos;s
                  part of the experience, and we&apos;ve got you covered.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto rounded-xl overflow-hidden">
              <Image
                src="/gallery/aboutbrandnewgearinfo.webp"
                alt="Brand new diving gear at Hang Loose Divers"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Own Boat */}
      <section className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            <div className="lg:order-2">
              <p className="text-sm font-normal tracking-[0.25em] uppercase text-[#F8B85D] mb-3" style={{ fontFamily: 'var(--font-space-mono)' }}>
                The Boat
              </p>
              <h2 className="text-2xl md:text-4xl font-black uppercase text-[#0A1628] mb-5" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>
                Our Own Boat
              </h2>
              <div className="space-y-3 text-sm md:text-base text-[#0A1628]/60 leading-relaxed">
                <p>
                  Hang Loose Divers&apos; boat is built for comfortable, efficient days on the
                  water, with generous space for both divers and equipment. The fast ride gets
                  you to Koh Tao&apos;s top dive sites quickly, while the open sundeck gives
                  you space to chill between dives.
                </p>
                <p>
                  An onboard compressor keeps tank changes quick, and our experienced,
                  easygoing crew takes care of the details, creating a personalized,
                  well-organized experience with relaxed energy and good vibes from
                  start to finish.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto rounded-xl overflow-hidden lg:order-1">
              <Image
                src="/gallery/aboutourboatinfo.webp"
                alt="Hang Loose Divers boat"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-3xl font-black uppercase text-[#0A1628] mb-3" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>
            Ready to Dive With Us?
          </h2>
          <p className="text-sm text-[#0A1628]/60 leading-relaxed mb-6">
            Check out our courses or get in touch — we&apos;ll find the perfect fit for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              href="/courses"
              className="text-base font-normal uppercase tracking-wide text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Explore Courses →
            </Link>
            <a
              href="https://wa.me/66971543171?text=Hi!%20I'm%20interested%20in%20diving%20with%20Hang%20Loose%20🤿"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-normal uppercase tracking-wide text-[#97ABB1] hover:underline underline-offset-4 transition-all duration-300"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Book Now →
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

