'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          y: backgroundY,
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/hero/${isMobile ? 'hero-9x16' : 'hero-16x9'}.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
      </motion.div>

      <motion.div 
        className="relative z-10 h-full flex items-center justify-center"
        style={{
          y: textY,
        }}
      >
        <motion.img
          src="/images/assets/title.png"
          alt="Monster Spa Sale"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.5
          }}
          className="w-auto h-auto max-w-[90%] md:max-w-[70%] lg:max-w-[60%] drop-shadow-2xl"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
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
    </div>
  );
}