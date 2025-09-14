'use client';

import DealCard from './DealCard';
import ParallaxAsset from './ParallaxAsset';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const deals = [
  {
    title: "Carribean Breeze",
    description: "Premium 6-person hot tub with LED lights and jets",
    discount: "40% OFF",
    price: "$3,999",
    originalPrice: "$6,665",
    image: "/images/deals/hottub1.jpg"
  },
  {
    title: "Summit Spa",
    description: "Luxury 8-person spa with waterfall feature",
    discount: "35% OFF",
    price: "$5,499",
    originalPrice: "$8,460",
    image: "/images/deals/spa1.jpg"
  },
  {
    title: "Epic Spa",
    description: "Perfect 4-person spa for smaller spaces",
    discount: "50% OFF",
    price: "$2,499",
    originalPrice: "$4,998",
    image: "/images/deals/compact1.jpg"
  }
];

export default function DealsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });
  
  // Witch flies from left to right across the heading
  const witchX = useTransform(scrollYProgress, [0, 1], ['-100px', 'calc(100% + 100px)']);
  const witchY = useTransform(scrollYProgress, [0, 0.5, 1], ['0px', '-20px', '0px']);
  
  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <ParallaxAsset 
        src="/images/assets/bubble1.png" 
        className="top-10 left-10 w-20 h-20 opacity-30"
        speed={0.3}
        rotate={true}
      />
      <ParallaxAsset 
        src="/images/assets/bubble2.png" 
        className="top-40 right-20 w-32 h-32 opacity-20"
        speed={0.5}
        scale={true}
      />
      <ParallaxAsset 
        src="/images/assets/wave1.png" 
        className="bottom-0 left-0 w-full h-40 opacity-10"
        speed={0.2}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-blue-600">Unbeatable</span> <span className="text-gray-600">Spa Deals</span>
          </h2>
          <p className="text-xl text-gray-600">Limited time offers on premium spas and hot tubs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <DealCard key={index} {...deal} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">Limited Time Only!</h3>
          <p className="text-xl mb-2">Sale ends soon - Don't miss out on these incredible savings!</p>
        </motion.div>
      </div>
    </section>
  );
}