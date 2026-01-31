import Link from 'next/link';
import { getAllProjects } from '@/lib/mdx';

export async function ProjectsSection() {
  const projects = await getAllProjects();

  return (
    <section className="space-y-4">
      <div className="flex items-baseline justify-between">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <Link href="/projects" className="text-sm text-accent">
          View all
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.slice(0, 2).map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="rounded-lg border border-muted p-4 hover:border-accent hover:shadow"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
