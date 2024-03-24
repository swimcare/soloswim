import React from "react";
import { motion } from "framer-motion";

function SlideInFromLeftSpring({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: "-300px", opacity: 0 }}
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

export default SlideInFromLeftSpring;
