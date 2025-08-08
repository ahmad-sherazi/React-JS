// context/ThemeContext.jsx
import React, { createContext, useState, useContext } from 'react';
import { BsSun, BsMoon, BsPalette } from 'react-icons/bs';

const ThemeContext = createContext();

const themes = [
 { name: 'blue', shade: '300', icon: <BsSun size={24} /> },
  { name: 'green', shade: '300', icon: <BsMoon size={24} /> },
  { name: 'orange', shade: '300', icon: <BsPalette size={24} /> },
  { name: 'purple', shade: '300', icon: <BsSun size={24} /> },
  { name: 'cyan', shade: '300', icon: <BsSun size={24} /> },
  { name: 'desert', shade: '300', icon: <BsPalette size={24} /> }, // Desert theme
];

export const ThemeProvider = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState(0);
  const theme = themes[themeIndex];

  const cycleTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  return <ThemeContext.Provider value={{ theme, cycleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
