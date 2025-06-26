"use client";
import { motion } from "@/lib/motion";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";

export default function TemplateCard({
  id,
  title,
  description,
  category,
}: {
  id: string;
  title: string;
  description: string;
  category: string;
}) {
  return (
    <Link href={`/${id}`} className="block">
      <motion.div
        whileHover={{
          y: -4,
          boxShadow: "0 8px 32px -8px rgba(30, 64, 175, 0.10)",
          scale: 1.025,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="bg-white rounded-2xl border border-neutral-100 shadow-md p-6 flex flex-col gap-3 min-h-[170px]"
      >
        <div className="flex items-center gap-3">
          <span className="bg-blue-50 text-blue-600 p-2 rounded-lg">
            <FiFileText size={22} />
          </span>
          <span className="text-sm font-medium text-neutral-500">
            {category}
          </span>
        </div>
        <div className="mt-2 text-lg font-semibold text-neutral-900">
          {title}
        </div>
        <div className="text-sm text-neutral-500 line-clamp-2">
          {description}
        </div>
      </motion.div>
    </Link>
  );
}
