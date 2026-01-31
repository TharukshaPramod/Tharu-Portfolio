import { ReactNode } from 'react';

export function TextReveal({ children }: { children: ReactNode }) {
  return <span className="transition-opacity duration-700 ease-out hover:opacity-80">{children}</span>;
}
