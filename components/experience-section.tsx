"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description:
        "Lead development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and improved team productivity by 40%.",
      technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications and improved user experience across multiple products. Collaborated with design team to implement pixel-perfect UIs.",
      technologies: ["Vue.js", "JavaScript", "SCSS", "Figma", "Git"],
    },
    {
      title: "Junior Web Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description:
        "Built and maintained company website and internal tools. Gained experience in full-stack development and agile methodologies.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block animate-bounce-gentle"
                  style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                ></div>

                <Card className="md:ml-20 hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-card-foreground mb-1">{exp.title}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                        {exp.period}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="animate-fade-in-up hover:scale-105 transition-transform"
                          style={{ animationDelay: `${0.8 + index * 0.2 + techIndex * 0.1}s` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
