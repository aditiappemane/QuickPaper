"use client";
import Link from "next/link";
import {
  FiArrowRight,
  FiLayers,
  FiSearch,
  FiCheckCircle,
  FiFileText,
  FiStar,
} from "react-icons/fi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

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

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center px-4">
        <motion.section
          initial={{ opacity: 0, filter: "blur(16px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 pt-24 pb-20"
        >
          <div className="flex-1 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight"
            >
              <span className="block">Documents,</span>
              <span className="block text-blue-600">Redesigned for You.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-600 mb-10 font-light"
            >
              QuickPaper makes it effortless to generate, customize, and
              download professional documents - no formatting, no friction, just
              results.
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
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(12px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
            className="flex-1 flex justify-center"
          >
            <div className="w-full max-w-md bg-gradient-to-br from-blue-100 via-white to-indigo-100 rounded-3xl shadow-2xl p-8 flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-2">
                <FiStar className="text-yellow-500 text-2xl" />
                <span className="text-lg font-semibold text-blue-700">
                  New & Trending
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {featuredNewTemplates.map((t, i) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.25 + i * 0.09,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      href={`/templates/${t.id}`}
                      className="group aspect-square flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl shadow hover:shadow-xl transition-all hover:-translate-y-1 px-4 py-6 cursor-pointer"
                      style={{ minHeight: 0, minWidth: 0 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <FiFileText className="text-blue-500 text-xl" />
                        <span className="bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                          NEW
                        </span>
                      </div>
                      <div className="font-semibold text-gray-900 text-center text-base leading-tight mb-1 group-hover:text-blue-600 transition">
                        {t.title}
                      </div>
                      <div className="text-gray-500 text-xs text-center mb-3">
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
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="w-full max-w-6xl mx-auto py-12"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-all"
            >
              <FiLayers className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Curated Templates
              </h3>
              <p className="text-gray-500 text-base">
                A growing library of modern, ready-to-use templates for every
                professional need.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-all"
            >
              <FiCheckCircle className="text-green-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Instant Results
              </h3>
              <p className="text-gray-500 text-base">
                Fill a simple form, preview, and download. No login, no waiting,
                just results.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-all"
            >
              <FiSearch className="text-purple-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Lightning Search
              </h3>
              <p className="text-gray-500 text-base">
                Instantly find what you need with blazing fast search and
                category filters.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          className="w-full max-w-2xl text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-4">
            {"✨"} New templates every week
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to create your next document?
          </h2>
          <Link
            href="/templates"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl text-lg shadow hover:bg-blue-700 transition-all"
          >
            Get Started <FiArrowRight className="ml-2" />
          </Link>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
