import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, '');
  const staticRoutes = ['', '/about', '/projects', '/blog', '/contact'];

  return staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
