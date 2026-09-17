/* Inline SVG icon set — no external icon dependency. */

const base = { width: '1em', height: '1em', viewBox: '0 0 24 24', 'aria-hidden': 'true', focusable: 'false' }

export const ArrowRight = (p) => (
  <svg {...base} {...p}>
    <path d="M4 12h15m0 0-6-6m6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const ArrowDown = (p) => (
  <svg {...base} {...p}>
    <path d="M12 4v15m0 0 6-6m-6 6-6-6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const MenuIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M3 6.5h18M3 12h18M3 17.5h18" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
  </svg>
)

export const CloseIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M5 5l14 14M19 5 5 19" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
  </svg>
)

export const StarIcon = (p) => (
  <svg {...base} {...p}>
    <path
      d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4 6.2 20.5l1.1-6.5L2.6 9.4l6.5-.9L12 2.6z"
      fill="currentColor"
    />
  </svg>
)

export const MicIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="9" y="3" width="6" height="11" rx="3" fill="currentColor" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
)

export const MailIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="m4 7.5 8 5.5 8-5.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const MapPinIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21s-6.5-5.2-6.5-10a6.5 6.5 0 0 1 13 0C18.5 15.8 12 21 12 21z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    <circle cx="12" cy="11" r="2.4" fill="currentColor" />
  </svg>
)

export const InstagramIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
  </svg>
)

export const TicketIcon = (p) => (
  <svg {...base} {...p}>
    <path
      d="M3 8.5a2 2 0 0 1-1 1.7v3.6a2 2 0 0 1 1 1.7v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3a2 2 0 0 1 0-3.7V8.5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M13.5 6.5v2M13.5 15.5v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const PlayIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M8 5.5v13l11-6.5L8 5.5z" fill="currentColor" />
  </svg>
)

export const Star4Icon = (p) => (
  <svg {...base} {...p}>
    <path
      d="M12 2l2.2 5.4 5.8.9-4.2 4.1 1 5.8L12 15.4l-4.8 2.8 1-5.8L4 8.3l5.8-.9L12 2z"
      fill="currentColor"
    />
  </svg>
)

export const SparkIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3z" fill="currentColor" />
    <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" fill="currentColor" />
  </svg>
)

export const ArrowUpIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 20V5m0 0-6 6m6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)