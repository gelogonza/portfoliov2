import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Animate the heading when component mounts
    gsap.from('.hero-text', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2
    })

    // Animate the profile image
    gsap.from('.hero-image', {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.3
    })

    // Subtle floating animation for the image
    gsap.to('.hero-image', {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="section flex items-center justify-center">
      <div className="container text-center">
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <div className="hero-image relative">
            {/* Red glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent rounded-full blur-xl scale-110"></div>
            
            {/* Main image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
              <img 
                src="/angelo.jpeg" 
                alt="Angelo Gonzalez" 
                className="w-full h-full object-cover transition-all duration-500"
                loading="eager"
                decoding="async"
              />
              
              {/* Noir overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Red accent border animation */}
              <div className="absolute inset-0 rounded-full border-2 border-red-500/0 hover:border-red-500/50 transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold">
            Angelo Gonzalez
          </h1>
          <p className="hero-text text-xl md:text-2xl text-white/70">
            Software Engineer
          </p>
          
          {/* Social Links */}
          <div className="hero-text flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/gelogonza" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="w-7 h-7"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/angelo-gonza" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                className="w-7 h-7"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hero-text">
            <a href="mailto:angelo3649@icloud.com" className="btn-primary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 