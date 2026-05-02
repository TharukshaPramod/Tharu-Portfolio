// components/projects/project-card.tsx
'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FloatingCard } from '@/components/animations/floating-card'
import { ExternalLink, Github } from 'lucide-react'
import { Project } from '@/types/project'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <FloatingCard>
      <Card className="h-full overflow-hidden group hover:shadow-xl transition-shadow duration-300">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent z-10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Project Content */}
        <CardHeader>
          <CardTitle className="line-clamp-1">{project.title}</CardTitle>
          <CardDescription className="line-clamp-2">{project.shortDescription}</CardDescription>
        </CardHeader>

        <CardContent>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between">
          {/* Links */}
          <div className="flex gap-2">
            {project.links.github && (
              <Button size="sm" variant="ghost" asChild>
                <Link href={project.links.github} target="_blank">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.links.demo && (
              <Button size="sm" variant="ghost" asChild>
                <Link href={project.links.demo} target="_blank">
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>

          {/* View Details */}
          <Button size="sm" variant="outline" asChild>
            <Link href={`/projects/${project.id}`}>
              View Details
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </FloatingCard>
  )
}