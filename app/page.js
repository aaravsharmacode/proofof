export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-cyan-400 mb-4">
        🚀 Proof of Build
      </h1>
      <p className="text-lg text-gray-300">
        Built by <span className="font-semibold text-white">Aarav Sharma</span>
      </p>
      <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg">
        Get Started
      </button>
    </section>
  );
}
