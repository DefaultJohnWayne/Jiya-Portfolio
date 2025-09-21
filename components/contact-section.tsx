"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "najihahsharudin1806@gmail.com",
      link: "mailto:najihahsharudin1806@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+60 019 727 1806",
      link: "tel:+60197271806",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Selangor, Malaysia",
      link: "#",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 px-4 relative bg-black text-pink-100 overflow-hidden"
    >
      {/* Floating glowing orbs */}
      <div className="absolute top-10 left-20 w-20 h-20 bg-pink-400/10 rounded-full animate-float"></div>
      <div
        className="absolute bottom-16 right-32 w-24 h-24 bg-pink-300/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-10 text-4xl animate-bounce-slow"
        style={{ animationDelay: "2s" }}
      >
        💌
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Get In <span className="text-pink-400">Touch</span>
          </h2>
          <div
            className="w-24 h-1 bg-pink-400 mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          />
          <p
            className="text-pink-200/80 text-lg mt-6 animate-fade-in-up text-pretty"
            style={{ animationDelay: "0.4s" }}
          >
            Let’s work together to bring your ideas to life!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <div
            className="space-y-8 animate-slide-in-left"
            style={{ animationDelay: "0.6s" }}
          >
            <div>
              <h3 className="text-2xl font-bold text-pink-100 mb-6">
                Let’s Connect!
              </h3>
              <p className="text-pink-200/80 text-lg leading-relaxed text-pretty">
                I’m always excited to discuss new opportunities, creative
                projects, or just chat about technology. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={info.title}
                  className="group hover:shadow-lg transition-all duration-300 animate-fade-in-up bg-pink-950/20 backdrop-blur-md border-pink-400/20 hover:scale-105"
                  style={{ animationDelay: `${0.8 + index * 0.2}s` }}
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="text-pink-400 group-hover:scale-125 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-pink-100">
                        {info.title}
                      </h4>
                      <a
                        href={info.link}
                        className="text-pink-200/80 hover:text-pink-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <Card
            className="animate-fade-in-up bg-pink-950/20 backdrop-blur-md border-pink-400/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            style={{ animationDelay: "0.8s" }}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-pink-100">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-pink-200 block mb-2">
                    Name
                  </label>
                  <Input
                    placeholder="Your name"
                    className="bg-black/40 border-pink-400/30 text-pink-100 placeholder:text-pink-300"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-pink-200 block mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-black/40 border-pink-400/30 text-pink-100 placeholder:text-pink-300"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-pink-200 block mb-2">
                  Subject
                </label>
                <Input
                  placeholder="What’s this about?"
                  className="bg-black/40 border-pink-400/30 text-pink-100 placeholder:text-pink-300"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-pink-200 block mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project or just say hello!"
                  rows={5}
                  className="bg-black/40 border-pink-400/30 text-pink-100 placeholder:text-pink-300"
                />
              </div>

              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white group">
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Decorative floating elements */}
        <div className="relative mt-16">
          <div className="absolute top-0 left-1/4 text-2xl animate-float">
            ✨
          </div>
          <div
            className="absolute top-10 right-1/4 text-2xl animate-float"
            style={{ animationDelay: "1s" }}
          >
            ₊˚ෆ
          </div>
          <div
            className="absolute -top-5 left-1/2 text-2xl animate-bounce-gentle"
            style={{ animationDelay: "2s" }}
          >
            🌷
          </div>
        </div>
      </div>
    </section>
  )
}
