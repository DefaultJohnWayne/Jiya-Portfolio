"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, team collaboration, and progress tracking.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: "/preview/project4.png",
      technologies: ["Vue.js", "Weather API", "Chart.js", "SCSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with smooth animations, dark mode, and optimized performance.",
      image: "/modern-portfolio-website.png",
      technologies: ["Next.js", "Framer Motion", "TypeScript", "Tailwind"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}></div>
          <p
            className="text-muted-foreground text-lg mt-6 animate-fade-in-up text-pretty"
            style={{ animationDelay: "0.4s" }}
          >
            Some of my recent work that I'm proud of
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-xl transition-all duration-300 animate-fade-in-up bg-card/50 backdrop-blur-sm border-primary/20 hover:scale-105"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-4xl animate-bounce-gentle">✨</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>

                <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
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

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="group/btn bg-transparent">
                    <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Code
                  </Button>
                  <Button size="sm" className="group/btn">
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
