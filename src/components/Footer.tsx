"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full border-t border-neutral-100 bg-white/80 backdrop-blur"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 h-16 px-4 text-sm text-neutral-500">
        <span>© {new Date().getFullYear()} QuickPaper</span>
        <span>
          Made with <span className="text-blue-600">Next.js</span> & Tailwind
          CSS
        </span>
      </div>
    </motion.footer>
  );
}
