// components/sections/skills.tsx
'use client'

import { SkillBar } from '@/components/skills/skill-bar'
import { skills } from '@/lib/constants'
import { Code, Palette, Database, Server, BrainCircuit, Cloud } from 'lucide-react'

const skillCategories = [
  { icon: BrainCircuit, title: 'AI & Data Science', color: 'text-primary' },
  { icon: Server, title: 'Backend & Frameworks', color: 'text-green-500' },
  { icon: Code, title: 'Frontend & Web', color: 'text-blue-500' },
  { icon: Database, title: 'Databases & Cloud', color: 'text-orange-500' },
]

export function Skills() {
  return (
    <section className="py-12 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive toolkit spanning Machine Learning, Fullstack Development, and Cloud Infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skill Bars */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Technical Proficiency</h3>
            <div className="p-6 rounded-2xl glass-effect space-y-6">
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Skill Categories */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Expertise Areas</h3>
            <div className="grid grid-cols-2 gap-6">
              {skillCategories.map((category) => (
                <div
                  key={category.title}
                  className="p-6 rounded-xl glass-effect hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:border-primary/50"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`p-4 rounded-full bg-background border border-border/50 shadow-inner ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold">{category.title}</h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Tools & Technologies */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Core Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  // AI/ML
                  'TensorFlow', 'Scikit-Learn', 'NumPy', 'Pandas', 'LangChain', 'LangGraph', 'Hugging Face',
                  // Backend
                  'Spring Boot', 'Node.js', 'Express', 'Python', 'Java', 'C++', 'C#', 'PHP',
                  // Frontend
                  'React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind', 'HTML/CSS',
                  // DB & Cloud
                  'PostgreSQL', 'Oracle', 'MongoDB', 'AWS', 'Azure', 'NoSQL'
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 bg-background border border-border text-sm rounded-md hover:bg-primary/20 hover:text-primary transition-colors shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}