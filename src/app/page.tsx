'use client';

import TopBar from '@/components/TopBar';
import HeroSection from '@/components/HeroSection';
import DealsSection from '@/components/DealsSection';
import ParallaxAsset from '@/components/ParallaxAsset';

export default function Home() {
  return (
    <>
      <TopBar />
      <main className="relative min-h-screen overflow-x-hidden pt-16">
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
        
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-600 mb-8 text-center">Get Your Free Quote!</h2>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl mb-12">
            <div 
              dangerouslySetInnerHTML={{
                __html: `
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/fMp3CjKajBRmzFuDm2FT"
                    style="width:100%;height:694px;border:none;border-radius:0px"
                    id="inline-fMp3CjKajBRmzFuDm2FT" 
                    data-layout=\'{"id":"INLINE"}\'
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Monster Spa Form"
                    data-height="694"
                    data-layout-iframe-id="inline-fMp3CjKajBRmzFuDm2FT"
                    data-form-id="fMp3CjKajBRmzFuDm2FT"
                    title="Monster Spa Form"
                  >
                  </iframe>
                `
              }}
            />
          </div>

          <h2 className="text-4xl font-bold text-gray-600 mb-8 text-center">Why Choose Our Spas?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-600 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Top-rated brands with warranties</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-gray-600 mb-2">Free Delivery</h3>
              <p className="text-gray-600">Professional installation included</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-600 mb-2">Best Prices</h3>
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
              📞 724-873-7665
            </a>
            <a href="mailto:info@monsterssale.com" className="hover:text-yellow-400 transition-colors">
              📞 412-494-7665
            </a>
          </div>
          <p className="text-sm opacity-75">© 2025 Pool & Spa Outlet. All rights reserved.</p>
        </div>
      </footer>
      </main>
    </>
  );
}