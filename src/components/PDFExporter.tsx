"use client";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import html2pdf from "html2pdf.js";

export default function PDFExporter({
  content,
  fileName = "document.pdf",
  disabled = false,
}: {
  content: string;
  fileName?: string;
  disabled?: boolean;
}) {
  function handleDownload() {
    if (disabled) return;

    const temp = document.createElement("div");
    temp.innerHTML = content;
    temp.style.width = "210mm";
    temp.style.minHeight = "297mm";
    temp.style.padding = "20mm";
    temp.style.fontFamily = "sans-serif";
    temp.style.fontSize = "12pt";
    temp.style.lineHeight = "1.6";
    temp.style.background = "white";
    document.body.appendChild(temp);

    html2pdf()
      .set({
        margin: 0,
        filename: fileName,
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(temp)
      .save();

    setTimeout(() => {
      document.body.removeChild(temp);
    }, 1500);
  }

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.04 } : {}}
      whileTap={!disabled ? { scale: 0.97 } : {}}
      onClick={handleDownload}
      disabled={disabled}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium shadow-md transition-all ${
        disabled
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
      type="button"
    >
      <FiDownload size={18} />
      Download PDF
    </motion.button>
  );
}
