"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Trophy, Users, Calendar, Target } from "lucide-react"

const ctfExperiences = [
  {
    name: "Girls in CTF 2025",
    year: "2025",
    placement: "11th Place",
    teamSize: "2 members",
    categories: ["Jeopardy"],
    highlights: [
      "11th place out of 94 teams",
      "24 challenges solved out of 43 challenges",
    ],
    certificateImage: "/girls-in-ctf2025.png",
  },
  {
    name: "BlackBerry CTF",
    year: "2025",
    placement: "13th",
    teamSize: "3 members",
    categories: ["Jeopardy"],
    highlights: [
      "Completed 10+ challenges",
      "First time joined a Physical CTF",
      "Managed to receive recognition for the ‘Most Miscellaneous Solves’ achievement!"
    ],
    certificateImage: "/blackberry-ctf-2025.jpg",
  },
  {
    name: "UMCS CTF Preliminary Round 2025",
    year: "2025",
    placement: "29th Place",
    teamSize: "3 members",
    categories: ["Jeopardy"],
    highlights: ["Placed 29th out of 125 teams"],
    certificateImage: "/umcs-ctf-2025.jpg",
  },
  {
    name: "Wargames.MY CTF 2024",
    year: "2024",
    placement: "15th Place",
    teamSize: "3 members",
    categories: ["Jeopardy"],
    highlights: ["15th place out of 100+ teams for Student category"],
    certificateImage: "null",
  },
  {
    name: "Girls in CTF 2024",
    year: "2024",
    placement: "26th Place",
    teamSize: "2 members",
    categories: ["Jeopardy"],
    highlights: [
      "First time joining a CTF competition",
      "26th place out of 80+ teams",
    ],
    certificateImage: "/girls-in-ctf2024.PNG",
  },
]

export default function CTFSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  return (
    <section id="ctf" className="py-20 px-4 relative bg-black text-pink-100 overflow-hidden">
      {/* Floating glowing bubbles */}
      <div className="absolute top-16 left-24 w-20 h-20 bg-pink-400/10 rounded-full animate-float" />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-pink-500/20 rounded-full animate-float" style={{ animationDelay: "1.2s" }} />
      <div className="absolute top-1/3 right-1/4 text-5xl animate-bounce-slow">✧</div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            CTF <span className="text-pink-400">Competitions</span>
          </h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-pink-200/80 max-w-2xl mx-auto mb-8">
            Cybersecurity challenges where I sharpen my problem-solving, teamwork, and ethical hacking skills under pressure.
          </p>

          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            size="lg"
            className="border-pink-400 text-pink-300 hover:bg-pink-500/20 transition-all duration-300 group"
          >
            {isExpanded ? (
              <>
                Hide CTF Experiences
                <ChevronUp className="ml-2 h-4 w-4 group-hover:animate-bounce" />
              </>
            ) : (
              <>
                View CTF Experiences
                <ChevronDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
              </>
            )}
          </Button>
        </div>

        {/* Expandable Content */}
        <div
          className={`transition-all duration-700 ease-in-out overflow-hidden ${
            isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid gap-6 md:gap-8 animate-fade-in-up">
            {ctfExperiences.map((ctf, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 bg-pink-950/20 backdrop-blur-md border-pink-400/20 hover:border-pink-400/40 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl group-hover:text-pink-400 transition-colors flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-pink-400" />
                        {ctf.name}
                      </CardTitle>
                      <CardDescription className="text-base mt-2 text-pink-200/70">
                        {ctf.year} • {ctf.placement}
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-pink-500/20 text-pink-200 flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {ctf.teamSize}
                      </Badge>
                      <Badge variant="outline" className="border-pink-400/40 text-pink-300 flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {ctf.year}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Categories */}
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2 text-pink-300">
                        <Target className="h-4 w-4 text-pink-400" />
                        Categories
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {ctf.categories.map((category, catIndex) => (
                          <Badge
                            key={catIndex}
                            variant="default"
                            className="bg-pink-500/20 text-pink-200 hover:bg-pink-500 hover:text-black transition-colors duration-200"
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold mb-2 text-pink-300">Key Highlights</h4>
                      <ul className="space-y-1">
                        {ctf.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="text-pink-200/80 flex items-start gap-2">
                            <span className="text-pink-400 mt-1.5 text-xs">▸</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* View Certificate Button */}
                    {ctf.certificateImage && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-pink-400 text-pink-300 hover:bg-pink-500/20 transition-all duration-300"
                        onClick={() => setSelectedCertificate(ctf.certificateImage)}
                      >
                        View Certificate
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative bg-black/90 p-4 rounded-lg shadow-xl animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-pink-400 hover:text-pink-200 text-xl font-bold"
              onClick={() => setSelectedCertificate(null)}
            >
              ×
            </button>
            <img
              src={selectedCertificate}
              alt="CTF Certificate"
              className="max-h-[80vh] max-w-[90vw] rounded-md"
            />
          </div>
        </div>
      )}

      {/* Bottom floating bubble */}
      <div className="absolute bottom-10 left-10 text-4xl animate-float">🫧</div>
    </section>
  )
}
