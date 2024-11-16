import { motion } from 'framer-motion';

const stories = [
  {
    name: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300',
    quote: 'Finding OMJ changed everything. Finally, I felt understood and supported in my journey.',
    age: 32
  },
  {
    name: 'Emily Chen',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=300',
    quote: 'The resources and community here have been invaluable in managing my TMJ condition.',
    age: 28
  },
  {
    name: 'Maria Rodriguez',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300',
    quote: 'Thanks to OMJ, I learned to advocate for myself and found the right treatment.',
    age: 35
  }
];

export default function Stories() {
  return (
    <section id="stories" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Patient Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real women who are part of our community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-50 p-6 rounded-lg"
            >
              <img
                src={story.image}
                alt={story.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 italic mb-4">"{story.quote}"</p>
              <p className="font-semibold">{story.name}, {story.age}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}