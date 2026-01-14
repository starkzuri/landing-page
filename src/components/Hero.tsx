import { TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import st4 from "../images/ST4.png";

export function Hero() {
  return (
    <section className="relative px-6 py-24 md:py-32 lg:py-40">
      {/* Enhanced glow effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/25 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Logo/Brand with animation */}
        <motion.div
          // FIX 1: 'flex-col' stacks them on mobile, 'sm:flex-row' puts them side-by-side on tablet/desktop
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-cyan-400/40 rounded-lg blur-xl animate-pulse" />

            {/* FIX 2: 'p-3' keeps the box tight. 'w-14' is a good size. */}
            <div className="relative bg-gradient-to-br p-3 rounded-lg shadow-lg shadow-cyan-500/50 flex items-center justify-center">
              <img src={st4} className="w-10 h-10 object-contain" />
            </div>
          </div>

          {/* FIX 3: 'text-3xl' on mobile (smaller) -> 'text-4xl' on desktop (original size) */}
          <h1 className="text-3xl sm:text-4xl tracking-tight text-center sm:text-left">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Stark Zuri
            </span>
          </h1>
        </motion.div>

        {/* Hero content */}
        <div className="text-center space-y-8">
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Predict. Share. Earn.
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Stark Zuri is a decentralized social prediction network on Starknet.
            Forecast outcomes, share insights with the community, and earn
            rewards.
          </motion.p>

          {/* CTAs with enhanced glow */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              onClick={() => {
                window.location.href = "https://app.starkzuri.com";
              }}
              size="lg"
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/70 px-8 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Try on Testnet
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <Button
              onClick={() => {
                window.location.href = "https://app.starkzuri.com";
              }}
              size="lg"
              variant="outline"
              className="relative border-cyan-400/40 bg-cyan-400/5 backdrop-blur-sm text-cyan-400 hover:bg-cyan-400/15 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-400/20 px-8 transition-all duration-300"
            >
              View Markets
            </Button>
          </motion.div>

          {/* Decorative line */}
          <div className="pt-12">
            <div className="h-px w-64 mx-auto bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
