import { StarIcon, SparkIcon } from '../components/icons.jsx'

/**
 * Small rotated "sticker" badge used across sections for comic accents.
 * Decorative by default (hidden from assistive tech).
 */
export function Sticker({ children, tone = 'yellow', rotate = -3, className = '', small = false }) {
  return (
    <span
      className={`sticker sticker--${tone}${small ? ' sticker--small' : ''} ${className}`}
      role="presentation"
      style={{ '--rot': `${rotate}deg` }}
    >
      <StarIcon />
      <span>{children}</span>
      <SparkIcon />
    </span>
  )
}