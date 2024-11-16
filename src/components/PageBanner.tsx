import { motion } from 'framer-motion';

interface PageBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image?: string;
}

export default function PageBanner({ title, description, ctaText, ctaLink, image }: PageBannerProps) {
  return (
    <div className="relative bg-slate-900 text-white py-20 overflow-hidden">
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90" />
        </div>
      )}
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-gray-300 mb-8">{description}</p>
          <motion.a
            href={ctaLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors"
          >
            {ctaText}
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}