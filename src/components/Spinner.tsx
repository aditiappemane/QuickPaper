"use client";
import { motion } from "framer-motion";

export default function Spinner() {
  return (
    <motion.div
      className="flex items-center justify-center"
      aria-label="Loading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        style={{ borderTopColor: "transparent" }}
      />
    </motion.div>
  );
}
