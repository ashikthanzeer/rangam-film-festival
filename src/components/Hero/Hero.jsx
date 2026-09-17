import { useEffect, useState } from 'react'
import { SceneLayer } from '../SceneLayer.jsx'
import { assets } from '../../data/festivalData.js'
import { useParallax } from '../../hooks/useParallax.js'
import { ArrowDown } from '../icons.jsx'
import './Hero.css'

/**
 * One repeatable length of 35mm leader for the foreground film strip.
 * Rendered twice inside the crawl track so the pan loops seamlessly.
 * Purely decorative (aria-hidden).
 */
function FilmLeader() {
  return (
    <div className="hero__filmstrip__leaf">
      <span className="hero__filmstrip__sprockets hero__filmstrip__sprockets--bottom" />
    </div>
  )
}

/** Screening-gate crop marks that frame the Rangam wordmark. */
function CropMarks() {
  return (
    <svg
      className="hero__cropmarks"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" strokeLinecap="square">
        <path d="M7 14V7h7" />
        <path d="M93 14V7H86" />
        <path d="M93 86v7h-7" />
        <path d="M7 86v7h7" />
      </g>
    </svg>
  )
}

export function Hero() {
  const [ready, setReady] = useState(false)
  const parallaxRef = useParallax(0.1)

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 60)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <section id="top" className="hero" aria-label="Rangam Film Festival introduction">
      <SceneLayer variant="hero" />

      {/* restrained projector beam: lower-left → upper-right, behind the mascot */}
      <div className="hero__beam" aria-hidden="true" />

      <div ref={parallaxRef} className="hero__inner container">
        <div className="hero__content hero-anim" data-anim={ready ? 'ready' : ''}>
          {/* ── festival credits — flat editorial treatment (not pills) ── */}
          <div className="hero__credits">
            <span className="hero__credit hero__credit--cet">
              <img
                src={assets.logos.cetFilmSociety}
                alt=""
                className="hero__credit-logo hero__credit-logo--cet"
                width="118"
                height="130"
              />
              <span className="hero__credit-text">
                <small>Conducted by</small>
                <strong>CET Film Society</strong>
              </span>
            </span>
            <span className="hero__credit-div" aria-hidden="true" />
            <span className="hero__credit hero__credit--dhwani">
              <span className="hero__credit-text">
                <small>In association with</small>
              </span>
              <img
                src={assets.logos.dhwani}
                alt=""
                className="hero__credit-logo hero__credit-logo--dhwani"
              />
            </span>
          </div>

          {/* The official Rangam Film Festival logo — sits on a faint
              passing film line, framed like a screening gate */}
          <span className="hero__title-frame">
            <span className="hero__title-film" aria-hidden="true" />
            <img
              src={assets.logos.rangamWeb}
              alt="Rangam Film Festival"
              className="hero__title"
              width="2600"
              height="1156"
            />
            <CropMarks />
          </span>

          {/* Official festival dates — poster element with strong hierarchy */}
          <div className="hero__dates">
            <span className="hero__dates-month">September</span>
            <span className="hero__dates-row">
              <span className="hero__dates-days">22 — 27</span>
              <span className="hero__dates-year">2026</span>
            </span>
          </div>

          {/* tiny production / print annotations */}
          <ul className="hero__meta" aria-hidden="true">
            <li>Frame 01</li>
            <li>Roll 01</li>
            <li>24 fps</li>
            <li>Rangam '26</li>
            <li>Screen 01</li>
          </ul>
        </div>

        {/* The mascot — the hero's large piece of festival artwork.
            Sitting in the director's chair, it grounds the filmmaking theme. */}
        <div className="hero__mascot-wrap hero-anim" data-anim={ready ? 'ready' : ''}>
          <img
            src={assets.mascot.khaiFullCopy}
            alt="Khai, the Rangam film festival mascot, seated in the director's chair"
            className="hero__mascot"
            width="1021"
            height="836"
          />
        </div>
      </div>

      {/* 35mm film leader entering from the left edge, passing behind the mascot */}
      <div className="hero__filmstrip" aria-hidden="true">
        <div className="hero__filmstrip__track">
          <FilmLeader />
          <FilmLeader />
        </div>
      </div>

      <a href="#competition" className="hero__scroll" aria-label="Scroll to Competition">
        <ArrowDown />
      </a>
    </section>
  )
}