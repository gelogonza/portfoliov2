import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Simple fade-in animations on mount
    gsap.from('.experience-header', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2
    })

    // Animate experience items
    gsap.from('.experience-item', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
      delay: 0.5
    })
  }, { scope: containerRef })

  const certifications = [
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      issuedDate: "May 2025",
      credentialId: "17F9543DC8AB3B1B",
      skills: ["Azure AI", "Azure AI Foundry", "Machine Learning", "Cognitive Services", "Natural Language Processing", "Computer Vision", "AI Ethics", "Cloud Computing", "Azure Portal", "AI Model Training"],
      badgeId: "AI-900",
      badgeImage: "/images/microsoft.png"
    },
    {
      title: "Docker Foundations Professional Certificate",
      issuer: "Docker",
      issuedDate: "2025",
      description: "Completed Docker Fundamentals certification covering containerization concepts, Docker architecture, and container orchestration.",
      skills: ["Docker", "Containerization", "Docker Compose", "DevOps", "Container Orchestration", "Microservices", "CI/CD", "Docker Hub", "Container Security", "Image Management"],
      badgeImage: "/images/docker.png"
    },
    {
      title: "Verizon Cloud Platform",
      issuer: "Forage",
      issuedDate: "Apr 2025",
      description: "Completed a job simulation building a hypothetical new VPN product for Verizon's Cloud Computing platform.",
      skills: ["Agile Environment", "Research Skills", "Cloud Computing", "VPN Architecture", "Network Security", "Product Development", "Technical Documentation", "System Design", "Team Collaboration", "Problem Solving"],
      badgeImage: "/images/Verizon.png"
    }
  ]

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Infosys",
      period: "June 2025 - August 2025",
      description: `• Engineered an automated PII detection and redaction system for PDF documents in Python, ensuring data
privacy compliance and reducing manual review workload by 70%
• Implemented a regex and token-based algorithm to identify and redact sensitive data (e.g., SSNs, bank accounts,
credit info), producing timestamped redacted PDFs with audit-ready reports
• Designed a dual-mode PDF pipeline supporting text-based and scanned files by integrating Google Document
AI OCR for high-accuracy extraction`,
      type: "professional"
    },
    {
      title: "Software Engineer Intern",
      company: "Indiana University Bloomington",
      period: "August 2025 - December 2025",
      description: `• Building and configuring Nvidia Jetson embedded GPU platforms with CUDA for portable nanopore
sequencing; optimizing workflows with MinKNOW and Dorado on Linux
• Processing ONT datasets using Guppy, minimap2, Medaka, performing basecalling, alignment, methylation, and
variant calling
• Training Machine Learning models with HIV mutation datasets, making a teacher/student model where we can
rank medicines on a score-based system`,
      type: "professional"
    },
    {
      title: "Freelance Software Engineer",
      company: "F Perez Concrete",
      period: "July 2025 - September 2025",
  description: `• Built and deployed a Next.js full-stack web app with 40% faster load times and a Mapbox-powered quote
calculator, cutting manual prep time by 50%
• Engineered a secure admin dashboard with JWT authentication, REST APIs, file uploads, and revenue tracking,
saving 5-10 hrs/week.
• Integrated Google Analytics API to track visitor behavior and conversions, providing actionable insights to increase
site traffic, SEO, and lead quality`,
  type: "professional"
    },
    {
      title: "Campus Ambassador",
      company: "Simplify",
      period: "October 2025 - December 2025",
      description:"Participated in club outreach, sending emails, posting on social media, promoting to peers and other students on campus, demonstrated using demos, showcased the product, partnered with clubs for email lists and more networking to promote the product.",
      type:"professional"
    },
    {
      title: "Member",
      company: "Fintech Club at IU",
      period: "Current",
      description: "Active member exploring the intersection of finance and technology, participating in discussions and projects related to financial innovation.",
      type: "extracurricular"
    },
    {
      title: "Chief Technology Officer",
      company: "Entropic at IU",
      period: "Current",
      description: "Active member and officer of Entropic. In charge of planning, communicating, and coming up with project ideas for meetings. We have successfully partnered with Claude Ambassadors, Simplify Ambassadors, and have hosted and participated in hackathons on campus.",
      type: "extracurricular"
    },
  ]

  const courses = [
    {
      title: "Intro to Informatics",
      institution: "Indiana University Bloomington",
      period: "January 2025 - May 2025",
      description: "Covered basic HTML and CSS fundamentals, front-end development principles, and basic informatics concepts.",
      technologies: ["HTML", "CSS", "Front-end Development"]
    },
    {
      title: "Intro to Software Systems",
      institution: "Indiana University Bloomington", 
      period: "January 2025 - May 2025",
      description: "Learned Java programming skills, object-oriented programming, writing clean code, and explored advanced topics through test-driven development.",
      technologies: ["Java", "OOP", "JUnit", "IntelliJ", "Maven", "Data Structures", "Git", "Paired Programming"]
    },
    {
      title: "Discrete Structures",
      institution: "Indiana University Bloomington",
      period: "January 2025 - May 2025", 
      description: "Explored foundational concepts of computer science and mathematics that underpin logical reasoning, algorithms, and data structures.",
      technologies: ["Proofs", "Logic", "Theory", "Relations"]
    },
    {
      title: "Intro to Computers and Programming",
      institution: "Indiana University Bloomington",
      period: "August 2024 - December 2024",
      description: "Covered Python syntax, data structures, recursion, and mathematical concepts in programming.",
      technologies: ["Python", "Recursion", "Sort", "File I/O"]
    },
    {
      title: "Software Development in Python",
      institution: "Ivy Tech Community College",
      period: "January 2024 - May 2024",
      description: "Learned fundamental and advanced Python concepts, focusing on industry-standard programs and data structures with object-oriented programming.",
      technologies: ["Python", "SQL", "SpyderIDE"]
    },
    {
      title: "Computer Science 2",
      institution: "Ivy Tech Community College",
      period: "January 2024 - May 2024",
      description: "Expanded C++ knowledge focusing on object-oriented programming including classes, objects, inheritance, polymorphism, operator overloading, exception handling, recursion, streams and file I/O.",
      technologies: ["C++", "OOP", "Software Engineering", "Code Review"]
    },
    {
      title: "Computer Science 1", 
      institution: "Ivy Tech Community College",
      period: "August 2023 - December 2023",
      description: "Learned C++ basics and simple program development, along with fundamentals of Object-Oriented Programming.",
      technologies: ["C++", "Data Structures", "Debugging", "Microsoft Visual Studio"]
    },
    {
      title: "Computing Logic",
      institution: "Ivy Tech Community College",
      period: "January 2023 - May 2023",
      description: "Learned to code simple programs in Python and explored basics of computing logic and digital systems.",
      technologies: ["Python", "Logic Gates", "Karnaugh Maps", "Circuits"]
    }
  ]

  return (
    <section id="experience" ref={containerRef} className="section">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="experience-header text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-heading">Experience</h2>
          </div>

          <div className="experience-content space-y-12">
            {/* Certifications */}
            <div className="experience-item">
              <h3 className="text-2xl font-semibold gradient-heading mb-8">Licenses & Certifications</h3>
              <div className="grid gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/30 transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Badge Icon - Consistent styling */}
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-lg p-2 flex items-center justify-center transition-transform hover:scale-105`}>
                          <div className={`${cert.issuer === 'Microsoft' ? 'bg-white p-1 rounded' : ''} flex items-center justify-center`}>
                            <img 
                              src={cert.badgeImage} 
                              alt={`${cert.issuer} Logo`}
                              className={`object-contain ${
                                cert.issuer === 'Microsoft' 
                                  ? 'w-12 h-12 md:w-16 md:h-16' 
                                  : 'w-12 h-12 md:w-16 md:h-16'
                              }`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Certificate Details */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-white mb-1">{cert.title}</h4>
                            <p className="text-white font-medium mb-1">{cert.issuer}</p>
                            <p className="text-white text-sm">Issued {cert.issuedDate}</p>
                            {cert.credentialId && (
                              <p className="text-white text-sm">Credential ID {cert.credentialId}</p>
                            )}
                          </div>
                        </div>

                        {cert.description && (
                          <p className="text-white leading-relaxed mb-4">{cert.description}</p>
                        )}

                        {cert.skills && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {cert.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1 text-sm text-white bg-white/10 rounded-full border border-white/20 backdrop-blur-lg"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional & Extracurricular Experience */}
            <div className="experience-item">
              <h3 className="text-2xl font-semibold gradient-heading mb-8">Professional & Leadership</h3>
              <div className="grid gap-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/30 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                        <p className="text-white font-medium">{exp.company}</p>
                      </div>
                      <span className="text-white mt-2 md:mt-0">{exp.period}</span>
                    </div>
                    <p className="text-white leading-relaxed whitespace-pre-line">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Coursework */}
            <div className="experience-item">
              <h3 className="text-2xl font-semibold gradient-heading mb-8">Academic Coursework</h3>
              <div className="grid gap-6">
                {courses.map((course, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-white/30 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white">{course.title}</h4>
                        <p className="text-white font-medium">{course.institution}</p>
                      </div>
                      <span className="text-white mt-2 md:mt-0">{course.period}</span>
                    </div>
                    <p className="text-white leading-relaxed mb-4">{course.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {course.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm text-white bg-white/10 rounded-full border border-white/20 backdrop-blur-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 