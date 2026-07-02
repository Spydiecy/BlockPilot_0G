"use client";

import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const offset = 80; // Account for fixed navbar height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

function HeroSplineBackground() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      pointerEvents: 'auto',
      overflow: 'hidden',
    }}>
      <Spline
        style={{
          width: '100%',
          height: '100vh',
          pointerEvents: 'auto',
        }}
        scene="https://prod.spline.design/dJqTIQ-tE3ULUPMi/scene.splinecode"
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent 30%, transparent 70%, rgba(0, 0, 0, 0.8)),
            linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.9))
          `,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

function ScreenshotSection({ screenshotRef }: { screenshotRef: React.MutableRefObject<HTMLDivElement | null> }) {
  return (
    <section className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 -mb-48 mt-24">
      <div ref={screenshotRef} className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700/50 w-full md:w-[80%] lg:w-[70%] mx-auto">
        <div>
          <img
            src="https://cdn.sanity.io/images/s6lu43cv/production-v4/13b6177b537aee0fc311a867ea938f16416e8670-3840x2160.jpg?w=3840&h=2160&q=10&auto=format&fm=jpg"
            alt="App Screenshot"
            className="w-full h-auto block rounded-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <div className="text-white px-4 max-w-screen-xl mx-auto w-full flex flex-col lg:flex-row justify-between items-start lg:items-center py-16">
      <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Smart Contract<br />Security by <br/>AuditFi AI
        </h1>
        <div className="text-sm text-gray-400 tracking-wider">
          INTELLIGENT AGENT · REAL-TIME AUDITS · BLOCKCHAIN SECURITY
        </div>
      </div>

      <div className="w-full lg:w-1/2 pl-0 lg:pl-8 flex flex-col items-start">
         <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-xl leading-relaxed">
           Our AI agent continuously monitors and protects your smart contracts with real-time threat detection
        </p>
        <div className="flex pointer-events-auto flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
            <a href="/dashboard" className="bg-white text-black font-medium py-3 px-8 rounded-full transition duration-300 hover:bg-gray-100 flex items-center justify-center w-full sm:w-auto text-sm">
               <span className="text-cyan-500 mr-2 text-lg font-bold">+</span>
               Get Started
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-black border border-gray-800 text-white font-medium py-3 px-8 rounded-full transition duration-300 w-full sm:w-auto hover:bg-gray-900 flex items-center justify-center text-sm">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Follow Us
            </a>
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-20" style={{ backgroundColor: 'rgba(13, 13, 24, 0.3)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}>
      <div className="container mx-auto px-4 py-4 md:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-8 lg:space-x-12">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            className="text-white group"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300" />
              
              {/* Logo Container */}
              <div className="relative flex items-center bg-black border border-neutral-800 group-hover:border-blue-500/50 px-4 py-2 rounded-lg transition duration-300">
                {/* Lightning Bolt */}
                <div className="mr-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                
                {/* Text */}
                <span className="text-xl font-mono font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-300 group-hover:from-blue-400 group-hover:to-white transition duration-300">
                  AuditFi
                </span>
              </div>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-gray-300 hover:text-white text-sm transition duration-150"
            >
              Home
            </a>
            <a 
              href="#features" 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('features');
              }}
              className="text-gray-300 hover:text-white text-sm transition duration-150"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('how-it-works');
              }}
              className="text-gray-300 hover:text-white text-sm transition duration-150"
            >
              How it Works
            </a>
            <a 
              href="#chains" 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('chains');
              }}
              className="text-gray-300 hover:text-white text-sm transition duration-150"
            >
              Chains Supported
            </a>
            <a 
              href="#audits" 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo('audits');
              }}
              className="text-gray-300 hover:text-white text-sm transition duration-150"
            >
              Audits
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <a href="/dashboard" className="bg-black border border-gray-800 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-900 transition duration-300">
            Launch App
          </a>
        </div>
      </div>
    </nav>
  );
}

const HeroSection = () => {
  const screenshotRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (screenshotRef.current && heroContentRef.current) {
        requestAnimationFrame(() => {
          const scrollPosition = window.pageYOffset;

          if (screenshotRef.current) {
            screenshotRef.current.style.transform = `translateY(-${scrollPosition * 0.5}px)`;
          }

          const maxScroll = 400;
          const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
          if (heroContentRef.current) {
             heroContentRef.current.style.opacity = opacity.toString();
          }
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navbar />

      <div className="relative min-h-screen">
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <HeroSplineBackground />
        </div>

        <div ref={heroContentRef} style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh',
          display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10, pointerEvents: 'none'
        }}>
          <HeroContent />
        </div>
      </div>

      <div className="bg-black relative z-10" style={{ marginTop: '-15vh' }}>
        <ScreenshotSection screenshotRef={screenshotRef} />
      </div>
    </div>
  );
};

export { HeroSection }

