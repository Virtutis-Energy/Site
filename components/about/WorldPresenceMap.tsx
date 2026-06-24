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
}

type TopologyData = {
  type: 'Topology'
  objects: {
    countries: unknown
  }
}

const markers: Marker[] = [
  { key: 'us', countryId: '840', coordinates: [-98.5, 39.8], labelOffset: [-58, -18], countryPt: 'Estados Unidos', countryEn: 'United States' },
  { key: 'colombia', countryId: '170', coordinates: [-74.1, 4.7], labelOffset: [-58, -8], countryPt: 'Colômbia', countryEn: 'Colombia' },
  { key: 'brazil', countryId: '076', coordinates: [-51.9, -14.2], labelOffset: [16, 18], countryPt: 'Brasil', countryEn: 'Brazil' },
  { key: 'chile', countryId: '152', coordinates: [-71.5, -35.7], labelOffset: [-44, 12], countryPt: 'Chile', countryEn: 'Chile' },
  { key: 'belgium', countryId: '056', coordinates: [4.5, 50.7], labelOffset: [12, -18], countryPt: 'Bélgica', countryEn: 'Belgium' },
  { key: 'portugal', countryId: '620', coordinates: [-8.2, 39.4], labelOffset: [-56, -18], countryPt: 'Portugal', countryEn: 'Portugal' },
  { key: 'south-africa', countryId: '710', coordinates: [24.7, -29.0], labelOffset: [14, 16], countryPt: 'África do Sul', countryEn: 'South Africa' },
  { key: 'china', countryId: '156', coordinates: [104.1, 35.9], labelOffset: [14, -18], countryPt: 'China', countryEn: 'China' },
  { key: 'hong-kong', countryId: '344', coordinates: [114.17, 22.32], labelOffset: [14, -10], countryPt: 'Hong Kong', countryEn: 'Hong Kong' },
  { key: 'macau', countryId: '446', coordinates: [113.54, 22.2], labelOffset: [14, 0], countryPt: 'Macau', countryEn: 'Macau' },
  { key: 'singapore', countryId: '702', coordinates: [103.82, 1.35], labelOffset: [14, 10], countryPt: 'Singapura', countryEn: 'Singapore' },
  { key: 'australia', countryId: '036', coordinates: [134.5, -25.7], labelOffset: [16, 20], countryPt: 'Austrália', countryEn: 'Australia' },
]

const highlightedCountryIds = new Set(markers.map((marker) => marker.countryId))

export default function WorldPresenceMap() {
  const { locale } = useLanguage()
  const isEnglish = locale === 'en-US'
  const [topology, setTopology] = useState<TopologyData | null>(null)

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
          <span className="world-presence-card__eyebrow">{isEnglish ? 'International presence' : 'Presença internacional'}</span>
          <h3>{isEnglish ? 'Virtutis on a real world map' : 'Virtutis em um mapa-múndi real'}</h3>
        </div>
        <div className="world-presence-card__badge">{isEnglish ? '12 highlighted countries' : '12 países destacados'}</div>
      </div>

      <div className="world-presence-layout">
        <div className="world-map-shell">
          <svg className="world-map-svg" viewBox="0 0 1000 520" role="img" aria-label={isEnglish ? 'Real world map with highlighted countries' : 'Mapa mundial real com países destacados'}>
            <defs>
              <linearGradient id="ocean-fill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f3fbf9" />
                <stop offset="50%" stopColor="#dff4ee" />
                <stop offset="100%" stopColor="#cae9e0" />
              </linearGradient>
              <linearGradient id="country-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#e7f5f0" />
              </linearGradient>
              <linearGradient id="highlight-fill" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#08b98c" />
                <stop offset="100%" stopColor="#0b6b57" />
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
                  {isEnglish ? marker.countryEn : marker.countryPt}
                </text>
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
