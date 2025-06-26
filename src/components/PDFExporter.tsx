"use client";
import { useRef } from "react";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import html2pdf from "html2pdf.js";

export default function PDFExporter({
  content,
  fileName = "document.pdf",
}: {
  content: string;
  fileName?: string;
}) {
  const previewRef = useRef<HTMLDivElement>(null);

  function handleDownload() {
    if (!previewRef.current) return;
    html2pdf()
      .set({
        margin: 0.5,
        filename: fileName,
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      })
      .from(previewRef.current)
      .save();
  }

  return (
    <div className="w-full flex flex-col items-end gap-2">
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleDownload}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white font-medium shadow-md transition-all"
        type="button"
      >
        <FiDownload size={18} />
        Download PDF
      </motion.button>
      <div ref={previewRef} className="hidden">
        <div
          className="p-8 font-sans text-base text-neutral-800 whitespace-pre-line"
          style={{ minWidth: 400 }}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
