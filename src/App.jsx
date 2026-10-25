import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Facts from './components/Facts.jsx'
import Menu from './components/Menu.jsx'
import Special from './components/Special.jsx'
import About from './components/About.jsx'
import Booking from './components/Booking.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Facts />
        <Menu />
        <Special />
        <About />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
