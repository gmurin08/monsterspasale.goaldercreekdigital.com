'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Define animation stages based on scroll progress
  // Stage 1: 0-25% - Title moves up to top third
  const titleY = useTransform(scrollYProgress, [0, 0.25], ['0%', '-25%']);
  const titleScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.8]);
  const titleScrollOpacity = useTransform(scrollYProgress, [0.7, 0.75], [1, 0]);
  
  // Stage 2: 25-50% - Spa fades in lower right
  const spaOpacity = useTransform(scrollYProgress, [0.25, 0.35, 0.65, 0.75], [0, 1, 1, 0]);
  const spaX = useTransform(scrollYProgress, [0.25, 0.35], ['100%', '0%']);
  
  // Stage 3: 35-60% - Monster pops up from lower left
  const monsterScale = useTransform(scrollYProgress, [0.35, 0.4, 0.65, 0.75], [0, 1.1, 1, 0]);
  const monsterOpacity = useTransform(scrollYProgress, [0.35, 0.37, 0.73, 0.75], [0, 1, 1, 0]);
  const monsterY = useTransform(scrollYProgress, [0.35, 0.4], ['100%', '0%']);
  
  // Cobwebs - fade in early and stay
  const cobwebsOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  
  // Thunder - flicker effect when monster appears
  const thunderOpacity = useTransform(scrollYProgress, 
    [0.35, 0.36, 0.37, 0.38, 0.39, 0.4, 0.41, 0.42, 0.65, 0.75], 
    [0, 0.8, 0.2, 0.9, 0.3, 1, 0.4, 1, 1, 0]
  );
  
  // Stage 4: 75-100% - Allow normal scrolling (removed fade out)

  useEffect(() => {
    setIsClient(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [scrollYProgress]);

  return (
    <div className="relative">
      {/* Extended container for scroll detection */}
      <div ref={containerRef} className="relative" style={{ height: '400vh' }}>
        {/* Fixed hero section */}
        <div 
          className="fixed top-0 left-0 w-full h-screen overflow-hidden z-10"
        >
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/images/hero/${isMobile ? 'hero-9x16' : 'hero-16x9'}.png')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
          </div>

          {/* Title Animation - Moves to top third */}
          <motion.div 
            className="absolute inset-0 z-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={isClient ? {
              y: titleY,
              scale: titleScale,
              opacity: titleScrollOpacity,
            } : {}}
          >
            <img
              src="/images/assets/title.png"
              alt="Monster Spa Sale"
              className="w-auto h-auto max-w-[90%] md:max-w-[70%] lg:max-w-[60%] drop-shadow-2xl"
            />
          </motion.div>

          {/* Spa Animation - Lower right 2/3 */}
          <motion.div 
            className="absolute bottom-0 right-0 z-10 w-2/3 h-2/3 flex items-center justify-center"
            style={isClient ? {
              opacity: spaOpacity,
              x: spaX,
            } : { opacity: 0 }}
          >
            <img
              src="/images/assets/spa.png"
              alt="Spa"
              className="w-auto h-auto max-w-[90%] drop-shadow-2xl"
            />
          </motion.div>

          {/* Monster Animation - Lower left 2/3 */}
          <motion.div 
            className="absolute bottom-0 left-0 z-10 w-2/3 h-2/3 flex items-center justify-center"
            style={isClient ? {
              scale: monsterScale,
              opacity: monsterOpacity,
              y: monsterY,
            } : { opacity: 0 }}
          >
            <img
              src="/images/assets/monster.png"
              alt="Monster"
              className="w-auto h-auto max-w-[90%] md:max-w-[45%] lg:max-w-[40%] drop-shadow-2xl"
            />
          </motion.div>

          {/* Cobwebs - Cover top right side */}
          <motion.div 
            className="absolute top-0 right-0 z-5 w-1/2 h-1/2"
            style={isClient ? {
              opacity: cobwebsOpacity,
            } : { opacity: 0 }}
          >
            <img
              src="/images/assets/cobwebs.png"
              alt="Cobwebs"
              className="w-full h-full object-cover object-left-top"
            />
          </motion.div>

          {/* Thunder effect - Top left corner, 1/3 off top of screen */}
          <motion.div 
            className="absolute -top-1/3 -left-10 z-5 pointer-events-none"
            style={isClient ? {
              opacity: thunderOpacity,
              width: '66%',
              height: '66%',
            } : { opacity: 0 }}
          >
            <img
              src="/images/assets/thunder.png"
              alt="Thunder"
              className="w-full h-full object-contain object-bottom-right"
            />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              style={isClient ? {
                opacity: titleScrollOpacity,
              } : {}}
            >
              <div className="text-white text-center">
                <p className="text-lg mb-2">Scroll Down</p>
                <svg 
                  className="w-6 h-6 mx-auto"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}