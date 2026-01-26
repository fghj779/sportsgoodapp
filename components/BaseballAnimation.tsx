'use client';

import { motion } from 'framer-motion';

export default function BaseballAnimation() {
  return (
    <div className="flex gap-4 justify-center items-center">
      <motion.div
        className="text-6xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ⚾
      </motion.div>
      <motion.div
        className="text-6xl"
        animate={{
          x: [0, 20, 0],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3
        }}
      >
        🏏
      </motion.div>
      <motion.div
        className="text-6xl"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6
        }}
      >
        ✨
      </motion.div>
    </div>
  );
}
