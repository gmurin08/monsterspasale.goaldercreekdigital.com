'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxAssetProps {
  src: string;
  className?: string;
  speed?: number;
  rotate?: boolean;
  scale?: boolean;
}

export default function ParallaxAsset({ 
  src, 
  className = "", 
  speed = 0.5,
  rotate = false,
  scale = false
}: ParallaxAssetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${-100 * speed}px`, `${100 * speed}px`]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, rotate ? 360 : 0]);
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], scale ? [0.8, 1.1, 0.8] : [1, 1, 1]);

  return (
    <motion.div
      ref={ref}
      className={`absolute ${className}`}
      style={{
        y,
        rotate: rotateZ,
        scale: scaleValue,
      }}
    >
      <img src={src} alt="Decorative asset" className="w-full h-full object-contain" />
    </motion.div>
  );
}