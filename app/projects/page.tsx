import Link from 'next/link';
import { getAllProjects } from '@/lib/mdx';

export const metadata = {
  title: 'Projects',
  description: 'Selected projects and case studies.',
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="text-muted-foreground">Highlights from recent work and experiments.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="rounded-lg border border-muted p-4 hover:border-accent hover:shadow"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
