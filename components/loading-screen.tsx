"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 second loading animation

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className={`loading-screen ${!isLoading ? "fade-out" : ""}`}>
      <div className="text-center">
        {/* Cute capybara loading animation */}
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-primary rounded-full animate-bounce-gentle relative">
            {/* Capybara face */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl animate-wiggle">🐹</div>
            </div>
          </div>
          {/* Floating hearts */}
          <div className="absolute -top-4 -right-4 text-primary animate-float">💖</div>
          <div className="absolute -bottom-4 -left-4 text-primary animate-float" style={{ animationDelay: "1s" }}>
            ✨
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-4">Welcome to my Portfolio</h2>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  )
}
