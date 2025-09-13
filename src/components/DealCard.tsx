'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';

interface DealCardProps {
  title: string;
  description: string;
  discount: string;
  price: string;
  originalPrice: string;
  image: string;
  index: number;
}

export default function DealCard({ 
  title, 
  description, 
  discount, 
  price, 
  originalPrice, 
  image,
  index 
}: DealCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Tilt
        className="parallax-effect"
        perspective={1000}
        glareEnable={true}
        glareMaxOpacity={0.3}
        scale={1.02}
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative">
            <img 
              src={image} 
              alt={title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-lg">
              {discount}
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-blue-600">{price}</span>
              <span className="text-xl text-gray-400 line-through">{originalPrice}</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all"
            >
              Get This Deal
            </motion.button>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}