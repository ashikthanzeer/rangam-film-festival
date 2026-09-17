import { SceneLayer } from '../SceneLayer.jsx'
import { SectionHeading } from '../SectionHeading.jsx'
import { jury } from '../../data/festivalData.js'
import { useReveal } from '../../hooks/useReveal.js'
import { Sticker } from '../Sticker.jsx'
import './Jury.css'

export function Jury() {
  return (
    <section id="jury" className="section jury bg-ink">
      <SceneLayer variant="clouds" />

      <div className="container jury__in">
        <SectionHeading
          eyebrow="The bench"
          title="The "
          kicker="jury"
          note="The people watching closer than the audience. Guest jurors and the campus jury will be introduced here."
        />

        <div className="jury__grid">
          {jury.map((member, i) => (
            <JuryCard key={member.name} member={member} index={i} />
          ))}
        </div>

        <div className="jury__foot">
          <Sticker tone="magenta" rotate={3}>
            More judges loading…
          </Sticker>
        </div>
      </div>
    </section>
  )
}

function JuryCard({ member, index }) {
  const ref = useReveal()
  return (
    <article ref={ref} className={`juror reveal juror--${index % 2 ? 'r' : 'l'}`} style={{ '--i': index }}>
      <div className="juror__portrait">
        <img src={member.img} alt={member.alt ?? member.name} loading="lazy" />
      </div>
      <div className="juror__info">
        <span className="juror__role">{member.role}</span>
        <h3 className="juror__name">{member.name}</h3>
        <p className="juror__note">{member.note}</p>
      </div>
    </article>
  )
}