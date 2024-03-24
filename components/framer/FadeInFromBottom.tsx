import React from "react";
import { motion } from "framer-motion";

function FadeInFromBottom({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "50px" }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
      }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInFromBottom;
