"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Web Development",
      icon: "💻",
      skills: [
        "HTML / CSS / JavaScript",
        "React / Next.js",
        "Tailwind CSS",
        "WordPress",
      ],
    },
    {
      title: "Networking & Security",
      icon: "🔐",
      skills: [
        "Computer Networks",
        "Kali Linux Tools",
        "Basic Penetration Testing",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "⚡",
      skills: ["Git & GitHub", "MySQL", "Visual Studio Code", "Packet Tracer", "GNS3", "Arduino"],
    },
    {
      title: "Soft Skills",
      icon: "🌟",
      skills: [
        "Communication & Teamwork",
        "Problem-Solving",
        "Adaptability & Quick Learning",
        "Time Management",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-black text-pink-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            My <span className="text-pink-400">Skills</span>
          </h2>
          <div
            className="w-24 h-1 bg-pink-500 mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <p
            className="text-pink-200/80 text-lg mt-6 animate-fade-in-up text-pretty"
            style={{ animationDelay: "0.4s" }}
          >
             A blend of web development, networking knowledge, cybersecurity
            curiosity, and real-life collaboration 🪼
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="animate-fade-in-up hover:shadow-lg transition-shadow duration-300 bg-pink-400/5 backdrop-blur-sm border-pink-400/30"
              style={{ animationDelay: `${0.6 + categoryIndex * 0.2}s` }}
            >
              <CardHeader className="text-center">
                <div
                  className="text-4xl mb-2 animate-bounce-gentle"
                  style={{ animationDelay: `${1 + categoryIndex * 0.2}s` }}
                >
                  {category.icon}
                </div>
                <CardTitle className="text-pink-200">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-pink-500/20 text-pink-200 hover:scale-105 transition-transform cursor-default"
                    style={{ animationDelay: `${1.2 + categoryIndex * 0.2 + skillIndex * 0.1
                      }s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
