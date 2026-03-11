export default function EgyptRouteMap() {
  const sites = [
    { name: 'Hurghada', x: 82, y: 58, day: '1-2' },
    { name: 'Abu Nuhas', x: 68, y: 45, day: '3' },
    { name: 'Strait of Gubal', x: 60, y: 38, day: '' },
    { name: 'Jackson / Thomas / Gordon', x: 48, y: 28, day: '4' },
    { name: 'Ras Mohamed', x: 40, y: 35, day: '5' },
    { name: 'Thistlegorm', x: 50, y: 40, day: '5-6' },
    { name: 'Dunraven / The Barge', x: 55, y: 42, day: '6' },
    { name: 'Dolphinhouse', x: 75, y: 52, day: '7' },
  ]

  return (
    <div className="relative w-full bg-gradient-to-b from-[#0B2A4A] to-[#0A1628] rounded-xl overflow-hidden p-6 md:p-8">
      {/* Title */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p
            className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#F8B85D]"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            Dive Route
          </p>
          <h3
            className="text-lg md:text-xl font-black uppercase text-[#F9F4EC]"
            style={{ fontFamily: 'var(--font-space-mono)' }}
          >
            North Red Sea
          </h3>
        </div>
        <img
          src="/photos/logo-circle.png"
          alt="Hang Loose"
          className="w-10 h-10 opacity-80"
        />
      </div>

      {/* Map SVG */}
      <svg viewBox="0 0 100 75" className="w-full" xmlns="http://www.w3.org/2000/svg">
        {/* Water background */}
        <rect width="100" height="75" fill="transparent" />

        {/* Sinai Peninsula (simplified) */}
        <path
          d="M30 0 L30 15 L35 22 L38 30 L36 38 L30 42 L28 50 L25 55 L20 60 L15 65 L10 68 L0 70 L0 0 Z"
          fill="#1a3a5c"
          opacity="0.4"
        />

        {/* Egypt mainland coast (simplified) */}
        <path
          d="M100 0 L100 75 L60 75 L65 65 L70 60 L78 55 L85 48 L88 40 L90 30 L92 20 L95 10 L98 5 L100 0 Z"
          fill="#1a3a5c"
          opacity="0.4"
        />

        {/* Coast labels */}
        <text x="8" y="12" fill="#F9F4EC" opacity="0.2" fontSize="3.5" fontWeight="bold" style={{ fontFamily: 'var(--font-space-mono)' }}>SINAI</text>
        <text x="88" y="12" fill="#F9F4EC" opacity="0.2" fontSize="3.5" fontWeight="bold" style={{ fontFamily: 'var(--font-space-mono)' }}>EGYPT</text>
        <text x="40" y="68" fill="#4D9995" opacity="0.3" fontSize="5" fontWeight="bold" style={{ fontFamily: 'var(--font-space-mono)' }}>RED SEA</text>

        {/* Route line (dashed) */}
        <path
          d={`M${sites[0].x} ${sites[0].y} ${sites.slice(1).map((s) => `L${s.x} ${s.y}`).join(' ')}`}
          fill="none"
          stroke="#F8B85D"
          strokeWidth="0.5"
          strokeDasharray="2 1.5"
          opacity="0.6"
        />

        {/* Route line animated glow */}
        <path
          d={`M${sites[0].x} ${sites[0].y} ${sites.slice(1).map((s) => `L${s.x} ${s.y}`).join(' ')}`}
          fill="none"
          stroke="#F8B85D"
          strokeWidth="1.5"
          strokeDasharray="2 1.5"
          opacity="0.15"
        />

        {/* Dive site markers */}
        {sites.map((site, i) => (
          <g key={i}>
            {/* Outer pulse ring */}
            <circle cx={site.x} cy={site.y} r="2.5" fill="#F8B85D" opacity="0.15" />
            {/* Inner dot */}
            <circle cx={site.x} cy={site.y} r="1.2" fill="#F8B85D" />
            {/* White center */}
            <circle cx={site.x} cy={site.y} r="0.5" fill="#F9F4EC" />
            {/* Label */}
            <text
              x={site.x + (site.x > 60 ? -2 : 2.5)}
              y={site.y - 2.5}
              fill="#F9F4EC"
              fontSize="2.2"
              fontWeight="bold"
              textAnchor={site.x > 60 ? 'end' : 'start'}
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              {site.name}
            </text>
            {/* Day badge */}
            {site.day && (
              <text
                x={site.x + (site.x > 60 ? -2 : 2.5)}
                y={site.y + 0.5}
                fill="#4D9995"
                fontSize="1.8"
                textAnchor={site.x > 60 ? 'end' : 'start'}
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                Day {site.day}
              </text>
            )}
          </g>
        ))}

        {/* Start marker */}
        <text x={sites[0].x} y={sites[0].y + 4} fill="#F8B85D" fontSize="1.8" textAnchor="middle" fontWeight="bold" style={{ fontFamily: 'var(--font-space-mono)' }}>START</text>
      </svg>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-4">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#F8B85D]" />
          <span className="text-[10px] text-[#F9F4EC]/50" style={{ fontFamily: 'var(--font-space-mono)' }}>Dive Site</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-0 border-t border-dashed border-[#F8B85D] opacity-60" />
          <span className="text-[10px] text-[#F9F4EC]/50" style={{ fontFamily: 'var(--font-space-mono)' }}>Route</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-[#4D9995]" style={{ fontFamily: 'var(--font-space-mono)' }}>8 Days · 20+ Dives</span>
        </div>
      </div>
    </div>
  )
}

