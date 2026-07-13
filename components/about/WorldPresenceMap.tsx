'use client'

import { useEffect, useMemo, useState } from 'react'
import { geoGraticule10, geoNaturalEarth1, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import { useLanguage } from '@/components/LanguageProvider'

type Marker = {
  key: string
  countryId: string
  coordinates: [number, number]
  labelOffset: [number, number]
  countryPt: string
  countryEn: string
  countryEs: string
}

type TopologyData = {
  type: 'Topology'
  objects: {
    countries: unknown
  }
}

const markers: Marker[] = [
  { key: 'us', countryId: '840', coordinates: [-98.5, 39.8], labelOffset: [-58, -18], countryPt: 'Estados Unidos', countryEn: 'United States', countryEs: 'Estados Unidos' },
  { key: 'colombia', countryId: '170', coordinates: [-74.1, 4.7], labelOffset: [-58, -8], countryPt: 'Colômbia', countryEn: 'Colombia', countryEs: 'Colombia' },
  { key: 'brazil', countryId: '076', coordinates: [-51.9, -14.2], labelOffset: [16, 18], countryPt: 'Brasil', countryEn: 'Brazil', countryEs: 'Brasil' },
  { key: 'chile', countryId: '152', coordinates: [-71.5, -35.7], labelOffset: [-44, 12], countryPt: 'Chile', countryEn: 'Chile', countryEs: 'Chile' },
  { key: 'belgium', countryId: '056', coordinates: [4.5, 50.7], labelOffset: [12, -18], countryPt: 'Bélgica', countryEn: 'Belgium', countryEs: 'Bélgica' },
  { key: 'portugal', countryId: '620', coordinates: [-8.2, 39.4], labelOffset: [-56, -18], countryPt: 'Portugal', countryEn: 'Portugal', countryEs: 'Portugal' },
  { key: 'south-africa', countryId: '710', coordinates: [24.7, -29.0], labelOffset: [14, 16], countryPt: 'África do Sul', countryEn: 'South Africa', countryEs: 'Sudáfrica' },
  { key: 'china', countryId: '156', coordinates: [104.1, 35.9], labelOffset: [14, -18], countryPt: 'China', countryEn: 'China', countryEs: 'China' },
  { key: 'hong-kong', countryId: '344', coordinates: [114.17, 22.32], labelOffset: [14, -10], countryPt: 'Hong Kong', countryEn: 'Hong Kong', countryEs: 'Hong Kong' },
  { key: 'macau', countryId: '446', coordinates: [113.54, 22.2], labelOffset: [14, 0], countryPt: 'Macau', countryEn: 'Macau', countryEs: 'Macao' },
  { key: 'singapore', countryId: '702', coordinates: [103.82, 1.35], labelOffset: [14, 10], countryPt: 'Singapura', countryEn: 'Singapore', countryEs: 'Singapur' },
  { key: 'australia', countryId: '036', coordinates: [134.5, -25.7], labelOffset: [16, 20], countryPt: 'Austrália', countryEn: 'Australia', countryEs: 'Australia' },
]

const highlightedCountryIds = new Set(markers.map((marker) => marker.countryId))

export default function WorldPresenceMap() {
  const { locale } = useLanguage()
  const isEnglish = locale === 'en-US'
  const isSpanish = locale === 'es-ES'
  const [topology, setTopology] = useState<TopologyData | null>(null)
  const [isCountryListOpen, setIsCountryListOpen] = useState(false)

  useEffect(() => {
    let ignore = false

    async function loadTopology() {
      const response = await fetch('/data/countries-110m.json')
      const data = (await response.json()) as TopologyData

      if (!ignore) {
        setTopology(data)
      }
    }

    loadTopology().catch(() => {
      if (!ignore) {
        setTopology(null)
      }
    })

    return () => {
      ignore = true
    }
  }, [])

  const { countries, worldPath, graticulePath, projectedMarkers } = useMemo(() => {
    const projection = geoNaturalEarth1().scale(178).translate([500, 255])
    const pathGenerator = geoPath(projection)
    const graticule = geoGraticule10()

    const worldPathValue = pathGenerator({ type: 'Sphere' }) || ''
    const graticulePathValue = pathGenerator(graticule) || ''
    const projected = markers
      .map((marker) => {
        const point = projection(marker.coordinates)

        if (!point) {
          return null
        }

        return {
          ...marker,
          x: point[0],
          y: point[1],
          labelX: point[0] + marker.labelOffset[0],
          labelY: point[1] + marker.labelOffset[1],
        }
      })
      .filter(Boolean)

    if (!topology) {
      return { countries: [], worldPath: worldPathValue, graticulePath: graticulePathValue, projectedMarkers: projected }
    }

    const geoJson = feature(topology as never, (topology.objects as { countries: never }).countries)
    const countryFeatures = geoJson.type === 'FeatureCollection' ? geoJson.features : []

    return {
      countries: countryFeatures.map((country, index) => ({
        key: country.id != null ? `country-${String(country.id).padStart(3, '0')}` : `country-fallback-${index}-${country.properties?.name || 'unknown'}`,
        id: country.id != null ? String(country.id).padStart(3, '0') : null,
        path: pathGenerator(country) || '',
      })),
      worldPath: worldPathValue,
      graticulePath: graticulePathValue,
      projectedMarkers: projected,
    }
  }, [topology])

  return (
    <div className="world-presence-card" data-aos="fade-up" data-aos-delay="150">
      <div className="world-presence-card__header">
        <div>
          <span className="world-presence-card__eyebrow">{isEnglish ? 'International presence' : isSpanish ? 'Presencia internacional' : 'Presença internacional'}</span>
          <h3>{isEnglish ? 'Virtutis Energy on a real world map' : isSpanish ? 'Virtutis Energy en un mapa mundial real' : 'Virtutis Energy em um mapa-múndi real'}</h3>
        </div>
        <div className="world-presence-card__badge">{isEnglish ? '12 highlighted countries' : isSpanish ? '12 países destacados' : '12 países destacados'}</div>
      </div>

      <div className="world-presence-layout">
        <div className="world-map-shell">
          <svg className="world-map-svg" viewBox="0 0 1000 520" role="img" aria-label={isEnglish ? 'Real world map with highlighted countries' : isSpanish ? 'Mapa mundial real con países destacados' : 'Mapa mundial real com países destacados'}>
            <defs>
              <linearGradient id="ocean-fill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f6f7ff" />
                <stop offset="50%" stopColor="#e7e9ff" />
                <stop offset="100%" stopColor="#d8dcff" />
              </linearGradient>
              <linearGradient id="country-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#eef0ff" />
              </linearGradient>
              <linearGradient id="highlight-fill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#263f9a" />
                <stop offset="100%" stopColor="#02083b" />
              </linearGradient>
            </defs>

            <path className="world-map-sphere" d={worldPath} />
            <path className="world-map-graticule" d={graticulePath} />

            {countries.map((country) => (
              <path
                key={country.key}
                d={country.path}
                className={country.id && highlightedCountryIds.has(country.id) ? 'world-country world-country--highlighted' : 'world-country'}
              />
            ))}

            {projectedMarkers.map((marker) => (
              <g key={marker.key} className="world-map-marker-group">
                <path
                  className="world-map-marker__line"
                  d={`M ${marker.x} ${marker.y} Q ${(marker.x + marker.labelX) / 2} ${marker.labelY - 8} ${marker.labelX} ${marker.labelY}`}
                />
                <circle className="world-map-marker__pulse" cx={marker.x} cy={marker.y} r="14" />
                <circle className="world-map-marker__halo" cx={marker.x} cy={marker.y} r="8.5" />
                <circle className="world-map-marker__dot" cx={marker.x} cy={marker.y} r="4.5" />
                <text className="world-map-label" x={marker.labelX} y={marker.labelY}>
                  {isEnglish ? marker.countryEn : isSpanish ? marker.countryEs : marker.countryPt}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="world-presence-countries">
          <button
            type="button"
            className="world-presence-countries__toggle"
            aria-expanded={isCountryListOpen}
            onClick={() => setIsCountryListOpen((current) => !current)}
          >
            <span className="world-presence-countries__check" aria-hidden="true">
              <img src="/img/logo.png" alt="" />
            </span>
            <span>{isEnglish ? 'Countries with users of the Virtutis Energy app' : isSpanish ? 'Países con usuarios de la app de Virtutis Energy' : 'Países com usuários do app da Virtutis Energy'}</span>
            <i className={`bi ${isCountryListOpen ? 'bi-chevron-up' : 'bi-chevron-down'}`} aria-hidden="true"></i>
          </button>

          {isCountryListOpen && (
            <div className="world-presence-countries__list">
              {markers.map((marker) => (
                <div key={marker.key} className="country-chip">
                  <span className="country-chip__dot" />
                  <span>{isEnglish ? marker.countryEn : isSpanish ? marker.countryEs : marker.countryPt}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
