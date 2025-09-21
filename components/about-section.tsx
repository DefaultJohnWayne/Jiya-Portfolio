"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutSection() {
  const interests = ["Web Development", "UI/UX Design", "Machine Learning", "Photography", "Gaming", "Cooking"]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-0">
                <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-secondary/30 rounded-lg mb-6 flex items-center justify-center text-8xl">
                  👩‍💻
                </div>
                <div className="text-center">
                  <div className="text-2xl animate-bounce-gentle">🌟</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold text-card-foreground">Hello! I'm Alex Johnson</h3>
            <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
              I'm a passionate full-stack developer with 5+ years of experience creating digital experiences that are
              not only functional but also delightful to use. I love turning complex problems into simple, beautiful
              solutions.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying a good cup of coffee while sketching out my next big idea.
            </p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-card-foreground">Interests & Hobbies</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge
                    key={interest}
                    variant="secondary"
                    className="animate-fade-in-up hover:scale-105 transition-transform cursor-default"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
