import Image from 'next/image'
import Link from 'next/link'

export default function WhoWeArePage() {
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
              Who We Are
            </span>
          </div>

          <div className="max-w-3xl">
            <p className="text-sm font-normal tracking-[0.25em] uppercase text-[#97ABB1] mb-3" style={{ fontFamily: 'var(--font-space-mono)' }}>
              About Us
            </p>
            <h1 className="text-4xl md:text-6xl font-black uppercase text-[#0A1628] mb-6" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>
              Who We Are
            </h1>
          </div>
        </div>
      </section>

      {/* Our Essence */}
      <section className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-normal tracking-[0.25em] uppercase text-[#F8B85D] mb-3" style={{ fontFamily: 'var(--font-space-mono)' }}>
                Our Essence
              </p>
              <h2 className="text-2xl md:text-4xl font-black uppercase text-[#0A1628] mb-5" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>
                Good Vibes
              </h2>
              <p className="text-sm md:text-base text-[#0A1628]/60 leading-relaxed">
                Hang Loose is founded on Good Vibes and a free-spirited lifestyle built
                around scuba diving and travel. We prioritize safety and student-centered
                learning, believing the essence of any dive adventure lies in trust, shared
                experiences, and real connection. Our goal is to shape capable, comfortable
                divers with solid skills, confident control, and a lasting bond with the
                underwater world.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/gallery/photo1.webp"
                alt="Good vibes at Hang Loose Divers"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mindset */}
      <section className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            <div className="lg:order-2">
              <p className="text-sm font-normal tracking-[0.25em] uppercase text-[#F8B85D] mb-3" style={{ fontFamily: 'var(--font-space-mono)' }}>
                Our Mindset
              </p>
              <h2 className="text-2xl md:text-4xl font-black uppercase text-[#0A1628] mb-5" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>
                Be a Friend
              </h2>
              <div className="space-y-3 text-sm md:text-base text-[#0A1628]/60 leading-relaxed">
                <p>It is simple, we strive to act as a friend to everyone we interact with.</p>
                <p>To our divers, by being cool, and always prepared to go the extra mile when needed.</p>
                <p>To the staff, allowing work to fit within their lives in a comprehensive and friendly atmosphere.</p>
                <p>To the environment, continuously striving to find ways to minimize our negative impact and initiate positive actions and programs.</p>
                <p>To the local communities, by supporting local businesses and embracing local culture.</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto rounded-xl overflow-hidden lg:order-1">
              <Image
                src="/gallery/photo2.webp"
                alt="Be a friend — Hang Loose Divers mindset"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            <div>
              <p className="text-sm font-normal tracking-[0.25em] uppercase text-[#F8B85D] mb-3" style={{ fontFamily: 'var(--font-space-mono)' }}>
                Our Story
              </p>
              <h2 className="text-2xl md:text-4xl font-black uppercase text-[#0A1628] mb-5" style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}>
                This Adventure Should Never End
              </h2>
              <div className="space-y-3 text-sm md:text-base text-[#0A1628]/60 leading-relaxed">
                <p>
                  It all began in 2018 when we, Mery and Marga, met in Koh Tao. From day one,
                  our combined experience set the foundation—Marga as a highly experienced Scuba
                  Instructor with a calm, precise teaching style and a natural way of connecting
                  with students, and Mery as a renowned diving Instructor Trainer shaping divers
                  and professionals to the highest standards. We instantly connected and soon found
                  ourselves working together across Koh Tao&apos;s most stunning reefs, travelling
                  to amazing diving destinations and building a strong friendship along the way.
                </p>
                <p>
                  On one of our diving holidays, surrounded by colorful reefs and tranquil waters,
                  we agreed, &apos;this adventure should never end&apos;. That moment sparked a bigger
                  vision: creating a dive center built on quality training, meaningful experiences,
                  and a genuine connection to the ocean.
                </p>
                <p>
                  Since then, we both have remained committed to that initial dream. Our dive center
                  idea flourished, rooted in the belief that diving should embody good vibes,
                  top-notch training, and unforgettable experiences—a philosophy that comes to life
                  at Hang Loose Divers.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-auto rounded-xl overflow-hidden">
              <Image
                src="/gallery/photo4.webp"
                alt="Mery and Marga — founders of Hang Loose Divers"
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
            See How We Do Things
          </h2>
          <p className="text-sm text-[#0A1628]/60 leading-relaxed mb-6">
            Curious about our approach to diving? Learn about the way we run things at Hang Loose.
          </p>
          <Link
            href="/about/how-we-work"
            className="text-base font-normal uppercase tracking-wide text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            How We Work →
          </Link>
        </div>
      </section>
    </main>
  )
}
