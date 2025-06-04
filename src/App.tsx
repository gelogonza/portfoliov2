import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

// Import components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
// import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Initialize GSAP
  useGSAP(() => {
    // Set up any global animations here
    gsap.to('body', { opacity: 1, duration: 1 })
  })

  return (
    // Main container with gradient background
    <div className="relative gradient-bg">
      {/* Fixed navigation */}
      <Navbar />
      
      {/* Scrollable sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        {/* <Contact /> */}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
