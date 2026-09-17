import { useEffect, useState } from 'react'
import { SceneLayer } from '../SceneLayer.jsx'
import { Sticker } from '../Sticker.jsx'
import { festival, assets } from '../../data/festivalData.js'
import { useParallax } from '../../hooks/useParallax.js'
import { Star4Icon, ArrowRight, ArrowDown } from '../icons.jsx'
import './Hero.css'

export function Hero() {
  const [ready, setReady] = useState(false)
  const parallaxRef = useParallax(0.12)

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 60)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <section id="top" className="hero" aria-label="Rangam Film Festival introduction">
      <SceneLayer variant="hero" />

      <div ref={parallaxRef} className="hero__inner container">
        <div className="hero__content hero-anim" data-anim={ready ? 'ready' : ''}>
          {/* ── OFFICIAL branding hierarchy ──
              Rangam Film Festival · conducted by CET Film Society ·
              in association with Dhwani '26 */}
          <div className="hero__org">
            <span className="hero__org-badge">
              <img
                src={assets.logos.cetFilmSociety}
                alt=""
                className="hero__org-logo hero__org-logo--cet"
                width="118"
                height="130"
              />
              <span className="hero__org-text">
                <small>Conducted by</small>
                <strong>CET Film Society</strong>
              </span>
            </span>
            <span className="hero__org-sep" aria-hidden="true">
              ✦
            </span>
            <span className="hero__org-badge">
              <img
                src={assets.logos.dhwani}
                alt=""
                className="hero__org-logo hero__org-logo--dhwani"
              />
              <span className="hero__org-text">
                <small>In association with</small>
                <strong>Dhwani ’26</strong>
              </span>
            </span>
          </div>

          {/* The official Rangam Film Festival logo — primary identity */}
          <img
            src={assets.logos.rangamWeb}
            alt="Rangam Film Festival"
            className="hero__title"
            width="2600"
            height="1156"
          />

          {/* Official festival dates — loud by design */}
          <div className="hero__dates">
            <span className="hero__dates-month">September</span>
            <span className="hero__dates-days">22 – 27</span>
            <span className="hero__dates-year">2026</span>
          </div>

          <p className="hero__lede">{festival.lede}</p>

          <div className="hero__cta">
            <a href="#about" className="btn btn--yellow">
              Explore the festival
              <ArrowRight />
            </a>
          </div>

          <p className="hero__meta">
            <Star4Icon aria-hidden="true" />
            <span>
              {festival.venue.name} · {festival.venue.area}
            </span>
          </p>
        </div>

        {/* The mascot — a main character in the scene */}
        <div className="hero__mascot-wrap">
          <img
            src={assets.mascot.front}
            alt="Khai, the Rangam film festival mascot"
            className="hero__mascot"
            width="900"
            height="1125"
          />
          <div className="hero__bubble" aria-hidden="true">
            So many films,
            <br />
            so little time!
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About">
        <ArrowDown />
        <span>Let’s go</span>
      </a>

      <span className="hero__sticker" aria-hidden="true">
        <Sticker tone="magenta" rotate={5}>
          {festival.year}
        </Sticker>
      </span>
    </section>
  )
}