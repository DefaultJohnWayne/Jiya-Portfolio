"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperienceSection() {
  const experiences = [
    // --- Work Experience ---
    {
      type: "education",
      title: "Bachelor of Computer Science (Hons.) in Computer Networks",
      company: "UiTM Shah Alam",
      period: "2024 - Present",
      description:
        "Pursuing a degree focused on computer networks, cybersecurity, and system development. Engaged in hands-on projects and Capture the Flag (CTF) competitions to strengthen problem-solving and technical expertise.",
      technologies: ["Computer Networks", "Cybersecurity", "IOT", "Machine Learning", "AI", "CTF"],
    },
    {
      type: "work",
      title: "Exco Multimedia of UiTM Cyberheroes Club (UCC)",
      company: "UiTM Shah Alam",
      period: "2024 - 2025",
      description:
        "Designed creative assets such as posters, videos, and social media content to promote the club and its activities. Contributed to organizing and promoting cybersecurity events, while actively participating in Capture The Flag (CTF) competitions to strengthen technical skills.",
      technologies: ["Canva", "Adobe Photoshop", "Cybersecurity", "CTF"],
    },
    {
      type: "work",
      title: "Application Developer Intern",
      company: "Seetru Studio Sdn.Bhd.",
      period: "2023 - 2024",
      description:
        "Worked on web application development and front-end UI design. Gained experience in real-world development processes and teamwork.",
      technologies: ["WordPress", "HTML", "CSS", "Bootstrap", "JavaScript", "Figma", "FrontEnd"],
    },
    {
      type: "education",
      title: "Diploma in Computer Science",
      company: "UiTM Johor (Segamat Campus)",
      period: "2021 - 2024",
      description:
      "Built a solid foundation in computer science with a focus on programming, networking, databases, and system development. Graduated with Anugerah Naib Canselor (ANC) in recognition of academic excellence. Completed multiple hands-on projects including web apps, desktop systems, and interactive multimedia applications.",
      technologies: ["Java", "C++", "PHP", "MySQL", "HTML", "CSS"],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-black text-pink-100 relative overflow-hidden"
    >
      {/* Background glowing accents */}
      <div className="absolute top-24 left-16 w-24 h-24 bg-pink-500/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-20 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            My <span className="text-pink-400">Experience</span>
          </h2>
          <div
            className="w-24 h-1 bg-pink-400 mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <p
            className="text-pink-200/80 text-lg mt-6 animate-fade-in-up text-pretty"
            style={{ animationDelay: "0.4s" }}
          >
            A timeline of my work journey and education 🎓💼
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-pink-500/30 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${0.4 + index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full border-4 border-black hidden md:block animate-bounce-gentle ${
                    exp.type === "work"
                      ? "bg-pink-400"
                      : "bg-pink-300"
                  }`}
                  style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                ></div>

                {/* Experience Card */}
                <Card className="md:ml-20 bg-pink-900/20 border border-pink-500/20 backdrop-blur-sm hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-pink-200 mb-1">
                          {exp.title}
                        </h3>
                        <p
                          className={`font-semibold ${
                            exp.type === "work"
                              ? "text-pink-400"
                              : "text-pink-300"
                          }`}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <Badge className="mt-2 md:mt-0 w-fit border border-pink-400 text-pink-300 bg-pink-500/10">
                        {exp.period}
                      </Badge>
                    </div>

                    <p className="text-pink-300/80 mb-4 leading-relaxed text-pretty">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          className="border border-pink-400 text-pink-300 bg-pink-500/10 animate-fade-in-up hover:scale-105 transition-transform cursor-default"
                          style={{
                            animationDelay: `${0.8 + index * 0.2 + techIndex * 0.1
                              }s`,
                          }}
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

      {/* Floating icon */}
      <div
        className="absolute bottom-10 left-10 text-5xl animate-float"
        style={{ animationDelay: "1.2s" }}
      >
        🪼
      </div>
    </section>
  )
}
