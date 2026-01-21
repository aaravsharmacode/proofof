"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [quote, setQuote] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    async function getQuote() {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data.content);
    }
    getQuote();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <main className="bg-slate-900 text-white min-h-screen flex flex-col items-center px-6">
      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center justify-center h-screen text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">🚀 Proof of Build</h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-xl">
          Turning ideas into live products — one commit at a time.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition"
        >
          Get Started
        </motion.button>
      </motion.section>

      {/* About Section */}
      <section className="max-w-4xl py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">About This Project</h2>
        <p className="text-gray-300 leading-relaxed mb-10">
          Proof of Build is a journey to learn, create and share progress publicly.
        </p>
        <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4">💬 Daily Quote</h3>
          <p className="text-gray-200 italic">
            {quote || "Loading inspirational thought..."}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        className="max-w-6xl py-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "⚙️ Build Fast", desc: "Next.js + Tailwind = lightning speed." },
            { title: "🌐 Deploy Anywhere", desc: "Vercel for instant live hosting." },
            { title: "💡 Learn Publicly", desc: "Document progress, attract growth." },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Email Interaction */}
      <section className="max-w-lg w-full text-center py-16">
        <h2 className="text-2xl font-bold mb-4">Join the Builder List ✉️</h2>
        {submitted ? (
          <p className="text-green-400">Thanks! You’re now part of the journey 🚀</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-lg text-black w-full md:w-2/3"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-slate-800 text-center text-gray-400 text-sm">
        Built by Aarav Sharma 🚀 | Proof of Build © 2026
      </footer>
    </main>
  );
}
