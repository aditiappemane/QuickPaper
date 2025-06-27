"use client";
import { useState, useMemo, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import TemplateCard from "@/components/TemplateCard";
import Template from "./Template";
import Spinner from "@/components/Spinner";
import { motion } from "framer-motion";

interface TemplateType {
  id: string;
  title: string;
  description: string;
  category: string;
  popularity: number;
}

const templatesData: TemplateType[] = [
  {
    id: "leave-application",
    title: "Leave Application",
    description: "Request time off with formal leave letters",
    category: "Student",
    popularity: 95,
  },
  {
    id: "resignation-letter",
    title: "Resignation Letter",
    description: "Resign professionally and politely",
    category: "Work",
    popularity: 90,
  },
  {
    id: "bonafide-certificate",
    title: "Bonafide Certificate",
    description: "Request certificates from institutions",
    category: "Student",
    popularity: 85,
  },
  {
    id: "internship-application",
    title: "Internship Application",
    description: "Apply for internships with formal letters",
    category: "Work",
    popularity: 80,
  },
  {
    id: "bank-account-opening",
    title: "Bank Account Letter",
    description: "Request new bank account openings",
    category: "Finance",
    popularity: 75,
  },
  {
    id: "fee-concession",
    title: "Fee Concession Request",
    description: "Request fee discounts from institutions",
    category: "Student",
    popularity: 70,
  },
  {
    id: "recommendation-letter",
    title: "Recommendation Letter",
    description: "Request a recommendation letter",
    category: "Work",
    popularity: 65,
  },
  {
    id: "project-proposal",
    title: "Project Proposal",
    description: "Submit a project proposal",
    category: "Work",
    popularity: 60,
  },
  {
    id: "salary-increment",
    title: "Salary Increment Request",
    description: "Request a salary increment",
    category: "Work",
    popularity: 55,
  },
  {
    id: "loan-application",
    title: "Loan Application",
    description: "Apply for a loan",
    category: "Finance",
    popularity: 50,
  },
];

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [templates, setTemplates] = useState<TemplateType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setTemplates(templatesData);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    if (!search.trim()) return templates;
    return templates.filter(
      (t) =>
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase()) ||
        t.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, templates]);

  const popularTemplates = useMemo(() => {
    return [...templates]
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, 4);
  }, [templates]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <Template>
        <section className="w-full py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto mb-16"
            >
              <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
                Instantly Generate{" "}
                <span className="text-blue-600">Formal Documents</span>
              </h1>
              <p className="text-lg text-gray-600">
                Create professional letters and applications from beautiful,
                ready-to-use templates in seconds.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl mx-auto mb-12"
            >
              <SearchBar value={search} onChange={setSearch} />
            </motion.div>

            {loading ? (
              <div className="flex justify-center py-20">
                <Spinner />
              </div>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                    Popular Templates
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {popularTemplates.map((template) => (
                      <TemplateCard key={template.id} {...template} />
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="text-3xl font-semibold text-gray-900 mb-8">
                    All Templates
                  </h2>
                  {filtered.length === 0 ? (
                    <p className="text-center text-gray-500">
                      No templates found.
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                      {filtered.map((template) => (
                        <TemplateCard key={template.id} {...template} />
                      ))}
                    </div>
                  )}
                </motion.div>
              </>
            )}
          </div>
        </section>
      </Template>
      <Footer />
    </div>
  );
}
