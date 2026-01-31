import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Spotlight } from '@/components/animations/spotlight';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-muted bg-foreground text-background p-10">
      <Spotlight />
      <div className="relative z-10 space-y-4">
        <p className="text-sm uppercase tracking-wide text-background/70">{siteConfig.role}</p>
        <h1 className="text-4xl font-bold leading-tight">{siteConfig.title}</h1>
        <p className="max-w-2xl text-lg text-background/80">{siteConfig.description}</p>
        <div className="flex gap-3">
          <Button asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
