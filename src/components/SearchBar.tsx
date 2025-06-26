"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search templates...",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-xl mx-auto"
    >
      <div
        className={`flex items-center gap-2 bg-white border ${
          focused ? "border-blue-500 shadow-md" : "border-neutral-200"
        } rounded-2xl px-4 py-2 transition-all duration-200`}
      >
        <FiSearch className="text-neutral-400 text-lg" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-base text-neutral-800 placeholder-neutral-400 py-1"
          aria-label="Search templates"
        />
      </div>
    </motion.div>
  );
}
