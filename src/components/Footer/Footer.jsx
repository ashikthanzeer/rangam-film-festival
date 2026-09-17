import { navLinks, festival, assets } from '../../data/festivalData.js'
import { ArrowUpIcon } from '../icons.jsx'
import './Footer.css'

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer bg-ink">
      <div className="footer__rail" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="container footer__in">
        <div className="footer__brand">
          <img src={assets.logos.rangamWeb} alt="Rangam Film Festival" className="footer__title" />
          <p className="footer__tagline">
            {festival.name}
          </p>
          <p className="footer__dates">{festival.dates}</p>
        </div>

        <div className="footer__orgs">
          <span className="footer__org">
            <img src={assets.logos.cetFilmSociety} alt="" className="footer__org-logo" loading="lazy" />
            Conducted by <strong>{festival.organization.conductedBy}</strong>
          </span>
          <span className="footer__org-sep" aria-hidden="true">✦</span>
          <span className="footer__org">
            <img src={assets.logos.dhwani} alt="" className="footer__org-logo" loading="lazy" />
            In association with <strong>{festival.organization.association}</strong>
          </span>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="footer__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          <a href={festival.socials.rangam.url} target="_blank" rel="noreferrer" className="footer__social">
            {festival.socials.rangam.handle}
          </a>
          <a href={festival.socials.dhwani.url} target="_blank" rel="noreferrer" className="footer__social">
            {festival.socials.dhwani.handle}
          </a>
        </div>

        <div className="footer__bottom">
          <button type="button" className="footer__top" onClick={scrollTop}>
            Back to top
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  )
}