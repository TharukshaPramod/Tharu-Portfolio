// app/projects/page.tsx
import { projects } from '@/lib/constants'
import { ProjectCard } from '@/components/projects/project-card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Code2 } from 'lucide-react'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <Button variant="ghost" size="sm" asChild className="mb-6 hover:bg-primary/10">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm border border-primary/20">
            <Code2 className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium">All Projects</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">My Portfolio</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive collection of my recent work, side projects, and research across Fullstack Development, Machine Learning, and Cloud Architecture.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}