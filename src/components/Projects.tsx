import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.projects-header', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2
    })

    gsap.from('.project-card', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.1,
      delay: 0.5
    })
  }, { scope: containerRef })

  const projects: {
    title: string
    description?: string
    technologies: string[]
    liveDemo?: string
    github?: string
    figmaEmbed?: string
  }[] = [
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
      technologies: ["Typescript", "Next.js", "Spotify API", "Tailwind", "Figma"],
      liveDemo: "https://syro-app.vercel.app/",
      github: "https://github.com/gelogonza/SyroApp"
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
    },
    {
      title: "Breakfast Ordering App",
      description: "Breakfast ordering website. Allows for adding customers, new items to the order, phone number, email, name, and the ability to update. Also gets orders added to database. Implemented templating for several pages to have a coherent and sleek layout across all pages.",
      technologies: ["Python, HTML/CSS, SQL, Bootstrap, Flask, Jinja, SSH, Shell"],
      github: "https://github.iu.edu/i211fa2025/ag38-final-app"
    },
    {
      title: "Recipe App",
      description: "Recipe site that has a list of recipes, you can add, delete, and edit the recipes. Upon clicking on the recipes you will get taken to the page for that recipe where it will have a picture of the recipe, a description, reviews for the recipe, and a link that leads you to the official recipe page. In this app we use sql to have the recipes added to a database, Python for the implementation of the code to get this to work, Flask for the help on having this on the web, HTML/CSS and Bootstrap for the design, Jinja for the templating, and A lot of shell was used in the creation for this as well.",
      technologies: ["Python, SQL, HTML/CSS, Bootstrap, SQL, Jinja, Linux"],
      github: "https://github.iu.edu/i211fa2025/ag38-recipe-app"
    },
    {
      title: "Recipe Page",
      description: "Recipe page that is a single column for Tacos Al Pastor. Used Basic HTML/CSS for styling, links for recipe, ordered/unordered lists. Used google fonts for text styling, tables, figures, figcaptions, and other methods.",
      technologies: ["HTML, CSS"],
      liveDemo: "https://gelogonza.github.io/recipe-website/",
      github: "https://github.com/gelogonza/recipe-website"
    },
    {
      title: "Game Glitch Investigator",
      description: "A number guessing game where the player tries to guess a randomly chosen secret number within a set number of attempts. Each wrong guess provides a hint (go higher or lower), and the score is based on how few attempts it took to win.",
      technologies: ["Python, Claude"],
      liveDemo: "https://ai110gameglitchinvestigator.streamlit.app/",
      github: "https://github.com/gelogonza/ai110-module1show-gameglitchinvestigator"
    },
    {
      title: "MovieRecs",
      description: "mood-based movie recommendation web app. You pick how you are feeling, pick a genre, and get a personalised list of 10 movies to watch.",
      technologies: ["HTML, CSS, JavaScript, Node, Express, Jest "],
      liveDemo: "https://movie-app-nu-hazel.vercel.app/",
      github: "https://github.com/gelogonza/movie-app"
    }
  ]

  return (
    <section id="projects" className="section" ref={containerRef}>
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 projects-header">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-1 gradient-heading">Projects</h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card rounded-2xl border border-white/20 bg-white shadow-lg overflow-hidden flex flex-col"
              >
                {project.figmaEmbed ? (
                  <div className="flex flex-col h-full">
                    <div className="aspect-video overflow-hidden">
                      <iframe
                        src={project.figmaEmbed}
                        className="w-full h-full border-0"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-5 flex flex-col gap-2">
                      <h3 className="text-lg font-bold text-orange-500">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs text-white bg-orange-500 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-xl font-bold text-orange-500 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-sm text-orange-400 leading-relaxed line-clamp-4">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-4 space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs text-white bg-orange-500 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1 text-xs text-white bg-orange-500 rounded-full">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3">
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 transition-all duration-200 text-white text-sm font-medium"
                          >
                            <svg
                              className="w-4 h-4"
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
                            Demo
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 transition-all duration-200 text-white text-sm font-medium"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
