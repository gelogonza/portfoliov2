import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

// Import components
import Navbar from './components/Navbar'
import Home from './components/Home'
import BallPit from './components/BallPit'

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
    <Router>
      {/* Main container with gradient background */}
      <div className="relative min-h-screen w-full gradient-bg">
        {/* Fixed navigation */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ballpit" element={<BallPit />} />
        </Routes>
      </div>
      <Analytics />
    </Router>
  )
}

export default App
