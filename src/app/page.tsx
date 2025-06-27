"use client";
import Link from "next/link";
import {
  FiArrowRight,
  FiLayers,
  FiCheckCircle,
  FiFileText,
  FiStar,
  FiEdit,
  FiEye,
} from "react-icons/fi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

const featuredNewTemplates = [
  {
    id: "bank-account-opening",
    title: "Bank Account Letter",
    isNew: true,
    description: "Open a new bank account with a formal, ready-to-use letter.",
  },
  {
    id: "bonafide-certificate",
    title: "Bonafide Certificate",
    isNew: true,
    description:
      "Request a bonafide certificate for academic or official purposes.",
  },
  {
    id: "character-certificate",
    title: "Character Certificate",
    isNew: true,
    description: "Get a character certificate for school, college, or work.",
  },
  {
    id: "job-offer-acceptance",
    title: "Job Offer Acceptance Letter",
    isNew: true,
    description: "Formally accept a job offer with a professional letter.",
  },
];

const sampleTemplate = {
  title: "Leave Application",
  template: `{{employeeName}}
{{designation}}, {{department}}
{{company}}

Date: {{date}}

To,
{{managerName}}
{{designation}}
{{company}}

Subject: Application for {{leaveType}} Leave

Dear {{managerName}},

I am writing to formally request a {{leaveType}} leave of absence from {{startDate}} to {{endDate}} due to {{reason}}.

During my absence, I have arranged for {{handoverDetails}} to ensure that my responsibilities are managed without disruption. Should you require any urgent assistance, I will be reachable at my email or phone.

I kindly request you to grant me leave for the mentioned period. I appreciate your understanding and support.

Thank you for your consideration.

Sincerely,
{{employeeName}}`,
};

export default function HomePage() {
  const [livePreviewValues, setLivePreviewValues] = useState({
    employeeName: "John Doe",
    designation: "Senior Developer",
    department: "Engineering",
    company: "Tech Innovations Inc.",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    managerName: "Jane Smith",
    leaveType: "Annual",
    startDate: "July 15, 2025",
    endDate: "July 22, 2025",
    reason: "family vacation",
    handoverDetails: "Alex Johnson (alex@company.com) will handle my tasks",
  });

  const filledTemplate = Object.entries(livePreviewValues).reduce(
    (str, [key, value]) => str.replace(new RegExp(`{{${key}}}`, "g"), value),
    sampleTemplate.template
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center px-4">
        <motion.section
          initial={{ opacity: 0, filter: "blur(16px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="w-full max-w-6xl flex flex-col items-center text-center pt-24 pb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight"
          >
            <span className="block">Create Professional</span>
            <span className="block text-blue-600">Documents in Seconds</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-600 mb-10 font-light max-w-3xl"
          >
            QuickPaper helps you generate, customize, and download polished
            documents with zero formatting effort.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.23, ease: "easeOut" }}
          >
            <Link
              href="/templates"
              className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-semibold rounded-2xl text-xl shadow-xl hover:bg-blue-700 transition-all group"
            >
              <span>Browse Templates</span>
              <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full max-w-4xl bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-4 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <FiEdit className="text-blue-600 text-xl" />
                <h2 className="text-lg font-bold text-gray-900">
                  Live Preview Demo
                </h2>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Fill in the details and watch your document update in real-time.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(livePreviewValues).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-xs font-medium text-gray-700 mb-1 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </label>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) =>
                        setLivePreviewValues((prev) => ({
                          ...prev,
                          [key]: e.target.value,
                        }))
                      }
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:border-blue-500 focus:outline-none transition text-sm bg-white"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <FiEye className="text-purple-600 text-xl" />
                <h2 className="text-lg font-bold text-gray-900">
                  Generated Document
                </h2>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg shadow p-4 h-full">
                <pre className="whitespace-pre-wrap font-sans text-gray-800 text-sm">
                  {filledTemplate}
                </pre>
              </div>
            </div>
          </div>
        </motion.section>

        {/* New & Trending Templates Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full flex justify-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, filter: "blur(18px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full max-w-4xl bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl shadow-xl p-4 md:p-6 flex flex-col lg:flex-row items-center gap-6"
          >
            <div className="flex-1 flex flex-col justify-center items-start mb-6 lg:mb-0">
              <div className="flex items-center gap-2 mb-3">
                <FiStar className="text-yellow-500 text-2xl" />
                <h2 className="text-2xl font-bold text-blue-700">
                  New & Trending Templates
                </h2>
              </div>
              <p className="text-gray-600 text-base mb-2">
                Discover our latest and most popular document templates.
                <br />
                Updated weekly for professionals, students, and businesses.
              </p>
              <ul className="text-gray-500 text-sm list-disc pl-5 space-y-1">
                <li>Always free to use</li>
                <li>No login required</li>
                <li>Download as PDF or copy instantly</li>
              </ul>
            </div>
            <div className="flex-[2] w-full">
              <div className="grid grid-cols-2 gap-4">
                {featuredNewTemplates.map((t, i) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15 + i * 0.09,
                      ease: "easeOut",
                    }}
                    className="aspect-square w-44 md:w-56 flex"
                  >
                    <Link
                      href={`/templates/${t.id}`}
                      className="group flex flex-col items-center justify-center bg-white border border-gray-100 rounded-xl shadow hover:shadow-xl transition-all hover:-translate-y-1 px-3 py-4 w-full h-full"
                      style={{ minHeight: 0, minWidth: 0 }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <FiFileText className="text-blue-500 text-lg" />
                        <span className="bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                          NEW
                        </span>
                      </div>
                      <div className="font-semibold text-gray-900 text-center text-sm leading-tight mb-1 group-hover:text-blue-600 transition">
                        {t.title}
                      </div>
                      <div className="text-gray-500 text-xs text-center mb-2">
                        {t.description}
                      </div>
                      <span className="mt-auto text-blue-500 text-xs group-hover:underline flex items-center gap-1 font-medium">
                        Try now <FiArrowRight className="inline" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="w-full max-w-6xl mb-24"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-blue-50 border border-gray-100 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-all">
              <FiLayers className="text-blue-500 text-5xl mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Curated Templates
              </h3>
              <p className="text-gray-600 text-lg">
                Professionally designed templates for every need
              </p>
            </div>
            <div className="bg-gradient-to-br from-white to-blue-50 border border-gray-100 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-all">
              <FiCheckCircle className="text-green-500 text-5xl mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Instant Results
              </h3>
              <p className="text-gray-600 text-lg">
                Generate documents in seconds, not hours
              </p>
            </div>
            <div className="bg-gradient-to-br from-white to-blue-50 border border-gray-100 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-all">
              <FiFileText className="text-purple-500 text-5xl mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Easy Customization
              </h3>
              <p className="text-gray-600 text-lg">
                Personalize templates with simple forms
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="w-full max-w-2xl text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-lg font-medium mb-6">
            {"✨"} New templates added weekly
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to create professional documents?
          </h2>
          <Link
            href="/templates"
            className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-semibold rounded-2xl text-xl shadow-xl hover:bg-blue-700 transition-all"
          >
            Get Started <FiArrowRight className="ml-3" />
          </Link>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
