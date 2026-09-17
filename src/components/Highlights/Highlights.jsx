import { SceneLayer } from '../SceneLayer.jsx'
import { SectionHeading } from '../SectionHeading.jsx'
import { highlights } from '../../data/festivalData.js'
import { useReveal } from '../../hooks/useReveal.js'
import { Sticker } from '../Sticker.jsx'
import './Highlights.css'

export function Highlights() {
  return (
    <section id="highlights" className="section highlights bg-night">
      <SceneLayer variant="clouds" />

      <div className="container highlights__in">
        <SectionHeading
          eyebrow="Why Rangam"
          title="A festival, "
          kicker="not a screening"
          note="Four things that make Rangam feel like a festival, not an exam-attendance movie slot."
        />

        <div className="highlights__grid">
          {highlights.map((item, i) => (
            <HighlightCard key={item.no} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HighlightCard({ item, i }) {
  const ref = useReveal()
  return (
    <article ref={ref} className="highlight reveal" style={{ '--i': i }}>
      <div className="highlight__num" aria-hidden="true">
        {item.no}
      </div>
      <h3 className="highlight__title">{item.title}</h3>
      <p className="highlight__body">{item.body}</p>
      <Sticker tone={i % 2 ? 'cyan' : 'yellow'} rotate={i % 2 ? 2 : -3} small className="highlight__tag">
        {item.tag}
      </Sticker>
    </article>
  )
}