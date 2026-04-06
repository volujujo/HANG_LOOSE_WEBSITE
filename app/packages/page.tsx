import Image from 'next/image'
import Link from 'next/link'

const packages = [
  {
    title: 'Open Water + Advanced',
    href: '/packages/open-water-advanced',
    image: '/gallery/photo1.webp',
    duration: '4 Days',
    dives: '9 Dives',
    price: '18,500 THB',
    description: "Go from beginner to confident advanced diver in one seamless journey — the fastest way to earn two certifications and unlock deeper, more exciting dives.",
  },
  {
    title: 'Deep + Nitrox',
    href: '/packages/deep-nitrox',
    image: '/gallery/photo4.webp',
    duration: '2–3 Days',
    dives: '2–4 Dives',
    price: 'From 10,000 THB',
    description: "Maximize your bottom time and push your limits. Dive deeper, stay longer, and explore advanced sites with confidence and control.",
  },
  {
    title: 'Sidemount + Independent Diver',
    href: '/packages/sidemount-independent',
    image: '/gallery/photo3.webp',
    duration: '4 Days',
    dives: '6 Dives',
    price: '19,900 THB',
    description: "Built for divers who value freedom and control — a streamlined sidemount setup combined with the skills to safely dive independently.",
  },
]

export default function PackagesPage() {
  return (
    <main className="bg-[#FFFAE7]">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-sm font-normal tracking-[0.25em] uppercase text-[#4D9995] mb-4"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Save More, Dive More
            </p>
            <h1
              className="text-3xl md:text-4xl font-black uppercase text-[#0A1628] mb-6"
              style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}
            >
              Combo Packages
            </h1>
            <p className="text-lg text-[#0A1628]/60 leading-relaxed">
              Looking to do more than one course? Our combo packages let you progress faster,
              save time and money, and build real confidence through continuous diving.
              Each package is designed to pair perfectly — so every dive builds directly on the last.
            </p>
          </div>

          <div className="mt-8 h-2 w-2 rounded-full bg-[#F8B85D] mx-auto" />
        </div>
      </section>

      {/* Package Cards */}
      <section className="pb-16 md:pb-24">
        <div className="px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Link key={pkg.title} href={pkg.href} className="group">
                <div className="flex flex-col h-full bg-[#F0EBD8] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-5 md:p-6 text-center items-center">
                    <h2
                      className="text-lg md:text-xl font-black uppercase text-[#0A1628] mb-3"
                      style={{ fontFamily: 'var(--font-space-mono)' }}
                    >
                      {pkg.title}
                    </h2>
                    <p className="text-sm text-[#0A1628]/60 leading-relaxed flex-1 mb-4">
                      {pkg.description}
                    </p>
                    <div className="flex items-center justify-center gap-3 text-sm font-normal text-[#0A1628]/50 mb-4">
                      <div className="flex items-center gap-1.5">
                        <svg className="h-5 w-5 text-[#4D9995]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="7" /><path d="M12 9v3l2 2" />
                        </svg>
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="h-5 w-5 text-[#4D9995]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 15c1.2 0 1.8-.5 2.4-1 .6-.5 1.2-1 2.4-1s1.8.5 2.4 1c.6.5 1.2 1 2.4 1s1.8-.5 2.4-1c.6-.5 1.2-1 2.4-1" />
                        </svg>
                        <span>{pkg.dives}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="h-5 w-5 text-[#4D9995]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="7" width="20" height="10" rx="1.5" /><circle cx="12" cy="12" r="2.5" /><path d="M6 10v4M18 10v4" />
                        </svg>
                        <span className="text-[#F8B85D] font-bold">{pkg.price}</span>
                      </div>
                    </div>
                    <span
                      className="text-sm font-normal uppercase tracking-wider text-[#F8B85D] group-hover:underline underline-offset-4 transition-all"
                      style={{ fontFamily: 'var(--font-space-mono)' }}
                    >
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dot Divider */}
      <div className="flex justify-center py-4">
        <div className="h-2 w-2 rounded-full bg-[#F8B85D]" />
      </div>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-sm font-normal tracking-[0.25em] uppercase text-[#4D9995] mb-4"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Not Sure Which Package?
          </p>
          <h2
            className="text-2xl md:text-4xl font-black uppercase text-[#0A1628] mb-4"
            style={{ fontFamily: 'var(--font-space-mono)', lineHeight: 1.1 }}
          >
            Talk to Us
          </h2>
          <p className="text-base text-[#0A1628]/60 leading-relaxed mb-8">
            We&apos;ll help you find the right combo for your level, timeline, and goals.
            No pressure — just good advice and good vibes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/66971543171?text=Hi!%20I%27m%20interested%20in%20a%20course%20package%20%F0%9F%A4%BF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-normal uppercase tracking-wider text-[#F8B85D] hover:underline underline-offset-4 transition-all duration-300"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Get in Touch →
            </a>
            <Link
              href="/courses"
              className="text-sm font-normal uppercase tracking-wider text-[#4D9995] hover:underline underline-offset-4 transition-all duration-300"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Browse All Courses →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
