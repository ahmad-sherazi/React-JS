// Navbar.js
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/audios", label: "Audios" },
    { to: "/videos", label: "Videos" },
  ];

  return (
    <nav className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="flex items-center justify-between p-4 md:px-8">
        <Link to="/">
          <h1 className="font-bold font-serif text-3xl">
            <span className="text-5xl font-bold text-red-500">N</span>aatify
          </h1>
        </Link>

        <button
          className="md:hidden text-white text-4xl focus:outline-none"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          ☰
        </button>
      </div>

      <div className="hidden md:flex justify-center gap-6 pb-4">
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `px-3 py-2 rounded transition duration-300 text-center ${
                isActive ? "bg-red-700 text-white" : "hover:bg-gray-800"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-6">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg px-4 py-2 rounded ${
                  isActive ? "bg-red-700" : "hover:bg-gray-700"
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          <button
            className="mt-12 px-6 py-2 rounded hover:bg-red-700"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <span className="text-3xl">x</span>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
