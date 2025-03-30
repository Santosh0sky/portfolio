import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-4 md:px-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Santosh Kumar Yadav. All rights reserved.</p>
        </div>
        <div className="flex justify-center md:justify-end gap-4">
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
    </footer>
  )
}

