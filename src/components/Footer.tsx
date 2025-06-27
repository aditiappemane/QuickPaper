import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiMail, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full border-t border-neutral-100 bg-white/90 backdrop-blur"
    >
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <span className="font-semibold text-gray-700 text-base">
            © {new Date().getFullYear()} QuickPaper
          </span>
          <span className="hidden md:inline mx-2 text-neutral-300">|</span>
          <span>
            Made with <span className="text-blue-600 font-medium">Next.js</span>{" "}
            & Tailwind CSS
          </span>
        </div>
        <div className="flex items-center gap-5">
          <Link
            href="mailto:kkishlay502@gmail.com"
            aria-label="Contact Email"
            className="hover:text-blue-600 transition-colors"
          >
            <FiMail size={20} />
          </Link>
          <Link
            href="https://github.com/innovatewithkishlay"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-600 transition-colors"
          >
            <FiGithub size={20} />
          </Link>
          <Link
            href="https://x.com/kishlay_012"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-600 transition-colors"
          >
            <FiTwitter size={20} />
          </Link>
        </div>
      </div>
      <div className="w-full text-center text-xs text-neutral-400 pb-4">
        Built for professionals, students, and creators worldwide.
      </div>
    </motion.footer>
  );
}
