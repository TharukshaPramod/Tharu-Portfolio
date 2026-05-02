import { Certificates } from '@/components/sections/certificates'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function CertificatesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-6 hover:bg-primary/10">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
      
      {/* We pass NO limit so it shows all certificates */}
      <Certificates />
    </div>
  )
}