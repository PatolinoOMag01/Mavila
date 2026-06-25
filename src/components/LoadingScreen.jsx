import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        initial={{ letterSpacing: "0px" }}
        animate={{ letterSpacing: "8px" }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        MAVILA
      </motion.h1>

      <p>Loading...</p>
    </motion.div>
  );
}