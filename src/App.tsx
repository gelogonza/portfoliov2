import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect } from 'react'

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
  // Ensure animations start after page load
  useEffect(() => {
    // Force animation restart on mount
    document.body.style.opacity = '1'
  }, [])

  // Initialize GSAP with better performance settings
  useGSAP(() => {
    // Set up any global animations here with reduced motion support
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.to('body', { opacity: 1, duration: 0.5 })
    }
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
