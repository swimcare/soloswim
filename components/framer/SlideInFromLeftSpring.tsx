import React from "react";
import { motion } from "framer-motion";

function SlideInFromLeftSpring({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: "-700px" }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        bounce: 0.3,
        duration: 0.4,
        delay: 0.4,
      }}
    >
      {children}
    </motion.div>
  );
}

export default SlideInFromLeftSpring;
