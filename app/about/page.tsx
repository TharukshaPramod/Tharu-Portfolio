import { AboutSection } from '@/components/sections/about';
import { CertificatesSection } from '@/components/sections/certificates';

export const metadata = {
  title: "About | Tharuksha Pramod",
  description: "Learn more about my background, skills, and certifications.",
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <CertificatesSection />
    </>
  );
}
