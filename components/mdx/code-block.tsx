import { cn } from '@/lib/utils';

export function CodeBlock({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <pre
      className={cn(
        'overflow-auto rounded-lg border border-muted bg-neutral-900 p-4 text-sm text-neutral-100',
        className,
      )}
      {...props}
    />
  );
}
