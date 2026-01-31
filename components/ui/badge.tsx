import { cn } from '@/lib/utils';

const variants = {
  default: 'bg-foreground text-background',
  secondary: 'bg-muted text-foreground',
};

type Variant = keyof typeof variants;

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
