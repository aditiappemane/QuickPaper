"use client";
import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import TemplateCard from "@/components/TemplateCard";
import Template from "@/app/Template";
import { motion } from "framer-motion";
import { FiFilter, FiGrid, FiList } from "react-icons/fi";
import NoResultsFound from "@/components/NoResultsFound";

const allTemplates = [
  {
    id: "leave-application",
    title: "Leave Application",
    description: "Request time off professionally",
    category: "Student",
    popularity: 95,
    isNew: false,
  },
  {
    id: "resignation-letter",
    title: "Resignation Letter",
    description: "Resign gracefully and professionally",
    category: "Work",
    popularity: 90,
    isNew: false,
  },
  {
    id: "bonafide-certificate",
    title: "Bonafide Certificate",
    description: "Request certificates from institutions",
    category: "Student",
    popularity: 85,
    isNew: true,
  },
  {
    id: "internship-application",
    title: "Internship Application",
    description: "Apply for internships formally",
    category: "Work",
    popularity: 80,
    isNew: false,
  },
  {
    id: "bank-account-opening",
    title: "Bank Account Letter",
    description: "Open new bank accounts",
    category: "Finance",
    popularity: 75,
    isNew: true,
  },
  {
    id: "fee-concession",
    title: "Fee Concession Request",
    description: "Request fee reductions",
    category: "Student",
    popularity: 70,
    isNew: false,
  },
  {
    id: "recommendation-letter",
    title: "Recommendation Letter",
    description: "Request professional recommendations",
    category: "Work",
    popularity: 65,
    isNew: true,
  },
  {
    id: "project-proposal",
    title: "Project Proposal",
    description: "Submit project proposals",
    category: "Work",
    popularity: 60,
    isNew: false,
  },
];

const categories = ["All", "Student", "Work", "Finance"];

export default function TemplatesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const filtered = useMemo(() => {
    let result = allTemplates;

    if (selectedCategory !== "All") {
      result = result.filter((t) => t.category === selectedCategory);
    }

    if (search.trim()) {
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(search.toLowerCase()) ||
          t.description.toLowerCase().includes(search.toLowerCase()) ||
          t.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    return result.sort((a, b) => b.popularity - a.popularity);
  }, [search, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Template>
        <main className="flex-1 py-12">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
              >
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Document Templates
                </h1>
                <p className="text-lg text-gray-600 mb-2">
                  Choose from {allTemplates.length} professional templates
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  ✨ Updated weekly with new templates
                </div>
              </motion.div>

              {/* Search and Filters */}
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
                <div className="w-full lg:w-96">
                  <SearchBar value={search} onChange={setSearch} />
                </div>

                <div className="flex items-center gap-4">
                  {/* Category Filter */}
                  <div className="flex items-center gap-2">
                    <FiFilter className="text-gray-500" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* View Toggle */}
                  <div className="flex items-center border border-gray-300 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded ${
                        viewMode === "grid"
                          ? "bg-blue-600 text-white"
                          : "text-gray-600"
                      }`}
                    >
                      <FiGrid />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded ${
                        viewMode === "list"
                          ? "bg-blue-600 text-white"
                          : "text-gray-600"
                      }`}
                    >
                      <FiList />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            {filtered.length === 0 ? (
              <NoResultsFound searchTerm={search} />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`grid gap-6 ${
                  viewMode === "grid"
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    : "grid-cols-1"
                }`}
              >
                {filtered.map((template, index) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <TemplateCard {...template} viewMode={viewMode} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </main>
      </Template>
      <Footer />
    </div>
  );
}
