"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar } from "lucide-react"

export default function CertificationsSection() {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SA-2023-001",
      icon: "☁️",
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PD-2023-002",
      icon: "🌐",
    },
    {
      title: "Meta Frontend Developer Certificate",
      issuer: "Meta (Facebook)",
      date: "2022",
      credentialId: "META-FE-2022-003",
      icon: "⚛️",
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      credentialId: "MDB-DEV-2022-004",
      icon: "🍃",
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2021",
      credentialId: "CKA-2021-005",
      icon: "⚙️",
    },
    {
      title: "Adobe Certified Expert - Photoshop",
      issuer: "Adobe",
      date: "2021",
      credentialId: "ACE-PS-2021-006",
      icon: "🎨",
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="text-primary">Certifications</span> & Awards
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}></div>
          <p
            className="text-muted-foreground text-lg mt-6 animate-fade-in-up text-pretty"
            style={{ animationDelay: "0.4s" }}
          >
            Professional certifications that validate my expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={cert.credentialId}
              className="group hover:shadow-lg transition-all duration-300 animate-slide-in-left bg-card/50 backdrop-blur-sm border-primary/20 hover:scale-105"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div
                  className="text-4xl mb-4 animate-bounce-gentle"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  {cert.icon}
                </div>

                <h3 className="text-lg font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors text-balance">
                  {cert.title}
                </h3>

                <p className="text-primary font-semibold mb-3">{cert.issuer}</p>

                <div className="flex items-center justify-center gap-2 mb-3 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>

                <Badge variant="outline" className="text-xs">
                  <Award className="w-3 h-3 mr-1" />
                  {cert.credentialId}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Floating decorative elements */}
        <div className="relative mt-16">
          <div className="absolute top-0 left-1/4 text-2xl animate-float">🏆</div>
          <div className="absolute top-10 right-1/4 text-2xl animate-float" style={{ animationDelay: "1s" }}>
            ⭐
          </div>
          <div className="absolute -top-5 left-1/2 text-2xl animate-bounce-gentle" style={{ animationDelay: "2s" }}>
            🎯
          </div>
        </div>
      </div>
    </section>
  )
}
