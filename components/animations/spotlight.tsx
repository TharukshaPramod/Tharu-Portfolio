export function Spotlight() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-accent blur-3xl opacity-30" />
      <div className="absolute right-10 top-10 h-56 w-56 rounded-full bg-foreground blur-3xl opacity-20" />
    </div>
  );
}
