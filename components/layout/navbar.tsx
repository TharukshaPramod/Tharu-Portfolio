import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { navItems } from '@/config/nav';

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-muted bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          Portfolio
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
