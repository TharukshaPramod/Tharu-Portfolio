// lib/certificates.ts
export interface Certificate {
  id: number
  title: string
  issuer: string
  date: string
  credentialId: string
  skills: string[]
  link: string
  pdfUrl: string
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Next.js 15 Certification',
    issuer: 'Vercel',
    date: '2024',
    credentialId: 'NEXT-2024-001',
    skills: ['Next.js', 'React', 'TypeScript', 'Server Components'],
    link: 'https://vercel.com/certification',
    pdfUrl: '/certificates/nextjs-cert.pdf',
  },
  {
    id: 2,
    title: 'Advanced React Patterns',
    issuer: 'Frontend Masters',
    date: '2023',
    credentialId: 'REACT-ADV-2023',
    skills: ['React', 'Performance', 'Patterns', 'Testing'],
    link: 'https://frontendmasters.com/certificates',
    pdfUrl: '/certificates/react-cert.pdf',
  },
  {
    id: 3,
    title: 'TypeScript Mastery',
    issuer: 'TypeScript Academy',
    date: '2023',
    credentialId: 'TS-MASTER-2023',
    skills: ['TypeScript', 'Advanced Types', 'Generics', 'Decorators'],
    link: 'https://typescriptlang.org/certification',
    pdfUrl: '/certificates/typescript-cert.pdf',
  },
  {
    id: 4,
    title: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    date: '2022',
    credentialId: 'AWS-DEV-2022',
    skills: ['AWS', 'Cloud', 'Serverless', 'DevOps'],
    link: 'https://aws.amazon.com/certification',
    pdfUrl: '/certificates/aws-cert.pdf',
  },
  {
    id: 5,
    title: 'UI/UX Design Specialization',
    issuer: 'Google & Coursera',
    date: '2022',
    credentialId: 'UIUX-GOOGLE-2022',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
    link: 'https://coursera.org/certificates',
    pdfUrl: '/certificates/uiux-cert.pdf',
  },
  {
    id: 6,
    title: 'GraphQL API Development',
    issuer: 'Apollo GraphQL',
    date: '2021',
    credentialId: 'GRAPHQL-APOLLO-2021',
    skills: ['GraphQL', 'Apollo', 'API Design', 'Schema Design'],
    link: 'https://apollographql.com/tutorials',
    pdfUrl: '/certificates/graphql-cert.pdf',
  },
  {
    id: 7,
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    date: '2021',
    credentialId: 'FCC-JS-2021',
    skills: ['JavaScript', 'Algorithms', 'Data Structures', 'ES6+'],
    link: 'https://freecodecamp.org/certification',
    pdfUrl: '/certificates/javascript-cert.pdf',
  },
  {
    id: 8,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2020',
    credentialId: 'FCC-RWD-2020',
    skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive Design'],
    link: 'https://freecodecamp.org/certification',
    pdfUrl: '/certificates/responsive-cert.pdf',
  },
  {
    id: 9,
    title: 'Web Performance Optimization',
    issuer: 'Google Developers',
    date: '2020',
    credentialId: 'GDEV-WPO-2020',
    skills: ['Performance', 'Lighthouse', 'Core Web Vitals', 'Optimization'],
    link: 'https://developers.google.com/web',
    pdfUrl: '/certificates/performance-cert.pdf',
  },
]