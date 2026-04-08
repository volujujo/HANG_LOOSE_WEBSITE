export default function MaldivesRouteMap() {
  const sites = [
    { name: 'Malé', x: 50, y: 10, day: '1' },
    { name: 'Rasdhoo Atoll', x: 40, y: 22, day: '2' },
    { name: 'North Ari (Maaya Thila)', x: 35, y: 34, day: '3' },
    { name: 'South Ari (Maamagili)', x: 38, y: 48, day: '4' },
    { name: 'Vaavu Atoll', x: 55, y: 55, day: '5' },
    { name: 'South Malé (Kandooma)', x: 58, y: 40, day: '6' },
    { name: 'North Malé', x: 52, y: 20, day: '7' },
    { name: 'Malé Airport', x: 50, y: 10, day: '8' },
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
            The Maldives
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
        <rect width="100" height="75" fill="transparent" />

        {/* Atoll shapes (simplified organic forms) */}
        {/* North Malé Atoll */}
        <ellipse cx="50" cy="12" rx="12" ry="5" fill="#1a3a5c" opacity="0.3" />
        {/* Rasdhoo */}
        <ellipse cx="38" cy="22" rx="5" ry="3" fill="#1a3a5c" opacity="0.25" />
        {/* North Ari */}
        <ellipse cx="33" cy="34" rx="8" ry="6" fill="#1a3a5c" opacity="0.3" />
        {/* South Ari */}
        <ellipse cx="36" cy="50" rx="9" ry="7" fill="#1a3a5c" opacity="0.3" />
        {/* Vaavu */}
        <ellipse cx="57" cy="55" rx="6" ry="4" fill="#1a3a5c" opacity="0.25" />
        {/* South Malé */}
        <ellipse cx="58" cy="38" rx="7" ry="5" fill="#1a3a5c" opacity="0.25" />

        {/* Atoll labels */}
        <text x="50" y="5" fill="#F9F4EC" opacity="0.15" fontSize="2.5" textAnchor="middle" fontWeight="bold" style={{ fontFamily: 'var(--font-space-mono)' }}>NORTH MALÉ</text>
        <text x="33" y="27" fill="#F9F4EC" opacity="0.15" fontSize="2" textAnchor="middle" fontWeight="bold" style={{ fontFamily: 'var(--font-space-mono)' }}>RASDHOO</text>
        <text x="28" y="38" fill="#F9F4EC" opacity="0.15" fontSize="2" textAnchor="middle" fontWeight="bold" style={{ fontFamily: 'var(--font-space-mono)' }}>ARI ATOLL</text>
        <text x="62" y="52" fill="#F9F4EC" opacity="0.15" fontSize="2" textAnchor="middle" fontWeight="bold" style={{ fontFamily: 'var(--font-space-mono)' }}>VAAVU</text>

        {/* Indian Ocean label */}
        <text x="78" y="70" fill="#97ABB1" opacity="0.2" fontSize="4" fontWeight="bold" style={{ fontFamily: 'var(--font-space-mono)' }}>INDIAN</text>
        <text x="78" y="74" fill="#97ABB1" opacity="0.2" fontSize="4" fontWeight="bold" style={{ fontFamily: 'var(--font-space-mono)' }}>OCEAN</text>

        {/* Route line */}
        <path
          d={`M${sites[0].x} ${sites[0].y} ${sites.slice(1).map((s) => `L${s.x} ${s.y}`).join(' ')}`}
          fill="none"
          stroke="#F8B85D"
          strokeWidth="0.5"
          strokeDasharray="2 1.5"
          opacity="0.6"
        />
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
            <circle cx={site.x} cy={site.y} r="2.5" fill="#F8B85D" opacity="0.15" />
            <circle cx={site.x} cy={site.y} r="1.2" fill="#F8B85D" />
            <circle cx={site.x} cy={site.y} r="0.5" fill="#F9F4EC" />
            <text
              x={site.x + (site.x > 50 ? -2 : 2.5)}
              y={site.y - 2.5}
              fill="#F9F4EC"
              fontSize="2.2"
              fontWeight="bold"
              textAnchor={site.x > 50 ? 'end' : 'start'}
              style={{ fontFamily: 'var(--font-space-mono)' }}
            >
              {site.name}
            </text>
            {site.day && (
              <text
                x={site.x + (site.x > 50 ? -2 : 2.5)}
                y={site.y + 0.5}
                fill="#97ABB1"
                fontSize="1.8"
                textAnchor={site.x > 50 ? 'end' : 'start'}
                style={{ fontFamily: 'var(--font-space-mono)' }}
              >
                Day {site.day}
              </text>
            )}
          </g>
        ))}

        <text x={sites[0].x} y={sites[0].y - 5} fill="#F8B85D" fontSize="1.8" textAnchor="middle" fontWeight="bold" style={{ fontFamily: 'var(--font-space-mono)' }}>START / END</text>
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
          <span className="text-[10px] text-[#97ABB1]" style={{ fontFamily: 'var(--font-space-mono)' }}>8 Days · 18+ Dives</span>
        </div>
      </div>
    </div>
  )
}

