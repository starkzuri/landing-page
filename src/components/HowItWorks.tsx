import { Search, Vote, Coins, Award } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Choose a Market',
    description:
      'Browse available prediction markets or create your own on topics you care about.',
  },
  {
    number: '02',
    icon: Vote,
    title: 'Predict Yes or No',
    description:
      'Make your prediction by choosing an outcome. Your confidence shapes the market.',
  },
  {
    number: '03',
    icon: Coins,
    title: 'Stake Tokens',
    description:
      'Back your prediction with tokens. Higher stakes mean higher potential rewards.',
  },
  {
    number: '04',
    icon: Award,
    title: 'Earn Rewards',
    description:
      'When the outcome resolves, winners share the pool proportional to their stake.',
  },
];

export function HowItWorks() {
  return (
    <section className="relative px-6 py-24">
      {/* Background gradient with mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(100, 200, 255) 1px, transparent 0)`,
        backgroundSize: '50px 50px',
      }} />

      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get started in four simple steps
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Connecting line for desktop with glow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-2rem)] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-cyan-400/50 via-cyan-400/30 to-transparent shadow-sm shadow-cyan-400/50" />
                </div>
              )}

              <div className="relative text-center">
                {/* Step number with glassmorphism */}
                <div className="inline-flex items-center justify-center mb-4">
                  <span className="text-6xl bg-gradient-to-br from-cyan-400/30 to-purple-400/30 bg-clip-text text-transparent select-none group-hover:from-cyan-400/50 group-hover:to-purple-400/50 transition-all duration-300">
                    {step.number}
                  </span>
                </div>

                {/* Icon with enhanced glassmorphism */}
                <div className="relative inline-flex items-center justify-center p-4 mb-4">
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-2xl group-hover:bg-cyan-400/30 transition-all duration-300" />
                  <motion.div
                    className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-4 rounded-full border border-cyan-400/30 group-hover:border-cyan-400/50 backdrop-blur-xl shadow-lg shadow-cyan-400/20 group-hover:shadow-cyan-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <step.icon className="w-8 h-8 text-cyan-400" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-xl mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}