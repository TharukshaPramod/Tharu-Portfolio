// components/sections/hero.tsx
import { Button } from '@/components/ui/button'
import { TextReveal } from '@/components/animations/text-reveal'
import { ArrowRight, Download } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
          🚀 Available for freelance work
        </div>

        {/* Animated Heading */}
        <div className="space-y-4">
          <TextReveal 
            text="Hi, I'm Your Name"
            className="text-4xl md:text-6xl font-bold"
            delay={0.2}
          />
          <TextReveal
            text="Frontend Developer & UI/UX Designer"
            className="text-2xl md:text-4xl font-bold text-primary"
            delay={0.4}
          />
        </div>

        {/* Description */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          I craft exceptional digital experiences that blend beautiful design 
          with cutting-edge technology. Specializing in React, Next.js, and 
          modern web development.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button size="lg" asChild>
            <Link href="/projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">
              Get In Touch
              <Download className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}