import { motion } from 'framer-motion';

export default function TMJHero() {
  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Understanding TMJ Disorders</h1>
          <p className="text-xl text-gray-300">Get comprehensive information about TMJ disorders, symptoms, and treatment options.</p>
        </motion.div>
      </div>
    </section>
  );
}