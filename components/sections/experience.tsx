import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { experience } from '@/config/site';

export function Experience() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="space-y-4">
        {experience.map((item) => (
          <Card key={item.company}>
            <CardHeader>
              <CardTitle>{item.role}</CardTitle>
              <p className="text-sm text-muted-foreground">{item.company} · {item.period}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
