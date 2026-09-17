import { SectionHeading } from '../SectionHeading.jsx'
import { festival } from '../../data/festivalData.js'
import { useReveal } from '../../hooks/useReveal.js'
import { MailIcon, MapPinIcon, InstagramIcon, TicketIcon } from '../icons.jsx'
import { Sticker } from '../Sticker.jsx'
import './Contact.css'

const VENUE_URL =
  festival.venue.mapUrl ??
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${festival.venue.name}, ${festival.venue.area}`)}`

export function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="section contact bg-paper">
      <div className="contact__tex halftone halftone--strong" aria-hidden="true" />

      <div className="container contact__in">
        <SectionHeading
          eyebrow="Say hello"
          title="Reach "
          kicker="out"
          tone="dark"
          note={`Questions, films, ideas or partnerships — the Rangam desk at ${festival.edition} reads everything.`}
        />

        <div ref={ref} className="contact__card reveal">
          <a className="contact__item" href={`mailto:${festival.contact.email}`}>
            <span className="contact__icon"><MailIcon /></span>
            <span className="contact__meta">
              <small>Email us</small>
              {festival.contact.email}
            </span>
          </a>

          <a className="contact__item" href={VENUE_URL} target="_blank" rel="noreferrer">
            <span className="contact__icon"><MapPinIcon /></span>
            <span className="contact__meta">
              <small>Find us</small>
              {festival.venue.name}
            </span>
          </a>

          <a className="contact__item" href={festival.socials.instagram} target="_blank" rel="noreferrer">
            <span className="contact__icon"><InstagramIcon /></span>
            <span className="contact__meta">
              <small>Follow the fest</small>
              @rangam · {festival.socials.instagram.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </span>
          </a>

          <div className="contact__item">
            <span className="contact__icon"><TicketIcon /></span>
            <span className="contact__meta">
              <small>Registrations</small>
              Opening soon
            </span>
          </div>

          <Sticker tone="magenta" rotate={5} className="contact__stamp">
            Full speed ahead
          </Sticker>
        </div>
      </div>
    </section>
  )
}