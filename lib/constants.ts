// lib/constants.ts
import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'campusflow',
    title: 'CampusFlow: Smart Campus Management Platform',
    description: 'A full-stack university campus management platform designed to streamline facility bookings, incident reporting, resource management, and real-time notifications, all powered by a local AI assistant via Ollama (Llama 3).',
    shortDescription: 'AI-powered university management platform',
    image: '/projects/temp.jpg',
    images: ['/projects/temp.jpg'], // Fallback array
    tags: ['Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Ollama/Llama 3'],
    links: {
      github: 'https://github.com/TharukshaPramod/CampusFlow',
    },
    featured: true,
  },
  {
    id: 'cropsense',
    title: 'CropSense: Multi-Agent AI Yield Prediction System',
    description: 'An advanced multi-agent AI system designed to predict crop yields with unprecedented accuracy using distributed specialized AI agents, combining traditional ML with LLM reasoning, and Explainable AI (SHAP, LIME).',
    shortDescription: 'Multi-Agent AI Crop Prediction',
    image: '/projects/temp.jpg',
    images: ['/projects/temp.jpg'],
    tags: ['Python', 'Machine Learning', 'Ollama', 'Multi-Agent', 'Microservices'],
    links: {
      github: 'https://github.com/TharukshaPramod/CropSense',
    },
    featured: true,
  },
  {
    id: 'crimecast',
    title: 'CrimeCast: Chicago Crime Prediction System',
    description: 'An advanced machine learning system predicting arrest probabilities based on historical Chicago crime data. It analyzes spatial, temporal, and contextual factors to provide real-time risk assessments via an interactive dashboard.',
    shortDescription: 'Real-time Crime Prediction ML System',
    image: '/projects/temp.jpg',
    images: ['/projects/temp.jpg'],
    tags: ['Python', 'XGBoost', 'Random Forest', 'Streamlit', 'Data Science'],
    links: {
      github: 'https://github.com/TharukshaPramod/CrimeCast',
    },
    featured: true,
  },
  {
    id: 'sitemaster',
    title: 'SiteMaster: Construction Management System',
    description: 'A comprehensive, full-stack construction project management platform with advanced features for inventory management, financial tracking, order processing, and real-time notifications.',
    shortDescription: 'Full-stack Construction Management',
    image: '/projects/temp.jpg',
    images: ['/projects/temp.jpg'],
    tags: ['Node.js', 'React', 'MongoDB', 'Express', 'Fullstack'],
    links: {
      github: 'https://github.com/TharukshaPramod/SiteMaster',
    },
    featured: false,
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