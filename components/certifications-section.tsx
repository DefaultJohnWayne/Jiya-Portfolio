"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import Image from "next/image"

export default function CertificationsSection() {
  const certifications = [
    {
      title: "CCNA: Enterprise Networking, Security, and Automation",
      issuer: "Cisco Networking Academy",
      date: "2025",
      img: "/ccna-enterprisenetwork.png", // local image
      badgeUrl: "null",
    },
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco Networking Academy",
      date: "2025",
      img: "/ccna-switching.png",
      badgeUrl: "https://www.credly.com/badges/7c2c20ac-203e-4db9-9121-cb9b8aade0ab/public_url",
    },
    {
      title: "Introduction to IoT and Digital Transformation",
      issuer: "Cisco Networking Academy",
      date: "2024",
      img: "/introduction_to_iot.png",
      badgeUrl: "https://www.credly.com/badges/b103f47f-f157-460e-a58d-65e1b45be8ed",
    },
    {
      title: "Fortinet Certified Fundamentals in Cybersecurity",
      issuer: "Fortinet",
      date: "2024",
      img: "/fortinet-cybersec.webp",
      badgeUrl: "/Fortinet_Certified_Fundamentals_in_Cybersecurity.pdf",
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4 relative bg-black text-pink-100 overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-10 left-20 w-20 h-20 bg-pink-400/10 rounded-full animate-float"></div>
      <div className="absolute bottom-16 right-32 w-24 h-24 bg-pink-300/20 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 right-10 text-4xl animate-bounce-slow" style={{ animationDelay: "2s" }}>🪼</div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="text-pink-400">Certifications</span> & Awards
          </h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}></div>
          <p className="text-pink-200/80 text-lg mt-6 animate-fade-in-up text-pretty" style={{ animationDelay: "0.4s" }}>
            Professional certifications that validate my expertise 🌟
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 animate-fade-in-up bg-pink-950/20 backdrop-blur-md border-pink-400/20 hover:scale-105"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                {cert.img && (
                  <a
                    href={cert.badgeUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-4"
                  >
                    <Image
                      src={cert.img}
                      alt={cert.title}
                      width={200}
                      height={200}
                      className="mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                )}

                <h3 className="text-lg font-bold text-pink-100 mb-2 group-hover:text-pink-400 transition-colors text-balance">
                  {cert.title}
                </h3>
                <p className="text-pink-300 font-semibold mb-3">{cert.issuer}</p>

                <div className="flex items-center justify-center gap-2 mb-3 text-sm text-pink-200/80">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
