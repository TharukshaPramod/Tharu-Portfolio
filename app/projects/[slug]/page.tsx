import { notFound } from 'next/navigation';
import { MDXContent } from '@/components/mdx/mdx-components';
import { getAllProjects, getProjectBySlug } from '@/lib/mdx';

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="prose prose-neutral dark:prose-invert">
      <h1>{project.frontmatter.title}</h1>
      <p className="text-muted-foreground">{project.frontmatter.description}</p>
      <MDXContent source={project.content} />
    </article>
  );
}
