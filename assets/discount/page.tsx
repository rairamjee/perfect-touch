"use client"

import { useEffect, useRef, useState } from "react"

const products = [
  { name: "PLYWOOD", discount: 10 },
  { name: "SALMICA", discount: 20 },
  { name: "ROSEWOOD", discount: 30 },
]

export default function DiscountCard() {
  const discountRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentProductIndex, setCurrentProductIndex] = useState(0)

  useEffect(() => {
    const element = discountRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % products.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isVisible])

  const currentProduct = products[currentProductIndex]

  return (
    <section className="py-12 px-4 md:px-8">
      <div
        ref={discountRef}
        className={`relative rounded-2xl overflow-hidden h-80 md:h-96 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
        style={{
          backgroundImage:
            "url('https://www.bing.com/th/id/OIP.l5bdT-QuBPO4xYAPOds09QHaE8?w=263&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/85 to-transparent"></div>

        <div className="absolute top-0 right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 h-full flex flex-col md:flex-row justify-between items-center px-8 md:px-12 py-10 md:py-16">
          {/* LEFT SIDE - Discount Offer */}
          <div className="flex flex-col gap-6 max-w-md">
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <h1
                  key={`discount-${currentProductIndex}`}
                  className="text-7xl md:text-8xl font-bold text-amber-400 leading-none tracking-tighter animate-fade-in-out"
                >
                  {currentProduct.discount}
                  <span className="text-5xl md:text-6xl font-light">%</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl font-light text-amber-400/90 tracking-wide">EXCLUSIVE OFFER</p>
            </div>

            <div className="inline-flex items-center gap-3 pt-4">
              <div className="h-px w-8 bg-amber-400/50"></div>
              <p
                key={`product-${currentProductIndex}`}
                className="text-white font-semibold text-lg tracking-widest animate-fade-in-out"
              >
                ON {currentProduct.name}
              </p>
            </div>

            <button className="mt-6 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105 w-fit">
              Explore Now
            </button>
          </div>

          {/* RIGHT SIDE - Brand Message */}
          <div className="text-right max-w-md mt-10 md:mt-0">
            <div className="space-y-4">
              <p className="text-sm font-light tracking-widest text-amber-400/80">PREMIUM SELECTION</p>
              <h2 className="text-2xl md:text-3xl font-light text-white leading-snug tracking-tight">
                Transform Your Space with <span className="font-semibold text-amber-400">Elegant Interiors</span>
              </h2>
              <p className="text-base text-gray-300/90 leading-relaxed font-light">
                Discover curated plywood selections crafted for modern homes that celebrate timeless design and
                uncompromising quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProductIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentProductIndex ? "bg-amber-500 w-8" : "bg-amber-300/40 w-2"
            }`}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
