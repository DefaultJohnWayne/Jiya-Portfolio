"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutSection() {
  const interests = [
    "Cybersecurity",
    "Capture The Flag (CTF)",
    "AI",
    "Machine Learning",
    "Computer Network",
  ]

  return (
    <section id="about" className="py-20 px-4 bg-black text-pink-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            About <span className="text-pink-400">Me</span>
          </h2>
          <div
            className="w-24 h-1 bg-pink-500 mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar / Illustration */}
          <div className="animate-slide-in-left">
            <Card className="p-8 bg-pink-400/5 backdrop-blur-sm border-pink-400/30">
              <CardContent className="p-0">
                <div className="w-full h-80 rounded-lg mb-6 overflow-hidden flex items-center justify-center animate-jelly-pulse">
                  <Image
                    src="/me.jfif"
                    alt="Nurul Najihah"
                    width={300}
                    height={300}
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="text-center">
                  <div className="text-2xl text-white animate-bounce-gentle">˙✧˖°🎓 ༘⋆｡ ˚</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bio */}
          <div
            className="space-y-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <h3 className="text-2xl font-bold text-pink-300">
              Hello! I'm Nurul Najihah (Jiya)
            </h3>
            <p className="text-pink-200/80 text-lg leading-relaxed text-pretty">
              I’m currently a final year student pursuing a Bachelor of Computer Science (Hons.) 
              in Computer Networks at UiTM Shah Alam. While I have experience in web development, 
              my true passion lies in cybersecurity. I enjoy exploring different areas of tech, 
              experimenting with small projects, and constantly learning along the way.
            </p>
            <p className="text-pink-200/80 text-lg leading-relaxed text-pretty">
              I’ve actively joined Capture the Flag (CTF) competitions to sharpen my problem-solving 
              skills and dive deeper into the world of cybersecurity. For me, it’s about combining 
              curiosity, creativity, and technical challenges — whether that’s building something 
              simple, breaking something complex, or defending against the unknown.
            </p>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-pink-200">
                Interests & Hobbies
              </h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <Badge
                    key={interest}
                    variant="secondary"
                    className="animate-fade-in-up bg-pink-500/20 text-pink-200 hover:scale-105 transition-transform cursor-default"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
