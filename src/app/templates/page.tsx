"use client";
import { useState, useMemo } from "react";
import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import TemplateCard from "@/components/TemplateCard";
import Template from "@/app/Template";
import { motion, AnimatePresence } from "framer-motion";
import { FiGrid, FiList } from "react-icons/fi";
import NoResultsFound from "@/components/NoResultsFound";
import { templates } from "@/app/templates";

const categories = ["All", "Student", "Work", "Finance"];

export default function TemplatesPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    let result = templates;
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <Header />
      <Template>
        <main className="flex-1 py-16">
          <div className="max-w-7xl mx-auto px-6">
            {/* Hero/Header */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="text-center mb-14"
            >
              <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Find Your Perfect Template
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {templates.length}+ modern, ready-to-use documents—search,
                filter, and create in seconds.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium shadow-sm">
                ✨ New templates every week
              </div>
            </motion.div>

            {/* Search & Filters */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow border border-gray-100 p-8 mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            >
              {/* SearchBar */}
              <div className="flex-1 w-full md:max-w-md">
                <SearchBar value={search} onChange={setSearch} />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 items-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all border
                      ${
                        selectedCategory === cat
                          ? "bg-blue-600 text-white border-blue-600 shadow"
                          : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-400"
                      }
                    `}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-full transition-all ${
                    viewMode === "grid"
                      ? "bg-blue-600 text-white shadow"
                      : "text-gray-500 hover:text-blue-700"
                  }`}
                  aria-label="Grid view"
                >
                  <FiGrid size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-full transition-all ${
                    viewMode === "list"
                      ? "bg-blue-600 text-white shadow"
                      : "text-gray-500 hover:text-blue-700"
                  }`}
                  aria-label="List view"
                >
                  <FiList size={18} />
                </button>
              </div>
            </motion.div>

            {/* Results Section */}
            <AnimatePresence>
              {filtered.length === 0 ? (
                <NoResultsFound searchTerm={search} />
              ) : (
                <motion.div
                  key={viewMode + selectedCategory + search}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`grid gap-8 ${
                    viewMode === "grid"
                      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                      : "grid-cols-1"
                  }`}
                >
                  {filtered.map((template, index) => (
                    <motion.div
                      key={template.id}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04 }}
                    >
                      <TemplateCard {...template} viewMode={viewMode} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </Template>
      {/* <Footer /> */}
    </div>
  );
}
