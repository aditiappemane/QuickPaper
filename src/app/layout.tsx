import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "QuickPaper",
  description:
    "Generate real-life formal documents instantly from beautiful templates.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-white text-neutral-900 min-h-screen antialiased transition-colors duration-300">
        <div className="relative min-h-screen flex flex-col">
          <main className="flex-1 flex flex-col items-center justify-start bg-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
