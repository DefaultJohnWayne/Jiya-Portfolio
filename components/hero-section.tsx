"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black text-pink-100">
      {/* Background glowing orbs */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-pink-400/10 rounded-full animate-float"></div>
      <div
        className="absolute bottom-32 right-32 w-20 h-20 bg-pink-300/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="absolute top-1/3 left-10 text-5xl animate-bounce-slow" style={{ animationDelay: "2s" }}>
        🫧
      </div>

      <div className="text-center z-10 px-4">
        {/* Jellyfish mascot */}
        <div className="mb-8 animate-fade-in-up">
          <div className="w-36 h-36 bg-gradient-to-br from-pink-400/70 to-pink-600/70 rounded-t-full rounded-b-3xl mx-auto mb-6 flex items-center justify-center text-6xl shadow-lg shadow-pink-500/30 animate-jelly-pulse">
            🎐
          </div>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Hi, I'm <span className="text-pink-400">Jiya</span>
        </h1>

        <p
          className="text-xl md:text-2xl text-pink-200/80 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Final Year Student • Computer Networks @ UiTM Shah Alam
        </p>

        <p
          className="text-lg text-pink-300/80 mb-12 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Curious and always learning, glued to my PC most of the time—who knows what I’m doing!
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <Button size="lg" onClick={scrollToAbout} className="group bg-pink-500 hover:bg-pink-600 text-black">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>

          <div className="flex gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/DefaultJohnWayne"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="border-pink-400 text-pink-300 hover:bg-pink-500/20"
              >
                <Github className="h-4 w-4" />
              </Button>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nurul-najihah-sharudin-83411120a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="border-pink-400 text-pink-300 hover:bg-pink-500/20"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>

            {/* Email */}
            <a href="mailto:najihahsharudin1806@gmail.com">
              <Button
                variant="outline"
                size="icon"
                className="border-pink-400 text-pink-300 hover:bg-pink-500/20"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Floating jellyfish */}
      <div
        className="absolute bottom-10 right-10 text-5xl animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        🪼
      </div>
    </section>
  )
}
