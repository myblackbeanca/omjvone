import { motion } from 'framer-motion';

export default function WhatIsTMJ() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What is OH MY JAW?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            OH MY JAW (OMJ) is a non-profit all about changing the perception of TMJ disorders and women's health issues affecting the jaw.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower women to better understand their TMJ condition and advocate for improved healthcare solutions.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                A world where TMJ disorders are properly understood, researched, and treated with the seriousness they deserve.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}