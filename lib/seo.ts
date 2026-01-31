import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export function buildMetadata({ title, description }: { title: string; description?: string }): Metadata {
  return {
    title: `${title} | ${siteConfig.title}`,
    description: description ?? siteConfig.description,
    openGraph: {
      title,
      description: description ?? siteConfig.description,
      url: siteConfig.url,
    },
  };
}
