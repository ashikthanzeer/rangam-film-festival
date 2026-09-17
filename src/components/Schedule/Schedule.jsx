import { SectionHeading } from '../SectionHeading.jsx'
import { schedule, festival } from '../../data/festivalData.js'
import { useReveal } from '../../hooks/useReveal.js'
import { Marquee } from '../Marquee.jsx'
import './Schedule.css'

export function Schedule() {
  return (
    <section id="schedule" className="section schedule bg-paper">
      <div className="schedule__tex halftone halftone--strong" aria-hidden="true" />
      <Marquee items={[festival.dates, 'keep a night free', "Dhwani '26"]} tone="cyan" className="schedule__ticker" />

      <div className="container schedule__in">
        <SectionHeading
          eyebrow="Festival days"
          title="The "
          kicker="running order"
          tone="dark"
          note="A working skeleton of opening night to the final credits — precise session times are locked in as the festival gets closer."
        />

        <div className="schedule__days">
          {schedule.map((day, di) => (
            <DayColumn key={day.day} day={day} index={di} />
          ))}
        </div>

        <p className="schedule__foot">
          <span aria-hidden="true">✦</span>
          All sessions at {festival.venue.name} · {festival.dates}
        </p>
      </div>
    </section>
  )
}

function DayColumn({ day, index }) {
  const ref = useReveal()
  return (
    <div className="day reveal" style={{ '--i': index }} ref={ref}>
      <header className="day__head">
        <span className="day__badge">{day.day}</span>
        <span className="day__when">{day.when}</span>
      </header>
      <ul className="day__blocks">
        {day.blocks.map((block) => (
          <li key={block.title} className="day__block">
            <span className="day__time">{block.time}</span>
            <div className="day__block-inner">
              <p className="day__title">{block.title}</p>
              <span className="day__tag">{block.tag}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}