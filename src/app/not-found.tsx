"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex flex-col items-center justify-center bg-white"
    >
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-xl text-neutral-700 mb-6">
        Sorry, the page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="px-6 py-2 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition-all"
      >
        Go Home
      </Link>
    </motion.div>
  );
}
