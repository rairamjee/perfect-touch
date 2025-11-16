"use client"

import { useEffect, useState } from "react"

export default function AnalyticsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-marble" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float-marble"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float-marble"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Cursor Light Effect */}
      <div
        className="fixed pointer-events-none z-0 rounded-full opacity-20 blur-2xl transition-all duration-100"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          width: "150px",
          height: "150px",
          background: "radial-gradient(circle, var(--color-accent), transparent)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl w-full">
          {/* Section Label */}
          <div className="mb-12 animate-slide-up">
            <span className="text-accent font-semibold tracking-widest uppercase text-sm">
              Luxury Materials Showcase
            </span>
          </div>

          {/* Main Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {/* Left - Image Section */}
            <div className="relative group cursor-none">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 border border-border/50">
                {/* Image Container with Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 mix-blend-multiply" />

                {/* Marble Pattern Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(/placeholder.svg?height=600&width=600&query=digital-marble-interior-design-uv)",
                    backgroundSize: "cover",
                  }}
                />

                {/* Animated UV Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/20 via-pink-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen" />

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer" />

                {/* Marble Texture Overlay */}
                <div className="absolute inset-0 mix-blend-overlay opacity-30">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-pink-800/20 to-transparent" />
                </div>

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border border-accent/40 rounded-lg" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border border-accent/40 rounded-lg" />
              </div>

              {/* Floating Material Cards */}
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-accent/40 to-transparent rounded-xl border border-accent/30 backdrop-blur-sm p-4 text-white text-sm font-medium shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300 animate-float-marble">
                <div className="flex flex-col h-full justify-between">
                  <span className="text-accent font-bold">Digital Marble</span>
                  <p className="text-xs opacity-80">Premium UV-Treated Surface</p>
                </div>
              </div>

              <div
                className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-br from-primary/40 to-transparent rounded-xl border border-primary/30 backdrop-blur-sm p-4 text-white text-sm font-medium shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300 animate-float-marble"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex flex-col h-full justify-between">
                  <span className="text-primary font-bold">UV Coating</span>
                  <p className="text-xs opacity-80">High-Gloss Protection Layer</p>
                </div>
              </div>
            </div>

            {/* Right - Content Section */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient-shift">
                    Transform Your Space
                  </span>
                  <br />
                  with Premium Materials
                </h1>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
                  Experience the elegance of digital marble sheets combined with advanced UV protection. Our luxury
                  interior solutions bring sophistication and durability to every surface, crafted for discerning
                  clients who demand excellence.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "✨", title: "UV Protected", desc: "Fade-resistant finishes" },
                  { icon: "💎", title: "Premium Marble", desc: "Digital precision patterns" },
                  { icon: "🎨", title: "Custom Colors", desc: "Infinite design options" },
                  { icon: "🛡️", title: "Durable", desc: "Built to last decades" },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="group p-4 rounded-lg border border-border/50 hover:border-accent/50 bg-card/50 hover:bg-card/80 transition-all duration-300 transform hover:scale-105 cursor-default"
                  >
                    <div className="text-2xl mb-2">{feature.icon}</div>
                    <h3 className="font-semibold text-sm text-foreground">{feature.title}</h3>
                    <p className="text-xs text-foreground/60 mt-1">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                </button>
                <button className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300 transform hover:scale-105">
                  View Collection
                </button>
              </div>

              {/* Trust Indicator */}
              <div className="flex items-center gap-2 text-sm text-foreground/60 pt-4">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>Trusted by 500+ luxury interior designers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
