import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const certificates = [
  {
    title: 'Data Science Foundations',
    provider: 'TCS iON',
    year: '2024',
    tags: ['Data Science', 'Python', 'Statistics'],
  },
  {
    title: 'Mobile Application Development',
    provider: 'SLIIT',
    year: '2025',
    tags: ['Android', 'Kotlin', 'MVVM'],
  },
  {
    title: 'Full Stack Web Development',
    provider: 'Self Learning',
    year: '2025',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
  },
] as const;

export function CertificatesSection() {
  return (
    <section className="container max-w-6xl py-24">
      <div className="space-y-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Certifications</h2>
          <Separator className="w-24" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <Card key={cert.title} className="transition-all hover:-translate-y-1 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">{cert.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {cert.provider} • {cert.year}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
