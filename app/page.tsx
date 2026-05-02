// app/(root)/page.tsx
import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'
import { Experience } from '@/components/sections/experience'
import { Certificates } from '@/components/sections/certificates' // Add this

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Certificates /> {/* Add this line */}
    </>
  )
}