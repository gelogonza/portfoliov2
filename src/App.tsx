import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'

// Import components
import Navbar from './components/Navbar'
import Home from './components/Home'
import BallPit from './components/BallPit'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  useEffect(() => {
    document.body.style.opacity = '1'
  }, [])

  return (
    <Router>
      {/* Main container with gradient background */}
      <div className="relative min-h-screen w-full gradient-bg">
        {/* Fixed navigation */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<ErrorBoundary><Home /></ErrorBoundary>} />
          <Route path="/ballpit" element={<BallPit />} />
        </Routes>
      </div>
      <Analytics />
    </Router>
  )
}

export default App
