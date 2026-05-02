// components/animations/floating-card.tsx
'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FloatingCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export function FloatingCard({ children, className, hoverEffect = true }: FloatingCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -10, scale: 1.02 } : {}}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn('relative', className)}
    >
      {children}
    </motion.div>
  )
}