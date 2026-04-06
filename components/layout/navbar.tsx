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
  const [openGroup, setOpenGroup] = useState<string | null>(null)
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
          ? 'bg-[#FFFAE7] shadow-lg py-1'
          : isHome
            ? 'bg-transparent py-1.5'
            : 'bg-[#FFFAE7] py-1.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 md:px-4 flex items-center">
        {/* Logo — left side, flex-1 so it mirrors the right side width */}
        <div className="flex-1 flex items-center">
          <Link href="/" className="flex items-center !p-0 shrink-0 [&>span]:bg-transparent">
            <Image
              src="/photos/logo-shaka.png"
              alt="Hang Loose Divers"
              width={68}
              height={68}
              unoptimized
              className="transition-all duration-300"
              style={{
                filter: isHome
                  ? 'brightness(0) saturate(100%) invert(78%) sepia(40%) saturate(600%) hue-rotate(350deg) brightness(100%)'
                  : 'brightness(1)',
              }}
            />
          </Link>
        </div>

        {/* Desktop Nav — truly centered */}
        <ul className="hidden md:flex items-center justify-center gap-6 flex-nowrap">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className={`!p-0 !m-0 inline-block leading-none text-[15px] font-normal uppercase tracking-wide whitespace-nowrap transition-colors duration-200 ${
                  pathname.startsWith(item.href) && item.href !== '/'
                    ? 'text-[#F8B85D]'
                    : textColor
                } ${hoverColor}`}
                style={{ fontFamily: 'var(--font-space-mono)', fontWeight: 400 }}
              >
                {item.label}
              </Link>

              {/* Dropdown */}
              {item.dropdown && openMenu === item.label && (
                <div className="absolute top-full left-0 mt-0 pt-2">
                  {item.label === 'Courses' ? (
                    <div
                      className="bg-[#FFFAE7] rounded-lg shadow-2xl flex"
                      onMouseLeave={() => setOpenGroup(null)}
                    >
                      {/* Left: 3 group names */}
                      <div className="py-4 min-w-[200px]">
                        {item.dropdown.map((group) => (
                          <Link
                            key={group.group}
                            href={
                              group.group === 'Beginners' ? '/courses/beginners' :
                              group.group === 'Advanced' ? '/courses/advanced' :
                              '/courses/professionals'
                            }
                            onMouseEnter={() => setOpenGroup(group.group)}
                            className={`!p-0 flex items-center justify-between px-6 py-3 transition-colors duration-150 ${
                              openGroup === group.group ? 'text-[#F8B85D]' : 'text-[#0A1628] hover:text-[#F8B85D]'
                            }`}
                          >
                            <span
                              className="text-[15px] font-normal uppercase tracking-wider"
                              style={{ fontFamily: 'var(--font-space-mono)' }}
                            >
                              {group.group}
                            </span>
                            <span className="ml-8 text-sm opacity-40">›</span>
                          </Link>
                        ))}
                      </div>

                      {/* Right: sub-items flyout */}
                      {openGroup && (
                        <div className="border-l border-[#0A1628]/10 py-4 px-6 min-w-[220px] flex flex-col gap-3 justify-center">
                          {item.dropdown
                            .find((g) => g.group === openGroup)
                            ?.items.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className="!p-0 text-[15px] font-normal uppercase tracking-wider text-[#0A1628] hover:text-[#97ABB1] transition-colors"
                                style={{ fontFamily: 'var(--font-space-mono)' }}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="bg-[#FFFAE7] rounded-lg shadow-2xl p-6 min-w-[180px] flex flex-col gap-2">
                      {item.dropdown.flatMap((group) =>
                        group.items.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="!p-0 text-sm font-normal uppercase tracking-wider text-[#0A1628] hover:text-[#97ABB1] transition-colors"
                            style={{ fontFamily: 'var(--font-space-mono)' }}
                          >
                            {subItem.label}
                          </Link>
                        ))
                      )}
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Right Side: social icons */}
        <div className="flex-1 hidden md:flex items-center justify-end gap-2">
          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/hangloosedivers/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hang Loose Divers on Instagram"
              className={`${textColor} ${hoverColor} !p-0 transition-colors duration-200`}
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
              className={`${textColor} ${hoverColor} !p-0 transition-colors duration-200`}
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
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
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
        <div className="md:hidden bg-[#FFFAE7] px-6 py-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="!p-0 text-[#0A1628] font-bold uppercase tracking-wider text-base block mb-2"
                style={{ fontFamily: 'var(--font-space-mono)' }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.dropdown && (
                <div className="pl-4 flex flex-col gap-1">
                  {item.label === 'Courses'
                    ? item.dropdown.map((group) => (
                        <Link
                          key={group.group}
                          href={
                            group.group === 'Beginners' ? '/courses/beginners' :
                            group.group === 'Advanced' ? '/courses/advanced' :
                            '/courses/professionals'
                          }
                          className="!p-0 text-black text-sm font-normal uppercase tracking-wider hover:text-[#F8B85D] transition-colors"
                          style={{ fontFamily: 'var(--font-space-mono)' }}
                          onClick={() => setMobileOpen(false)}
                        >
                          {group.group}
                        </Link>
                      ))
                    : item.dropdown.flatMap((group) =>
                        group.items.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className="!p-0 text-black text-sm font-normal uppercase tracking-wider hover:text-[#F8B85D] transition-colors"
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
        </div>
      )}
    </nav>
  )
}