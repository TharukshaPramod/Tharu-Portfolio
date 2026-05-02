// app/blog/page.tsx
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="text-center mb-16">
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Coming soon! Articles about web development, design, and technology.
        </p>
      </div>

      {/* Placeholder for blog posts */}
      <div className="text-center py-12">
        <p className="text-muted-foreground">Blog posts will appear here soon...</p>
      </div>
    </div>
  )
}