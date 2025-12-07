import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Simple fade-in animations on mount
    gsap.from('.projects-header', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2
    })

    // Animate project cards
    gsap.from('.project-card', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
      delay: 0.5
    })
  }, { scope: containerRef })

  const projects = [
    {
      title: "Portfolio V2",
      description: "Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, glass-morphism effects, and a professional dark theme design.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "GSAP"],
      liveDemo: "https://angelogonzalez.dev",
      github: "https://github.com/gelogonza/portfoliov2"
    },
    {
      title: "Portfolio V1",
      description: "A responsive personal portfolio website showcasing my skills and projects. Using a blue color scheme. inspired by Brittany Chiang's old portfolio",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      liveDemo: "https://gelo-two.vercel.app",
      github: "https://github.com/gelogonza/geloportv2"
    },
    {
      title: "PowerTrak",
      description: "PowerTrak is a web application designed to help users track their workouts and nutrition. It provides a user-friendly interface for logging exercises, monitoring progress, and managing dietary intake. It is a full stack application that uses Firebase for authentication and storage, and AWS for hosting and scaling.",
      technologies: ["React", "Firebase", "AWS", "AWS Lambda", "DynamoDB"],
      liveDemo: "",
      github: "https://github.com/gelogonza/PowerTrak"
    },
    {
      title: "Link Website",
      description: "A website that leads to my other projects and social media accounts. It is a simple website that uses HTML and CSS.",
      technologies: ["HTML", "CSS"],
      liveDemo: "https://gelo-link.netlify.app",
      github: "https://github.com/gelogonza/AngeloLink"
    },
    {
      title: "Syro",
      description: "Designed and developed a Music app using Spotify API that allows users to access playlists, view data, control playback on their devices, play their music from playlists, play music that is downloaded locally.",
      technologies: ["Python", "Django", "Spotify API, JavaScript, Render"],
      liveDemo: "https://syroapp-api.onrender.com/",
      github: "https://github.com/gelogonza/Syro"
    
    },
    {
      title: "Reservation System",
      description: "Console-based application designed to streamline the operations of a restaurant. The program allows users to manage reservations, food orders, table assignments, bill payments, and closing operations in an efficient and user-friendly manner.",
      technologies: ["C++"],
      github: "https://github.com/gelogonza/simplersvp"
    },
    {
      title: "CLI Fitness Tracker",
      description: "Console-based application designed to help users log physical activities, set fitness goals, and track their progress. It provides a simple interface to input data, monitor goals, and generate progress reports.",
      technologies: ["C++"],
      github: "https://github.com/gelogonza/FitnessTracker"
    },
    {
      title: "Wordle Clone",
      description: "Simple Wordle Clone, done for a class.",
      technologies: ["Swift", "XCode", "SwiftUI"],
      github: "https://github.com/angelo-gonza/Wordle"
    }
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-heading">Projects</h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative aspect-square"
              >
                {/* Circular Project Card with Liquid Glass Effect */}
                <div className="project-card h-full w-full rounded-full backdrop-blur-2xl bg-white/10 border border-white/20 p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-500 flex flex-col items-center justify-center text-center shadow-2xl hover:shadow-white/20">
                  <div className="flex-1 flex flex-col items-center justify-center space-y-3 w-full px-4">
                    {/* Header */}
                    <h3 className="text-lg font-bold tracking-tight text-white leading-tight">{project.title}</h3>

                    {/* Description - Truncated for circle */}
                    <p className="text-sm text-white leading-snug line-clamp-4">{project.description}</p>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-2">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
                          aria-label="View Live Demo"
                        >
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
                        aria-label="View Source Code"
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>

                    {/* Technologies - Simplified for circles */}
                    <div className="flex flex-wrap gap-1.5 justify-center pt-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-0.5 text-xs text-white bg-white/10 rounded-full border border-white/20 backdrop-blur-lg"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-0.5 text-xs text-white bg-white/10 rounded-full border border-white/20 backdrop-blur-lg">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 