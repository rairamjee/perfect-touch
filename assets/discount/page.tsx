// "use client"

// import { useEffect, useRef, useState } from "react"

// const products = [
//   { name: "PLYWOOD", discount: 10 , imageUrl: 'https://images.unsplash.com/photo-1629976828074-c248d94c82ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBseXdvb2R8ZW58MHx8MHx8fDA%3D' },
//   { name: "SALMICA", discount: 20, imageUrl: 'blob:https://in.pinterest.com/3c7ed92d-cc1d-42bc-bf5d-1abfe921c0a5' },
//   // { name: "ROSEWOOD", discount: 30, imageUrl: '' },
// ]

// export default function DiscountCard() {
//   const discountRef = useRef<HTMLDivElement>(null)
//   const [isVisible, setIsVisible] = useState(false)
//   const [currentProductIndex, setCurrentProductIndex] = useState(0)

//   useEffect(() => {
//     const element = discountRef.current
//     if (!element) return

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//           observer.unobserve(element)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     observer.observe(element)

//     return () => observer.disconnect()
//   }, [])

//   useEffect(() => {
//     if (!isVisible) return

//     const interval = setInterval(() => {
//       setCurrentProductIndex((prev) => (prev + 1) % products.length)
//     }, 4000)

//     return () => clearInterval(interval)
//   }, [isVisible])

//   const currentProduct = products[currentProductIndex]

//   return (
//     <section className="py-12 px-4 md:px-8">
//       <div
//         ref={discountRef}
//         className={`relative rounded-2xl overflow-hidden h-80 md:h-96 transition-all duration-1000 ease-out ${
//           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
//         }`}
//         style={{
//           backgroundImage:
//             "url('https://www.tradefixa.com/company-data/New_Wood_Home/070420211102001.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/85 to-transparent"></div>

//         <div className="absolute top-0 right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>

//         <div className="relative z-10 h-full flex flex-col md:flex-row justify-between items-center px-8 md:px-12 py-10 md:py-16">
//           {/* LEFT SIDE - Discount Offer */}
//           <div className="flex flex-col gap-6 max-w-md">
//             <div className="space-y-2">
//               <div className="flex items-baseline gap-3">
//                 <h1
//                   key={`discount-${currentProductIndex}`}
//                   className="text-7xl md:text-8xl font-bold text-amber-400 leading-none tracking-tighter animate-fade-in-out"
//                 >
//                   {currentProduct.discount}
//                   <span className="text-5xl md:text-6xl font-light">%</span>
//                 </h1>
//               </div>
//               <p className="text-xl md:text-2xl font-light text-amber-400/90 tracking-wide">EXCLUSIVE OFFER</p>
//             </div>

//             <div className="inline-flex items-center gap-3 pt-4">
//               <div className="h-px w-8 bg-amber-400/50"></div>
//               <p
//                 key={`product-${currentProductIndex}`}
//                 className="text-white font-semibold text-lg tracking-widest animate-fade-in-out"
//               >
//                 ON {currentProduct.name}
//               </p>
//             </div>

//             <button className="mt-6 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full transition-all duration-300 transform hover:scale-105 w-fit">
//               Explore Now
//             </button>
//           </div>

//           {/* RIGHT SIDE - Brand Message */}
//           <div className="text-right max-w-md mt-10 md:mt-0">
//             <div className="space-y-4">
//               <p className="text-sm font-light tracking-widest text-amber-400/80">PREMIUM SELECTION</p>
//               <h2 className="text-2xl md:text-3xl font-light text-white leading-snug tracking-tight">
//                 Transform Your Space with <span className="font-semibold text-amber-400">Elegant Interiors</span>
//               </h2>
//               <p className="text-base text-gray-300/90 leading-relaxed font-light">
//                 Discover curated plywood selections crafted for modern homes that celebrate timeless design and
//                 uncompromising quality.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center gap-2 mt-6">
//         {products.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentProductIndex(index)}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               index === currentProductIndex ? "bg-amber-500 w-8" : "bg-amber-300/40 w-2"
//             }`}
//             aria-label={`Go to product ${index + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }



"use client"

import { useEffect, useRef, useState } from "react"

type Product = {
  name: string
  discount: number
  imageUrl: string
  description?: string
}

const products: Product[] = [
  {
    name: "PLYWOOD",
    discount: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1629976828074-c248d94c82ea?w=1600&auto=format&fit=crop&q=80",
    description:"Discover curated plywood selections crafted for modern homes that celebrate timeless design and uncompromising quality."
  },
  {
    name: "SALMICA",
    discount: 20,
    imageUrl:
      "https://www.centuryply.com/assets/img/blog/09-12-22/blog-img2.jpg",
    description:"Discover curated Salmica finishes designed for modern interiors, blending timeless aesthetics with durable, easy-to-maintain quality."
  },
  // {
  //   name: "ROSEWOOD",
  //   discount: 30,
  //   imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  // },
]

export default function DiscountCard() {
  const discountRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentProductIndex, setCurrentProductIndex] = useState(0)

  /* ---------------- Intersection Observer ---------------- */
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

  /* ---------------- Auto Rotate ---------------- */
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
      >
        {/* ================= Dynamic Background ================= */}
        <div
          key={currentProduct.imageUrl}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 animate-fade-in-out"
          style={{
            backgroundImage: `url('${currentProduct.imageUrl}')`,
          }}
        />

        {/* ================= Overlay ================= */}
        <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/85 to-transparent"></div>

        {/* ================= Glow ================= */}
        <div className="absolute top-0 right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>

        {/* ================= Content ================= */}
        <div className="relative z-10 h-full flex flex-col md:flex-row justify-between items-center px-8 md:px-12 py-10 md:py-16">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6 max-w-md">
            <div className="space-y-2">
              <h1
                key={`discount-${currentProductIndex}`}
                className="text-7xl md:text-8xl font-bold text-amber-400 leading-none tracking-tighter animate-fade-in-out"
              >
                {currentProduct.discount}
                <span className="text-5xl md:text-6xl font-light">%</span>
              </h1>
              <p className="text-xl md:text-2xl font-light text-amber-400/90 tracking-wide">
                EXCLUSIVE OFFER
              </p>
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

          {/* RIGHT SIDE */}
          <div className="text-right max-w-md mt-10 md:mt-0">
            <p className="text-sm font-light tracking-widest text-amber-400/80">
              PREMIUM SELECTION
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-white leading-snug tracking-tight mt-4">
              Transform Your Space with{" "}
              <span className="font-semibold text-amber-400">
                Elegant Interiors
              </span>
            </h2>
            <p className="text-base text-gray-300/90 leading-relaxed font-light mt-4">
              {/* Discover curated plywood selections crafted for modern homes that
              celebrate timeless design and uncompromising quality. */}
              {currentProduct.description}
            </p>
          </div>
        </div>
      </div>

      {/* ================= Indicators ================= */}
      <div className="flex justify-center gap-2 mt-6">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProductIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentProductIndex
                ? "bg-amber-500 w-8"
                : "bg-amber-300/40 w-2"
            }`}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
