import Motion from "@/lib/motion";

export default function Spinner() {
  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-center py-12"
    >
      <Motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 border-t-4 border-blue-600 border-r-4 border-b-4 border-transparent rounded-full"
      />
    </Motion.div>
  );
}
