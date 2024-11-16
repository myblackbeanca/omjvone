import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const stories = [
  {
    name: 'Sarah Johnson',
    age: 32,
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300',
    quote: 'Finding OMJ changed everything. Finally, I felt understood and supported in my journey with TMJ.',
    condition: 'Living with TMJ for 5 years'
  },
  {
    name: 'Emily Chen',
    age: 28,
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=300',
    quote: 'The resources and community here have been invaluable in managing my TMJ condition.',
    condition: 'Recently diagnosed with TMJ'
  },
  {
    name: 'Maria Rodriguez',
    age: 35,
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300',
    quote: 'Thanks to OMJ, I learned to advocate for myself and found the right treatment.',
    condition: 'TMJ survivor for 8 years'
  }
];

export default function PatientStories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Patient Stories</h2>
          <p className="text-lg text-gray-600">Real experiences from our community members</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/50" />
              </div>
              
              <div className="p-6">
                <Quote className="w-8 h-8 text-pink-500 mb-4" />
                <p className="text-gray-700 italic mb-4">{story.quote}</p>
                
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <h3 className="font-semibold text-lg">{story.name}</h3>
                  <p className="text-gray-500 text-sm">{story.age} • {story.location}</p>
                  <p className="text-pink-500 text-sm mt-1">{story.condition}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}