import { motion } from 'framer-motion';
import { Brain, Activity, Stethoscope, HeartPulse } from 'lucide-react';
import PageBanner from '../components/PageBanner';

export default function TMJ101() {
  return (
    <div className="pt-20">
      <PageBanner
        title="TMJ 101"
        description="Your comprehensive guide to understanding TMJ disorders"
        ctaText="Start Learning"
        ctaLink="#basics"
        image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&h=600"
      />

      {/* Basics Section */}
      <section id="basics" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-8">
              <Brain className="w-8 h-8 text-pink-500 mr-4" />
              <h2 className="text-3xl font-bold">The Basics</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                The temporomandibular joint (TMJ) connects your jawbone to your skull. It's a complex system of bones, muscles, and nerves that work together to enable speaking, chewing, and facial expressions.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Key Components</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Temporomandibular joint</li>
                    <li>• Jaw muscles</li>
                    <li>• Facial nerves</li>
                    <li>• Surrounding tissues</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Basic Functions</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Speaking</li>
                    <li>• Chewing</li>
                    <li>• Facial expressions</li>
                    <li>• Jaw movement</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-8">
              <Activity className="w-8 h-8 text-pink-500 mr-4" />
              <h2 className="text-3xl font-bold">Common Symptoms</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  category: 'Pain Symptoms',
                  items: ['Jaw pain', 'Facial pain', 'Neck pain', 'Headaches']
                },
                {
                  category: 'Movement Issues',
                  items: ['Difficulty chewing', 'Limited jaw movement', 'Jaw locking', 'Clicking sounds']
                },
                {
                  category: 'Related Symptoms',
                  items: ['Ear pain', 'Dizziness', 'Tinnitus', 'Sleep issues']
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                  <ul className="space-y-2 text-gray-600">
                    {category.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diagnosis Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-8">
              <Stethoscope className="w-8 h-8 text-pink-500 mr-4" />
              <h2 className="text-3xl font-bold">Diagnosis Process</h2>
            </div>
            <div className="space-y-8">
              {[
                {
                  title: 'Medical History',
                  description: 'Your doctor will review your medical history and symptoms.',
                  steps: ['Previous injuries', 'Family history', 'Current medications', 'Lifestyle factors']
                },
                {
                  title: 'Physical Examination',
                  description: 'A thorough examination of your jaw and surrounding areas.',
                  steps: ['Range of motion', 'Pain points', 'Muscle tenderness', 'Joint sounds']
                },
                {
                  title: 'Imaging Tests',
                  description: 'Various imaging tests may be required for accurate diagnosis.',
                  steps: ['X-rays', 'CT scans', 'MRI', 'Arthrography']
                }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {section.steps.map((step, i) => (
                      <div key={i} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-2" />
                        {step}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Treatment Options Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center mb-8">
              <HeartPulse className="w-8 h-8 text-pink-500 mr-4" />
              <h2 className="text-3xl font-bold">Treatment Options</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  category: 'Conservative Treatments',
                  items: [
                    'Pain medication',
                    'Physical therapy',
                    'Heat/cold therapy',
                    'Stress management',
                    'Jaw exercises',
                    'Lifestyle changes'
                  ]
                },
                {
                  category: 'Medical Interventions',
                  items: [
                    'Dental splints',
                    'Botox injections',
                    'Trigger point injections',
                    'Arthrocentesis',
                    'Surgery (in severe cases)',
                    'Alternative therapies'
                  ]
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mr-2" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}