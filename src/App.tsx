import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        {/* TODO: About, Skills, Projects, Contact sections */}
        <section id="projects" className="max-w-5xl mx-auto px-4 py-20">
          <h2 className="text-2xl font-semibold">Projects (coming soon)</h2>
          <p className="text-gray-600 mt-2">I will add featured projects here with GitHub links and live demos.</p>
        </section>

        <section id="contact" className="max-w-5xl mx-auto px-4 py-20">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-gray-600">Email: <a href="mailto:youremail@example.com" className="underline">youremail@example.com</a></p>
        </section>
      </main>
    </div>
  );
}

export default App;
