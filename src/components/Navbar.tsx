import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll events to add backdrop blur after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  // Smooth scroll function with offset for fixed navbar
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80 // 20 * 4 = 80px (h-20 in Tailwind)
      const elementPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-lg bg-black/90 border-b border-red-500/50 shadow-xl' 
          : 'bg-transparent backdrop-blur-none'
      }`}>
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={(e) => {
              e.preventDefault()
              scrollToTop()
            }} 
            className="text-2xl font-bold z-50 relative bg-transparent border-none text-white cursor-pointer hover:text-red-400 transition-colors duration-300"
          >
            AG
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="nav-link bg-transparent border-none cursor-pointer">About</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link bg-transparent border-none cursor-pointer">Experience</button>
            <button onClick={() => scrollToSection('skills')} className="nav-link bg-transparent border-none cursor-pointer">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link bg-transparent border-none cursor-pointer">Projects</button>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://docs.google.com/document/d/1kCLPsWczTs90m72RffRdp8wZUFA7FxrpF2UyIyUKw0I/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              Resume
            </a>
            <a href="mailto:angelo3649@icloud.com" className="btn-primary">
              Contact Me
            </a>
          </div>

          {/* Mobile Burger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50 relative w-8 h-8 flex flex-col justify-center items-center"
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'
            }`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'mb-1'
            }`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Mobile Menu Content */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] backdrop-blur-xl bg-gradient-to-b from-black/60 via-black/50 to-black/60 border-l border-white/10 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full pt-24 pb-8 px-8">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-6 mb-8">
              <button 
                onClick={() => {
                  scrollToSection('about')
                  handleLinkClick()
                }}
                className="text-2xl font-medium text-white/95 hover:text-white hover:translate-x-2 transition-all duration-200 bg-transparent border-none cursor-pointer text-left"
              >
                About
              </button>
              <button 
                onClick={() => {
                  scrollToSection('experience')
                  handleLinkClick()
                }}
                className="text-2xl font-medium text-white/95 hover:text-white hover:translate-x-2 transition-all duration-200 bg-transparent border-none cursor-pointer text-left"
              >
                Experience
              </button>
              <button 
                onClick={() => {
                  scrollToSection('skills')
                  handleLinkClick()
                }}
                className="text-2xl font-medium text-white/95 hover:text-white hover:translate-x-2 transition-all duration-200 bg-transparent border-none cursor-pointer text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => {
                  scrollToSection('projects')
                  handleLinkClick()
                }}
                className="text-2xl font-medium text-white/95 hover:text-white hover:translate-x-2 transition-all duration-200 bg-transparent border-none cursor-pointer text-left"
              >
                Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              <a 
                href="https://github.com/gelogonza" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 px-4 border border-white/20 rounded-lg text-white/90 hover:text-white hover:border-white/40 transition-all duration-200 backdrop-blur-sm bg-white/5"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/angelo-gonza" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 px-4 border border-white/20 rounded-lg text-white/90 hover:text-white hover:border-white/40 transition-all duration-200 backdrop-blur-sm bg-white/5"
              >
                LinkedIn
              </a>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col space-y-4 mt-auto">
              <a 
                href="https://docs.google.com/document/d/1kCLPsWczTs90m72RffRdp8wZUFA7FxrpF2UyIyUKw0I/edit?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-3 px-6 border border-white/30 rounded-lg text-white/95 hover:text-white hover:border-white/50 transition-all duration-200 backdrop-blur-sm bg-white/10"
              >
                Download Resume
              </a>
              <a 
                href="mailto:angelo3649@icloud.com" 
                onClick={handleLinkClick}
                className="btn-primary text-center"
              >
                Get In Touch
              </a>
            </div>

            {/* Red accent line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mt-6 opacity-50"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar 