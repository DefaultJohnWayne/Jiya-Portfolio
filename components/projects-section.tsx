"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const featuredProjects = [
    {
      title: "X-Exam (In Progress)",
      description:
        "A secure, web-based exam system featuring AI-assisted proctoring and continuous student authentication using keystroke dynamics. Implements behavioral biometrics to detect impersonation and ensure academic integrity in real-time.",
      image: "/x-exam.png",
      technologies: ["Keystroke Dynamics", "Biometric Authentication", "Machine Learning", "AI", "Next.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "Smart Child Monitoring IoT System",
      description:
        "IoT solution for child safety using ESP32 with BLE and GPS to monitor real-time location and proximity. Features parental alerts, geofencing, and historical location tracking with mobile app integration.",
      image: "/iot-project.png",
      technologies: ["ESP32", "Flutter", "MySQL", "BLE", "GPS", "XAMPP", "PHP"],
      github: "#",
      demo: "#",
    },
    {
      title: "CTF Challenges Writeups",
      description:
        "Collection of Capture the Flag (CTF) writeups and challenge solutions made by me. Documenting techniques and methodologies used to solve various cybersecurity challenges.",
      image: "/ctf-writeups.png",
      technologies: ["GitHub", "Kali Linux"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website designed with glowing UI effects, jellyfish-inspired animations, and smooth framer-motion transitions. Built to showcase projects, skills, and cybersecurity interests in a creative way.",
      image: "/portfolio-img.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      github: "#",
      demo: "#",
    },
  ]

  const academicProjects = [
    {
      title: "Online Room Reservation System",
      description:
        "Web-based reservation system for managing online room bookings.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    },
    {
      title: "Library Database System",
      description:
        "Database-driven library management system with MySQL backend.",
      technologies: ["MySQL", "PHP"],
    },
    {
      title: "Cooking Club System",
      description: "Club management and activity tracking system.",
      technologies: ["Java"],
    },
    {
      title: "Fast-Food Order System",
      description: "Command-line ordering system for a fast-food restaurant.",
      technologies: ["C++"],
    },
    {
      title: "Airline Booking System",
      description: "Ticket booking and seat management system.",
      technologies: ["Java"],
    },
    {
      title: "Interactive Restaurant Ordering",
      description: "Restaurant ordering app with Visual Basic UI.",
      technologies: ["VB.Net", "Visual Studio"],
    },
    {
      title: "Interactive Animation – Aladdin",
      description: "3D animated storytelling project built in Alice 3.",
      technologies: ["Alice 3"],
    },
    {
      title: "Smart Door IoT Project",
      description:
        "IoT-based smart door lock using ESP32, PIR motion sensor, and relay for access control.",
      technologies: ["ESP32", "IoT", "Sensors"],
    },
    {
      title: "Group Policy Configuration",
      description:
        "Configured and managed Windows Server Group Policy for a fictional organization.",
      technologies: ["Windows Server", "Active Directory", "Group Policy"],
    },
    {
      title: "SIEM Dashboard",
      description:
        "Implemented log monitoring and visualization using the ELK stack (Elasticsearch, Logstash, Kibana).",
      technologies: ["ELK", "Kibana", "Logstash", "SIEM"],
    },
    {
      title: "Network Automation",
      description:
        "Automated router and switch configuration using Python (Netmiko) and simulated with GNS3.",
      technologies: ["Python", "Netmiko", "GNS3", "Networking"],
    },
    {
      title: "Client-Server Application",
      description:
        "Developed a TCP-based client-server program with Python sockets for communication across ports.",
      technologies: ["Python", "TCP/IP", "Networking"],
    },
  ]


  return (
    <section
      id="projects"
      className="py-20 px-4 relative bg-black text-pink-100 overflow-hidden"
    >
      {/* Background glowing bubbles */}
      <div className="absolute top-10 left-20 w-24 h-24 bg-pink-400/10 rounded-full animate-float"></div>
      <div
        className="absolute bottom-20 right-32 w-20 h-20 bg-pink-300/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-10 text-5xl animate-bounce-slow"
        style={{ animationDelay: "2s" }}
      >
        🪼
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Featured Projects */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Featured <span className="text-pink-400">Projects</span>
          </h2>
          <div
            className="w-24 h-1 bg-pink-400 mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <p
            className="text-pink-200/80 text-lg mt-6 animate-fade-in-up text-pretty"
            style={{ animationDelay: "0.4s" }}
          >
            Some of my recent work that I'm proud of ✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-xl transition-all duration-300 animate-fade-in-up bg-pink-950/20 backdrop-blur-md border-pink-400/20 hover:scale-105"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-4xl animate-bounce-gentle">✨</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl mb-3 text-pink-100 group-hover:text-pink-400 transition-colors">
                  {project.title}
                </CardTitle>

                <p className="text-pink-200/80 mb-4 leading-relaxed text-pretty">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-pink-500/20 text-pink-200 animate-fade-in-up hover:scale-105 transition-transform cursor-default"
                      style={{
                        animationDelay: `${0.8 + index * 0.2 + techIndex * 0.1}s`,
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-pink-400 text-pink-300 hover:bg-pink-500/20 group/btn"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-pink-500 hover:bg-pink-600 text-black group/btn"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academic Projects */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-pink-300">
            Academic Projects
          </h3>
          <p className="text-pink-200/80">
            Earlier projects built during university, showcasing
            programming, system development, and multimedia skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {academicProjects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-pink-950/10 border-pink-400/10 hover:border-pink-400/30 transition-all animate-fade-in-up"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2 text-pink-200">
                  {project.title}
                </CardTitle>
                <p className="text-pink-200/70 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-pink-500/10 text-pink-300 border border-pink-400/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Floating bubble bottom */}
      <div
        className="absolute bottom-10 left-10 text-4xl animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        🫧
      </div>
    </section>
  )
}
