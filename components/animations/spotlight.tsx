// components/animations/spotlight.tsx
'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SpotlightProps {
  className?: string
}

export function Spotlight({ className }: SpotlightProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className={cn(
        'absolute top-0 left-0 right-0 mx-auto w-[300px] h-[300px] bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl',
        className
      )}
    />
  )
}