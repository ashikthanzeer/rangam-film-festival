import { Navbar } from './components/Navbar/Navbar.jsx'
import { Hero } from './components/Hero/Hero.jsx'
import { Competition } from './components/Competition/Competition.jsx'
import { About } from './components/About/About.jsx'
import { Jury } from './components/Jury/Jury.jsx'
import { Contact } from './components/Contact/Contact.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { festival } from './data/festivalData.js'

// Disabled sections - kept in repository but not rendered:
// import { Marquee } from './components/Marquee.jsx'
// import { Highlights } from './components/Highlights/Highlights.jsx'
// import { Gallery } from './components/Gallery/Gallery.jsx'
// import { Sponsors } from './components/Sponsors/Sponsors.jsx'
// import { Films } from './components/Films/Films.jsx'
// import { Schedule } from './components/Schedule/Schedule.jsx'
// import { Events } from './components/Events/Events.jsx'

export function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Competition />
        <Jury />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  )
}