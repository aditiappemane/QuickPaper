import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Template from "../Template";
import Motion from "@/lib/motion";

export default function AboutPage() {
  return (
    <>
      <Header />
      <Template>
        <section className="w-full min-h-[60vh] flex items-center justify-center bg-white">
          <Motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl w-full mx-auto text-center p-8 bg-white rounded-2xl shadow-md border border-neutral-100"
          >
            <h1 className="text-4xl font-bold mb-4 text-neutral-900">
              About QuickPaper
            </h1>
            <p className="text-lg text-neutral-600 mb-6">
              QuickPaper is a modern web app designed to help you generate
              real-life formal documents—like leave applications, resignation
              letters, and more—instantly from beautiful, ready-to-use
              templates.
            </p>
            <p className="text-neutral-500 mb-6">
              No sign-in required, no clutter. Just search, fill out a simple
              form, preview your document live, and copy or download it as a
              PDF. QuickPaper is crafted for students, professionals, and anyone
              who needs formal documents fast.
            </p>
            <div className="flex flex-col items-center gap-2 mt-8">
              <span className="font-medium text-neutral-800">Built with:</span>
              <span className="text-blue-600 font-semibold">
                Next.js, Tailwind CSS, Framer Motion
              </span>
            </div>
          </Motion.div>
        </section>
      </Template>
      <Footer />
    </>
  );
}
