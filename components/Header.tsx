'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 bg-black transition-all duration-500 ${isScrolled ? 'shadow-2xl shadow-black/70 backdrop-blur-sm bg-black/95' : 'shadow-lg'
        }`}
    >
      {/* Decorative Top Border */}
      <div className="h-1 bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-400 animate-linear-x"></div>

      {/* Promotional Banner with Animation */}
      <div className="bg-linear-to-r from-gray-900 via-black to-gray-900 text-white py-3 px-4 border-b border-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-yellow-400/5 to-transparent animate-shimmer-slow"></div>
        <div className="max-w-7xl mx-auto flex items-center justify-center text-sm relative z-10">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full animate-pulse-slow"></span>
              <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full animate-pulse-slow" style={{ animationDelay: '0.2s' }}></span>
              <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full animate-pulse-slow" style={{ animationDelay: '0.4s' }}></span>
            </div>
            <span className="text-center">
              <span className="font-bold text-yellow-400 animate-bounce-subtle">25% OFF</span> on your first Order -{' '}
              <Link
                href="/"
                className="text-yellow-400 hover:text-yellow-300 font-bold  underline-offset-2 transition-all hover:scale-105 inline-block relative group"
              >
                Explore Now
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Enhanced Logo with Animation */}
          <div className="shrink-0">
            <Link
              href="/"
              className="flex items-center space-x-3 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-yellow-400/50 to-yellow-500/50 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-14 h-14 bg-linear-to-br from-white via-gray-100 to-gray-300 rounded-xl flex items-center justify-center shadow-2xl group-hover:shadow-yellow-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <span className="text-black font-bold text-2xl group-hover:scale-110 transition-transform duration-300">PT</span>
                </div>
                <div className="absolute -inset-1 bg-linear-to-r from-yellow-400 to-yellow-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 block">
                  Perfect Touch
                </span>
                <div className="h-1 w-0 bg-linear-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-500 mt-1 rounded-full"></div>
                <span className="text-xs text-gray-400 group-hover:text-yellow-400/70 transition-colors">Design & Decor</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation with Enhanced Animations */}
          <div className="hidden md:flex items-center space-x-2">
            {[
              { id: '/', label: 'Home' },
              { id: '/about', label: 'About' },
              { id: '/services', label: 'Services' },
              { id: '/portfolio', label: 'Portfolio' },
              { id: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.id}
                href={item.id}
                className={`relative px-5 py-2.5 font-semibold transition-all duration-300 rounded-lg overflow-hidden group ${isActive(item.id)
                    ? 'text-white bg-gray-900'
                    : 'text-gray-300 hover:text-white hover:bg-gray-900/50'
                  }`}
              >
                <span className="relative z-10 flex items-center space-x-1">
                  <span>{item.label}</span>
                  {isActive(item.id) && (
                    <span className="inline-block w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span>
                  )}
                </span>
                {isActive(item.id) && (
                  <>
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-yellow-400 to-yellow-500"></span>
                    <div className="absolute inset-0 bg-linear-to-r from-yellow-400/10 to-yellow-500/10"></div>
                  </>
                )}
                <div className="absolute inset-0 bg-linear-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            ))}
            <div className="ml-4 relative bg-linear-to-r from-yellow-400 to-yellow-500 text-black px-7 py-3 rounded-lg font-bold transition-all shadow-lg hover:shadow-yellow-500/50 hover:scale-110 transform overflow-hidden group w-fit">

              <span className="relative z-10 flex items-center space-x-2">
                <input
                  type="tel"
                  placeholder="+ 91 9876543210"
                  className="bg-transparent outline-none placeholder-black/70 font-bold w-40"
                />

                {/* <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg> */}
              </span>

              <div className="absolute inset-0 bg-linear-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400 focus:outline-none focus:text-yellow-400 transition-colors p-2 rounded-lg hover:bg-gray-900 relative"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute top-0 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2.5' : ''}`}></span>
                <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-2">
              {[
                { id: '/', label: 'Home', icon: '🏠' },
                { id: '/services', label: 'Services', icon: '✨' },
                { id: '/about', label: 'About', icon: '👥' },
                { id: '/portfolio', label: 'Portfolio', icon: '🎨' },
                { id: '/contact', label: 'Contact', icon: '📧' },
              ].map((item) => (
                <Link
                  key={item.id}
                  href={item.id}
                  className={`px-4 py-3 font-medium transition-all rounded-lg text-left flex items-center space-x-3 ${isActive(item.id)
                      ? 'text-white bg-gray-900 border-l-4 border-yellow-400 shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-gray-900/50'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                  {isActive(item.id) && (
                    <span className="ml-auto inline-block w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                  )}
                </Link>
              ))}
              <Link
                href="/quote"
                className="mt-3 bg-linear-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all text-center shadow-lg flex items-center justify-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>+91 8777281405</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
