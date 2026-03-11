'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const navItems = [
  {
    label: 'Courses',
    href: '/courses',
    dropdown: [
      {
        group: 'Beginners',
        items: [
          { label: 'Try Scuba', href: '/courses/beginners/try-scuba' },
          { label: 'Open Water', href: '/courses/beginners/open-water' },
        ],
      },
      {
        group: 'Advanced',
        items: [
          { label: 'All Specialties', href: '/courses/advanced' },
        ],
      },
      {
        group: 'Professionals',
        items: [
          { label: 'Divemaster', href: '/courses/professionals/divemaster' },
          { label: 'Open Water Instructor', href: '/courses/professionals/open-water-instructor' },
          { label: 'Specialty Instructor', href: '/courses/professionals/specialty-instructor' },
        ],
      },
    ],
  },
  {
    label: 'Fun Dives',
    href: '/fun-dives',
    dropdown: [
      {
        group: '',
        items: [
          { label: 'Fun Dives', href: '/fun-dives/fun-dives' },
          { label: 'Refresh Program', href: '/fun-dives/refresh-program' },
        ],
      },
    ],
  },
  {
    label: 'Liveaboard',
    href: '/liveaboard',
    dropdown: [
      {
        group: '',
        items: [
          { label: 'Maldives', href: '/liveaboard/maldives' },
          { label: 'Egypt', href: '/liveaboard/egypt' },
        ],
      },
    ],
  },
  { label: 'Packages', href: '/packages' },
  {
    label: 'About',
    href: '/about',
    dropdown: [
      {
        group: '',
        items: [
          { label: 'Who We Are', href: '/about/who-we-are' },
          { label: 'How We Work', href: '/about/how-we-work' },
        ],
      },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Dynamic colors based on scroll state and route
  const isTransparent = isHome && !scrolled
  const textColor = isTransparent ? 'text-white' : 'text-[#0A1628]'
  const hoverColor = 'hover:text-[#F8B85D]'
  const hamburgerBg = isTransparent ? 'bg-white' : 'bg-[#0A1628]'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FFFAE7] shadow-lg py-3'
          : isHome
            ? 'bg-transparent py-5'
            : 'bg-[#FFFAE7] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center relative">
        {/* Logo */}
        <Link href="/" className="absolute left-6 flex items-center [&>span]:bg-transparent">
          <Image
            src="/photos/logo-shaka.png"
            alt="Hang Loose Divers"
            width={48}
            height={48}
            unoptimized
            className="bg-transparent transition-all duration-300"
            style={{
              filter: isTransparent ? 'brightness(0) invert(1)' : 'none',
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center justify-center gap-8">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className={`inline-block align-middle leading-none text-sm font-bold uppercase tracking-wider transition-colors duration-200 ${textColor} ${hoverColor}`}
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                {item.label}
              </Link>

              {/* Dropdown */}
              {item.dropdown && openMenu === item.label && (
                <div className="absolute top-full left-0 mt-0 pt-2">
                  <div className="bg-[#FFFAE7] rounded-lg shadow-2xl p-6 min-w-[280px] flex gap-8">
                    {item.dropdown.map((group) => (
                      <div key={group.group}>
                        {group.group && (
                          <Link
                            href={
                              group.group === 'Beginners' ? '/courses/beginners' :
                              group.group === 'Advanced' ? '/courses/advanced' :
                              group.group === 'Professionals' ? '/courses/professionals' :
                              '#'
                            }
                            className="block text-xs font-bold uppercase tracking-wider text-[#97ABB1] mb-3 hover:text-[#F8B85D] transition-colors"
                            style={{ fontFamily: 'var(--font-space-mono)' }}
                          >
                            {group.group}
                          </Link>
                        )}
                        <ul className="flex flex-col gap-2">
                          {group.items.map((subItem) => (
                            <li key={subItem.label}>
                              <Link
                                href={subItem.href}
                                className="text-sm font-bold uppercase tracking-wider text-[#0A1628] hover:text-[#4D9995] transition-colors"
                                style={{ fontFamily: 'var(--font-space-mono)' }}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}

          {/* Social Icons (Desktop) */}
          <li className="hidden md:flex items-center gap-3 mr-2">
            <a
              href="https://www.instagram.com/hangloosedivers/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hang Loose Divers on Instagram"
              className={`${textColor} ${hoverColor} transition-colors duration-200`}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
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
              aria-label="Hang Loose Divers on TikTok"
              className={`${textColor} ${hoverColor} transition-colors duration-200`}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M21 8.5a5.5 5.5 0 01-4.11-1.9v7.17A6.23 6.23 0 0110.62 20 6.18 6.18 0 014 13.88 6.18 6.18 0 0110.62 7.8c.27 0 .53.02.79.05v2.47a3.73 3.73 0 00-.79-.08 3.7 3.7 0 00-3.7 3.64 3.7 3.7 0 003.7 3.65 3.73 3.73 0 003.68-3.38l.02-.36V3h2.24a5.5 5.5 0 004.14 4.25V8.5z" />
              </svg>
            </a>
          </li>

          {/* CTA Button — always orange */}
          <li className="relative">
            <a
              href="https://wa.me/66971543171?text=Hi!%20I'm%20interested%20in%20booking%20a%20dive%20course%20🤿"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block align-middle leading-none -mt-px text-sm font-bold uppercase tracking-wider transition-colors duration-200 text-[#F8B85D] hover:underline underline-offset-4"
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              Book Now
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden absolute right-6 flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerBg}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerBg}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerBg}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FFFAE7] px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="text-[#0A1628] font-bold uppercase tracking-wider text-base block mb-2"
                style={{ fontFamily: 'var(--font-space-mono)' }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <div className="pl-4 flex flex-col gap-1">
                  {item.dropdown.flatMap((group) =>
                    group.items.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="text-black text-sm font-bold uppercase tracking-wider hover:text-[#F8B85D] transition-colors"
                        style={{ fontFamily: 'var(--font-space-mono)' }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}
          <a
            href="https://wa.me/66971543171?text=Hi!%20I'm%20interested%20in%20booking%20a%20dive%20course%20🤿"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 border-none bg-transparent text-[#F8B85D] font-black uppercase tracking-wider text-center py-3 hover:underline transition-all duration-300"
            style={{ fontFamily: 'var(--font-space-mono)' }}
            onClick={() => setMobileOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  )
}