import { Layers, Eye, TrendingUp, Users } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Layers,
    title: 'Create & Participate',
    description:
      'Create and participate in prediction markets on any topic. Your market, your rules.',
  },
  {
    icon: Users,
    title: 'Community Insights',
    description:
      'Share predictions and learn from the collective wisdom of the community.',
  },
  {
    icon: Eye,
    title: 'Transparent Outcomes',
    description:
      'All outcomes are recorded on-chain, ensuring complete transparency and verifiability.',
  },
  {
    icon: TrendingUp,
    title: 'Earn Rewards',
    description:
      'Accurate predictions earn rewards. The more you contribute, the more you earn.',
  },
];

export function Features() {
  return (
    <section className="relative px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Why Stark Zuri?
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-cyan-400/20 hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Enhanced glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                {/* Icon with enhanced glow */}
                <div className="inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-cyan-400/30 mb-4 shadow-lg shadow-cyan-400/20 group-hover:shadow-cyan-400/40 transition-shadow duration-300">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner accent with glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}