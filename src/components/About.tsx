import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Simple fade-in animations on mount
    gsap.from('.about-content', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2
    })

    gsap.from('.about-text', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
      delay: 0.5
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
                  I'm currently a student at <span className="text-white font-medium">Indiana University Bloomington</span> studying Computer Science, with a strong interest in front-end engineering, full-stack development, and product design. I'm passionate about building meaningful, user-centered products using modern technologies and industry-standard practices.
                </p>
              </div>

              <div className="about-text">
                <p className="text-lg text-white/80 leading-relaxed">
                  Right now, I'm looking to work with innovative and forward-thinking teams that embrace experimentation, ship fast, and push the boundaries of what's possible. Especially in the space where tech meets community and real-world impact.
                </p>
              </div>

              <div className="about-text">
                <p className="text-lg text-white/80 leading-relaxed">
                  I've gained hands on experience with <span className="text-red-400">JavaScript</span>, <span className="text-red-400">TypeScript</span>, <span className="text-red-400">Python</span>, <span className="text-red-400">C++</span>, and am learning <span className="text-red-400">Java</span>. I am focused on emphasizing modern frameworks like <span className="text-red-400">React</span>, <span className="text-red-400">Next.js</span>, and generative AI integration. I'm actively developing projects that incorporate AI, clean design, and intuitive UX, and I deeply value environments that foster quality, creativity, learning, and strong engineering culture.
                </p>
              </div>

              <div className="about-text">
                <p className="text-lg text-white/80 leading-relaxed">
                  I'm always open to new opportunities, collaborations, or simply connecting with others who share the same passion for tech, design, and making things better.
                </p>
              </div>

              <div className="about-text">
                <h3 className="text-xl font-semibold text-white mb-4">Beyond Coding</h3>
                <p className="text-lg text-white/80 leading-relaxed mb-4">
                  When I'm not coding, I'm running outside, cycling, or in the gym chasing a pump. I also work on creative side projects that spark my curiosity, exploring new places, trying new food, watching movies, or binge watching TV shows.
                </p>
                <p className="text-lg text-white/80 leading-relaxed mb-4">
                  I'm really passionate about fitness and touching grass. I think it should be mandatory to exercise and do other things when you're on a computer for most of the day. I also love meeting new people and trying new food to experience different cultures.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  I'm also someone who values continuous learning beyond just programming. I enjoy reading about entrepreneurship, psychology, and design thinking, and I'm always curious about how different industries solve complex problems. This broader perspective helps me approach software development with empathy and creativity.
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