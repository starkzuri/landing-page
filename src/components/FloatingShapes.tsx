import { motion } from 'motion/react';

export function FloatingShapes() {
  const shapes = [
    {
      size: 300,
      top: '10%',
      left: '5%',
      delay: 0,
      duration: 20,
      color: 'from-cyan-500/10 to-blue-500/10',
    },
    {
      size: 200,
      top: '60%',
      left: '80%',
      delay: 2,
      duration: 15,
      color: 'from-purple-500/10 to-pink-500/10',
    },
    {
      size: 250,
      top: '40%',
      left: '70%',
      delay: 4,
      duration: 25,
      color: 'from-blue-500/10 to-purple-500/10',
    },
    {
      size: 180,
      top: '80%',
      left: '15%',
      delay: 1,
      duration: 18,
      color: 'from-cyan-500/10 to-purple-500/10',
    },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute bg-gradient-to-br ${shape.color} rounded-full blur-3xl`}
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Geometric 3D shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32"
        animate={{
          rotateZ: 360,
          rotateY: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="w-full h-full border border-cyan-400/20 rotate-45 bg-gradient-to-br from-cyan-500/5 to-transparent backdrop-blur-sm" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-24 h-24"
        animate={{
          rotateZ: -360,
          rotateX: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="w-full h-full border border-purple-400/20 rotate-12 bg-gradient-to-br from-purple-500/5 to-transparent backdrop-blur-sm" />
      </motion.div>
    </div>
  );
}
