import { SectionHeading } from '../SectionHeading.jsx'
import { gallery } from '../../data/festivalData.js'
import { useReveal } from '../../hooks/useReveal.js'
import { Sticker } from '../Sticker.jsx'
import './Gallery.css'

export function Gallery() {
  const ref = useReveal()
  return (
    <section id="gallery" className="section gallery bg-paper">
      <div className="gallery__tex halftone halftone--strong" aria-hidden="true" />

      <div className="container">
        <SectionHeading
          eyebrow="Behind the curtain"
          title="Festival "
          kicker="frames"
          tone="dark"
          note="A few illustrated frames from our festival world. Live photo dumps from the days will pile up here."
        />

        <div className="gallery__mosaic">
          {gallery.map((shot, i) => (
            <figure key={shot.alt} className={`shot shot--m${(i % 4) + 1}`}>
              <img src={shot.src} alt={shot.alt} loading="lazy" />
            </figure>
          ))}

          <div ref={ref} className="shot shot--empty reveal">
            <div className="shot__empty">
              <span aria-hidden="true">＋</span>
              <p>Your photos from the festival</p>
              <span className="shot__soon">Soon</span>
            </div>
          </div>
        </div>

        <div className="gallery__foot">
          <Sticker tone="yellow" rotate={-3}>
            Frame by frame
          </Sticker>
        </div>
      </div>
    </section>
  )
}