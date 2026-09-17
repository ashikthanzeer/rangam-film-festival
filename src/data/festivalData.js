/* ============================================================
   FESTIVAL DATA — single source of truth for site content.
   Update this one file to change dates, branding, competition
   details, jury, contacts or social links across the whole site.

   CONTENT NOTE:
   films / schedule / events / sponsors below remain placeholder
   exports for the temporarily-disabled sections — do not invent
   content. Replace only when official announcements are published.
   ============================================================ */

export const festival = {
  name: 'Rangam Film Festival',
  /* ── OFFICIAL festival dates ── */
  dates: 'September 22–27, 2026',
  year: 2026,
  college: 'College of Engineering Trivandrum',
  collegeShort: 'CET',
  tagline: 'Where student films meet the big screen.',
  lede:
    'Rangam is the student film festival where shorts, docs and animation meet a proper big screen. Screenings, juries and conversations built around films made by students, for everyone.',
  venue: {
    name: 'College of Engineering Trivandrum',
    area: 'Sreekariyam, Thiruvananthapuram, Kerala',
    /* OFFICIAL: link to a map / venue page once published */
    mapUrl: 'https://maps.app.goo.gl/DLWnMcTaZgPrphmX6',
  },
  contact: {
    email: 'rangam@dhwani.org',
  },

  /* ── OFFICIAL branding hierarchy:
     Rangam Film Festival · conducted by CET Film Society ·
     in association with Dhwani '26 ── */
  organization: {
    conductedBy: 'CET Film Society',
    conductedByLogo: '/assets/logos/CET Film Society.png',
    association: "Dhwani '26",
    associationLogo: '/assets/logos/dhwani og 26.png',
  },

  /* ── UPCOMING: Rangam Short Film Competition ── */
  shortFilmCompetition: {
    title: 'Rangam Short Film Competition',
    prize: '₹75,000',
    registrationFee: '₹699',
    deadline: 'September 17, 2026',
    /* OFFICIAL registration gateway (supplied link, used as-is) */
    registrationUrl: 'https://makemypass.com/event/rangam-short-film-competition',
    /* OFFICIAL: paste the real guidelines URL here when shared.
       Keep `null` until then — the UI shows a "coming soon"
       placeholder and does NOT navigate to an unrelated page. */
    guidelinesUrl: 'https://www.instagram.com/p/Dc8x8EtFGp8/?stkn=bjVmZm1iazgxMnZs',
    contacts: [
      { name: 'Sisira', phone: '9544758104', tel: 'tel:9544758104' },
      { name: 'Afwan', phone: '9847910308', tel: 'tel:9847910308' },
    ],
  },

  /* ── OFFICIAL Instagram destinations ── */
  socials: {
    rangam: {
      handle: '@rangam.live',
      url: 'https://www.instagram.com/rangam.live/',
    },
    dhwani: {
      handle: '@dhwani_cet',
      url: 'https://www.instagram.com/dhwani_cet/',
    },
    youtube: null,
    whatsapp: null,
  },
}

export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Competition', href: '#competition' },
  { label: 'Jury', href: '#jury' },
  { label: 'About', href: '#about' },
  { label: 'Reach Out', href: '#contact' },
]

/* convenience alias so components can import competition data at top level */
export const shortFilmCompetition = festival.shortFilmCompetition

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
    when: 'Sep 22',
    blocks: [
      { time: 'TBA', title: 'Opening Night — Inauguration & first screening', tag: 'Main Hall' },
      { time: 'TBA', title: 'Official Selection — Shorts block', tag: 'Screen 1' },
      { time: 'TBA', title: 'Meet the filmmakers', tag: 'Session' },
    ],
  },
  {
    day: 'DAY 2',
    when: 'Sep 23',
    blocks: [
      { time: 'TBA', title: 'Documentary & animation block', tag: 'Screen 1' },
      { time: 'TBA', title: 'Masterclass with a guest filmmaker', tag: 'Workshop' },
      { time: 'TBA', title: 'Flea-market buzz & festival games', tag: 'Campus' },
    ],
  },
  {
    day: 'DAY 3',
    when: 'Sep 24',
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

/* ── JURY — official line-up & photographs for the Short Film Competition ── */
export const jury = [
  {
    name: 'Arun Anirudhan',
    role: 'Filmmaker & Screenwriter',
    image: '/assets/jury/arun-anirudhan.png',
  },
  {
    name: 'Jeo Baby',
    role: 'Filmmaker & Screenwriter',
    image: '/assets/jury/jeo-baby.png',
  },
  {
    name: 'Nitin Baid',
    role: 'Screen Writer',
    image: '/assets/jury/nitin-baid.png',
  },
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

export const parent = {
  name: "Dhwani '26",
  org: 'College of Engineering Trivandrum',
  logo: '/assets/logos/dhwani og 26.png',
}

/* ── OFFICIAL asset paths ── */
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
    /* web-optimised official Rangam wordmark (2600×1156, transparent) */
    rangamWeb: '/assets/web/rangam-logo.png',
    /* alias kept so any older reference to rangamTitle still resolves
       to the same optimised wordmark */
    rangamTitle: '/assets/web/rangam-logo.png',
    rangamOriginal: '/assets/logos/rangam-logo.png',
    cetFilmSociety: '/assets/logos/CET Film Society.png',
    /* in-association Dhwani '26 logo (hero badge prefers the small web cut) */
    dhwani: '/assets/logos/dhwani og 26.png',
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