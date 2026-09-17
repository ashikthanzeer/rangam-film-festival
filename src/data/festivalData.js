/* ============================================================
   FESTIVAL DATA
   ------------------------------------------------------------
   All editable festival content lives here, away from components.

   ⚠ OFFICIAL CONTENT NOTE:
   Everything below is placeholder copy. Replace the marked fields
   with the real announcements for Dhwani '26 when they are final.
   Do NOT ship invented dates, films, judges or registration URLs.
   ============================================================ */

export const festival = {
  name: 'Rangam Film Festival',
  edition: "Dhwani '26",
  year: 2026,
  college: 'College of Engineering Trivandrum',
  collegeShort: 'CET',
  tagline: 'Where student films meet the big screen.',
  lede:
    'Rangam is the student film festival of Dhwani — the annual techno-cultural festival of the College of Engineering Trivandrum. Screenings, jury shows and conversations built around films made by students, for everyone.',
  // ── OFFICIAL: dates, venue & registration go here when announced ──
  dates: {
    label: 'Festival dates to be announced',
    start: null, // OFFICIAL: e.g. "2026-XX-XX"
    end: null, // OFFICIAL: e.g. "2026-XX-XX"
  },
  venue: {
    name: 'College of Engineering Trivandrum',
    area: 'Sreekariyam, Thiruvananthapuram, Kerala',
    // OFFICIAL: link to a map / venue page once published
    mapUrl: null,
  },
  registration: {
    label: 'Registration opens soon',
    // OFFICIAL: final registration gateway once live
    url: null,
  },
  contact: {
    email: 'rangam@dhwani.org', // OFFICIAL: replace with real contact address
  },
  socials: {
    instagram: 'https://instagram.com', // OFFICIAL: real handles
    youtube: null,
    whatsapp: null,
  },
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Films', href: '#films' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Events', href: '#events' },
  { label: 'Jury', href: '#jury' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export const highlights = [
  {
    no: '01',
    title: 'Student films, front and centre',
    body: 'The festival is built around films made by students — shorts, docs and animation from campus collectives and beyond.',
    tag: 'Screenings',
  },
  {
    no: '02',
    title: 'A proper big-screen showcase',
    body: 'Curated blocks on the main stage, from opening night to the trophy ceremony in the festival Grand Finale.',
    tag: 'Showcase',
  },
  {
    no: '03',
    title: 'A jury that loves the craft',
    body: 'Filmmakers, critics and theatre minds review the line-up and hand out Rangam’s awards across categories.',
    tag: 'Awards',
  },
  {
    no: '04',
    title: 'More than watching movies',
    body: 'Talks, workshops, meet-the-filmmaker sessions and festival side events running across Dhwani ’26.',
    tag: 'Energetic',
  },
]

/* ── OFFICIAL: replace when the official film list is published ── */
export const films = [
  {
    id: 1,
    title: 'Film title to be announced',
    category: 'Official Selection',
    duration: 'TBA',
    year: '2026',
    note: 'Film slots open — submissions & selection details coming soon.',
  },
  {
    id: 2,
    title: 'Film title to be announced',
    category: 'Official Selection',
    duration: 'TBA',
    year: '2026',
    note: 'Film slots open — submissions & selection details coming soon.',
  },
  {
    id: 3,
    title: 'Film title to be announced',
    category: 'Official Selection',
    duration: 'TBA',
    year: '2026',
    note: 'Film slots open — submissions & selection details coming soon.',
  },
  {
    id: 4,
    title: 'Film title to be announced',
    category: 'Official Selection',
    duration: 'TBA',
    year: '2026',
    note: 'Film slots open — submissions & selection details coming soon.',
  },
]

/* ── OFFICIAL: replace when the schedule is final ── */
export const schedule = [
  {
    day: 'DAY 1',
    when: 'TBA',
    blocks: [
      { time: 'TBA', title: 'Opening Night — Inauguration & first screening', tag: 'Main Hall' },
      { time: 'TBA', title: 'Official Selection — Shorts block', tag: 'Screen 1' },
      { time: 'TBA', title: 'Meet the filmmakers', tag: 'Session' },
    ],
  },
  {
    day: 'DAY 2',
    when: 'TBA',
    blocks: [
      { time: 'TBA', title: 'Documentary & animation block', tag: 'Screen 1' },
      { time: 'TBA', title: 'Masterclass with a guest filmmaker', tag: 'Workshop' },
      { time: 'TBA', title: 'Flea-market buzz & festival games', tag: 'Campus' },
    ],
  },
  {
    day: 'DAY 3',
    when: 'TBA',
    blocks: [
      { time: 'TBA', title: 'Late selections — repeat blocks', tag: 'Screen 2' },
      { time: 'TBA', title: 'Grand Finale — Awards ceremony', tag: 'Main Hall' },
    ],
  },
]

/* ── OFFICIAL: replace with the final activity list ── */
export const events = [
  { title: 'Opening Night', body: 'The inaugural screening that kicks off the festival fizz.', icon: 'note' },
  { title: 'Short Film Slam', body: 'Fresh shorts, single sitting, loud crowd.', icon: 'note-blue' },
  { title: 'Documentary Corner', body: 'Non-fiction work and the stories behind it.', icon: 'torii' },
  { title: 'Animation Nite', body: 'Frame-by-frame craft on the big screen.', icon: 'star' },
  { title: 'Masterclass', body: 'A working filmmaker spends an hour with the audience.', icon: 'mic' },
  { title: 'Film Quiz & Games', body: 'Trivia, stills and silly prizes between screenings.', icon: 'lantern' },
]

/* ── OFFICIAL: replace with announced jury members ── */
export const jury = [
  { name: 'Jury panel to be announced', role: 'Guest jurors', note: 'Announcement coming soon.', img: '/assets/web/judge-1.png' },
  { name: 'Jury panel to be announced', role: 'Campus jury', note: 'Announcement coming soon.', img: '/assets/web/judge-2.png' },
]

/* ── OFFICIAL: replace with real snapshots ── */
export const gallery = [
  { src: '/assets/web/khai-auto.png', alt: 'Khai, the Rangam mascot, riding across the festival', w: 3, h: 4 },
  { src: '/assets/web/khai-full.png', alt: 'Illustrated festival scene with the Rangam mascot', w: 5, h: 4 },
  { src: '/assets/web/mascot-side.png', alt: 'The Rangam mascot in profile', w: 4, h: 5 },
  { src: '/assets/web/grid-70.png', alt: 'Comic-page artwork used across Rangam branding', w: 4, h: 5 },
]

/* ── OFFICIAL: replace/add actual partner names & logos ── */
export const sponsors = [
  { name: 'Partner slot', blurb: 'Your brand here', logo: null },
  { name: 'Partner slot', blurb: 'Your brand here', logo: null },
  { name: 'Partner slot', blurb: 'Your brand here', logo: null },
  { name: 'Partner slot', blurb: 'Your brand here', logo: null },
  { name: 'Partner slot', blurb: 'Your brand here', logo: null },
  { name: 'Partner slot', blurb: 'Your brand here', logo: null },
]

/* ── AMPLIFIED AS PART OF DHWANI '26 ── */
export const parent = {
  name: "Dhwani '26",
  org: 'College of Engineering Trivandrum',
  logo: '/assets/logos/dhwani og 26.png',
}

export const assets = {
  mascot: {
    front: '/assets/web/mascot-front.png',
    side: '/assets/web/mascot-side.png',
    judge1: '/assets/web/judge-1.png',
    judge2: '/assets/web/judge-2.png',
    khaiAuto: '/assets/web/khai-auto.png',
    khaiFull: '/assets/web/khai-full.png',
    mask: '/assets/mascot/mascot%20mask.svg',
  },
  logos: {
    rangamTitle: '/assets/web/rangam-title.png',
    dhwani: '/assets/web/dhwani-26.png',
    dhwaniBasic: '/assets/logos/dhwani%20og%2026.png',
  },
  elements: {
    clouds: '/assets/web/clouds.png',
    ferris: '/assets/web/ferris.png',
    torii: '/assets/elements/torii%20new.svg',
    lantern: '/assets/web/lantern.png',
    note: '/assets/elements/note.svg',
    noteBlue: '/assets/elements/blue%20note.svg',
    l1: '/assets/elements/L1.svg',
    l2: '/assets/elements/L2.svg',
    l3: '/assets/elements/L3.svg',
    l4: '/assets/elements/L4.svg',
  },
}