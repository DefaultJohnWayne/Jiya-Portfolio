"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Alex <span className="text-primary">Johnson</span>
            </h3>
            <p className="text-muted-foreground">Full-Stack Developer & UI/UX Designer</p>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="group bg-transparent">
              <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
            <Button variant="outline" size="icon" className="group bg-transparent">
              <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
            <Button variant="outline" size="icon" className="group bg-transparent">
              <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Made with <Heart className="w-4 h-4 text-primary animate-bounce-gentle" /> by Alex Johnson
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-2xl">
            <span className="animate-float">🐱</span>
            <span className="animate-bounce-gentle" style={{ animationDelay: "0.5s" }}>
              ✨
            </span>
            <span className="animate-float" style={{ animationDelay: "1s" }}>
              🌸
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
