"use client";

import { motion } from "framer-motion";

type BlurTextProps = {
  text: string;
  className?: string;
  wordDelay?: number;
  duration?: number;
};

export default function BlurText({
  text,
  className,
  wordDelay = 0.1,
  duration = 0.35,
}: BlurTextProps) {
  const words = text.split(" ");

  return (
    <h1 className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block"
          initial={{
            opacity: 0,
            y: 50,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: [0, 0.5, 1],
            y: [50, -5, 0],
            filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
          }}
          transition={{
            delay: index * wordDelay,
            duration,
            ease: "easeOut",
            times: [0, 0.6, 1],
          }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </h1>
  );
}