import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

export const metadata = {
  title: 'Blog',
  description: 'Ideas, notes, and writing.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Blog</h1>
        <p className="text-muted-foreground">Long-form notes on engineering and design.</p>
      </div>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
            <div className="rounded-lg border border-muted p-4 hover:border-accent hover:shadow">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{post.description}</p>
              <p className="mt-1 text-xs text-muted-foreground">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
