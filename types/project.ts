// types/project.ts
export interface Project {
  id: string
  title: string
  description: string
  shortDescription: string
  image: string
  images?: string[] // Optional array of additional images
  tags: string[]
  links: {
    github?: string
    demo?: string
    website?: string
  }
  featured: boolean
  features?: string[]
  architecture?: string
  challenges?: string
  outcome?: string
}