import { useReveal } from '../hooks/useReveal.js'
import { useId } from 'react'
import './SectionHeading.css'

/**
 * Reusable section heading.
 * Props:
 *  - eyebrow  : small label above the title
 *  - title    : main heading (node or string)
 *  - kicker   : accent word rendered in the display font
 *  - note     : optional side note
 *  - align    : 'left' (default) | 'center'
 *  - tone     : 'paper' (default, dark bg) | 'dark' (used on light bg)
 */
export function SectionHeading({ eyebrow, title, kicker, note, align = 'left', tone = 'paper' }) {
  const id = useId()
  const ref = useReveal()
  return (
    <header ref={ref} className={`section-head reveal section-head--${align} section-head--${tone}`}>
      {eyebrow && <span className="eyebrow" aria-hidden="true">{eyebrow}</span>}
      <h2 className="section-head__title" id={id}>
        {title}
        {kicker && (
          <>
            {' '}
            <span className="section-head__kicker">{kicker}</span>
          </>
        )}
      </h2>
      {note && <p className="section-head__note">{note}</p>}
    </header>
  )
}