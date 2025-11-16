'use client';

import { useRef, useEffect } from 'react';

export default function Banner() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/slider.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Welcome to Perfect Touch
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200 drop-shadow-md">
            Excellence in every detail, perfection in every project
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/quote"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl text-center"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30 text-center"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
