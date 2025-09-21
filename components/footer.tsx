"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-16 px-4 bg-black text-pink-100 overflow-hidden">
      {/* Floating glowing orbs */}
      <div className="absolute top-10 left-20 w-20 h-20 bg-pink-400/10 rounded-full animate-float"></div>
      <div
        className="absolute bottom-16 right-32 w-24 h-24 bg-pink-300/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              Nurul Najihah binti Sharudin{" "}
              <span className="text-pink-400">(Jiya)</span>
            </h3>
            <p className="text-pink-200/80">
              Final Year Student • Computer Networks @ UiTM Shah Alam
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://github.com/DefaultJohnWayne"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="group bg-pink-950/20 border-pink-400/30 text-pink-200 hover:text-pink-400 hover:border-pink-400 backdrop-blur-sm"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/nurul-najihah-sharudin-83411120a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="group bg-pink-950/20 border-pink-400/30 text-pink-200 hover:text-pink-400 hover:border-pink-400 backdrop-blur-sm"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </a>

            <a href="mailto:najihahsharudin1806@gmail.com">
              <Button
                variant="outline"
                size="icon"
                className="group bg-pink-950/20 border-pink-400/30 text-pink-200 hover:text-pink-400 hover:border-pink-400 backdrop-blur-sm"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-pink-400/30 text-center">
          {/* Signature */}
          <p className="text-pink-300/80 flex items-center justify-center gap-2">
            © {currentYear} Made with{" "}
            <Heart className="w-4 h-4 text-pink-400 animate-bounce-gentle" /> by
            Jiya
          </p>

          {/* Decorative floating icons */}
          <div className="mt-6 flex items-center justify-center gap-6 text-2xl">
            <span className="animate-float">🩰</span>
            <span
              className="animate-bounce-gentle"
              style={{ animationDelay: "0.5s" }}
            >
              🦢
            </span>
            <span
              className="animate-float"
              style={{ animationDelay: "1s" }}
            >
              🎀
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
