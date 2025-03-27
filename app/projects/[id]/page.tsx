import { Button } from "@/components/ui/button"
import { sampleProjects } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Github, LinkIcon } from "lucide-react"

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = sampleProjects.find((project) => project.id.toString() === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col gap-8">
        <Button variant="ghost" size="icon" className="w-fit" asChild>
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Link>
        </Button>

        <div className="flex flex-col gap-4">
          <div className="rounded-lg overflow-hidden border">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={1200}
              height={600}
              className="object-cover w-full aspect-video"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-lg text-gray-500">{project.description}</p>

            <div className="flex gap-4 pt-4">
              {project.githubUrl && (
                <Button variant="outline" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Repository
                  </Link>
                </Button>
              )}

              {project.liveUrl && (
                <Button asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

