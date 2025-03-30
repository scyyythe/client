import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const pageTransition = { duration: 0.5, ease: "easeOut" };

function AnimatedWrapper({ children }) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
      {children}
    </motion.div>
  );
}

export default AnimatedWrapper;
