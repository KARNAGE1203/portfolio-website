import { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'
import { feature } from 'topojson-client'
import worldData from 'world-atlas/countries-110m.json'
import './WorldMapBackground.css'

const LOCATIONS = [
  [77.2, 28.6],    // Delhi
  [-123.1, 49.0],  // Delta, BC
  [55.3, 25.2],    // Dubai
  [-74.0, 40.7],   // New York
  [-0.1, 51.5],    // London
  [139.7, 35.7],   // Tokyo
  [151.2, -33.9],  // Sydney
  [-46.6, -23.5],  // São Paulo
  [103.8, 1.35],   // Singapore
  [31.2, 30.0],    // Cairo
  [-118.2, 34.0],  // Los Angeles
  [2.35, 48.85],   // Paris
  [37.6, 55.75],   // Moscow
  [36.8, -1.3],    // Nairobi
]

const ROUTES = [
  [0, 1],
  [1, 2],
  [2, 0],
  [3, 4],
  [4, 11],
  [5, 6],
  [7, 13],
  [8, 9],
  [10, 5],
  [12, 2],
  [9, 4],
  [6, 8],
  [3, 7],
  [13, 0],
]

const COUNTRIES = feature(worldData, worldData.objects.countries)

function arcPath(p0, p1, bend) {
  const mx = (p0[0] + p1[0]) / 2
  const my = (p0[1] + p1[1]) / 2
  const dist = Math.hypot(p1[0] - p0[0], p1[1] - p0[1])
  const bow = Math.min(dist * 0.35, 220) * bend
  return `M${p0[0]},${p0[1]} Q${mx},${my - bow} ${p1[0]},${p1[1]}`
}

function FlightPath({ d, index }) {
  const pathRef = useRef(null)
  const [glowStyle, setGlowStyle] = useState(null)

  useEffect(() => {
    const len = pathRef.current.getTotalLength()
    const glow = len * 0.18
    const gap = len - glow
    const duration = Math.min(10, Math.max(4, len / 90))
    setGlowStyle({
      strokeDasharray: `${glow} ${gap}`,
      animationDuration: `${duration}s`,
      animationDelay: `${-(index * 0.6)}s`,
      '--sweep-offset': -gap,
    })
  }, [d, index])

  return (
    <>
      <path className="world-map__route" d={d} />
      <path ref={pathRef} className="world-map__route-glow" d={d} style={glowStyle} />
    </>
  )
}

export default function WorldMapBackground() {
  const [size, setSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight })
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const { width, height } = size

  if (!width || !height) {
    return <div className="world-map" aria-hidden="true" />
  }

  const projection = d3.geoNaturalEarth1()
    .center([20, 15])
    .translate([width / 2, height / 2])
    .scale(width / 5.2)

  const pathGenerator = d3.geoPath(projection)

  const bounds = pathGenerator.bounds(COUNTRIES)
  const dx = width / 2 - (bounds[0][0] + bounds[1][0]) / 2
  const dy = height / 2 - (bounds[0][1] + bounds[1][1]) / 2
  projection.translate([width / 2 + dx, height / 2 + dy])

  const points = LOCATIONS.map((coords) => projection(coords))

  return (
    <div className="world-map" aria-hidden="true">
      <svg className="world-map__svg" viewBox={`0 0 ${width} ${height}`}>
        <g className="world-map__countries">
          {COUNTRIES.features.map((countryFeature, i) => (
            <path key={i} d={pathGenerator(countryFeature)} />
          ))}
        </g>

        <g className="world-map__routes">
          {ROUTES.map(([a, b], i) => (
            <FlightPath key={i} d={arcPath(points[a], points[b], i % 2 === 0 ? 1 : -1)} index={i} />
          ))}
        </g>
      </svg>
    </div>
  )
}
