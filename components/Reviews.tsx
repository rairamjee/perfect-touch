'use client';

import { useState, useEffect, useRef } from 'react';

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Tech Innovations',
    content: 'Perfect Touch exceeded our expectations! Their attention to detail and professionalism is unmatched. The project was delivered on time and beyond our requirements.',
    rating: 5,
    avatar: 'SJ',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'Global Solutions',
    content: 'Working with Perfect Touch has been a game-changer for our business. Their innovative approach and dedication to quality shine through in everything they do.',
    rating: 5,
    avatar: 'MC',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'Digital Dynamics',
    content: 'The team at Perfect Touch truly understands what excellence means. They transformed our vision into reality with precision and creativity. Highly recommended!',
    rating: 5,
    avatar: 'ER',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Founder',
    company: 'StartupHub',
    content: 'Outstanding service from start to finish! Perfect Touch delivered exceptional results and made the entire process smooth and enjoyable. They are our go-to partners.',
    rating: 5,
    avatar: 'DT',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'Operations Manager',
    company: 'Enterprise Plus',
    content: 'Perfect Touch brings a level of professionalism and expertise that is rare to find. Their commitment to quality and customer satisfaction is evident in every interaction.',
    rating: 5,
    avatar: 'LA',
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Effect for auto-sliding
  useEffect(() => {
    if (isPaused) return;

    // Auto-slide interval
    intervalRef.current = setInterval(() => {
      setIsAnimating(true);
      setProgress(0); // Reset progress when changing slide
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % reviews.length;
        return nextIndex;
      });
      
      // Reset animation state after transition
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }, 3000); // Change review every 3 seconds (faster)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  // Effect for progress bar
  useEffect(() => {
    if (isPaused) {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      return;
    }

    // Reset progress when starting or when slide changes
    setProgress(0);
    
    // Progress bar animation - updates every 30ms (100 updates in 3 seconds)
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 1; // Increment by 1% every 30ms
      });
    }, 30);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPaused, currentIndex]);

  const goToSlide = (index: number) => {
    if (index !== currentIndex) {
      setIsAnimating(true);
      setProgress(0); // Reset progress when manually changing slide
      setCurrentIndex(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-down">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Container */}
          <div className="relative h-[400px] md:h-[450px] overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out h-full"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {reviews.map((review, index) => {
                const isActive = index === currentIndex;
                return (
                  <div
                    key={review.id}
                    className="min-w-full px-4 flex items-center justify-center"
                  >
                    <div
                      className={`max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 transform transition-all duration-700 ${
                        isActive
                          ? 'opacity-100 scale-100 translate-x-0'
                          : 'opacity-0 scale-95 translate-x-10'
                      } ${isAnimating ? 'animate-slide-in' : ''} hover:shadow-2xl hover:scale-105`}
                      style={{
                        animation: isActive && !isAnimating ? 'fadeInScale 0.8s ease-out' : 'none',
                      }}
                    >
                      {/* Rating Stars */}
                      <div 
                        className="flex justify-center mb-6 animate-star-rating"
                        style={{
                          animationDelay: isActive ? '0.2s' : '0s',
                        }}
                      >
                        {renderStars(review.rating)}
                      </div>

                      {/* Review Content */}
                      <blockquote 
                        className="text-center mb-8 animate-text-fade"
                        style={{
                          animationDelay: isActive ? '0.4s' : '0s',
                        }}
                      >
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
                          "{review.content}"
                        </p>
                      </blockquote>

                      {/* Reviewer Info */}
                      <div 
                        className="flex items-center justify-center space-x-4 animate-slide-up"
                        style={{
                          animationDelay: isActive ? '0.6s' : '0s',
                        }}
                      >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg transform hover:scale-110 transition-transform duration-300 animate-avatar-bounce">
                          {review.avatar}
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-gray-900 text-lg">
                            {review.name}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {review.role}, {review.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-10 h-3 bg-gradient-to-r from-blue-600 to-purple-600'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

