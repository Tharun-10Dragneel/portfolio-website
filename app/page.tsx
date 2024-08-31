'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GithubIcon, LinkedinIcon, MailIcon, DownloadIcon, CodeIcon, HomeIcon, UserIcon, FolderIcon, WrenchIcon, PhoneIcon } from "lucide-react"

export default function Page() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateCursorPosition);
    return () => window.removeEventListener('mousemove', updateCursorPosition);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection(section)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
        style={{
          background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0) 20%)`,
          transition: 'background 0.3s ease',
        }}
      />
      <div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px)`,
          transition: 'transform 0.2s ease',
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="2"/>
          <circle cx="16" cy="16" r="4" fill="white"/>
        </svg>
      </div>
      <header className="fixed top-0 left-0 w-20 h-screen bg-gray-900 flex flex-col items-center justify-between py-8 z-40">
        <a className="flex items-center justify-center" href="#home" onClick={() => scrollToSection('home')}>
          <span className="font-bold text-xl">YN</span>
        </a>
        <nav className="flex flex-col gap-8">
          {[
            { id: 'home', Icon: HomeIcon },
            { id: 'about', Icon: UserIcon },
            { id: 'projects', Icon: FolderIcon },
            { id: 'skills', Icon: WrenchIcon },
            { id: 'contact', Icon: PhoneIcon }
          ].map(({ id, Icon }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(id)
              }}
              className={`p-2 rounded-full hover:bg-gray-800 transition-colors ${
                activeSection === id ? 'text-green-400' : 'text-gray-400'
              }`}
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-4">
          <a href="https://github.com/Tharun-10Dragneel" className="text-gray-400 hover:text-green-400 transition-colors">
            <GithubIcon className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/s-tharundhatri-8320b5300/" className="text-gray-400 hover:text-green-400 transition-colors">
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </div>
      </header>
      <main className="flex-1 ml-20">
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none mb-4 animate-fade-in-up">
              S Tharundhatri
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl mb-8 animate-fade-in-up animation-delay-200">
              App Developer 
            </p>
          </div>
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="container px-7 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-green-400">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <p className="text-gray-400 md:text-lg">
                  I'm a passionate app developer with a keen eye for design and a love for creating intuitive, responsive websites. 
                  With a background in both front-end and back-end technologies, I bring a holistic approach to app development, 
                  ensuring that every project I undertake is not just visually appealing but also robust and scalable.
                </p>
                <p className="text-gray-400 md:text-lg">
                  My journey in web development started 5 years ago, and since then, I've had the opportunity to work on a diverse 
                  range of projects, from small business websites to large-scale applications. I'm always excited to take on new 
                  challenges and learn new technologies to stay at the forefront of app development.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-green-400 rounded-full opacity-20 blur-3xl"></div>
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Your Name"
                  className="relative z-10 w-full h-auto rounded-full"
                  width="400"
                  height="400"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="min-h-screen py-20 bg-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-green-400">My Projects</h2>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Netflix Clone App',
                  description: 'A clone of the Netflix app built with modern web technologies.',
                  link: 'https://github.com/Tharun-10Dragneel/netflix-clone-app',
                  image: '/netflix-clone.jpg'
                },
                {
                  title: 'Discord Clone App',
                  description: 'A clone of the Discord app built with modern web technologies.',
                  link: 'https://github.com/Tharun-10Dragneel/discord-clone',
                  image: '/discord-clone.jpg'
                }
              ].map((project, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden group">
                  <div className="relative">
                    <img
                      alt={project.title}
                      className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                      height="200"
                      src={project.image}
                      width="400"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        as="a"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-black bg-green-400 hover:bg-green-500 transition-colors"
                      >
                        View Project
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold mb-2 text-green-400">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-green-400">Skills</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  name: 'ReactNative',
                  icon: 'react',
                  description: 'Developed cross-platform mobile applications with a focus on performance and user experience.'
                },
                {
                  name: 'Flutter',
                  icon: 'flutter',
                  description: 'Created beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.'
                },
                {
                  name: 'Python',
                  icon: 'python',
                  description: 'Utilized for backend development, data analysis, and automation tasks.'
                },
                {
                  name: 'Django',
                  icon: 'django',
                  description: 'Built scalable and secure web applications using this high-level Python web framework.'
                },
                {
                  name: 'Express',
                  icon: 'nodejs',
                  description: 'Developed fast, unopinionated, minimalist web applications for Node.js.'
                },
                {
                  name: 'Git',
                  icon: 'git',
                  description: 'Managed version control and collaborated efficiently on various projects.'
                }
              ].map((skill, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/20">
                  <img src={`/${skill.icon}-icon.svg`} alt={skill.name} className="h-12 w-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                  <p className="text-gray-400">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center bg-black">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-green-400">Contact Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-400 mb-4">
                  I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <MailIcon className="h-6 w-6 text-green-400" />
                    <span className="text-gray-300">Tharundhatri100204@gmai.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <LinkedinIcon className="h-6 w-6 text-green-400" />
                    <a href="https://www.linkedin.com/in/s-tharundhatri-8320b5300/" className="text-gray-300 hover:text-green-400 transition-colors">LinkedIn Profile</a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <GithubIcon className="h-6 w-6 text-green-400" />
                    <a href="https://github.com/Tharun-10Dragneel" className="text-gray-300 hover:text-green-400 transition-colors">GitHub Profile</a>
                  </div>
                </div>
              </div>
              <form className="space-y-4">
                <Input placeholder="Your Name" className="bg-gray-800 border-gray-700 text-white" />
                <Input placeholder="Your Email" type="email" className="bg-gray-800 border-gray-700 text-white" />
                <Textarea placeholder="Your Message" className="bg-gray-800 border-gray-700 text-white" />
                <Button className="w-full bg-green-400 text-black hover:bg-green-500 transition-colors">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 py-6 px-4 md:px-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© 2024 S Tharundhatri. All rights reserved.</p>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <a className="text-sm text-gray-400 hover:text-green-400 transition-colors" href="#">Terms of Service</a>
            <a className="text-sm text-gray-400 hover:text-green-400 transition-colors" href="#">Privacy Policy</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}