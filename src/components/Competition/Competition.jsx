import { SceneLayer } from '../SceneLayer.jsx'
import { SectionHeading } from '../SectionHeading.jsx'
import { Sticker } from '../Sticker.jsx'
import { festival } from '../../data/festivalData.js'
import { useReveal } from '../../hooks/useReveal.js'
import { TrophyIcon, TicketIcon, ClockIcon, ArrowRight, PhoneIcon } from '../icons.jsx'
import './Competition.css'

export function Competition() {
  const comp = festival.shortFilmCompetition
  const cardRef = useReveal()

  const facts = [
    { label: 'Prize', value: comp.prize, note: 'worth', icon: TrophyIcon, tone: 'yellow' },
    { label: 'Registration', value: comp.registrationFee, note: 'fee', icon: TicketIcon, tone: 'cyan' },
    { label: 'Deadline', value: comp.deadline, note: 'entries close', icon: ClockIcon, tone: 'magenta' },
  ]

  const hasGuidelines = Boolean(comp.guidelinesUrl)

  return (
    <section id="competition" className="section competition bg-night">
      <SceneLayer variant="clouds" />

      <div className="container competition__in">
        <SectionHeading
          eyebrow="Up next"
          title="Short film "
          kicker="competition"
          note={`${comp.title} — entries close ${comp.deadline}. The festival itself runs ${festival.dates}.`}
        />

        <div ref={cardRef} className="competition__card reveal">
          <div className="competition__halftone halftone" aria-hidden="true" />

          <header className="competition__head">
            <div className="competition__badges" role="presentation">
              <Sticker tone="magenta" rotate={-4} small>
                Announcement
              </Sticker>
              <Sticker tone="yellow" rotate={3} small className="competition__badge-late">
                {festival.year}
              </Sticker>
            </div>
            <h3 className="competition__title">{comp.title}</h3>
            <p className="competition__sub">
              The immediate next step on the road to the {festival.name} · {festival.dates}.
            </p>
          </header>

          <dl className="competition__facts">
            {facts.map((fact, i) => {
              const Icon = fact.icon
              return (
                <div key={fact.label} className={`competition__fact competition__fact--${fact.tone}`} style={{ '--i': i }}>
                  <dt className="sr-only">{fact.label}</dt>
                  <dd className="competition__fact-inner">
                    <span className="competition__fact-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="competition__fact-value">{fact.value}</span>
                    <span className="competition__fact-label">
                      {fact.note} · {fact.label}
                    </span>
                  </dd>
                </div>
              )
            })}
          </dl>

          <div className="competition__cta-row">
            {/* OFFICIAL registration gateway — make my pass */}
            <a
              href={comp.registrationUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--magenta competition__register"
            >
              Register now
              <ArrowRight />
            </a>

            {hasGuidelines ? (
              <a
                href={comp.guidelinesUrl}
                target={comp.guidelinesUrl.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="btn btn--ghost competition__guidelines"
              >
                View Guidelines
                <ArrowRight />
              </a>
            ) : (
              <span
                className="btn btn--ghost competition__guidelines competition__guidelines--soon"
                title="Guidelines coming soon"
              >
                View Guidelines
                <ArrowRight />
              </span>
            )}
          </div>

          <div className="competition__contacts">
            <p className="competition__contacts-label">For details, call</p>
            {comp.contacts.map((contact) => (
              <a key={contact.tel} href={contact.tel} className="competition__contact">
                <span className="competition__contact-name">{contact.name}</span>
                <span className="competition__contact-phone">
                  <PhoneIcon aria-hidden="true" />
                  {contact.phone}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}