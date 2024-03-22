import React from "react";
import { easeOut, motion } from "framer-motion";

function SlideInFromSide({
  children,
  duration = 0.8,
  delay = 0,
  initialX = "-wscreen",
}: {
  children: React.ReactNode;
  duration: number;
  delay: number;
  initialX: string;
}) {
  return (
    <motion.div
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{
        type: "tween",
        duration: duration,
        ease: [0.3, 0.4, 0.5, 0.95],
        delay: delay,
      }}
      variants={{
        initialState: {
          x: "-100vw",
        },
        animateState: {
          x: 0,
        },
        exitState: {
          x: "100vw",
        },
      }}
      // whileInView={{
      //   x: 0,
      //   transition: {
      //     duration: duration,
      //     ease: [0.3, 0.4, 0.5, 0.95],
      //     delay: delay,
      //   },
      // }}
      // viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default SlideInFromSide;
