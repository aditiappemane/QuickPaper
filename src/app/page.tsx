"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Template from "./Template";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiStar, FiUsers, FiZap } from "react-icons/fi";

const featuredTemplates = [
  {
    id: "leave-application",
    title: "Leave Application",
    category: "Student",
    users: "15k+",
  },
  {
    id: "resignation-letter",
    title: "Resignation Letter",
    category: "Work",
    users: "12k+",
  },
  {
    id: "bonafide-certificate",
    title: "Bonafide Certificate",
    category: "Student",
    users: "8k+",
  },
];

export default function HomePage() {
  const [templateCount, setTemplateCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTemplateCount((prev) => (prev < 50 ? prev + 1 : 50));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      <Template>
        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Create Professional Documents
                  <br />
                  <span className="text-gray-900">In Seconds</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Generate formal letters, applications, and documents instantly
                  with our AI-powered templates. Trusted by over 50,000+
                  professionals worldwide.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Link
                  href="/templates"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl group"
                >
                  Browse Templates
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all">
                  Watch Demo
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {templateCount}+
                  </div>
                  <div className="text-gray-600">Templates Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    50k+
                  </div>
                  <div className="text-gray-600">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    99.9%
                  </div>
                  <div className="text-gray-600">Uptime</div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Featured Templates */}
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Most Popular Templates
                </h2>
                <p className="text-gray-600">
                  Start with these highly-rated templates used by thousands
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {featuredTemplates.map((template, index) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {template.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <FiUsers className="mr-1" />
                        {template.users}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {template.title}
                    </h3>
                    <div className="flex items-center text-yellow-500 mb-4">
                      <FiStar className="fill-current" />
                      <FiStar className="fill-current" />
                      <FiStar className="fill-current" />
                      <FiStar className="fill-current" />
                      <FiStar className="fill-current" />
                      <span className="text-gray-600 ml-2 text-sm">
                        4.9 (200+ reviews)
                      </span>
                    </div>
                    <Link
                      href={`/${template.id}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                      Use Template
                      <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link
                  href="/templates"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-xl hover:bg-blue-600 hover:text-white transition-all"
                >
                  View All Templates
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Why Choose QuickPaper?
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FiZap className="text-blue-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                  <p className="text-gray-600">
                    Generate documents in under 30 seconds
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FiStar className="text-green-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Professional Quality
                  </h3>
                  <p className="text-gray-600">
                    Templates designed by legal experts
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FiUsers className="text-purple-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Always Updated</h3>
                  <p className="text-gray-600">New templates added weekly</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Template>
      <Footer />
    </div>
  );
}
