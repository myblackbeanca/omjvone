import { motion } from 'framer-motion';
import { Users, MessageCircle, Award, Heart, Share2 } from 'lucide-react';
import PageBanner from '../components/PageBanner';

export default function Community() {
  return (
    <div className="pt-20">
      <PageBanner
        title="Join Our Community"
        description="Connect with others, share your story, and find support in our growing community"
        ctaText="Join Now"
        ctaLink="#join"
        image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&h=600"
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Support Groups',
                description: 'Connect with others who understand your journey'
              },
              {
                icon: MessageCircle,
                title: 'Discussion Forums',
                description: 'Share experiences and get advice from the community'
              },
              {
                icon: Heart,
                title: 'Resource Library',
                description: 'Access guides, tips, and educational materials'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-slate-50 p-8 rounded-lg text-center"
              >
                <feature.icon className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read inspiring stories from our community members.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Jennifer Smith',
                quote: 'The support I found here changed my life. I finally felt understood.',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300'
              },
              {
                name: 'Lisa Chen',
                quote: 'Thanks to this community, I learned to advocate for my health.',
                image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=300'
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-6"
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-600 italic mb-2">"{story.quote}"</p>
                  <p className="font-semibold">{story.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 text-white p-8 rounded-xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Join Our Community</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Story (Optional)</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white"
                  placeholder="Share your TMJ journey"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
              >
                Join Now
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}