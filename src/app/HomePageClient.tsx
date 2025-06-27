"use client";
import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import TemplateCard from "@/components/TemplateCard";
import Template from "./Template";
import { motion } from "framer-motion";

const templates = [
  {
    id: "leave-application",
    title: "Leave Application",
    description: "Request time off with formal leave letters",
    category: "Student",
  },
  {
    id: "resignation-letter",
    title: "Resignation Letter",
    description: "Resign professionally and politely",
    category: "Work",
  },
  {
    id: "bonafide-certificate",
    title: "Bonafide Certificate",
    description: "Request certificates from institutions",
    category: "Student",
  },
  {
    id: "internship-application",
    title: "Internship Application",
    description: "Apply for internships with formal letters",
    category: "Work",
  },
  {
    id: "bank-account-opening",
    title: "Bank Account Letter",
    description: "Request new bank account openings",
    category: "Finance",
  },
  {
    id: "fee-concession",
    title: "Fee Concession Request",
    description: "Request fee discounts from institutions",
    category: "Student",
  },
];

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return templates;
    return templates.filter(
      (t) =>
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase()) ||
        t.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Template>
        <section className="w-full py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900"
              >
                Instantly Generate{" "}
                <span className="text-blue-600">Formal Documents</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto"
              >
                QuickPaper helps you create professional letters and
                applications from beautiful templates in seconds.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-xl mx-auto"
              >
                <SearchBar value={search} onChange={setSearch} />
              </motion.div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6 text-center">
                Popular Templates
              </h2>

              <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.slice(0, 3).map((t) => (
                  <TemplateCard key={t.id} {...t} />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6 text-center">
                All Templates
              </h2>

              {filtered.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-neutral-400 mb-4">No templates found</p>
                  <p className="text-neutral-500">
                    Try a different search term or browse our templates
                  </p>
                </div>
              ) : (
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filtered.map((t) => (
                    <TemplateCard key={t.id} {...t} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </Template>
      <Footer />
    </div>
  );
}
