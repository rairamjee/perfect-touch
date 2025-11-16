'use client';
import { useEffect, useRef, useState } from 'react';

// Type definition for section content
interface SectionContent {
  badge: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  imageAlt: string;
}

// Reusable Section Component
function AnimatedSection({ content, index }: { content: SectionContent; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-12 px-6 lg:px-20 overflow-hidden ${
        isEven ? 'bg-white' : 'bg-gray-50'
      }`}
    >
      {/* Conditional rendering based on even/odd index */}
      {isEven ? (
        <>
          {/* Image Left - Content Right (Even index) */}
          <div
            className={`relative w-full max-w-[500px] h-[400px] rounded-xl overflow-hidden group transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <img
                src={content.image}
                alt={content.imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="absolute inset-10 border border-white/80 pointer-events-none"></div>
          </div>

          <div
            className={`flex flex-col items-start text-left space-y-6 transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <p className="tracking-wide text-sm font-semibold text-yellow-500 uppercase">
              {content.badge}
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight text-gray-900">
              {content.heading}
            </h2>
            <p className="text-base text-gray-700 max-w-xl">
              {content.description}
            </p>
            <a
              href={content.buttonLink}
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-4 rounded-md shadow-md transition-all hover:shadow-lg hover:scale-105"
            >
              {content.buttonText}
            </a>
          </div>
        </>
      ) : (
        <>
          {/* Content Left - Image Right (Odd index) */}
          <div
            className={`flex flex-col items-start text-left space-y-6 transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <p className="tracking-wide text-sm font-semibold text-yellow-500 uppercase">
              {content.badge}
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight text-gray-900">
              {content.heading}
            </h2>
            <p className="text-base text-gray-700 max-w-xl">
              {content.description}
            </p>
            <a
              href={content.buttonLink}
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-4 rounded-md shadow-md transition-all hover:shadow-lg hover:scale-105"
            >
              {content.buttonText}
            </a>
          </div>

          <div
            className={`relative w-full max-w-[500px] h-[400px] rounded-xl overflow-hidden group transition-all duration-1000 ease-out delay-300 lg:ml-auto ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <img
                src={content.image}
                alt={content.imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="absolute inset-10 border border-white/80 pointer-events-none"></div>
          </div>
        </>
      )}
    </section>
  );
}

// Main Component with JSON data
export default function LuxuryInteriorsHero() {
  // Your content array - easily add/remove/modify sections
  const sections = [
    {
      badge: "Personalised Designs",
      heading: "Experience Luxury Interior Designs First Time in Kolkata",
      description: "At Elegant Interiors, we believe in transforming your space into a masterpiece with our team of top interior decorators in Kolkata. Our design approach is a perfect combination of innovation, creativity, sophistication, and affordability. From modular kitchens to living rooms, we craft your space with precision and creativity.",
      buttonText: "VISIT SHOWROOM",
      buttonLink: "#contact",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      imageAlt: "Luxury Interior Design"
    },
    {
      badge: "Why Choose Us",
      heading: "Your Trusted Interior Design Partner in Kolkata",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      buttonText: "GET FREE CONSULTATION",
      buttonLink: "#consultation",
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
      imageAlt: "Why Choose Us - Interior Design"
    },
    {
      badge: "Our Expertise",
      heading: "Crafting Spaces That Inspire and Delight",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur leo. In hac habitasse platea dictumst. Maecenas sed diam eget risus varius blandit sit amet non magna.",
      buttonText: "VIEW PORTFOLIO",
      buttonLink: "#portfolio",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      imageAlt: "Our Expertise"
    },
    // {
    //   badge: "Premium Services",
    //   heading: "End-to-End Interior Design Solutions",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.",
    //   buttonText: "EXPLORE SERVICES",
    //   buttonLink: "#services",
    //   image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    //   imageAlt: "Premium Services"
    // }
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <AnimatedSection key={index} content={section} index={index} />
      ))}
    </div>
  );
}