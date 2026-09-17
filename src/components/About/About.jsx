import { SceneLayer } from '../SceneLayer.jsx'
import { SectionHeading } from '../SectionHeading.jsx'
import { Sticker } from '../Sticker.jsx'
import { festival, assets } from '../../data/festivalData.js'
import { useReveal } from '../../hooks/useReveal.js'
import { ArrowRight } from '../icons.jsx'
import './About.css'

const CHIPS = ['Student films', 'Short films', 'Documentaries', 'Animation', 'Jury awards', 'Open screenings']

export function About() {
  const copyRef = useReveal()
  const artRef = useReveal()

  return (
    <section id="about" className="section about bg-paper">
      <div className="about__tex halftone halftone--strong" aria-hidden="true" />

      <div className="container">
        <SectionHeading
          eyebrow="The festival"
          title="About "
          kicker="Rangam"
          tone="dark"
          note={`Rangam is the film festival of ${festival.year}, amplifying student cinema inside the biggest cultural carnival on campus.`}
        />

        <div className="about__grid">
          <div className="about__copy reveal" ref={copyRef}>
            <p className="about__drop">
              <span className="about__dropcap" aria-hidden="true">R</span>
              angam brings the moving image to the middle of everything — student films screened loud and large, a jury that
              takes the craft seriously, and an audience that shows up to cheer, argue and discover.
            </p>
            <p>
              Films are everything here: shorts, docs and animation from campus collectives and beyond, presented across the
              festival in curated blocks. Rangam is built <em>by</em> the student community at {festival.college} and for
              every kind of film lover who wanders into {festival.name}.
            </p>

            <ul className="about__chips" aria-label="What Rangam features">
              {CHIPS.map((chip, i) => (
                <li key={chip}>
                  <span className="about__chip" style={{ '--rot': i % 2 ? '1.4deg' : '-1.2deg' }}>
                    {chip}
                  </span>
                </li>
              ))}
            </ul>

            <a href="#competition" className="link-arrow">
              Enter the short film competition
              <ArrowRight />
            </a>
          </div>

          <div className="about__art reveal reveal--right" ref={artRef}>
            <div className="about__poster comic-card">
              <img src={assets.mascot.khaiFull} alt="Illustrated Rangam festival scene with the mascot Khai" loading="lazy" />
              <figcaption>Khai, our film-crazy mascot, gets ready for the festival.</figcaption>
            </div>

            <span className="about__stamp">
              <Sticker tone="yellow" rotate={-6}>
                Lights · Camera · Fest
              </Sticker>
            </span>

            <img src={assets.mascot.mask} alt="" className="about__mask" loading="lazy" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}