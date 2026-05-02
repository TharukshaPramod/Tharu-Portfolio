// components/layout/footer.tsx
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Twitter, Mail, Sparkles } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/40 bg-background/50 backdrop-blur-xl">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 items-center md:items-start">
          
          {/* Brand & Tagline */}
          <div className="col-span-1 md:col-span-2 text-center md:text-left space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent inline-flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              {siteConfig.name}
            </h3>
            <p className="text-muted-foreground max-w-sm mx-auto md:mx-0">
              Building intelligent solutions and scalable web architectures at the intersection of AI and Fullstack Development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-semibold text-foreground">Explore</h4>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
              <Link href="/certificates" className="hover:text-primary transition-colors">Certificates</Link>
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary rounded-full" asChild>
                <Link href={siteConfig.links.github} target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary rounded-full" asChild>
                <Link href={siteConfig.links.linkedin} target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary rounded-full" asChild>
                <Link href="mailto:contact@example.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Engineered with <span className="text-primary">Next.js</span> & <span className="text-primary">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  )
}