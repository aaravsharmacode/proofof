"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    async function getQuote() {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data.content);
    }
    getQuote();
  }, []);

  return (
    <main className="bg-slate-900 text-white min-h-screen flex flex-col items-center px-6">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">🚀 Proof of Build</h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
          Turning ideas into live products — one commit at a time.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition">
          Get Started
        </button>
      </section>

      {/* About Section */}
      <section className="max-w-4xl py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">About This Project</h2>
        <p className="text-gray-300 leading-relaxed mb-10">
          Proof of Build is a learning journey — understanding how builders
          turn curiosity into skills and ideas into reality.
        </p>

        {/* Live Quote */}
        <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">💬 Daily Quote</h3>
          <p className="text-gray-200 italic">
            {quote || "Loading inspirational thought..."}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl py-20 text-center">
        <h2 className="text-3xl font-bold mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">⚙️ Build Fast</h3>
            <p className="text-gray-300">
              Using Next.js + Tailwind for modern, lightning-fast sites.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">🌐 Deploy Anywhere</h3>
            <p className="text-gray-300">
              Seamless deployment with Vercel — one push, instant live updates.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">💡 Learn Publicly</h3>
            <p className="text-gray-300">
              Documenting every day builds credibility & personal brand.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-slate-800 text-center text-gray-400 text-sm">
        Built by Aarav Sharma 🚀 | Proof of Build © 2026
      </footer>
    </main>
  );
}
