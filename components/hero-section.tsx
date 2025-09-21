"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div
        className="absolute bottom-32 right-32 w-16 h-16 bg-secondary/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="absolute top-1/2 left-10 text-6xl animate-bounce-gentle" style={{ animationDelay: "2s" }}>
        🌸
      </div>

      <div className="text-center z-10 px-4">
        <div className="mb-8 animate-fade-in-up">
          <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center text-6xl animate-wiggle">
            😊
          </div>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up text-balance"
          style={{ animationDelay: "0.2s" }}
        >
          Hi, I'm <span className="text-primary">Alex</span>
        </h1>

        <p
          className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up text-pretty"
          style={{ animationDelay: "0.4s" }}
        >
          Full-Stack Developer & UI/UX Designer
        </p>

        <p
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up text-pretty"
          style={{ animationDelay: "0.6s" }}
        >
          I create beautiful, functional web experiences that bring ideas to life. Passionate about clean code,
          intuitive design, and solving complex problems.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <Button size="lg" onClick={scrollToAbout} className="group">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>

          <div className="flex gap-4">
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Cute floating cat */}
      <div className="absolute bottom-10 right-10 text-4xl animate-float" style={{ animationDelay: "1.5s" }}>
        🐱
      </div>
    </section>
  )
}
