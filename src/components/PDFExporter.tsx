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
      .save()
      .then(() => {
        document.body.removeChild(tempContainer);
      });
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

      <div
        ref={previewRef}
        className="hidden"
        style={{
          whiteSpace: "pre-line",
          fontFamily: "sans-serif",
          fontSize: "12pt",
          lineHeight: "1.6",
          padding: "0",
          margin: "0",
        }}
      >
        {content}
      </div>
    </div>
  );
}
