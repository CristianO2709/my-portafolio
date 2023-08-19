import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
function App() {

  return (
    <main>
     <Navbar />
     <Hero />
     <About />
     <Projects />
     <Contact />
     <Footer />
    </main>
  )
}

export default App
