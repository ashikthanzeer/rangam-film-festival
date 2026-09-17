import './Marquee.css'

/**
 * Kinetic editorial strip (comic "ticker" feel). Content is duplicated
 * twice so the CSS marquee loops seamlessly.
 */
export function Marquee({ items = [], tone = 'yellow', className = '' }) {
  const row = Array.isArray(items) && items.length ? items : ['RANGAM', 'FILM', 'FESTIVAL']
  const sequence = [...row, ...row]
  return (
    <div className={`marquee marquee--${tone} ${className}`} aria-hidden="true">
      <div className="marquee__track">
        <div className="marquee__group">
          {sequence.map((item, i) => (
            <span key={i} className="marquee__item">
              {item}
              <span className="marquee__star">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}