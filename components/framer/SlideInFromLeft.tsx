import React from "react";
import { easeOut, motion } from "framer-motion";

function SlideInFromLeft({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: "-700px" }}
      animate={{ x: 0 }}
      transition={{
        duration: 0.5,
        ease: easeOut,
      }}
    >
      {children}
    </motion.div>
  );
}

export default SlideInFromLeft;
