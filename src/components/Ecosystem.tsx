import { Badge } from './ui/badge';
import { Network, Activity, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export function Ecosystem() {
  return (
    <section className="relative px-6 py-24 pb-32">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Built for the Future
        </motion.h2>
        <motion.p
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Powered by cutting-edge technology and decentralized infrastructure
        </motion.p>

        {/* Main ecosystem card with glassmorphism */}
        <motion.div
          className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-900/90 to-gray-800/60 border border-cyan-400/30 overflow-hidden backdrop-blur-2xl shadow-2xl shadow-cyan-500/10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Enhanced background effects */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400/20 rounded-full blur-[100px]" />

          <div className="relative">
            {/* Badges with enhanced glow */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Badge
                variant="outline"
                className="px-6 py-3 text-base border-green-400/40 bg-green-400/10 text-green-400 hover:bg-green-400/20 backdrop-blur-xl shadow-lg shadow-green-400/20 hover:shadow-green-400/30 transition-all duration-300"
              >
                <Activity className="w-5 h-5 mr-2" />
                <span className="flex items-center gap-2">
                  Live on Testnet
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                </span>
              </Badge>
              <Badge
                variant="outline"
                className="px-6 py-3 text-base border-cyan-400/40 bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20 backdrop-blur-xl shadow-lg shadow-cyan-400/20 hover:shadow-cyan-400/30 transition-all duration-300"
              >
                <Network className="w-5 h-5 mr-2" />
                Built on Starknet
              </Badge>
            </motion.div>

            {/* Features grid with glassmorphism */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Secure',
                  description: 'Smart contracts audited and verified on-chain',
                  color: 'cyan',
                  delay: 0.5,
                },
                {
                  icon: Network,
                  title: 'Decentralized',
                  description: 'No central authority, fully permissionless',
                  color: 'blue',
                  delay: 0.6,
                },
                {
                  icon: Activity,
                  title: 'Scalable',
                  description: "Fast finality with Starknet's L2 technology",
                  color: 'purple',
                  delay: 0.7,
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className={`group text-center p-6 rounded-2xl bg-gradient-to-br from-${feature.color}-400/10 to-transparent border border-${feature.color}-400/20 hover:border-${feature.color}-400/40 backdrop-blur-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-${feature.color}-400/20`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: feature.delay }}
                >
                  <div className={`inline-flex items-center justify-center p-3 rounded-full bg-${feature.color}-400/20 mb-4 shadow-lg shadow-${feature.color}-400/30 group-hover:shadow-${feature.color}-400/50 transition-shadow duration-300`}>
                    <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
                  </div>
                  <h4 className="text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Footer text */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-sm text-gray-500">
                Experience the future of prediction markets on Starknet's
                zero-knowledge rollup infrastructure
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative bottom line with glow */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent shadow-sm shadow-cyan-400/50" />
        </motion.div>
      </div>
    </section>
  );
}