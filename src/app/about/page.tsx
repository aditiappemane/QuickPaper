"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Template from "../Template";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <Header />
      <Template>
        <section className="w-full min-h-[60vh] flex items-center justify-center bg-white">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl w-full mx-auto text-center p-8 bg-white rounded-2xl shadow-md border border-neutral-100"
          >
            <h1 className="text-4xl font-bold mb-4 text-neutral-900">
              About QuickPaper
            </h1>
            <p className="text-lg text-neutral-600 mb-6">
              QuickPaper helps you create professional letters and applications
              instantly from beautiful templates.
            </p>
            <p className="text-neutral-500 mb-6">
              No sign-in required, no clutter. Just fill, preview, and export.
            </p>
            <div className="flex flex-col items-center gap-2 mt-8">
              <span className="font-medium text-neutral-800">Built with:</span>
              <span className="text-blue-600 font-semibold">
                Next.js, Tailwind CSS, Framer Motion
              </span>
            </div>
          </motion.div>
        </section>
      </Template>
      <Footer />
    </>
  );
}
