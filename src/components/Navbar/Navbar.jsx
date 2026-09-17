import { useEffect, useState } from 'react'
import { festival, navLinks, assets } from '../../data/festivalData.js'
import { MenuIcon, CloseIcon } from '../icons.jsx'
import './Navbar.css'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}${open ? ' nav--open' : ''}`} aria-label="Primary">
      <div className="nav__bar">
        <a className="nav__brand" href="#top" onClick={close} aria-label={festival.name}>
          <img src={assets.logos.rangamWeb} alt="" className="nav__logo" width="2600" height="1156" />
        </a>

        <ul className="nav__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav__link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav__actions">
          <button
            className="nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* mobile overlay */}
      <div id="mobile-menu" className={`nav__overlay${open ? ' nav__overlay--open' : ''}`}>
        <div className="nav__overlay-bg halftone" aria-hidden="true" />
        <div className="nav__overlay-inner">
          <ul className="nav__overlay-links">
            {navLinks.map((link, i) => (
              <li key={link.href} style={{ '--i': i }}>
                <a href={link.href} className="nav__overlay-link" onClick={close}>
                  <span className="nav__overlay-num">0{i + 1}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <img src={assets.mascot.side} alt="" className="nav__overlay-mascot" aria-hidden="true" />
          <p className="nav__overlay-foot">
            {festival.name} · {festival.collegeShort}
          </p>
        </div>
      </div>
    </nav>
  )
}