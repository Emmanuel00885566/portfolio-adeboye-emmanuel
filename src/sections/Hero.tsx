import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[70vh] flex items-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Hi — I’m <span className="text-indigo-600">Adeboye Emmanuel</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Front-End Software Engineer specializing in React, TypeScript, and modern UI.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="#projects" className="px-5 py-3 bg-indigo-600 text-white rounded-md shadow">
            View Projects
          </a>
          <a href="#contact" className="px-5 py-3 border rounded-md">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

