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
import { FiChevronDown, FiChevronUp, FiHome } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import CopyTextButton from "@/components/CopyTextButton";

function fillTemplate(template: string, values: Record<string, string>) {
  return template.replace(/{{(\w+)}}/g, (_, key) => {
    const value = values[key]?.trim();
    return value
      ? value
      : `<span class="inline-block min-w-[100px] border-b border-dashed border-gray-300 align-baseline">&nbsp;</span>`;
  });
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
  const previewLength = 300;
  const isLong = filled.replace(/<[^>]+>/g, "").length > previewLength;

  function getPreview(html: string) {
    const text = html.replace(/<[^>]+>/g, "");
    if (text.length <= previewLength) return html;
    let count = 0,
      i = 0;
    for (; i < html.length && count < previewLength; i++) {
      if (html[i] === "<") {
        while (i < html.length && html[i] !== ">") i++;
      } else {
        count++;
      }
    }
    return html.slice(0, i) + "...";
  }

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

              <CopyTextButton textToCopy={filled.replace(/<[^>]+>/g, "")} />

              <PDFExporter
                content={filled.replace(/<[^>]+>/g, "")}
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
                {isLong && (
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
                )}
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
                    <div
                      dangerouslySetInnerHTML={{
                        __html: showFullPreview ? filled : getPreview(filled),
                      }}
                    />
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
