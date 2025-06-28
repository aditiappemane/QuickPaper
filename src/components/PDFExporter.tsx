"use client";
import { useRef } from "react";
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
  const previewRef = useRef<HTMLDivElement>(null);

  function handleDownload() {
    if (disabled || !previewRef.current) return;

    const tempContainer = document.createElement("div");
    tempContainer.style.position = "fixed";
    tempContainer.style.top = "0";
    tempContainer.style.left = "0";
    tempContainer.style.width = "100%";
    tempContainer.style.height = "100%";
    tempContainer.style.opacity = "0";
    tempContainer.style.pointerEvents = "none";
    tempContainer.style.zIndex = "-1000";

    const contentClone = previewRef.current.cloneNode(true) as HTMLDivElement;
    contentClone.style.display = "block";
    contentClone.style.visibility = "visible";
    contentClone.style.position = "absolute";
    contentClone.style.width = "210mm";
    contentClone.style.minHeight = "297mm";
    contentClone.style.padding = "20mm";
    contentClone.style.fontFamily = "sans-serif";
    contentClone.style.fontSize = "12pt";
    contentClone.style.lineHeight = "1.6";
    contentClone.style.background = "white";

    tempContainer.appendChild(contentClone);
    document.body.appendChild(tempContainer);

    html2pdf()
      .set({
        margin: 0,
        filename: fileName,
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false,
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
      })
      .from(contentClone)
      .save();

    setTimeout(() => {
      document.body.removeChild(tempContainer);
    }, 1000);
  }

  return (
    <div className="w-full flex flex-col items-end gap-2">
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

      <div
        ref={previewRef}
        style={{
          position: "absolute",
          left: "-9999px",
          top: "0",
          whiteSpace: "pre-line",
          fontFamily: "sans-serif",
          fontSize: "12pt",
          lineHeight: "1.6",
          padding: "0",
          margin: "0",
          background: "white",
        }}
      >
        {content}
      </div>
    </div>
  );
}
