import { SectionHeading } from '../SectionHeading.jsx'
import { assets } from '../../data/festivalData.js'
import { useReveal } from '../../hooks/useReveal.js'
import './About.css'

export function About() {
  const textRef = useReveal()

  return (
    <section id="about" className="section about bg-paper">
      <div className="about__tex halftone halftone--strong" aria-hidden="true" />

      <div className="container about__grid">
        <SectionHeading
          eyebrow="The Festival"
          title="About "
          kicker="Rangam"
          tone="dark"
          align="left"
        />

        <div ref={textRef} className="about__copy reveal">
          <p className="about__text">
            Rangam is the film festival of Dhwani '26, conducted by the CET Film Society in association with Dhwani '26.
          </p>
          <p className="about__text">
            A celebration of student cinema, Rangam brings short films, documentaries and animation to the big screen — creating a space for filmmakers and audiences to watch, discover and engage with cinema together.
          </p>
        </div>
      </div>

      <img src={assets.mascot.mask} alt="" className="about__mask" loading="lazy" aria-hidden="true" />
    </section>
  )
}