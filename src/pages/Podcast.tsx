import { motion } from 'framer-motion';
import { Play, Headphones, Mic, Tag, Users, MessageCircle } from 'lucide-react';
import ReactPlayer from 'react-player';
import PageBanner from '../components/PageBanner';

export default function Podcast() {
  return (
    <div className="pt-20">
      <PageBanner
        title="TMJ Talk Podcast"
        description="Listen to stories, expert interviews, and the latest in TMJ research"
        ctaText="Subscribe Now"
        ctaLink="#subscribe"
        image="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1920&h=600"
      />

      {/* Featured Episodes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Featured Episodes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Listen to our most popular episodes discussing TMJ disorders, treatments, and patient stories.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Understanding TMJ Disorders",
                description: "Expert discussion on TMJ causes and treatments",
                duration: "45:30",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&h=300"
              },
              {
                title: "Patient Stories: Road to Recovery",
                description: "Real experiences from TMJ warriors",
                duration: "38:15",
                image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=500&h=300"
              }
            ].map((episode, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={episode.image}
                  alt={episode.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{episode.title}</h3>
                  <p className="text-gray-600 mb-4">{episode.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 flex items-center">
                      <Play className="w-4 h-4 mr-2" />
                      {episode.duration}
                    </span>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600 transition-colors">
                      Listen Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Topics We Cover</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of TMJ-related topics and discussions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Treatment Options",
              "Research Updates",
              "Patient Stories",
              "Expert Interviews",
              "Lifestyle Tips",
              "Mental Health",
              "Alternative Therapies",
              "Advocacy"
            ].map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <Tag className="w-6 h-6 text-pink-500 mx-auto mb-2" />
                <p className="font-medium">{topic}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Questions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 text-white p-8 rounded-xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Submit Your Questions</h2>
            <p className="text-gray-300 text-center mb-8">
              Have a topic you'd like us to cover? Share your questions and suggestions!
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="topic" className="block text-sm font-medium mb-2">Topic</label>
                <input
                  type="text"
                  id="topic"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
                  placeholder="Suggest a topic"
                />
              </div>
              <div>
                <label htmlFor="question" className="block text-sm font-medium mb-2">Your Question</label>
                <textarea
                  id="question"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
                  placeholder="What would you like us to discuss?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
              >
                Submit Question
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}