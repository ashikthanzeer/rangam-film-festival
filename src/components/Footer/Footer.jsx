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
          <img src={assets.logos.rangamWeb} alt="Rangam Film Festival" className="footer__title" />
          <p className="footer__tag">
            {festival.name} · {festival.dates}
          </p>
          <p className="footer__org">
            Conducted by {festival.organization.conductedBy} · In association with {festival.organization.association}
          </p>
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
            <InstagramIcon />
            <span>{festival.socials.rangam.handle}</span>
          </a>
          <a href={festival.socials.dhwani.url} target="_blank" rel="noreferrer" className="footer__social">
            <InstagramIcon />
            <span>{festival.socials.dhwani.handle}</span>
          </a>
          <a href={`mailto:${festival.contact.email}`} className="footer__social" aria-label="Email Rangam">
            <MailIcon />
            <span className="footer__social-mail">Email</span>
          </a>
        </div>

        <div className="footer__bottom">
          <p>A {festival.organization.association} production · Crafted for film lovers near the fountain.</p>
          <button type="button" className="footer__top" onClick={scrollTop}>
            Back to top
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </footer>
  )
}