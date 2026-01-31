import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="border-t border-muted">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.title}</p>
        <div className="flex items-center gap-3">
          <Link href={siteConfig.social.github}>GitHub</Link>
          <Link href={siteConfig.social.linkedin}>LinkedIn</Link>
          <Link href={siteConfig.social.twitter}>Twitter</Link>
        </div>
      </div>
    </footer>
  );
}
