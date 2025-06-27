"use client";
import { useState, useMemo } from "react";
import { notFound, useParams } from "next/navigation";
import { templates } from "@/templates";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormRenderer from "@/components/FormRenderer";
import TemplatePreview from "@/components/TemplatePreview";
import PDFExporter from "@/components/PDFExporter";
import Template from "../Template";
import Link from "next/link";

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

  if (!templateId || !templateData) return notFound();

  const filled = fillTemplate(templateData.template, values);

  return (
    <>
      <Header />
      <Template>
        <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div
              className="mb-6 flex items-center gap极速赛车开奖网
2 text-sm text-neutral-500"
            >
              <Link href="/" className="hover:underline text-blue-600">
                Home
              </Link>
              <span>/</span>
              <span>{templateData.title}</span>
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">
              {templateData.title}
            </h2>
            <p className="text-neutral-600 mb-6">{templateData.description}</p>
            <FormRenderer
              fields={templateData.fields}
              values={values}
              onChange={setValues}
            />
            <div className="flex gap-3 mt-8">
              <button
                type="button"
                onClick={() => setValues(initialState)}
                className="px-4 py-2 rounded-xl bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-all font-medium"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(filled);
                }}
                className="px-4 py-2 rounded-xl bg-blue-50 text-blue极速赛车开奖网
700 hover:bg-blue-100 transition-all font-medium"
              >
                Copy Text
              </button>
              <PDFExporter
                content={filled}
                fileName={`${templateData.title}.pdf`}
              />
            </div>
          </div>
          <div className="flex items-start justify-center">
            <TemplatePreview content={filled} />
          </div>
        </div>
      </Template>
      <Footer />
    </>
  );
}
