// components/sections/certificates.tsx
'use client'

import { useState, useMemo, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { FloatingCard } from '@/components/animations/floating-card'
import { 
  ExternalLink, 
  Calendar, 
  Award, 
  X, 
  Maximize2, 
  Search, 
  Cloud, 
  Cpu, 
  Server, 
  Layers, 
  Filter,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { certificates } from '@/lib/certificates'

interface CertificatesProps {
  limit?: number
}

export function Certificates({ limit }: CertificatesProps = {}) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'AWS' | 'Azure' | 'AI/ML' | 'Dev & DB'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null)

  // Pre-calculate counts for stats dashboard
  const stats = useMemo(() => {
    const total = certificates.length
    const aws = certificates.filter(c => c.category === 'AWS').length
    const azure = certificates.filter(c => c.category === 'Azure').length
    const aiMl = certificates.filter(c => c.category === 'AI/ML').length
    const devDb = certificates.filter(c => c.category === 'Dev & DB').length
    return { total, aws, azure, aiMl, devDb }
  }, [])

  // Filtered certificates to display
  const displayCertificates = useMemo(() => {
    if (limit) {
      // Curate 3 high-impact certifications for the homepage preview
      return [
        certificates.find(c => c.id === 1),   // AWS Practitioner
        certificates.find(c => c.id === 15),  // Azure Virtual Machines
        certificates.find(c => c.id === 23),  // Machine Learning Using Python
      ].filter(Boolean) as typeof certificates
    }

    return certificates.filter((cert) => {
      const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory
      const searchLower = searchQuery.toLowerCase()
      const matchesSearch =
        cert.title.toLowerCase().includes(searchLower) ||
        cert.issuer.toLowerCase().includes(searchLower) ||
        cert.skills.some(skill => skill.toLowerCase().includes(searchLower))
      return matchesCategory && matchesSearch
    })
  }, [limit, selectedCategory, searchQuery])

  // Lightbox Navigation
  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (selectedCertIndex === null) return
    setSelectedCertIndex((prev) => 
      prev === 0 ? displayCertificates.length - 1 : (prev as number) - 1
    )
  }

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (selectedCertIndex === null) return
    setSelectedCertIndex((prev) => 
      prev === displayCertificates.length - 1 ? 0 : (prev as number) + 1
    )
  }

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedCertIndex === null) return
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'Escape') setSelectedCertIndex(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedCertIndex, displayCertificates])

  // Category Configuration for Filter Tabs
  const categoriesList = [
    { id: 'all', label: 'All', count: stats.total, icon: Layers },
    { id: 'AWS', label: 'AWS', count: stats.aws, icon: Cloud },
    { id: 'Azure', label: 'Azure', count: stats.azure, icon: Cloud },
    { id: 'AI/ML', label: 'AI/ML & Data', count: stats.aiMl, icon: Cpu },
    { id: 'Dev & DB', label: 'Dev & DB', count: stats.devDb, icon: Server },
  ]

  return (
    <section className="py-12 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm mb-4 border border-primary/20">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium">{stats.total} Professional Certifications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            {limit ? 'Featured Certifications' : 'Certificates & Credentials'}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {limit 
              ? 'A selection of primary certifications demonstrating expertise in cloud computing and machine learning.'
              : 'Explore my verified course accomplishments in cloud infrastructure, databases, data science, and AI.'}
          </p>
        </div>

        {/* Stats Dashboard - Only show on full Certificates Page */}
        {!limit && (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12 max-w-5xl mx-auto">
            {/* Total */}
            <div className="glass-effect border border-border/50 rounded-xl p-4 text-center hover:border-primary/30 transition-colors duration-300">
              <Award className="h-5 w-5 text-primary mx-auto mb-2" />
              <div className="text-2xl font-extrabold text-foreground mb-0.5">{stats.total}</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Total Certs</div>
            </div>
            {/* AWS */}
            <div className="glass-effect border border-border/50 rounded-xl p-4 text-center hover:border-amber-500/30 transition-colors duration-300">
              <Cloud className="h-5 w-5 text-amber-500 mx-auto mb-2" />
              <div className="text-2xl font-extrabold text-amber-500 mb-0.5">{stats.aws}</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">AWS Cloud</div>
            </div>
            {/* Azure */}
            <div className="glass-effect border border-border/50 rounded-xl p-4 text-center hover:border-blue-500/30 transition-colors duration-300">
              <Cloud className="h-5 w-5 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-extrabold text-blue-500 mb-0.5">{stats.azure}</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Azure Cloud</div>
            </div>
            {/* AI/ML */}
            <div className="glass-effect border border-border/50 rounded-xl p-4 text-center hover:border-purple-500/30 transition-colors duration-300">
              <Cpu className="h-5 w-5 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-extrabold text-purple-500 mb-0.5">{stats.aiMl}</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">AI/ML & Data</div>
            </div>
            {/* Dev & DB */}
            <div className="glass-effect border border-border/50 rounded-xl p-4 text-center col-span-2 md:col-span-1 hover:border-emerald-500/30 transition-colors duration-300">
              <Server className="h-5 w-5 text-emerald-500 mx-auto mb-2" />
              <div className="text-2xl font-extrabold text-emerald-500 mb-0.5">{stats.devDb}</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Dev & DB</div>
            </div>
          </div>
        )}

        {/* Filter and Search Bar - Only show on full Certificates Page */}
        {!limit && (
          <div className="flex flex-col gap-6 items-center justify-between mb-12 max-w-5xl mx-auto w-full lg:flex-row">
            {/* Search Input */}
            <div className="relative w-full lg:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search certificates or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-full border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 justify-center w-full lg:w-auto">
              {categoriesList.map((cat) => {
                const Icon = cat.icon
                const isActive = selectedCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id as any)}
                    className={`relative px-4 py-2 rounded-full border text-xs font-semibold transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? 'text-primary-foreground border-transparent'
                        : 'bg-background/40 hover:bg-background/80 text-muted-foreground hover:text-foreground border-border'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 bg-primary rounded-full -z-10 shadow-md shadow-primary/25"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <Icon className="h-3.5 w-3.5" />
                    <span>{cat.label}</span>
                    <Badge 
                      variant="secondary" 
                      className={`text-[10px] px-1.5 py-0.5 rounded-full border-none pointer-events-none ${
                        isActive 
                          ? 'bg-primary-foreground/20 text-primary-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {cat.count}
                    </Badge>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Empty State */}
        {displayCertificates.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 glass-effect border border-border/40 rounded-2xl max-w-md mx-auto"
          >
            <Filter className="h-10 w-10 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-bold mb-1">No certificates found</h3>
            <p className="text-muted-foreground text-sm mb-6 px-4">
              We couldn't find any certificates matching "{searchQuery}". Try adjusting your keywords or categories.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery('')
                setSelectedCategory('all')
              }}
            >
              Reset Filters
            </Button>
          </motion.div>
        )}

        {/* Certificates Grid */}
        {displayCertificates.length > 0 && (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {displayCertificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <FloatingCard hoverEffect={true}>
                    <Card className="h-full group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:border-primary/40 glass-effect flex flex-col justify-between overflow-hidden">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="w-10 h-10 rounded-lg bg-background border border-border shadow-inner flex items-center justify-center mb-3">
                            {cert.category === 'AWS' && <Cloud className="h-5 w-5 text-amber-500" />}
                            {cert.category === 'Azure' && <Cloud className="h-5 w-5 text-blue-500" />}
                            {cert.category === 'AI/ML' && <Cpu className="h-5 w-5 text-purple-500" />}
                            {cert.category === 'Dev & DB' && <Server className="h-5 w-5 text-emerald-500" />}
                          </div>
                          <Badge variant="outline" className="text-xs bg-background/50 backdrop-blur-sm px-2.5 py-0.5 border-border">
                            {cert.issuer}
                          </Badge>
                        </div>
                        <CardTitle className="text-base leading-snug group-hover:text-primary transition-colors min-h-[3rem] flex items-center">
                          {cert.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <Calendar className="h-3 h-3" />
                          <span>{cert.date}</span>
                          <span className="mx-0.5">•</span>
                          <span className="font-mono truncate">ID: {cert.credentialId}</span>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0 flex flex-col gap-4">
                        {/* Skills Badges */}
                        <div className="flex flex-wrap gap-1.5 min-h-[3.2rem] items-start">
                          {cert.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-[10px] bg-background/60 hover:bg-background/80 transition-colors px-2 py-0.5"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        {/* Certificate Preview Image */}
                        <div 
                          className="relative h-44 rounded-lg overflow-hidden bg-muted cursor-pointer group/image border border-border/60"
                          onClick={() => setSelectedCertIndex(index)}
                        >
                          <Image 
                            src={cert.image} 
                            alt={cert.title} 
                            fill 
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover/image:scale-105" 
                          />
                          <div className="absolute inset-0 bg-background/10 group-hover/image:bg-background/0 transition-colors duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-black/45 backdrop-blur-sm">
                            <Maximize2 className="text-white h-7 w-7" />
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full text-xs hover:bg-primary/10 transition-colors font-medium border-border"
                            onClick={() => setSelectedCertIndex(index)}
                          >
                            View Image
                          </Button>
                          {cert.link && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="w-full text-xs font-medium"
                              asChild
                            >
                              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                Verify
                                <ExternalLink className="ml-1.5 h-3 w-3" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </FloatingCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* View All Button - Only show on the Homepage preview */}
        {limit && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-full border-primary/20 px-8" asChild>
              <Link href="/certificates" className="group flex items-center gap-2">
                View All {stats.total} Certificates
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        )}
      </div>

      {/* Premium Lightbox Modal */}
      <AnimatePresence>
        {selectedCertIndex !== null && displayCertificates[selectedCertIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-6"
            onClick={() => setSelectedCertIndex(null)}
          >
            {/* Top Navigation / Status */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
              <span className="text-xs font-semibold bg-black/40 border border-white/10 backdrop-blur-md px-3.5 py-2 rounded-full font-mono">
                {selectedCertIndex + 1} / {displayCertificates.length}
              </span>
              <button 
                className="p-2.5 bg-black/40 hover:bg-black/80 rounded-full text-white backdrop-blur-md transition-colors border border-white/10"
                onClick={() => setSelectedCertIndex(null)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Slider Content */}
            <div 
              className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                className="absolute left-2 md:-left-8 z-10 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white backdrop-blur-md transition-colors border border-white/10 shadow-lg"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Main Image */}
              <div className="relative w-full h-full select-none">
                <Image
                  src={displayCertificates[selectedCertIndex].image}
                  alt={displayCertificates[selectedCertIndex].title}
                  fill
                  className="object-contain"
                  quality={100}
                  priority
                />
              </div>

              {/* Next Button */}
              <button
                className="absolute right-2 md:-right-8 z-10 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white backdrop-blur-md transition-colors border border-white/10 shadow-lg"
                onClick={handleNext}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Description Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="mt-6 max-w-2xl w-full bg-black/60 border border-white/10 backdrop-blur-md rounded-xl p-5 text-white flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <Badge className="bg-primary/20 text-primary border border-primary/30 mb-2 font-mono text-[10px]">
                  {displayCertificates[selectedCertIndex].category} Certification
                </Badge>
                <h3 className="font-bold text-lg leading-snug">{displayCertificates[selectedCertIndex].title}</h3>
                <p className="text-sm text-gray-300 mt-1">
                  Issued by <span className="font-semibold text-white">{displayCertificates[selectedCertIndex].issuer}</span> in {displayCertificates[selectedCertIndex].date}
                </p>
                {displayCertificates[selectedCertIndex].credentialId && (
                  <p className="text-xs text-gray-400 font-mono mt-1.5 bg-white/5 inline-block px-2 py-0.5 rounded border border-white/5">
                    Credential ID: {displayCertificates[selectedCertIndex].credentialId}
                  </p>
                )}
              </div>
              {displayCertificates[selectedCertIndex].link && (
                <Button className="bg-primary hover:bg-primary/95 text-primary-foreground font-semibold shrink-0" asChild>
                  <a href={displayCertificates[selectedCertIndex].link} target="_blank" rel="noopener noreferrer">
                    Verify Online
                    <ExternalLink className="ml-1.5 h-4 w-4" />
                  </a>
                </Button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}