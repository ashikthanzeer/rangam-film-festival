import { SceneLayer } from '../SceneLayer.jsx'
import { SectionHeading } from '../SectionHeading.jsx'
import { films, festival, assets } from '../../data/festivalData.js'
import { useReveal } from '../../hooks/useReveal.js'
import { Marquee } from '../Marquee.jsx'
import { PlayIcon } from '../icons.jsx'
import './Films.css'

export function Films() {
  const ref = useReveal()
  return (
    <section id="films" className="section films bg-ink">
      <SceneLayer variant="clouds" />
      <Marquee items={['Official selection','more films coming','Rangam presents']} tone="magenta" className="films__ticker" />

      <div className="container films__in">
        <SectionHeading
          eyebrow={`${festival.year} · Line-up`}
          title="The big "
          kicker="screen"
          note="The official selection will be posted here. Until then — imagine your favourites up there."
        />

        <div className="films__grid">
          {films.map((film, i) => (
            <FilmCard key={film.id} film={film} index={i} />
          ))}

          <aside ref={ref} className="film-cta reveal comic-card comic-card--yellow">
            <div className="film-cta__inner">
              <div className="film-cta__reel" aria-hidden="true">
                <PlayIcon />
              </div>
              <h3 className="film-cta__title">Your film could be next</h3>
              <p>
                Submissions and selection details for the festival are being finalised by the curators.
              </p>
              <span className="film-cta__soon">Announcement coming soon</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function FilmCard({ film, index }) {
  const ref = useReveal()
  return (
    <article ref={ref} className="film reveal" style={{ '--i': index }}>
      <div className="film__poster">
        <div className="film__poster-frame">
          <span className="film__frame-tag" aria-hidden="true">
            FRAME {String(index + 1).padStart(2, '0')}
          </span>
          <img src={assets.elements.note} alt="" className="film__note" aria-hidden="true" loading="lazy" />
          <p className="film__ready">Poster loading…</p>
        </div>
      </div>
      <div className="film__body">
        <span className="film__meta">
          {film.category} · {film.year}
        </span>
        <h3 className="film__title">{film.title}</h3>
        <p className="film__note-text">{film.note}</p>
        <span className="film__duration">{film.duration} runtime</span>
      </div>
    </article>
  )
}