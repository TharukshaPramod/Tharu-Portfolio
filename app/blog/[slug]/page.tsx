import { notFound } from 'next/navigation';
import { MDXContent } from '@/components/mdx/mdx-components';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';

interface BlogPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose prose-neutral dark:prose-invert">
      <h1>{post.frontmatter.title}</h1>
      <p className="text-muted-foreground">{post.frontmatter.description}</p>
      <MDXContent source={post.content} />
    </article>
  );
}
