"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "alex@example.com",
      link: "mailto:alex@example.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "San Francisco, CA",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}></div>
          <p
            className="text-muted-foreground text-lg mt-6 animate-fade-in-up text-pretty"
            style={{ animationDelay: "0.4s" }}
          >
            Let's work together to bring your ideas to life!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left" style={{ animationDelay: "0.6s" }}>
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Let's Connect!</h3>
              <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                I'm always excited to discuss new opportunities, creative projects, or just chat about technology. Feel
                free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={info.title}
                  className="group hover:shadow-md transition-all duration-300 animate-fade-in-up bg-card/50 backdrop-blur-sm border-primary/20"
                  style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="text-primary group-hover:scale-110 transition-transform">{info.icon}</div>
                      <div>
                        <h4 className="font-semibold text-card-foreground">{info.title}</h4>
                        <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Cute decorative element */}
            <div className="text-center">
              <div className="text-6xl animate-wiggle">💌</div>
              <p className="text-sm text-muted-foreground mt-2">Looking forward to hearing from you!</p>
            </div>
          </div>

          {/* Contact Form */}
          <Card
            className="animate-fade-in-up bg-card/50 backdrop-blur-sm border-primary/20"
            style={{ animationDelay: "0.8s" }}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">Subject</label>
                <Input placeholder="What's this about?" />
              </div>

              <div>
                <label className="text-sm font-medium text-card-foreground mb-2 block">Message</label>
                <Textarea placeholder="Tell me about your project or just say hello!" rows={5} />
              </div>

              <Button className="w-full group">
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
