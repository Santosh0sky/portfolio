import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col gap-12 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="rounded-full overflow-hidden border-4 border-primary/20 w-48 h-48 shrink-0">
            <Image
              src="/placeholder.svg?height=192&width=192"
              alt="Profile picture"
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tighter">Santosh kumar Yadav</h1>
            <p className="text-xl text-gray-500">Front-End Developer</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button asChild>
                <Link href="/placeholder.svg" download="resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tighter border-b pb-2">About Me</h2>
          <p className="text-gray-500">
            I'm a passionate Front-End Developer with 3++ years of experience building modern web applications. I
            specialize in React, Next.js, Node.js, and related technologies, focusing on creating performant, scalable,
            and user-friendly applications.
          </p>
          <p className="text-gray-500">
            With a background in computer science and a love for clean, efficient code, I approach each project with a
            focus on maintainability and best practices. I enjoy solving complex problems and continuously learning new
            technologies and techniques to improve my craft.
          </p>
          <p className="text-gray-500">
            When I'm not coding, you can find me creating digiral art, reading tech blogs, or contributing to open-source projects.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tighter border-b pb-2">Experience</h2>

          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-medium">Software Developer I, H & S Solar Private Limited</h3>
                <span className="text-sm text-gray-500">2023 - Present</span>
              </div>
              <p className="text-gray-500">
                Lead development of multiple client projects using Next.js, TypeScript, and GraphQL. Implemented CI/CD
                pipelines and mentored junior developers.
              </p>
            </div>
{/* 
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-medium">Web Developer, Digital Solutions</h3>
                <span className="text-sm text-gray-500">2018 - 2021</span>
              </div>
              <p className="text-gray-500">
                Developed and maintained client websites using React and Node.js. Collaborated with designers to
                implement responsive UI designs.
              </p>
            </div> */}

            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-medium">Software Developer, Magic Software</h3>
                <span className="text-sm text-gray-500">2022 - 2023</span>
              </div>
              <p className="text-gray-500">
                Assisted in mutiple project increasing production ecffient by 5% by making comprehension list of recurrent bug and there easy and avoidable solution. Participated in code reviews and testing.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tighter border-b pb-2">Education</h2>

          <div className="space-y-2">
            <div className="flex justify-between items-baseline">
              <h3 className="text-xl font-medium">BSc in Computer Science</h3>
              <span className="text-sm text-gray-500">2016 - 2020</span>
            </div>
            <p className="text-gray-500">GL Bajaj Institute of Management and Research</p>
          </div>
        </div>
      </div>
    </div>
  )
}

