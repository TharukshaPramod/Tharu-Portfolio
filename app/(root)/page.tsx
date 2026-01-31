import { Hero } from '@/components/sections/hero';
import { Skills } from '@/components/sections/skills';
import { Experience } from '@/components/sections/experience';
import { ProjectsSection } from '@/components/sections/projects';
import { ContactSection } from '@/components/sections/contact';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <Skills />
      <Experience />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
