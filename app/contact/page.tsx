// app/contact/page.tsx
import { ContactForm } from '@/components/contact/contact-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Facebook } from 'lucide-react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'tharukshapramod2000@gmail.com',
    href: 'mailto:tharukshapramod2000@gmail.com',
    description: 'Typically reply within 24 hours',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '0763131160, 0785131160',
    href: 'tel:+94763131160',
    description: 'Available Mon-Fri, 9AM-6PM',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Near 444 2nd lane, Kaduwela 10640, Sri Lanka',
    href: 'https://maps.google.com/?q=Kaduwela,Sri+Lanka',
    description: 'Open to remote work worldwide',
  },
  {
    icon: Clock,
    title: 'Timezone',
    value: 'IST (UTC+5:30)',
    href: '#',
    description: 'Flexible with scheduling',
  },
]

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Contact Methods */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactMethods.map((method) => (
                <div key={method.title} className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <method.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{method.title}</h3>
                    <a
                      href={method.href}
                      className="text-primary hover:underline block"
                    >
                      {method.value}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      {method.description}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle>Connect With Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <Link href={siteConfig.links.github} target="_blank">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href={siteConfig.links.linkedin} target="_blank">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                {siteConfig.links.facebook && (
                  <Button variant="outline" size="icon" asChild>
                    <Link href={siteConfig.links.facebook} target="_blank">
                      <Facebook className="h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Response Time */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-sm mb-4">
                  ⚡ Quick Response
                </div>
                <h3 className="font-bold text-lg mb-2">Fast Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond to inquiries within 24 hours. For urgent matters, 
                  please use the phone number above.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}