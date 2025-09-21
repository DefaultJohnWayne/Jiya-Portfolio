"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "ctf", label: "CTF" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Toggle Button (works for desktop & mobile) */}
      <nav className="fixed top-6 left-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black/20 backdrop-blur-md border border-pink-500/20 rounded-full p-3 text-pink-300 hover:text-pink-200 transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Slide-out Nav */}
        {isOpen && (
          <div className="absolute top-16 left-0 bg-black/30 backdrop-blur-md border border-pink-500/20 rounded-2xl p-3 min-w-[180px] shadow-lg">
            <div className="flex flex-col gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 text-left ${
                    activeSection === section.id
                      ? "bg-pink-500/20 text-pink-300 shadow-lg shadow-pink-500/10"
                      : "text-gray-300 hover:text-pink-300 hover:bg-pink-500/10"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navigation
