import { motion } from 'framer-motion';
import { Heart, Users, BookOpen } from 'lucide-react';

const goals = [
  {
    icon: Heart,
    title: 'Support',
    description: 'Providing resources and community for those affected by TMJ disorders.'
  },
  {
    icon: Users,
    title: 'Advocate',
    description: 'Fighting for better research funding and healthcare policies.'
  },
  {
    icon: BookOpen,
    title: 'Educate',
    description: 'Spreading awareness about TMJ disorders and their impact.'
  }
];

export default function Mission() {
  return (
    <section id="mission" className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're on a mission to revolutionize TMJ healthcare and support women affected by this condition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <goal.icon className="w-12 h-12 text-pink-500 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
              <p className="text-gray-600">{goal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}