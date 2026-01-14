import { Twitter, MessageCircle, Github } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const socialLinks = [
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/starkzuri01",
      color: "hover:text-cyan-400",
    },
    {
      icon: MessageCircle,
      label: "Discord",
      href: "https://discord.com/invite/mcRse4T9x2",
      color: "hover:text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/starkzuri",
      color: "hover:text-purple-400",
    },
  ];

  return (
    <footer className="relative px-6 py-12 border-t border-cyan-400/10">
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                className={`group relative p-3 rounded-full bg-gradient-to-br from-gray-900/90 to-gray-800/60 border border-cyan-400/20 hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-300 ${social.color}`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-cyan-400/10 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
                <social.icon className="relative w-5 h-5 text-gray-400 group-hover:text-current transition-colors duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Microcopy */}
          <p className="text-sm text-gray-500 text-center">
            Join the community for updates & support
          </p>

          {/* Copyright/Additional Info */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-gray-600">
            <span>© 2026 Stark Zuri</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50" />
              Live on Testnet
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
