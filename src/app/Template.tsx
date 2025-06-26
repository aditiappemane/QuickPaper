"use client";
import Motion from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    >
      {children}
    </Motion.div>
  );
}
