import { motion } from 'framer-motion';
import { Video, Image as ImageIcon, FileText, Play, Download } from 'lucide-react';
import ReactPlayer from 'react-player';
import PageBanner from '../components/PageBanner';

export default function MediaHub() {
  return (
    <div className="pt-20">
      <PageBanner
        title="Media Hub"
        description="Explore our collection of videos, infographics, and resources"
        ctaText="Browse Resources"
        ctaLink="#resources"
        image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&h=600"
      />

      {/* Featured Videos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Featured Videos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch expert interviews, patient stories, and educational content about TMJ disorders.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Understanding TMJ Disorders",
                description: "Expert insights into TMJ causes and treatments",
                url: "https://www.youtube.com/watch?v=example1"
              },
              {
                title: "Patient Success Stories",
                description: "Real experiences from our community members",
                url: "https://www.youtube.com/watch?v=example2"
              }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="aspect-video">
                  <ReactPlayer
                    url={video.url}
                    width="100%"
                    height="100%"
                    controls
                    light={true}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infographics */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Educational Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download and share our informative resources about TMJ disorders.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "TMJ Symptoms Guide",
                description: "Common symptoms and warning signs",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&h=300"
              },
              {
                title: "Treatment Options",
                description: "Understanding your treatment choices",
                image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=500&h=300"
              },
              {
                title: "Self-Care Tips",
                description: "Daily management strategies",
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&h=300"
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <button className="flex items-center text-pink-500 hover:text-pink-600 transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 text-white rounded-xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Press Kit</h2>
            <p className="text-lg text-gray-300 text-center mb-8">
              Access our media resources, brand assets, and press releases.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <button className="flex items-center justify-center space-x-2 bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition-colors">
                <Download className="w-5 h-5" />
                <span>Download Press Kit</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-white/10 text-white py-3 px-6 rounded-lg hover:bg-white/20 transition-colors">
                <FileText className="w-5 h-5" />
                <span>View Media Guidelines</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}