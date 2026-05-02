// app/certificates/page.tsx
import { certificates } from '@/lib/certificates'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ExternalLink, Calendar, Award, Download } from 'lucide-react'
import Link from 'next/link'

export default function CertificatesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm mb-4">
          <Award className="h-4 w-4" />
          Professional Development
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Certifications & Awards</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Documented proof of expertise and continuous learning in modern web technologies.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {certificates.map((cert) => (
          <Card key={cert.id} className="group hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <Badge variant="outline" className="text-xs">
                  {cert.issuer}
                </Badge>
              </div>
              
              <CardTitle className="text-xl group-hover:text-primary transition-colors mb-2">
                {cert.title}
              </CardTitle>
              
              <CardDescription className="flex items-center gap-2">
                <Calendar className="h-3 w-3" />
                {cert.date}
                <span className="mx-1">•</span>
                <span className="font-mono text-xs">ID: {cert.credentialId}</span>
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Verify Certificate
                  </a>
                </Button>
                
                <Button size="sm" variant="ghost" className="w-full" asChild>
                  <a href={cert.pdfUrl} download>
                    <Download className="mr-2 h-3 w-3" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Note */}
      <div className="text-center border-t pt-8">
        <p className="text-muted-foreground text-sm">
          All certificates are verifiable through their respective issuing platforms. 
          Contact me for verification or references.
        </p>
      </div>
    </div>
  )
}