"use client";
import { useState } from "react";
import { FiSend, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RequestTemplatePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [templateDetails, setTemplateDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      `mailto:kkishlay502@gmail.com?subject=New Template Request from QuickPaper&body=Name: ${encodeURIComponent(
        name
      )}%0AEmail: ${encodeURIComponent(email)}%0ADetails: ${encodeURIComponent(
        templateDetails
      )}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto my-16 bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
      >
        <div className="mb-8 flex items-center gap-3">
          <div className="bg-blue-100 text-blue-600 rounded-full p-3">
            <FiMail size={28} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              Request a New Template
            </h1>
            <p className="text-gray-500">
              Can’t find what you need? Let us know and we’ll add it!
            </p>
          </div>
        </div>
        {submitted ? (
          <div className="flex flex-col items-center py-12">
            <div className="text-green-600 text-3xl mb-2">Thank you!</div>
            <div className="text-gray-700 text-center mb-4">
              Your request has been opened in your email app.
              <br />
              We’ll review and try to add your template soon.
            </div>
            <Link
              href="/templates"
              className="text-blue-600 hover:underline font-medium"
            >
              Back to Templates
            </Link>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition text-lg bg-white box-border"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition text-lg bg-white box-border"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                What template do you need?
              </label>
              <textarea
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition text-lg bg-white box-border"
                placeholder="Describe the document or template you want..."
                rows={5}
                value={templateDetails}
                onChange={(e) => setTemplateDetails(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition"
            >
              <FiSend /> Send Request
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
