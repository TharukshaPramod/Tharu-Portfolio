export const siteConfig = {
  title: 'My Portfolio',
  description: 'Product-focused frontend engineer crafting reliable, fast web experiences.',
  role: 'Frontend Engineer · Design Systems',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  email: 'hello@example.com',
  social: {
    github: 'https://github.com/your-handle',
    linkedin: 'https://www.linkedin.com/in/your-handle',
    twitter: 'https://twitter.com/your-handle',
  },
};

export const skills = [
  { title: 'Frontend', items: ['TypeScript', 'Next.js', 'React', 'Tailwind', 'shadcn/ui'] },
  { title: 'Architecture', items: ['Design systems', 'State machines', 'API design', 'Testing'] },
  { title: 'Tooling', items: ['Vite', 'Playwright', 'Storybook', 'ESLint/Prettier'] },
];

export const experience = [
  {
    company: 'Acme Co.',
    role: 'Senior Frontend Engineer',
    period: '2023 — Present',
    summary: 'Leading frontend architecture and design system adoption across product teams.',
  },
  {
    company: 'Product Labs',
    role: 'Frontend Engineer',
    period: '2020 — 2023',
    summary: 'Shipped multi-tenant SaaS features, optimized performance, and mentored engineers.',
  },
];
