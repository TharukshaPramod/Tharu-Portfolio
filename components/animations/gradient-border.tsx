import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function GradientBorder({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn('relative rounded-xl p-[1px] bg-gradient-to-r from-accent to-foreground/40', className)}>
      <div className="rounded-[11px] bg-background p-6">{children}</div>
    </div>
  );
}
