'use client';

import ParallaxAsset from './ParallaxAsset';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function DealsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
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
            <span className="text-blue-600">Best Prices</span> <span className="text-gray-600">of the Season!</span>
          </h2>
          <p className="text-xl text-gray-600">The Monster Spa Sale is Here!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-blue-600 mb-6">Unbeatable Savings on Premium Spas & Hot Tubs</h3>
            <p className="text-lg text-gray-700 mb-4">
              Experience the ultimate relaxation with our Monster Spa Sale featuring the season&apos;s lowest prices on our entire inventory of premium spas and hot tubs. From compact models perfect for intimate spaces to luxury 8-person spas with advanced jet systems and LED lighting, we have the perfect spa for your lifestyle and budget.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Don&apos;t wait - these incredible prices won&apos;t last long! Our expert team is ready to help you find the perfect spa to transform your backyard into a personal oasis.
            </p>
            
            <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-xl mb-6">
              <p className="text-2xl font-bold mb-2">Save Up to 50% OFF Select Models!</p>
              <p className="text-lg">Limited Time Only - While Supplies Last</p>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Visit <a href="https://pool-spaoutlet.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:text-blue-700 underline">pool-spaoutlet.com</a> to explore our full selection of spas, hot tubs, and accessories. Our knowledgeable staff can help you choose the perfect model with features like hydrotherapy jets, energy-efficient heating, and smart controls.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-2xl font-bold text-blue-600 mb-4">North Fayette Location</h4>
            <div className="text-gray-700">
              <p className="mb-2">Visit our North Fayette showroom to see our spas in person!</p>
              <p className="text-sm text-gray-600 mt-3">
                Call or visit for exact address and hours
              </p>
              <a href="https://pool-spaoutlet.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Directions
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-2xl font-bold text-blue-600 mb-4">Peters Township Location</h4>
            <div className="text-gray-700">
              <p className="mb-2">Experience luxury spas at our Peters Township showroom!</p>
              <p className="text-sm text-gray-600 mt-3">
                Call or visit for exact address and hours
              </p>
              <a href="https://pool-spaoutlet.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Directions
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">Hurry In Today!</h3>
          <p className="text-xl mb-4">The Monster Spa Sale won&apos;t last forever!</p>
          <p className="text-lg">Visit pool-spaoutlet.com or stop by our showrooms to take advantage of the best spa prices of the season.</p>
        </motion.div>
      </div>
    </section>
  );
}