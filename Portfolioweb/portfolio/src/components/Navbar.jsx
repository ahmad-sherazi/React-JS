import React, { useState } from 'react';
// import icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi'; // hamburger & close icons
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { cycleTheme, theme } = useTheme();
  const [active, setActive] = useState('#about');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const menuItems = [
    { id: '#about', label: 'About' },
    { id: '#skill', label: 'Skills' },
    { id: '#project', label: 'Projects' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black py-1 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-white p-3 relative">
        {/* Logo */}
        <div className="flex items-center z-20">
          <a href="#about" onClick={closeMenu}>
            <h1 className="font-bold font-serif text-3xl">
              <span className={`text-6xl font-bold text-${theme.name}-300`}>P</span>ortfolio
            </h1>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center z-10">
          <ul className="flex text-xl space-x-6 items-center">
            {menuItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={id}
                  onClick={() => setActive(id)}
                  className={`transition duration-300 px-4 py-2 rounded
                    ${
                      active === id
                        ? `text-${theme.name}-300 `
                        : 'hover:text-black hover:bg-white'
                    }
                  `}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center pl-40 gap-3 ">
            <a className={`hover:text-${theme.name}-300`} href="https://github.com/ahmad-sherazi" target="_blank" rel="noopener noreferrer">
              <FaGithub size={32} />
            </a>
            <a className={`hover:text-${theme.name}-300`} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={32} />
            </a>
          </div>
        </nav>

        {/* Theme Toggle */}
        <div className="z-20">
          <button
            onClick={cycleTheme}
            className={`p-2 rounded transition hover:bg-${theme.name}-${theme.shade} hover:text-black text-${theme.name}-${theme.shade}`}
            title="Cycle Theme"
          >
            {theme.icon}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-30">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="text-white focus:outline-none">
            {menuOpen ? <HiX size={28}  /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className={`absolute top-full left-0 w-full bg-black shadow-lg md:hidden z-20`}>
            <ul className="flex flex-col text-center space-y-3 py-4">
              {menuItems.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={id}
                    onClick={() => {
                      setActive(id);
                      closeMenu();
                    }}
                    className={`block px-4 py-2 rounded text-lg
                      ${
                        active === id
                          ? `text-${theme.name}-${theme.shade} `
                          : 'hover:text-white'
                      }
                    `}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="flex justify-center space-x-6 pt-2">
                <a href="https://github.com/ahmad-sherazi" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
