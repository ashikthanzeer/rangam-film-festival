import { SceneLayer } from '../SceneLayer.jsx'
import { SectionHeading } from '../SectionHeading.jsx'
import { events, festival } from '../../data/festivalData.js'
import { useReveal } from '../../hooks/useReveal.js'
import { Star4Icon, MicIcon } from '../icons.jsx'
import './Events.css'

function EventIcon({ name }) {
  switch (name) {
    case 'note':
      return <img src="/assets/elements/note.svg" alt="" aria-hidden="true" loading="lazy" />
    case 'note-blue':
      return <img src="/assets/elements/blue%20note.svg" alt="" aria-hidden="true" loading="lazy" />
    case 'torii':
      return <img src="/assets/elements/torii%20new.svg" alt="" aria-hidden="true" loading="lazy" />
    case 'lantern':
      return <img src="/assets/web/lantern.png" alt="" aria-hidden="true" loading="lazy" />
    case 'star':
      return <Star4Icon />
    case 'mic':
      return <MicIcon />
    default:
      return <Star4Icon />
  }
}

export function Events() {
  // official activities list — replace in src/data/festivalData.js
  return (
    <section id="events" className="section events bg-night">
      <SceneLayer variant="clouds" />

      <div className="container events__in">
        <SectionHeading
          eyebrow="Around the festival"
          title="Not just "
          kicker="movies"
          note="Screenings may be the headliner, but the festival runs on everything happening around them."
        />

        <div className="events__grid">
          {events.map((event, i) => (
            <EventCard key={event.title} event={event} i={i} />
          ))}
        </div>

        <p className="events__more">
          <span aria-hidden="true">✦</span>
          More activities for {festival.edition} will be announced here.
        </p>
      </div>
    </section>
  )
}

function EventCard({ event, i }) {
  const ref = useReveal()
  return (
    <article ref={ref} className="event reveal" style={{ '--i': i }}>
      <div className={`event__icon event__icon--${i % 2 ? 'b' : 'a'}`}>
        <EventIcon name={event.icon} />
        <span className="event__no" aria-hidden="true">
          {String(i + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="event__title">{event.title}</h3>
      <p className="event__body">{event.body}</p>
    </article>
  )
}