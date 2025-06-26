"use client";
import { motion } from "@/lib/motion";

export default function TemplatePreview({ content }: { content: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-xl bg-white border border-neutral-100 rounded-2xl shadow-md p-8 whitespace-pre-line font-sans text-base text-neutral-800 leading-relaxed"
      style={{
        minHeight: 320,
      }}
    >
      {content || (
        <div className="text-neutral-400 italic">
          Fill in the form to see your document preview here.
        </div>
      )}
    </motion.div>
  );
}
