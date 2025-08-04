import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsMoon, BsPalette, BsSun} from 'react-icons/bs';
import { useTheme } from '../context/ThemeContext'; // Import your custom hook

const getNavLinkClass = ({ isActive }) =>
  `transition duration-300 px-4 py-2 rounded ${
    isActive
      ? "bg-white text-black font-semibold"
      : "hover:text-black hover:bg-white"
  }`;

const Navbar = () => {
  const { cycleTheme } = useTheme();
   const { theme } = useTheme();
   const icon = theme.icon;

  

  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-black py-1 shadow-2xl'>
      <div className='max-w-6xl mx-auto flex justify-between text-white p-3 items-center'>
        
        {/* Logo */}
        <div className="flex items-center z-10">
          <Link to="/about">
            <h1 className="font-bold font-serif text-3xl">
              <span className={`text-6xl font-bold text-${theme.name}-${theme.shade}`}>P</span>ortfolio
            </h1>
          </Link>
        </div>

        {/* Navigation + Social */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-6 ml-20">
          <nav>
            <ul className="flex text-xl space-x-6 items-center">
              <li><NavLink to="/about" className={getNavLinkClass}>About</NavLink></li>
              <li><NavLink to="/skill" className={getNavLinkClass}>Contact</NavLink></li>
            </ul>
          </nav>

          <div className="flex items-center ml-32 gap-3">
            <a href="https://github.com/hiteshchoudhary" target="_blank" rel="noopener noreferrer"><FaGithub size={32} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={32} /></a>
          </div>
        </div>

        {/* Theme Toggle Button */}
        <div className="z-10">
          <button
  onClick={cycleTheme}
  className={`p-2 rounded transition hover:bg-${theme.name}-${theme.shade} hover:text-black text-${theme.name}-${theme.shade}`}
  title="Cycle Theme"
>
  {icon}
</button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
