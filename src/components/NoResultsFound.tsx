import { motion } from "framer-motion";
import { FiSearch, FiMail, FiRefreshCw } from "react-icons/fi";

export default function NoResultsFound({ searchTerm }: { searchTerm: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-16 max-w-md mx-auto"
    >
      <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <FiSearch className="text-3xl text-blue-600" />
      </div>

      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        No templates found for "{searchTerm}"
      </h3>

      <p className="text-gray-600 mb-8">
        Don't worry! We're constantly adding new templates. Try adjusting your
        search or request a custom template.
      </p>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all"
          >
            <FiRefreshCw className="mr-2" />
            Clear Search
          </button>

          <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all">
            <FiMail className="mr-2" />
            Request Template
          </button>
        </div>

        <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm">
          ✨ New templates added every Tuesday & Friday
        </div>
      </div>
    </motion.div>
  );
}
