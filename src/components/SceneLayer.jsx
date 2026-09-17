import { useMemo } from 'react'
import './SceneLayer.css'

const SPARKS = [
  { x: 8, y: 18, s: 14, d: '0s' },
  { x: 22, y: 8, s: 9, d: '.6s' },
  { x: 38, y: 24, s: 12, d: '1.1s' },
  { x: 55, y: 10, s: 8, d: '.3s' },
  { x: 68, y: 26, s: 13, d: '.9s' },
  { x: 84, y: 12, s: 10, d: '1.5s' },
  { x: 93, y: 30, s: 8, d: '.2s' },
  { x: 12, y: 52, s: 7, d: '.8s' },
  { x: 92, y: 55, s: 7, d: '1.2s' },
]

/**
 * Illustrated festival world — the layered visual environment behind content.
 * Every decorative element is aria-hidden; real data rides in the content layer.
 *
 * variant:
 *  - "hero"   : full night scene with clouds, ferris wheel, torii, lantern, bunting
 *  - "clouds" : gentle drifting cloud bands + stars for interior sections
 */
export function SceneLayer({ variant = 'hero' }) {
  const sparks = useMemo(
    () =>
      variant === 'hero'
        ? SPARKS
        : SPARKS.map((s) => ({ ...s, x: (s.x * 37 + 11) % 96, y: (s.y * 53 + 7) % 92 })),
    [variant],
  )

  return (
    <div className={`scene scene--${variant}`} aria-hidden="true">
      {/* deep night backdrop */}
      <div className="scene__sky" />
      <div className="scene__halftone halftone" />
      {variant === 'hero' && <div className="scene__speedlines speedlines" />}

      {/* stars / sparks */}
      {sparks.map((spark, i) => (
        <span
          key={i}
          className="scene__spark"
          style={{
            left: `${spark.x}%`,
            top: `${spark.y}%`,
            width: spark.s,
            height: spark.s,
            animationDelay: spark.d,
          }}
        />
      ))}

      {/* drifting cloud band (bottom) */}
      <img src="/assets/web/clouds.png" alt="" className="scene__clouds" loading="eager" />

      {/* ferris wheel */}
      <img src="/assets/web/ferris.png" alt="" className="scene__ferris" loading="lazy" />

      {/* torii gate */}
      <img src="/assets/elements/torii%20new.svg" alt="" className="scene__torii" loading="lazy" />

      {/* hanging lantern */}
      <img src="/assets/web/lantern.png" alt="" className="scene__lantern" loading="lazy" />

      {/* floating notes */}
      <img src="/assets/elements/note.svg" alt="" className="scene__note scene__note--a" loading="lazy" />
      <img src="/assets/elements/blue%20note.svg" alt="" className="scene__note scene__note--b" loading="lazy" />

      {/* festival bunting flags */}
      <img src="/assets/elements/L1.svg" alt="" className="scene__flag scene__flag--1" loading="lazy" />
      <img src="/assets/elements/L2.svg" alt="" className="scene__flag scene__flag--2" loading="lazy" />
      <img src="/assets/elements/L3.svg" alt="" className="scene__flag scene__flag--3" loading="lazy" />
      <img src="/assets/elements/L4.svg" alt="" className="scene__flag scene__flag--4" loading="lazy" />
    </div>
  )
}