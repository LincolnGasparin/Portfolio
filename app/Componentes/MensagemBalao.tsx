"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BalloonMessage() {
  const messages = [
    "Brinque Comigo",
    "Play With Me 👋",
    "陪我玩吧✨"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000); // muda a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-40">
      <AnimatePresence mode="wait">
        <motion.div
          key={messages[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 py-2 rounded-2xl bg-blue-500 text-white shadow-xl text-lg"
        >
          {messages[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
