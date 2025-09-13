'use client';

import HeroSection from '@/components/HeroSection';
import DealsSection from '@/components/DealsSection';
import ParallaxAsset from '@/components/ParallaxAsset';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <HeroSection />
      
      <div className="relative z-20 bg-white">
        <ParallaxAsset 
          src="/images/assets/spa-icon1.png" 
          className="top-20 left-10 w-24 h-24 opacity-20 z-0"
          speed={0.4}
          rotate={true}
        />
        <ParallaxAsset 
          src="/images/assets/spa-icon2.png" 
          className="top-60 right-10 w-32 h-32 opacity-15 z-0"
          speed={0.6}
          scale={true}
        />
        
        <DealsSection />
      </div>

      <section className="relative z-20 py-20 bg-gradient-to-b from-white to-blue-50">
        <ParallaxAsset 
          src="/images/assets/water-drop.png" 
          className="top-10 left-1/2 w-16 h-16 opacity-25"
          speed={0.3}
          rotate={true}
        />
        
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Why Choose Our Spas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Top-rated brands with warranties</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">Free Delivery</h3>
              <p className="text-gray-600">Professional installation included</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Best Prices</h3>
              <p className="text-gray-600">Guaranteed lowest prices in town</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-20 bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Monster Spa Sale</h3>
          <p className="mb-8">Contact us today for the best deals on spas and hot tubs!</p>
          <div className="flex justify-center gap-8 mb-8">
            <a href="tel:1-800-SPA-SALE" className="hover:text-yellow-400 transition-colors">
              📞 1-800-SPA-SALE
            </a>
            <a href="mailto:info@monsterssale.com" className="hover:text-yellow-400 transition-colors">
              ✉️ info@monstersale.com
            </a>
          </div>
          <p className="text-sm opacity-75">© 2024 Monster Spa Sale. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}