import { motion, useTransform, useMotionValue } from 'framer-motion';
import { Heart, Users, Gift, Briefcase, HandHeart, Check } from 'lucide-react';
import PageBanner from '../components/PageBanner';

export default function JoinTheTribe() {
  const donationAmount = useMotionValue(50);
  const donationLevel = useTransform(
    donationAmount,
    [10, 50, 100, 500, 1000],
    ['Supporter', 'Advocate', 'Champion', 'Hero', 'Legend']
  );

  return (
    <div className="pt-20">
      <PageBanner
        title="Support OMJ"
        description="Join our mission to revolutionize TMJ healthcare"
        ctaText="Donate Now"
        ctaLink="#donate"
        image="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1920&h=600"
      />

      {/* Donation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Support Our Mission</h2>
            <p className="text-lg text-gray-600">
              Your donation helps us continue our work in supporting women with TMJ disorders.
            </p>
          </motion.div>

          <div className="bg-slate-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Choose Your Impact Level: <motion.span className="text-pink-500">{donationLevel}</motion.span>
            </h3>
            
            <div className="mb-8">
              <motion.input
                type="range"
                min={10}
                max={1000}
                value={donationAmount.get()}
                onChange={(e) => donationAmount.set(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-500"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>$10</span>
                <span>$1000</span>
              </div>
            </div>

            <div className="text-center mb-8">
              <motion.div className="text-4xl font-bold text-pink-500 mb-2">
                ${donationAmount.get()}
              </motion.div>
              <p className="text-gray-600">Monthly Donation</p>
            </div>

            <button className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-600 transition-colors">
              Donate Now
            </button>
          </div>

          {/* Rewards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                level: 'Advocate',
                amount: '$50/month',
                benefits: [
                  'Exclusive newsletter',
                  'Member badge',
                  'Priority support'
                ]
              },
              {
                level: 'Champion',
                amount: '$100/month',
                benefits: [
                  'All Advocate benefits',
                  'Quarterly care package',
                  'Private community access'
                ]
              },
              {
                level: 'Hero',
                amount: '$500/month',
                benefits: [
                  'All Champion benefits',
                  'Personal TMJ consultation',
                  'Featured donor spotlight'
                ]
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{tier.level}</h3>
                <p className="text-pink-500 font-bold mb-4">{tier.amount}</p>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <Check className="w-4 h-4 text-pink-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Other Ways to Help</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              There are many ways to support our mission beyond financial contributions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: HandHeart,
                title: 'Volunteer',
                description: 'Share your time and skills to help our cause'
              },
              {
                icon: Briefcase,
                title: 'Corporate Partnership',
                description: 'Partner with us to make a bigger impact'
              },
              {
                icon: Gift,
                title: 'Planned Giving',
                description: 'Leave a lasting legacy through planned giving'
              }
            ].map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <way.icon className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{way.title}</h3>
                <p className="text-gray-600">{way.description}</p>
                <button className="mt-4 text-pink-500 hover:text-pink-600 transition-colors">
                  Learn More →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '10K+', label: 'Women Supported' },
              { number: '$500K', label: 'Raised for Research' },
              { number: '50+', label: 'Partner Clinics' },
              { number: '100%', label: 'Commitment' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-pink-500 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}