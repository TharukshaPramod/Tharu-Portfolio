import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch for collaboration.',
};

export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="text-muted-foreground">
        Reach out for collaborations, consulting, or speaking. I typically respond within two
        business days.
      </p>
      <div className="space-y-2">
        <p>Email: <Link className="text-accent" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link></p>
        <p>LinkedIn: <Link className="text-accent" href={siteConfig.social.linkedin}>{siteConfig.social.linkedin}</Link></p>
        <p>GitHub: <Link className="text-accent" href={siteConfig.social.github}>{siteConfig.social.github}</Link></p>
      </div>
    </section>
  );
}
