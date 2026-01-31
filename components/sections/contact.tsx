import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export function ContactSection() {
  return (
    <section className="space-y-4 rounded-2xl border border-muted p-8">
      <h2 className="text-2xl font-semibold">Let’s work together</h2>
      <p className="text-muted-foreground">
        Building a new product or need help refining an existing one? I can assist with frontend
        architecture, design systems, and delivery.
      </p>
      <Button asChild>
        <Link href={`mailto:${siteConfig.email}`}>Email me</Link>
      </Button>
    </section>
  );
}
