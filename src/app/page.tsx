"use client";
import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import TemplateCard from "@/components/TemplateCard";
import Template from "./Template";

const templates = [
  {
    id: "leave-application",
    title: "Leave Application",
    description: "Request time off with a formal leave letter template.",
    category: "Student",
  },
  {
    id: "resignation-letter",
    title: "Resignation Letter",
    description: "Resign from your job professionally and politely.",
    category: "Work",
  },
  {
    id: "bonafide-certificate",
    title: "Bonafide Certificate Request",
    description: "Request a bonafide certificate from your institution.",
    category: "Student",
  },
  {
    id: "internship-application",
    title: "Internship Application",
    description: "Apply for internships with a formal application letter.",
    category: "Work",
  },
  {
    id: "bank-account-opening",
    title: "Bank Account Opening Letter",
    description: "Request to open a new bank account with a formal letter.",
    category: "Finance",
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
    <>
      <Header />
      <Template>
        <section className="w-full py-16 bg-white">
          <div className="max-w-3xl mx-auto text-center mb-10 px-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Instantly generate{" "}
              <span className="text-blue-600">formal documents</span>
            </h1>
            <p className="text-lg text-neutral-600 mb-6">
              QuickPaper helps you create professional letters and applications
              from pre-defined templates in seconds.
            </p>
            <SearchBar value={search} onChange={setSearch} />
          </div>
          <div
            className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4"
            id="templates"
          >
            {filtered.length === 0 && (
              <div className="col-span-full text-neutral-400 text-center py-10">
                No templates found.
              </div>
            )}
            {filtered.map((t) => (
              <TemplateCard key={t.id} {...t} />
            ))}
          </div>
        </section>
      </Template>
      <Footer />
    </>
  );
}
