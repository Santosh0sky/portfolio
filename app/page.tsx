import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { sampleProjects } from "@/lib/data"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-start gap-6 md:gap-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Hello, I'm <span className="text-primary">Santosh Kumar Yadav</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Front-End Developer specializing in modern web applications with React, Next.js, and Node.js
              </p>
            </div>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex gap-4 mt-2">
              <Link href="https://github.com/Santosh0sky" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/santosh-yadav-248763191/" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:santosh.kr.yd.sky@gmail.com">
                <Button size="icon" variant="ghost">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Featured Projects</h2>
              <p className="max-w-[700px] text-gray-500 md:text-lg">Check out some of my recent work</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sampleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <Button variant="outline" asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Skills & Expertise</h2>
              <p className="max-w-[700px] text-gray-500 md:text-lg">Technologies and tools I work with</p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "Tailwind CSS",
                "Redux",
                "GraphQL",
              ].map((skill) => (
                <div
                  key={skill}
                  className="flex items-center justify-center p-4 rounded-lg border bg-background hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 md:gap-8 max-w-[700px] mx-auto">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Get In Touch</h2>
              <p className="text-gray-500 md:text-lg">Have a project in mind or want to chat? Send me a message!</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

