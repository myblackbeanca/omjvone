import { motion } from 'framer-motion';
import { AlertCircle, Link } from 'lucide-react';

const symptoms = [
  'Jaw Pain & Tenderness',
  'Facial Pain',
  'Difficulty Chewing',
  'Clicking/Popping Sounds',
  'Limited Jaw Movement',
  'Neck & Shoulder Pain',
  'Ear Pain & Ringing',
  'Headaches'
];

const comorbidities = [
  'Fibromyalgia',
  'Chronic Fatigue Syndrome',
  'Migraines',
  'Sleep Disorders',
  'Anxiety & Depression',
  'Neck & Back Pain',
  'Tinnitus',
  'Vertigo'
];

export default function TMJSymptoms() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">TMJ Symptoms</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <AlertCircle className="w-6 h-6 text-pink-500 mr-2" />
              Common Symptoms
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {symptoms.map((symptom, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-pink-500 rounded-full" />
                  <span className="text-gray-700">{symptom}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Link className="w-6 h-6 text-pink-500 mr-2" />
              Related Conditions
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {comorbidities.map((condition, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-pink-500 rounded-full" />
                  <span className="text-gray-700">{condition}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}