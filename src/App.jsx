import { Navbar } from './components/Navbar/Navbar.jsx'
import { Hero } from './components/Hero/Hero.jsx'
import { Marquee } from './components/Marquee.jsx'
import { Competition } from './components/Competition/Competition.jsx'
import { About } from './components/About/About.jsx'
import { Highlights } from './components/Highlights/Highlights.jsx'
import { Jury } from './components/Jury/Jury.jsx'
import { Gallery } from './components/Gallery/Gallery.jsx'
import { Sponsors } from './components/Sponsors/Sponsors.jsx'
import { Contact } from './components/Contact/Contact.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { festival } from './data/festivalData.js'

export function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Marquee
          items={[festival.name, festival.organization.conductedBy, festival.organization.association, festival.dates]}
          tone="yellow"
        />
        <Competition />
        <About />
        <Highlights />

        {/* Temporarily disabled */}
        {/* <Films /> — "Big Screen" */}
        {/* Temporarily disabled */}
        {/* <Schedule /> — "Running Order" */}
        {/* Temporarily disabled */}
        {/* <Events /> — "Not Just Movies" */}

        <Jury />
        <Gallery />
        <Sponsors />
        <Contact />
      </main>

      <Footer />
    </>
  )
}