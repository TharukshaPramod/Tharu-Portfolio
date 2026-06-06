// app/projects/[id]/page.tsx
import { projects } from '@/lib/constants'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ExternalLink, Github, Cpu, Zap, Award, Check } from 'lucide-react'

// Support Next.js 15 route params correctly
export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  // Await the params object in Next.js 15
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 md:px-6 py-12 md:py-24 max-w-6xl">
      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="hover:bg-primary/10 rounded-full transition-colors border border-transparent hover:border-primary/10">
          <Link href="/projects" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/75 bg-clip-text text-transparent tracking-tight leading-none">
          {project.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-4xl font-light">
          {project.shortDescription}
        </p>
      </div>

      {/* Main Image */}
      <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-12 border border-border/60 shadow-2xl glass-effect">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Content Column */}
        <div className="lg:col-span-2 space-y-12">
          {/* Project Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Project Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </section>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="flex gap-3 p-4 rounded-xl glass-effect border border-border/45 hover:border-primary/20 transition-colors duration-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 border border-primary/20">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm font-medium text-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technical Specifications */}
          <section className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Technical Specifications</h2>
            
            <div className="space-y-6">
              {/* System Architecture */}
              {project.architecture && (
                <div className="p-6 rounded-2xl border border-border/50 glass-effect space-y-3 hover:border-primary/30 transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary border border-primary/20">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold">System Design & Architecture</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-1">
                    {project.architecture}
                  </p>
                </div>
              )}

              {/* Challenges & Solutions */}
              {project.challenges && (
                <div className="p-6 rounded-2xl border border-border/50 glass-effect space-y-3 hover:border-amber-500/30 transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500 border border-amber-500/20">
                      <Zap className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold">Key Challenges & Engineering Solutions</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-1">
                    {project.challenges}
                  </p>
                </div>
              )}

              {/* Outcomes & Metrics */}
              {project.outcome && (
                <div className="p-6 rounded-2xl border border-border/50 glass-effect space-y-3 hover:border-emerald-500/30 transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500 border border-emerald-500/20">
                      <Award className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold">Project Outcome & Metrics</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-1">
                    {project.outcome}
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          {/* Tech Stack */}
          <section className="p-6 rounded-2xl glass-effect border border-border/50 space-y-4">
            <h3 className="text-lg font-bold tracking-tight">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-background/80 border border-border hover:bg-background transition-colors text-xs font-semibold px-2.5 py-1">
                  {tag}
                </Badge>
              ))}
            </div>
          </section>

          {/* Links & Repository */}
          <section className="p-6 rounded-2xl glass-effect border border-border/50 space-y-4">
            <h3 className="text-lg font-bold tracking-tight">Project Resources</h3>
            <div className="space-y-3">
              {project.links.github && (
                <Button className="w-full shadow-lg shadow-primary/20 hover:scale-[1.01] transition-transform duration-300 font-semibold" asChild>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <Github className="mr-2 h-4 w-4" />
                    View Repository
                  </a>
                </Button>
              )}
              {project.links.demo && (
                <Button variant="outline" className="w-full glass-effect hover:bg-muted/30 hover:scale-[1.01] transition-transform duration-300 font-semibold" asChild>
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}
