import { SceneLayer } from '../SceneLayer.jsx'
import { SectionHeading } from '../SectionHeading.jsx'
import { sponsors, festival, assets } from '../../data/festivalData.js'
import { useReveal } from '../../hooks/useReveal.js'
import { MailIcon } from '../icons.jsx'
import './Sponsors.css'

export function Sponsors() {
  const ref = useReveal()

  return (
    <section id="sponsors" className="section sponsors bg-night">
      <SceneLayer variant="clouds" />

      <div className="container sponsors__in">
        <SectionHeading
          eyebrow="Partners"
          title="Standing with "
          kicker="Rangam"
          note="The partners who help put student films on a proper screen. Brand slots are opening up — write to us below."
        />

        <div className="sponsors__row">
          {sponsors.slice(0, 6).map((sponsor, i) => (
            <div key={i} className={`sponsor sponsor--t${(i % 3) + 1}`}>
              <span className="sponsor__name">{sponsor.name}</span>
              <span className="sponsor__blurb">{sponsor.blurb}</span>
            </div>
          ))}
        </div>

        <a ref={ref} href={`mailto:${festival.contact.email}?subject=${encodeURIComponent('Partnership — Rangam Film Festival')}`} className="sponsor-cta reveal comic-card comic-card--yellow">
          <div className="sponsor-cta__icon">
            <MailIcon />
          </div>
          <div className="sponsor-cta__text">
            <h3>Become a partner</h3>
            <p>Big screen, bigger audience — partner with Rangam for {festival.edition}.</p>
          </div>
          <span className="sponsor-cta__mail">{festival.contact.email}</span>
          <img src={assets.mascot.mask} alt="" className="sponsor-cta__mask" aria-hidden="true" loading="lazy" />
        </a>
      </div>
    </section>
  )
}