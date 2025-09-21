"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 80 },
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Figma", level: 90 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}></div>
          <p
            className="text-muted-foreground text-lg mt-6 animate-fade-in-up text-pretty"
            style={{ animationDelay: "0.4s" }}
          >
            Technologies and tools I love working with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="animate-fade-in-up hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm border-primary/20"
              style={{ animationDelay: `${0.6 + categoryIndex * 0.2}s` }}
            >
              <CardHeader className="text-center">
                <div
                  className="text-4xl mb-2 animate-bounce-gentle"
                  style={{ animationDelay: `${1 + categoryIndex * 0.2}s` }}
                >
                  {category.icon}
                </div>
                <CardTitle className="text-card-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-card-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2"
                      style={{
                        animationDelay: `${1.2 + categoryIndex * 0.2 + skillIndex * 0.1}s`,
                      }}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
