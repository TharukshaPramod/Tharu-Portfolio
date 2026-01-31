import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skills } from '@/config/site';

export function Skills() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {skills.map((group) => (
          <Card key={group.title}>
            <CardHeader>
              <CardTitle>{group.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
