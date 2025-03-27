import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { sampleProjects } from "@/lib/data"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tighter">All Projects</h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sampleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

