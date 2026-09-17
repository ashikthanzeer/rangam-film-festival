import { navLinks, festival, assets } from '../../data/festivalData.js'
import { ArrowUpIcon, MailIcon, InstagramIcon } from '../icons.jsx'
import './Footer.css'

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer bg-ink">
      <span className="footer__ghost" aria-hidden="true">
        Rangam
      </span>

      <div className="container footer__in">
        <div className="footer__brand">
          <img src={assets.logos.rangamTitle} alt="Rangam" className="footer__title" />
          <p className="footer__tag">The film festival of {festival.edition} · {festival.college}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="footer__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          <a href={festival.socials.instagram} target="_blank" rel="noreferrer" aria-label="Rangam on Instagram">
            <InstagramIcon />
          </a>
          <a href={`mailto:${festival.contact.email}`} aria-label="Email Rangam">
            <MailIcon />
          </a>
        </div>

        <div className="footer__bottom">
          <p>A {festival.edition} production · Crafted for film lovers near the fountain.</p>
          <button type="button" className="footer__top" onClick={scrollTop}>
            Back to top
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  )
}