"use client";
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
  function handleDownload() {
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = content;

    tempContainer.style.width = "210mm";
    tempContainer.style.minHeight = "297mm";
    tempContainer.style.padding = "20mm";
    tempContainer.style.fontFamily = "sans-serif";
    tempContainer.style.fontSize = "12pt";
    tempContainer.style.lineHeight = "1.6";
    tempContainer.style.background = "white";
    tempContainer.style.color = "#000";

    document.body.appendChild(tempContainer);

    html2pdf()
      .set({
        margin: 0,
        filename: fileName,
        html2canvas: {
          scale: 2,
          useCORS: true,
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
      })
      .from(tempContainer)
      .save();

    setTimeout(() => {
      document.body.removeChild(tempContainer);
    }, 1000);
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
    </div>
  );
}
