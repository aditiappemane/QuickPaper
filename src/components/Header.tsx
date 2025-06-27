import Link from "next/link";
import { motion } from "@/lib/motion";
console.log(motion);
export default function Header() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-white/80 backdrop-blur border-b border-neutral-100 sticky top-0 z-30"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-xl tracking-tight text-neutral-900"
        >
          <span className="rounded-lg bg-neutral-100 px-2 py-1 text-blue-600">
            QP
          </span>
          QuickPaper
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-neutral-700 hover:text-blue-600 transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            href="#templates"
            className="text-neutral-700 hover:text-blue-600 transition-colors font-medium"
          >
            Templates
          </Link>
          <Link
            href="/about"
            className="text-neutral-700 hover:text-blue-600 transition-colors font-medium"
          >
            About
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
