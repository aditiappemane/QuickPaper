"use client";
import { useState, useMemo } from "react";
import { notFound, useParams } from "next/navigation";
import { templates } from "@/app/templates";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormRenderer from "@/components/FormRenderer";
import PDFExporter from "@/components/PDFExporter";
import Template from "../Template";
import Link from "next/link";
import { FiChevronDown, FiChevronUp, FiCopy, FiHome } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function fillTemplate(template: string, values: Record<string, string>) {
  return template.replace(/{{(\w+)}}/g, (_, key) => values[key]?.trim() || "");
}

export default function TemplatePage() {
  const params = useParams();
  const templateId = params.templateId as string;

  const templateData = useMemo(
    () => templates.find((t) => t.id === templateId),
    [templateId]
  );

  const initialState = useMemo(() => {
    const obj: Record<string, string> = {};
    templateData?.fields.forEach((f) => (obj[f.name] = ""));
    return obj;
  }, [templateData]);

  const [values, setValues] = useState(initialState);
  const [showFullPreview, setShowFullPreview] = useState(false);

  if (!templateId || !templateData) return notFound();

  const filled = fillTemplate(templateData.template, values);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <Header />
      <Template>
        <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form Section */}
          <div className="space-y-8">
            <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
              <Link
                href="/"
                className="inline-flex items-center hover:underline text-blue-600"
              >
                <FiHome className="mr-1" /> Home
              </Link>
              <span>/</span>
              <Link href="/templates" className="hover:underline text-blue-600">
                Templates
              </Link>
              <span>/</span>
              <span className="font-medium text-gray-700">
                {templateData.title}
              </span>
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {templateData.title}
              </h1>
              <p className="text-gray-600">{templateData.description}</p>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-2xl shadow border border-gray-100 p-6">
              <FormRenderer
                fields={templateData.fields}
                values={values}
                onChange={setValues}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setValues(initialState)}
                className="flex items-center px-5 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-medium"
              >
                Reset Form
              </button>

              <button
                onClick={() => navigator.clipboard.writeText(filled)}
                className="flex items-center px-5 py-3 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-all font-medium"
              >
                <FiCopy className="mr-2" /> Copy Text
              </button>

              <PDFExporter
                content={filled}
                fileName={`${templateData.title}.pdf`}
              />
            </div>
          </div>

          {/* Preview Section */}
          <div className="sticky top-24">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-gradient-to-r from-blue-50/80 via-white/80 to-slate-50/80">
                <h3 className="font-semibold text-gray-800 text-lg flex items-center gap-2">
                  Live Preview
                </h3>
                <button
                  onClick={() => setShowFullPreview(!showFullPreview)}
                  className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  {showFullPreview ? (
                    <>
                      Hide Full <FiChevronUp className="ml-1" />
                    </>
                  ) : (
                    <>
                      View Full <FiChevronDown className="ml-1" />
                    </>
                  )}
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={showFullPreview ? "full" : "partial"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 whitespace-pre-line font-sans text-gray-800 leading-relaxed"
                  style={{ minHeight: 340 }}
                >
                  {filled ? (
                    showFullPreview ? (
                      filled
                    ) : (
                      <>
                        {filled.slice(0, 300)}
                        {filled.length > 300 && "..."}
                        <div className="mt-4 text-xs text-blue-500">
                          (Preview - scroll to see more)
                        </div>
                      </>
                    )
                  ) : (
                    <div className="text-gray-400 italic h-full flex items-center justify-center">
                      Fill in the form to see your document preview
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Template>
      <Footer />
    </div>
  );
}
