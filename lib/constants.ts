// lib/constants.ts
import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'portfolio-v3',
    title: 'Modern Portfolio V3',
    description: 'A cutting-edge portfolio built with Next.js 15, TypeScript, and Tailwind CSS featuring 3D animations and MDX blog.',
    shortDescription: 'Modern portfolio with 3D animations',
    image: '/images/projects/portfolio.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Three.js'],
    links: {
      github: 'https://github.com/yourusername/portfolio-v3',
      demo: 'https://portfolio-demo.com',
    },
    featured: true,
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with real-time inventory, payment processing, and admin dashboard.',
    shortDescription: 'Full-stack e-commerce solution',
    image: '/images/projects/ecommerce.jpg',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Prisma'],
    links: {
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://ecommerce-demo.com',
    },
    featured: true,
  },
  {
    id: 'ai-chat-assistant',
    title: 'AI Chat Assistant',
    description: 'Intelligent chat assistant powered by GPT-4 with real-time voice synthesis and custom knowledge base.',
    shortDescription: 'AI-powered chat assistant',
    image: '/images/projects/ai-chat.jpg',
    tags: ['React', 'OpenAI', 'WebSockets', 'Tailwind', 'Vercel'],
    links: {
      github: 'https://github.com/yourusername/ai-chat',
      demo: 'https://ai-chat-demo.com',
    },
    featured: true,
  },
]

export const skills = [
  { name: 'Python / AI Stack', level: 95 },
  { name: 'JavaScript / TypeScript', level: 90 },
  { name: 'React / Next.js', level: 85 },
  { name: 'Java / Spring Boot', level: 80 },
  { name: 'Databases (SQL & NoSQL)', level: 85 },
  { name: 'Cloud (AWS / Azure)', level: 75 },
  { name: 'MERN / MEAN Stacks', level: 85 },
  { name: 'C++ / C#', level: 70 },
]