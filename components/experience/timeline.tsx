// components/experience/timeline.tsx
'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TimelineItem {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string[]
  type: 'work' | 'education'
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-muted" />

      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={cn(
            'relative mb-12 flex flex-col md:flex-row items-center',
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          )}
        >
          {/* Timeline dot */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

          {/* Content */}
          <div
            className={cn(
              'ml-12 md:ml-0 md:w-5/12 p-6 border rounded-xl bg-card shadow-sm',
              index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'
            )}
          >
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{item.type === 'work' ? 'Work' : 'Education'}</span>
            </div>

            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <h4 className="text-lg font-semibold text-muted-foreground mb-3">{item.company}</h4>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {item.period}
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {item.location}
              </div>
            </div>

            <ul className="space-y-2">
              {item.description.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  )
}