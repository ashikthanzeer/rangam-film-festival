import { SectionHeading } from '../SectionHeading.jsx'
import { festival } from '../../data/festivalData.js'
import { useReveal } from '../../hooks/useReveal.js'
import './Contact.css'

export function Contact() {
  const ref = useReveal()
  const comp = festival.shortFilmCompetition

  return (
    <section id="contact" className="section contact bg-paper">
      <div className="container contact__in">
        <SectionHeading
          eyebrow="Reach Out"
          title="Get in "
          kicker="touch"
          tone="dark"
          note="Questions about the Rangam Short Film Competition or the festival?"
        />

        <div ref={ref} className="contact__content reveal">
          <div className="contact__section">
            <h4 className="contact__section-title">Short Film Competition</h4>
            <div className="contact__contacts">
              {comp.contacts.map((contact) => (
                <div key={contact.tel} className="contact__contact">
                  <span className="contact__contact-name">{contact.name}</span>
                  <a href={contact.tel} className="contact__contact-phone">{contact.phone}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="contact__section">
            <h4 className="contact__section-title">Follow us</h4>
            <div className="contact__socials">
              <a href={festival.socials.rangam.url} target="_blank" rel="noreferrer" className="contact__social">
                {festival.socials.rangam.handle}
              </a>
              <a href={festival.socials.dhwani.url} target="_blank" rel="noreferrer" className="contact__social">
                {festival.socials.dhwani.handle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}