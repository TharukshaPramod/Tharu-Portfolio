import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { CONTENT_DIR } from './constants';
import type { BlogFrontmatter, ProjectFrontmatter } from '../types';

function getDir(folder: keyof typeof CONTENT_DIR) {
  return path.join(process.cwd(), CONTENT_DIR[folder]);
}

function readFilePaths(folder: keyof typeof CONTENT_DIR) {
  const dir = getDir(folder);
  return fs.readdirSync(dir).filter((file) => file.endsWith('.mdx'));
}

export async function getAllProjects() {
  const files = readFilePaths('projects');
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(getDir('projects'), file), 'utf8');
    const { data } = matter(raw);
    const frontmatter = data as ProjectFrontmatter;
    return {
      slug: file.replace(/\.mdx$/, ''),
      title: frontmatter.title,
      description: frontmatter.description,
    };
  });
}

export async function getProjectBySlug(slug: string) {
  const filePath = path.join(getDir('projects'), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(raw);
  return { slug, content, frontmatter: data as ProjectFrontmatter };
}

export async function getAllPosts() {
  const files = readFilePaths('blog');
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(getDir('blog'), file), 'utf8');
      const { data } = matter(raw);
      const frontmatter = data as BlogFrontmatter;
      return {
        slug: file.replace(/\.mdx$/, ''),
        title: frontmatter.title,
        description: frontmatter.description,
        date: frontmatter.date,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(getDir('blog'), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(raw);
  return { slug, content, frontmatter: data as BlogFrontmatter };
}
