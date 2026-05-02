// components/sections/experience.tsx
'use client'

import { Timeline } from '@/components/experience/timeline'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

const timelineItems = [
  {
    id: '1',
    title: 'BSc (Hons) in Data Science',
    company: 'Sri Lanka Institute of Information Technology (SLIIT)',
    location: 'Malabe, Sri Lanka',
    period: 'Current (4th Year)',
    description: [
      'Currently reading for a degree in Data Science, focusing on Machine Learning and Cloud Computing.',
      'Core 3rd Year Modules: Machine Learning & Optimizing Methods, Massive Data Processing & Cloud Computing.',
      'Data & Web: Data Warehousing & Business Intelligence, Information Retrieval & Web Analytics.',
      'Systems & Frameworks: Programming Applications & Frameworks, Database Systems & Administration.',
    ],
    type: 'education' as const,
  },
  {
    id: '2',
    title: 'AI/ML & Fullstack Projects',
    company: 'Independent Developer',
    location: 'Remote',
    period: '2023 - Present',
    description: [
      'Developed multiple full-stack applications using Next.js, React, Node.js, and Spring Boot.',
      'Integrated AI capabilities using LangChain, Hugging Face, and OpenAI/Gemini models.',
      'Managed cloud infrastructure and database deployments on AWS and Azure.',
    ],
    type: 'work' as const,
  },
]

export function Experience() {
  return (
    <section className="py-12 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Journey & Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic foundation and hands-on experience
          </p>
        </div>

        <Timeline items={timelineItems} />

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Button size="lg" className="group shadow-lg shadow-primary/20" asChild>
              <a href="/resume.pdf" download>
                Download Resume
                <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glass-effect" asChild>
              <a href="/contact">Let's Connect</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}