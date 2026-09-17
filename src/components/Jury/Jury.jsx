import { SceneLayer } from '../SceneLayer.jsx'
import { SectionHeading } from '../SectionHeading.jsx'
import { jury, festival } from '../../data/festivalData.js'
import { useReveal } from '../../hooks/useReveal.js'
import { Sticker } from '../Sticker.jsx'
import { SparkIcon } from '../icons.jsx'
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
          note={`The jury for the ${festival.shortFilmCompetition.title} is set — three working filmmakers and writers judging the line-up.`}
        />

        <div className="jury__grid">
          {jury.map((member, i) => (
            <JuryCard key={member.name} member={member} index={i} />
          ))}
        </div>

        <div className="jury__foot">
          <Sticker tone="magenta" rotate={3}>
            The bench is set
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
        {member.image ? (
          <img src={member.image} alt={`${member.name}, ${member.role}`} className="juror__img" loading="lazy" />
        ) : (
          <div
            className="juror__placeholder"
            role="img"
            aria-label={`Official portrait of ${member.name} coming soon`}
          >
            <span className="juror__ph-spark" aria-hidden="true">
              <SparkIcon />
            </span>
            <span className="juror__ph-line">Portrait</span>
            <span className="juror__ph-sub">coming soon</span>
          </div>
        )}
      </div>
      <div className="juror__info">
        <span className="juror__role">{member.role}</span>
        <h3 className="juror__name">{member.name}</h3>
      </div>
    </article>
  )
}