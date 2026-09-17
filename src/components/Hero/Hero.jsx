import { useEffect, useState } from 'react'
import { SceneLayer } from '../SceneLayer.jsx'
import { Sticker } from '../Sticker.jsx'
import { festival, assets } from '../../data/festivalData.js'
import { useParallax } from '../../hooks/useParallax.js'
import { ArrowRight, ArrowDown, TicketIcon, Star4Icon } from '../icons.jsx'
import './Hero.css'

export function Hero() {
  const [ready, setReady] = useState(false)
  const parallaxRef = useParallax(0.12)
  const regUrl = festival.registration.url ?? '#'

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 60)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <section id="top" className="hero" aria-label="Rangam Film Festival introduction">
      <SceneLayer variant="hero" />

      <div ref={parallaxRef} className="hero__inner container">
        <div className="hero__content hero-anim" data-anim={ready ? 'ready' : ''}>
          <p className="hero__kicker">
            <span className="hero__kicker-dot" aria-hidden="true" />
            {festival.edition} Presents · {festival.college}
          </p>

          {/* Official Rangam festival title artwork */}
          <img
            src={assets.logos.rangamTitle}
            alt="Rangam Film Festival"
            className="hero__title"
            width="2600"
            height="1423"
          />

          <p className="hero__lede">{festival.lede}</p>

          <div className="hero__cta">
            <a href="#about" className="btn btn--yellow">
              Explore the festival
              <ArrowRight />
            </a>
            <a href={regUrl} className="btn btn--ghost">
              <TicketIcon />
              {festival.registration.label}
            </a>
          </div>

          <ul className="hero__meta">
            <li>
              <Star4Icon aria-hidden="true" />
              <span>{festival.edition} · {festival.year}</span>
            </li>
            <li>
              <Star4Icon aria-hidden="true" />
              <span>{festival.venue.name}</span>
            </li>
            <li>
              <Star4Icon aria-hidden="true" />
              <span>{festival.dates.label}</span>
            </li>
          </ul>
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
          {festival.edition}
        </Sticker>
      </span>
    </section>
  )
}