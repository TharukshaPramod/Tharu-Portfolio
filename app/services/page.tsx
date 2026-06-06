// app/services/page.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BrainCircuit, Code, Database, Cloud, Bot, ChartBar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning Solutions',
    description: 'Custom AI models, predictive analytics, and Natural Language Processing (NLP) integration tailored for your business needs.',
    icon: BrainCircuit,
    features: [
      'LLM Integration (Llama 3, OpenAI)',
      'Predictive Modeling & Forecasting',
      'Computer Vision Applications',
      'Explainable AI (SHAP, LIME)'
    ],
  },
  {
    id: 'fullstack',
    title: 'Fullstack Web Development',
    description: 'End-to-end web applications built with modern, scalable, and responsive architectures delivering premium user experiences.',
    icon: Code,
    features: [
      'React & Next.js Frontends',
      'Spring Boot & Node.js Backends',
      'RESTful & GraphQL APIs',
      'Responsive, Accessible UI/UX'
    ],
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    description: 'Transforming raw data into actionable insights through advanced statistical analysis and interactive dashboards.',
    icon: ChartBar,
    features: [
      'Data Cleaning & Preprocessing',
      'Statistical Analysis',
      'Interactive Dashboards (Streamlit)',
      'Business Intelligence Reporting'
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Architecture & Microservices',
    description: 'Designing scalable, resilient, and secure cloud infrastructures using modern deployment and containerization strategies.',
    icon: Cloud,
    features: [
      'AWS & Azure Cloud Hosting',
      'Microservices Architecture',
      'Docker Containerization',
      'Database Management (SQL/NoSQL)'
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm mb-4 border border-primary/20">
          <Bot className="h-4 w-4 text-primary" />
          <span className="text-primary font-medium">What I Do</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
          Services & Expertise
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Combining deep analytical thinking with modern software engineering to build intelligent, scalable, and impactful solutions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service) => (
          <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-border/50 glass-effect relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <service.icon className="w-32 h-32 text-primary" />
            </div>
            
            <CardHeader>
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                {service.title}
              </CardTitle>
              <CardDescription className="text-base mt-2">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-muted-foreground">
                    <Database className="h-4 w-4 mr-3 text-primary/50" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="rounded-2xl glass-effect border border-primary/20 p-8 md:p-12 text-center bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none" />
        <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to start a project?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10">
          Whether you need a cutting-edge machine learning model or a full-stack web application, I can help you build it from the ground up.
        </p>
        <Button size="lg" className="shadow-lg shadow-primary/20 relative z-10 group" asChild>
          <Link href="/contact">
            Let's Talk
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
