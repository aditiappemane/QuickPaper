"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Template from "../Template";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Template>
        <main className="flex-1 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6 text-neutral-900">
                  About QuickPaper
                </h1>
                <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                  Streamline your document creation with our modern, intuitive
                  platform designed for students, professionals, and anyone who
                  needs formal documents instantly.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                <div className="space-y-6">
                  <h2 className="text-3xl font-semibold text-neutral-900 mb-6">
                    Why Choose QuickPaper?
                  </h2>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    QuickPaper revolutionizes the way you create formal
                    documents. Whether you need a leave application, resignation
                    letter, or any official document, our platform provides
                    beautiful, professional templates that you can customize
                    instantly.
                  </p>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    Built with modern web technologies, QuickPaper offers a
                    seamless experience across all devices. No registration
                    required, no hidden fees—just pure productivity.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-8">
                    <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl text-sm font-medium">
                      ⚡ Instant Generation
                    </span>
                    <span className="px-4 py-2 bg-green-50 text-green-700 rounded-xl text-sm font-medium">
                      📱 Mobile Responsive
                    </span>
                    <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-xl text-sm font-medium">
                      🔒 Privacy First
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-50 p-6 rounded-2xl text-center"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      50+
                    </div>
                    <div className="text-sm text-neutral-600">
                      Document Templates
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-green-50 p-6 rounded-2xl text-center"
                  >
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      0
                    </div>
                    <div className="text-sm text-neutral-600">
                      Sign-up Required
                    </div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-purple-50 p-6 rounded-2xl text-center"
                  >
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      100%
                    </div>
                    <div className="text-sm text-neutral-600">Free to Use</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-orange-50 p-6 rounded-2xl text-center"
                  >
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      ⚡
                    </div>
                    <div className="text-sm text-neutral-600">
                      Lightning Fast
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-3xl p-12 mb-16">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-8 text-center">
                  How QuickPaper Works
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      1
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      Choose Template
                    </h4>
                    <p className="text-neutral-600 text-sm">
                      Browse our collection of professional templates and select
                      the one that fits your needs.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      2
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      Fill Details
                    </h4>
                    <p className="text-neutral-600 text-sm">
                      Complete the simple form with your information and see
                      live preview updates.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      3
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      Download & Use
                    </h4>
                    <p className="text-neutral-600 text-sm">
                      Copy your document or export it as PDF—ready to submit
                      anywhere.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center py-12 border-t border-neutral-200">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
                  Built with Modern Technology
                </h3>
                <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
                  QuickPaper is crafted using cutting-edge web technologies to
                  ensure fast performance, beautiful design, and seamless user
                  experience across all devices.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-6 py-3 bg-white border border-neutral-200 rounded-xl font-medium text-neutral-700 shadow-sm hover:shadow-md transition-shadow">
                    Next.js 15
                  </span>
                  <span className="px-6 py-3 bg-white border border-neutral-200 rounded-xl font-medium text-neutral-700 shadow-sm hover:shadow-md transition-shadow">
                    TypeScript
                  </span>
                  <span className="px-6 py-3 bg-white border border-neutral-200 rounded-xl font-medium text-neutral-700 shadow-sm hover:shadow-md transition-shadow">
                    Tailwind CSS
                  </span>
                  <span className="px-6 py-3 bg-white border border-neutral-200 rounded-xl font-medium text-neutral-700 shadow-sm hover:shadow-md transition-shadow">
                    Framer Motion
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </Template>
      <Footer />
    </div>
  );
}
