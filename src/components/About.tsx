import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Animate elements when they come into view
    gsap.from('.about-content', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-content',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from('.about-text', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.about-text',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    })
  }, { scope: containerRef })

  return (
    <section id="about" ref={containerRef} className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="about-content text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto"></div>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div className="space-y-8">
              {/* Main Bio */}
              <div className="about-text">
                <p className="text-lg text-white/80 leading-relaxed">
                  I'm currently a student at <span className="text-white font-medium">Indiana University Bloomington</span> studying Computer Science, with a strong interest in front-end development, full-stack development, and product design. I'm passionate about building meaningful, user-centered products using modern technologies and industry-standard practices.
                </p>
              </div>

              <div className="about-text">
                <p className="text-lg text-white/80 leading-relaxed">
                  Right now, I'm looking to work with innovative and forward-thinking teams that embrace experimentation, ship fast, and push the boundaries of what's possible. Especially in the space where tech meets community and real-world impact.
                </p>
              </div>

              <div className="about-text">
                <p className="text-lg text-white/80 leading-relaxed">
                  I've gained hands on experience with <span className="text-red-400">JavaScript</span>, <span className="text-red-400">TypeScript</span>, <span className="text-red-400">Python</span>, <span className="text-red-400">C++</span>, <span className="text-red-400">HTML/CSS</span>, <span className="text-red-400">Django</span>, and am learning <span className="text-red-400">Java</span>. I am focused on emphasizing modern frameworks like <span className="text-red-400">React</span>, <span className="text-red-400">Next.js</span>, and <span className="text-red-400">generative AI integration</span>. I'm actively developing projects that incorporate AI, clean design, and intuitive UX, and I deeply value environments that foster quality, creativity, learning, and strong engineering culture.
                </p>
              </div>

              <div className="about-text">
                <p className="text-lg text-white/80 leading-relaxed">
                  I'm always open to new opportunities, collaborations, or simply connecting with others who share the same passion for tech, design, and making things better.
                </p>
              </div>

              {/* Personal Interests */}
              <div className="about-text">
                <h3 className="text-xl font-semibold text-white mb-4">When I'm Not Coding</h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  You can find me <span className="text-white">running</span> around campus, <span className="text-white">hitting the gym</span> for strength and functionality or <span className="text-white">cycling</span> through scenic routes. I'm always discovering new <span className="text-white">music</span> across different genres and love watching a good <span className="text-white">movie</span> or <span className="text-white">TV series</span>. I also enjoy <span className="text-white">touching grass</span>, <span className="text-white">reading</span> tech blogs and books, and <span className="text-white">exploring</span> local thrift shops and restaurants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About