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
  },
  {
    id: "bonafide-certificate",
    title: "Bonafide Certificate",
    isNew: true,
  },
  {
    id: "character-certificate",
    title: "Character Certificate",
    isNew: true,
  },
  {
    id: "job-offer-acceptance",
    title: "Job Offer Acceptance Letter",
    isNew: true,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <Header />
      <main className="flex-1 flex flex-col items-center px-4">
        <motion.section
          initial={{ opacity: 0, filter: "blur(18px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="w-full max-w-3xl text-center py-28"
        >
          <motion.h1
            initial={{ opacity: 0, filter: "blur(12px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
            className="text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight"
          >
            Create Documents <span className="text-blue-600">Effortlessly</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.2, ease: "easeOut" }}
            className="text-2xl text-gray-600 mb-10 font-light"
          >
            Instantly generate polished letters, certificates, and forms—
            <br className="hidden md:block" />
            no formatting, no friction, just results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <Link
              href="/templates"
              className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white font-semibold rounded-xl text-xl shadow-xl hover:bg-blue-700 transition-all group"
            >
              <span>Browse Templates</span>
              <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, filter: "blur(14px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-5xl mx-auto mt-8 mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <FiStar className="text-yellow-500 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-900">New & Trending</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featuredNewTemplates.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.7,
                  delay: 0.25 + i * 0.08,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={`/templates/${t.id}`}
                  className="group bg-white border border-gray-100 rounded-2xl shadow hover:shadow-lg p-6 flex flex-col items-start transition-all relative"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <FiFileText className="text-blue-500 text-xl" />
                    <span className="bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                      NEW
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                    {t.title}
                  </h3>
                  <span className="text-blue-500 text-xs mt-2 group-hover:underline">
                    Try now <FiArrowRight className="inline ml-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, filter: "blur(14px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="w-full max-w-5xl grid md:grid-cols-3 gap-8 mb-24"
        >
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
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
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.38, ease: "easeOut" }}
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
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.41, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-all"
          >
            <FiSearch className="text-purple-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Lightning Search
            </h3>
            <p className="text-gray-500 text-base">
              Instantly find what you need with blazing fast search and category
              filters.
            </p>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
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
