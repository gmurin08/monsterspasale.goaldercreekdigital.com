'use client';

import { motion } from 'framer-motion';

export default function FormSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-blue-600">Get Your</span> <span className="text-gray-600">Free Quote Today!</span>
          </h2>
          <p className="text-xl text-gray-600">Fill out the form below and our spa experts will contact you with exclusive Monster Spa Sale pricing!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white p-8 rounded-2xl shadow-xl">
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
        </motion.div>
      </div>
    </section>
  );
}