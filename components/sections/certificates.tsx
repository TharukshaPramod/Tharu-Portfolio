// components/sections/certificates.tsx
'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FloatingCard } from '@/components/animations/floating-card'
import { ExternalLink, Calendar, Award, X, Maximize2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

// Placeholders for your 20+ certificates. You will populate this array in your constants file later.
const certificates = [
  {
    id: 1,
    title: 'AWS Certified Machine Learning - Specialty',
    issuer: 'Amazon Web Services (AWS)',
    date: '2023',
    credentialId: 'AWS-ML-001',
    skills: ['AWS', 'Machine Learning', 'SageMaker'],
    image: '/images/profile.jpeg', // Replace with your certificate image
    link: 'https://aws.amazon.com/certification',
  },
  {
    id: 2,
    title: 'Microsoft Certified: Azure AI Engineer Associate',
    issuer: 'Microsoft Azure',
    date: '2023',
    credentialId: 'AZ-102-001',
    skills: ['Azure', 'AI Solutions', 'Cognitive Services'],
    image: '/images/profile.jpeg', // Replace with your certificate image
    link: 'https://learn.microsoft.com/en-us/credentials/',
  },
  // ... more certificates can be added here
]

export function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-12 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm mb-4 border border-primary/20">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium">20+ Professional Certifications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Certificates & Awards</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognized expertise across Data Science, Cloud Infrastructure, and Software Engineering.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FloatingCard hoverEffect={true}>
                <Card className="h-full group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:border-primary/50 glass-effect">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-lg bg-background border border-border shadow-inner flex items-center justify-center mb-4">
                        <Award className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs bg-background/50 backdrop-blur-sm">
                        {cert.issuer}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {cert.date}
                      <span className="mx-1">•</span>
                      <span className="font-mono text-xs truncate">ID: {cert.credentialId}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs bg-background/80"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Interactive Certificate Image */}
                    <div 
                      className="relative h-40 rounded-lg overflow-hidden bg-muted mb-4 cursor-pointer group/image border border-border/50"
                      onClick={() => setSelectedImage(cert.image)}
                    >
                      <Image 
                        src={cert.image} 
                        alt={cert.title} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover/image:scale-110" 
                      />
                      <div className="absolute inset-0 bg-background/20 group-hover/image:bg-background/0 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                        <Maximize2 className="text-white h-8 w-8" />
                      </div>
                    </div>

                    {/* Verify Button */}
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full group/btn glass-effect"
                      asChild
                    >
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        Verify Credential
                        <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </FloatingCard>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="ghost" size="lg" className="hover:bg-primary/10 hover:text-primary transition-colors" asChild>
            <a href="/certificates" className="group">
              View All 20+ Certificates
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white backdrop-blur-md transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </button>
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage}
                  alt="Certificate Full Size"
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}