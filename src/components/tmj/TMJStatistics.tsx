import { motion } from 'framer-motion';
import { PieChart, Brain, Activity } from 'lucide-react';

export default function TMJStatistics() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">TMJ By The Numbers</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: PieChart,
              stat: '90%',
              label: 'of TMJ patients are women',
              description: 'Women are significantly more likely to experience TMJ disorders'
            },
            {
              icon: Brain,
              stat: '35M',
              label: 'Americans affected',
              description: 'TMJ disorders affect millions of people in the US alone'
            },
            {
              icon: Activity,
              stat: '50%',
              label: 'seek treatment',
              description: 'Only half of those affected seek professional treatment'
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <stat.icon className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.stat}</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}