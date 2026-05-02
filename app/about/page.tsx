// app/about/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Mail, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Passionate developer with a focus on creating beautiful, functional, and user-centered digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>My Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Hello! I'm [Your Name], a passionate frontend developer with over 3 years of experience 
              building modern web applications. My journey in web development started during my college 
              years, and I've been hooked ever since.
            </p>
            <p>
              I specialize in creating responsive, performant, and accessible web applications using 
              React, Next.js, and modern web technologies. I believe in writing clean, maintainable 
              code and staying up-to-date with the latest industry trends.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge through blog posts and tutorials.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Card */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Facts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">3+ Years</div>
                <div className="text-sm text-muted-foreground">Experience</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold">Languages I Speak</h4>
              <div className="flex flex-wrap gap-2">
                {['English', 'Spanish', 'French'].map((lang) => (
                  <span key={lang} className="px-3 py-1 bg-muted text-sm rounded-full">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Currently Learning</h4>
              <div className="flex flex-wrap gap-2">
                {['Three.js', 'Rust', 'GraphQL'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}