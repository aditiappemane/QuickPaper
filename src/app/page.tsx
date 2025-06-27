"use client";
import Link from "next/link";
import {
  FiArrowRight,
  FiLayers,
  FiSearch,
  FiCheckCircle,
} from "react-icons/fi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Hero Section */}
        <section className="w-full max-w-3xl text-center py-28">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Create Documents <span className="text-blue-600">Effortlessly</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-10 font-light">
            Instantly generate polished letters, certificates, and forms—
            <br className="hidden md:block" />
            no formatting, no friction, just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/templates"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl text-lg shadow-xl hover:bg-blue-700 transition-all group"
            >
              <span>Browse Templates</span>
              <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/templates"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 border border-blue-200 font-semibold rounded-xl text-lg shadow hover:bg-blue-50 transition-all"
            >
              <FiSearch className="mr-2" />
              Try Search
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full max-w-5xl grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-2xl shadow border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-all">
            <FiLayers className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Curated Templates
            </h3>
            <p className="text-gray-500 text-base">
              A growing library of modern, ready-to-use templates for every
              professional need.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-all">
            <FiCheckCircle className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Instant Results
            </h3>
            <p className="text-gray-500 text-base">
              Fill a simple form, preview, and download. No login, no waiting,
              just results.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-lg transition-all">
            <FiSearch className="text-purple-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Lightning Search
            </h3>
            <p className="text-gray-500 text-base">
              Instantly find what you need with blazing fast search and category
              filters.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full max-w-2xl text-center mt-24 mb-12">
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
