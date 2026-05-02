// app/about/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Mail, Calendar, Code2, Globe } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm mb-4 border border-primary/20">
          <Code2 className="h-4 w-4 text-primary" />
          <span className="text-primary font-medium">AI/ML Engineer & Fullstack Developer</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">About Me</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Passionate developer with a focus on creating intelligent, scalable, and user-centered digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <Card className="lg:col-span-2 glass-effect border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl">My Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Hello! I'm <strong className="text-foreground">H D T P Sankalpa</strong>, a 4th-year Data Science undergraduate at SLIIT, with a deep passion for 
              Machine Learning and Fullstack Web Development. My journey into tech started with a curiosity for how data 
              can be transformed into intelligent, actionable insights.
            </p>
            <p>
              I specialize in creating robust AI/ML solutions and scalable web applications. My toolkit includes 
              Python, React, Next.js, Spring Boot, and cutting-edge AI frameworks like LangChain, Hugging Face, and Ollama.
              I believe in writing clean architecture and developing systems that solve real-world problems.
            </p>
            <p>
              When I'm not training models or building web apps, you can find me exploring cloud architectures (AWS/Azure), 
              contributing to hackathons, or continuously expanding my knowledge in the ever-evolving AI landscape.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <Button size="lg" className="shadow-lg shadow-primary/20" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="glass-effect" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Card */}
        <Card className="glass-effect border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl">Quick Facts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-background border border-primary/20 shadow-inner">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">4th Year</div>
                <div className="text-sm text-muted-foreground">BSc Data Science @ SLIIT</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                Languages I Speak
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Sinhala', 'English'].map((lang) => (
                  <span key={lang} className="px-3 py-1.5 bg-background border border-border text-sm rounded-md shadow-sm">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Currently Focused On</h4>
              <div className="flex flex-wrap gap-2">
                {['LLM Integration', 'Microservices', 'Cloud Architecture'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary text-sm rounded-md">
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