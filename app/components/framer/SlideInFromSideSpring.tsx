"use client";

import React from "react";
import { motion } from "framer-motion";

function SlideInFromSideSpring({
  children,
  initialX = "-300px",
}: {
  children: React.ReactNode;
  initialX?: string;
}) {
  return (
    <motion.div
      initial={{ x: initialX, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.3,
          duration: 0.4,
          delay: 0.4,
        },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default SlideInFromSideSpring;
