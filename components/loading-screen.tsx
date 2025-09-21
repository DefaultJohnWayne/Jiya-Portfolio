"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500) // 3.5s jellyfish float

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="loading-screen fixed inset-0 flex items-center justify-center bg-black text-pink-200 z-50">
      <div className="text-center relative">
        {/* Jellyfish body */}
        <div className="relative mb-10">
          <div className="w-28 h-28 bg-pink-400/70 rounded-t-full rounded-b-3xl animate-jelly-pulse relative shadow-lg shadow-pink-500/40">
            {/* Jellyfish face */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl animate-bounce-slow">🎐</span>
            </div>
          </div>
          {/* Tentacles */}
          <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2 flex space-x-2">
            <div className="w-1 h-12 bg-pink-300/70 rounded-full animate-tentacle"></div>
            <div className="w-1 h-14 bg-pink-200/70 rounded-full animate-tentacle delay-200"></div>
            <div className="w-1 h-10 bg-pink-400/70 rounded-full animate-tentacle delay-400"></div>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-2xl font-bold text-pink-200 mb-6 animate-glow">
          Welcome to my Portfolio...
        </h2>

        {/* Floating bubbles */}
        <div className="absolute -top-6 -right-6 text-pink-300 animate-bubble">🫧</div>
        <div className="absolute -top-16 left-6 text-pink-400 animate-bubble delay-500">🫧</div>
        <div className="absolute -bottom-10 right-10 text-pink-200 animate-bubble delay-1000">🫧</div>

        {/* Dots animation */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-200"></div>
          <div className="w-2 h-2 bg-pink-300 rounded-full animate-bounce delay-400"></div>
        </div>
      </div>
    </div>
  )
}
