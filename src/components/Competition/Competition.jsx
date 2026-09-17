import { SceneLayer } from '../SceneLayer.jsx'
import { SectionHeading } from '../SectionHeading.jsx'
import { festival, assets } from '../../data/festivalData.js'
import { useReveal } from '../../hooks/useReveal.js'
import { ArrowRight } from '../icons.jsx'
import './Competition.css'

export function Competition() {
  const comp = festival.shortFilmCompetition
  const contentRef = useReveal()

  const hasGuidelines = Boolean(comp.guidelinesUrl)

  return (
    <section id="competition" className="section competition bg-night">
      <SceneLayer variant="clouds" />

      <div className="container competition__in">
        <SectionHeading
          eyebrow="Up next"
          title="Short Film "
          kicker="Competition"
        />

        <div ref={contentRef} className="competition__canvas reveal">
          <div className="competition__main">
            <p className="competition__intro">
              {comp.title} — entries close {comp.deadline}. The festival itself runs {festival.dates}.
            </p>

            <div className="competition__cta-row">
              {/* OFFICIAL registration gateway — make my pass */}
              <a
                href={comp.registrationUrl}
                target="_blank"
                rel="noreferrer"
                className="competition__register"
              >
                Register now
                <ArrowRight />
              </a>

              {hasGuidelines ? (
                <a
                  href={comp.guidelinesUrl}
                  target={comp.guidelinesUrl.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="competition__guidelines"
                >
                  View guidelines
                  <ArrowRight />
                </a>
              ) : (
                <span
                  className="competition__guidelines competition__guidelines--soon"
                  title="Guidelines coming soon"
                >
                  Guidelines soon
                </span>
              )}
            </div>
          </div>

          <div className="competition__board">
            <div className="competition__details">
              <div className="competition__detail">
                <span className="competition__detail-label">Prize worth</span>
                <span className="competition__detail-value">{comp.prize}</span>
              </div>
              <div className="competition__detail">
                <span className="competition__detail-label">Registration fee</span>
                <span className="competition__detail-value">{comp.registrationFee}</span>
              </div>
              <div className="competition__detail">
                <span className="competition__detail-label">Deadline</span>
                <span className="competition__detail-value">{comp.deadline}</span>
              </div>
            </div>

            <div className="competition__contacts">
              {comp.contacts.map((contact) => (
                <div key={contact.tel} className="competition__contact">
                  <span className="competition__contact-name">{contact.name}</span>
                  <a href={contact.tel} className="competition__contact-phone">{contact.phone}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <img src={assets.mascot.side} alt="" className="competition__mascot" loading="lazy" aria-hidden="true" />
    </section>
  )
}