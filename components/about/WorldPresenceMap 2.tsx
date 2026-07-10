'use client'

import { useLanguage } from '@/components/LanguageProvider'

type Marker = {
  key: string
  x: number
  y: number
  labelX: number
  labelY: number
  align?: 'start' | 'end'
  countryPt: string
  countryEn: string
}

const markers: Marker[] = [
  { key: 'us', x: 225, y: 177, labelX: 162, labelY: 142, align: 'start', countryPt: 'Estados Unidos', countryEn: 'United States' },
  { key: 'colombia', x: 311, y: 269, labelX: 256, labelY: 244, align: 'start', countryPt: 'Colômbia', countryEn: 'Colombia' },
  { key: 'brazil', x: 346, y: 339, labelX: 383, labelY: 324, align: 'start', countryPt: 'Brasil', countryEn: 'Brazil' },
  { key: 'chile', x: 288, y: 392, labelX: 234, labelY: 380, align: 'start', countryPt: 'Chile', countryEn: 'Chile' },
  { key: 'belgium', x: 495, y: 149, labelX: 523, labelY: 120, align: 'start', countryPt: 'Bélgica', countryEn: 'Belgium' },
  { key: 'portugal', x: 470, y: 171, labelX: 409, labelY: 145, align: 'start', countryPt: 'Portugal', countryEn: 'Portugal' },
  { key: 'south-africa', x: 571, y: 397, labelX: 610, labelY: 414, align: 'start', countryPt: 'África do Sul', countryEn: 'South Africa' },
  { key: 'china', x: 755, y: 200, labelX: 792, labelY: 172, align: 'start', countryPt: 'China', countryEn: 'China' },
  { key: 'macau', x: 764, y: 223, labelX: 804, labelY: 226, align: 'start', countryPt: 'Macau', countryEn: 'Macau' },
  { key: 'singapore', x: 769, y: 281, labelX: 803, labelY: 294, align: 'start', countryPt: 'Singapura', countryEn: 'Singapore' },
  { key: 'australia', x: 861, y: 382, labelX: 798, labelY: 430, align: 'start', countryPt: 'Austrália', countryEn: 'Australia' },
]

export default function WorldPresenceMap() {
  const { locale } = useLanguage()
  const isEnglish = locale === 'en-US'

  return (
    <div className="world-presence-card" data-aos="fade-up" data-aos-delay="150">
      <div className="world-presence-card__header">
        <div>
          <span className="world-presence-card__eyebrow">{isEnglish ? 'International presence' : 'Presença internacional'}</span>
          <h3>{isEnglish ? 'Virtutis Energy footprint across key markets' : 'Atuação da Virtutis Energy em mercados estratégicos'}</h3>
        </div>
        <div className="world-presence-card__badge">{isEnglish ? '11 highlighted countries' : '11 países destacados'}</div>
      </div>

      <div className="world-presence-layout">
        <div className="world-map-shell">
          <svg className="world-map-svg" viewBox="0 0 1000 520" role="img" aria-label={isEnglish ? 'World map with highlighted countries' : 'Mapa-múndi com países destacados'}>
            <defs>
              <linearGradient id="world-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#eff9f6" />
                <stop offset="50%" stopColor="#dbf2eb" />
                <stop offset="100%" stopColor="#cae8df" />
              </linearGradient>
              <radialGradient id="world-glow" cx="50%" cy="45%" r="58%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>

            <rect x="10" y="10" width="980" height="500" rx="28" fill="url(#world-bg)" />
            <ellipse cx="500" cy="245" rx="370" ry="185" fill="url(#world-glow)" />

            <g className="world-map-continents">
              <path d="M112 138c24-25 51-34 88-44 40-10 93-16 128-4 19 7 32 23 49 35 12 9 11 28-2 38-17 12-42 9-54 22-17 17-11 33-31 44-22 12-31 31-56 40-36 13-82 14-117-4-29-15-43-43-38-75 4-21 15-39 33-52Z" />
              <path d="M277 253c16-10 31 6 42 18 17 18 30 39 35 64 7 32 0 63-11 93-7 19-1 43-11 61-8 14-27 6-35-5-14-19-24-43-34-65-12-29-23-58-22-90 2-29 10-59 36-76Z" />
              <path d="M437 125c25-21 58-33 91-37 34-5 71-1 104 8 34 10 81 28 89 65 4 20-15 33-29 42-18 11-39 14-57 24-21 11-34 30-55 39-34 15-75 30-112 18-35-11-58-47-54-84 4-28 15-56 23-75Z" />
              <path d="M497 209c18-6 39 1 54 11 27 18 42 48 46 79 4 31 6 66 23 92 12 20 33 33 44 54 8 14-2 30-18 34-27 8-56-2-80-15-29-16-51-42-67-70-18-32-32-68-28-105 4-33 5-67 26-80Z" />
              <path d="M663 138c31-14 63-25 97-26 31 0 62 6 90 18 30 13 62 37 62 73 0 24-18 45-39 55-25 12-53 15-75 33-14 12-26 24-43 32-22 10-47 13-71 15-35 3-72-7-96-33-23-24-19-60-6-88 15-33 48-61 81-79Z" />
              <path d="M725 269c22-3 45 4 63 16 18 12 32 30 50 40 18 11 42 16 54 34 12 18 8 44-4 62-17 24-49 32-77 34-38 3-79-4-112-24-27-17-44-46-46-78-2-26 7-54 27-72 13-12 29-22 45-12Z" />
              <path d="M862 345c17-3 36 4 48 16 11 12 13 31 4 44-13 18-40 21-59 11-16-8-28-28-20-46 5-13 14-23 27-25Z" />
            </g>

            <g className="world-map-grid">
              <path d="M90 145h820" />
              <path d="M90 220h820" />
              <path d="M90 295h820" />
              <path d="M90 370h820" />
              <path d="M190 76v360" />
              <path d="M370 76v360" />
              <path d="M550 76v360" />
              <path d="M730 76v360" />
            </g>

            {markers.map((marker) => (
              <g key={marker.key} className="world-map-marker-group">
                <path
                  className="world-map-marker__line"
                  d={`M ${marker.x} ${marker.y} Q ${(marker.x + marker.labelX) / 2} ${marker.labelY - 8} ${marker.labelX} ${marker.labelY}`}
                />
                <g className="world-map-marker" transform={`translate(${marker.x} ${marker.y})`}>
                  <circle className="world-map-marker__pulse" r="14" />
                  <circle className="world-map-marker__halo" r="9" />
                  <circle className="world-map-marker__dot" r="5.5" />
                </g>
                <g transform={`translate(${marker.labelX} ${marker.labelY})`}>
                  <text className="world-map-label" textAnchor={marker.align || 'start'}>
                    {isEnglish ? marker.countryEn : marker.countryPt}
                  </text>
                </g>
              </g>
            ))}
          </svg>
        </div>

        <div className="world-presence-countries">
          {markers.map((marker) => (
            <div key={marker.key} className="country-chip">
              <span className="country-chip__dot" />
              <span>{isEnglish ? marker.countryEn : marker.countryPt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
