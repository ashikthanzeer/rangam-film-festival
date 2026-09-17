import { Navbar } from './components/Navbar/Navbar.jsx'
import { Hero } from './components/Hero/Hero.jsx'
import { Marquee } from './components/Marquee.jsx'
import { About } from './components/About/About.jsx'
import { Highlights } from './components/Highlights/Highlights.jsx'
import { Films } from './components/Films/Films.jsx'
import { Schedule } from './components/Schedule/Schedule.jsx'
import { Events } from './components/Events/Events.jsx'
import { Jury } from './components/Jury/Jury.jsx'
import { Gallery } from './components/Gallery/Gallery.jsx'
import { Sponsors } from './components/Sponsors/Sponsors.jsx'
import { Contact } from './components/Contact/Contact.jsx'
import { Footer } from './components/Footer/Footer.jsx'

export function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Marquee items={['Rangam film festival', 'Student cinema', 'Dhwani 26']} tone="yellow" />
        <About />
        <Highlights />
        <Films />
        <Schedule />
        <Events />
        <Jury />
        <Gallery />
        <Sponsors />
        <Contact />
      </main>

      <Footer />
    </>
  )
}