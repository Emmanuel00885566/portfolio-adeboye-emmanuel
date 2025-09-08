import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4 bg-white/60 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        <div className="font-semibold text-lg">ADEBOYE EMMANUEL</div>
        <div className="space-x-4 text-sm">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
