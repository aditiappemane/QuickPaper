"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Template from "../Template";

export default function AboutPage() {
  return (
    <>
      <Header />
      <Template>
        <section className="max-w-2xl mx-auto py-16 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About QuickPaper</h1>
          <p className="text-lg text-neutral-600 mb-6">
            QuickPaper is a modern web app to generate formal documents
            instantly from beautiful, ready-to-use templates. No sign-in, no
            clutter—just fill, preview, and export.
          </p>
          <p className="text-neutral-500">
            Built with Next.js, Tailwind CSS, Framer Motion, and a focus on
            clean, minimal design.
          </p>
        </section>
      </Template>
      <Footer />
    </>
  );
}
