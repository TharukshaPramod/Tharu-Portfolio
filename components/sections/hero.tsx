// components/sections/hero.tsx - UPDATED VERSION
'use client'

import { Button } from '@/components/ui/button'
import { TextReveal } from '@/components/animations/text-reveal'
import { Spotlight } from '@/components/animations/spotlight'
import { FloatingCard } from '@/components/animations/floating-card'
import { ArrowRight, Mail, Sparkles, MapPin, Briefcase, Database, FileText } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <Spotlight className="top-40 left-1/4" />
        <Spotlight className="top-60 right-1/4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left Column - Text Content */}
        <div className="space-y-8 relative z-10">
          {/* Badge with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border px-4 py-2 text-sm bg-gradient-to-r from-primary/10 to-primary/5 glass-effect"
          >
            <Sparkles className="h-4 w-4 mr-2 text-primary" />
            🚀 4th Year Data Science Student @ SLIIT
          </motion.div>

          {/* Animated Heading */}
          <div className="space-y-4">
            <TextReveal 
              text="Hi, I'm Tharuksha Pramod"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
              delay={0.2}
            />
            <TextReveal
              text="AI/ML Engineer & Fullstack Developer"
              className="text-xl md:text-2xl font-bold text-primary"
              delay={0.4}
            />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            I craft intelligent digital experiences that blend <span className="font-semibold text-primary">Machine Learning</span> capabilities 
            with modern <span className="font-semibold text-primary">Fullstack Development</span>. Specializing in Python AI ecosystems, 
            Next.js, and Cloud Infrastructure.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button size="lg" className="group shadow-lg shadow-primary/20" asChild>
              <Link href="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="group glass-effect border-primary/50 text-primary hover:bg-primary/10" asChild>
              <a href="/Tharuksha_Pramod_CV.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="group glass-effect" asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Link>
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50"
          >
            <div>
              <div className="text-2xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">AI/ML</div>
              <div className="text-sm text-muted-foreground">Specialization</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">AWS/Azure</div>
              <div className="text-sm text-muted-foreground">Cloud Skills</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Circular Profile Photo */}
        <FloatingCard className="flex justify-center lg:justify-end">
          <div className="relative w-[320px] h-[320px]">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-indigo-500 to-blue-500 rounded-full blur-2xl opacity-40 animate-pulse" />
            
            {/* Main circular photo */}
            <div className="relative w-full h-full rounded-full border-8 border-background shadow-2xl overflow-hidden glass-effect">
              <Image
                src="/images/profile.jpeg" // Assuming this exists or the user will add it
                alt="Tharuksha Pramod - AI/ML Engineer"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 320px"
              />
              
              {/* Gradient overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>

            {/* Floating badges */}
            <div className="absolute -bottom-2 -left-4">
              <div className="px-4 py-2 bg-background/80 border border-border/50 rounded-full shadow-lg flex items-center gap-2 backdrop-blur-md">
                <Database className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Data Science</span>
              </div>
            </div>

            <div className="absolute -top-4 -right-4">
              <div className="px-4 py-2 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center gap-2">
                <MapPin className="h-3 w-3" />
                <span className="text-sm font-medium">Sri Lanka</span>
              </div>
            </div>

            <div className="absolute -bottom-4 right-8">
              <div className="px-4 py-2 bg-gradient-to-r from-primary to-indigo-600 text-white rounded-full shadow-lg flex items-center gap-2">
                <Briefcase className="h-3 w-3" />
                <span className="text-sm font-medium">AI Engineer</span>
              </div>
            </div>
          </div>
        </FloatingCard>
      </div>
    </section>
  )
}