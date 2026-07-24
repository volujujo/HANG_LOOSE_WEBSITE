import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  {
    title: 'Courses',
    links: [
      { label: 'Beginners', href: '/courses/beginners' },
      { label: 'Advanced', href: '/courses/advanced' },
      { label: 'Professionals', href: '/courses/professionals' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Fun Dives', href: '/fun-dives/fun-dives' },
      { label: 'Refresh Program', href: '/fun-dives/refresh-program' },
      { label: 'Liveaboard Maldives', href: '/liveaboard/maldives' },
      { label: 'Packages', href: '/packages' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Who We Are', href: '/about/who-we-are' },
      { label: 'How We Work', href: '/about/how-we-work' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#FFFAE7] border-t border-[#0A1628]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Logo & Tagline — takes 4 columns */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/photos/logo-circle.png"
                alt="Hang Loose Divers"
                width={56}
                height={56}
                unoptimized
              />
              <span
                className="text-lg font-bold uppercase text-[#0A1628] group-hover:text-[#F8B85D] transition-colors"
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                Hang Loose Divers
              </span>
            </Link>
            <p className="mt-4 text-sm text-[#0A1628]/50 leading-relaxed max-w-xs">
              Dive. Explore. Hang Loose.
              <br />
              Koh Tao&apos;s home of good vibes and great diving.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/hangloosedivers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#0A1628]/40 hover:text-[#F8B85D] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808v-.63c0-2.43.012-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.467.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@hang.loose.divers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-[#0A1628]/40 hover:text-[#F8B85D] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 8.5a5.5 5.5 0 01-4.11-1.9v7.17A6.23 6.23 0 0110.62 20 6.18 6.18 0 014 13.88 6.18 6.18 0 0110.62 7.8c.27 0 .53.02.79.05v2.47a3.73 3.73 0 00-.79-.08 3.7 3.7 0 00-3.7 3.64 3.7 3.7 0 003.7 3.65 3.73 3.73 0 003.68-3.38l.02-.36V3h2.24a5.5 5.5 0 004.14 4.25V8.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link Columns — each takes ~2.5 columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="md:col-span-2">
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A1628] mb-4"
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                {group.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#0A1628]/50 hover:text-[#F8B85D] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Book Now column */}
          <div className="md:col-span-2">
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#0A1628] mb-4"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Ready to Dive?
            </p>
            <a
              href="https://wa.me/66971543171?text=Hi!%20I'm%20interested%20in%20booking%20a%20dive%20course%20🤿"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase tracking-wider text-[#F8B85D] hover:underline underline-offset-4 transition-all"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Book Now →
            </a>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-[#0A1628]/10">
          <p className="text-center text-xs text-[#0A1628]/30">
            © {new Date().getFullYear()} Hang Loose Divers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
