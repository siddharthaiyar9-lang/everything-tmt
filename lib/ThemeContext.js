'use client';
// 'use client' tells Next.js: this file uses browser-only features
// (useState, useEffect) and can't be rendered purely on the server.
// Most interactive components will need this line.

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Whenever darkMode changes, set data-theme on the <html> tag.
  // Our CSS variables (see globals.css) react to that attribute,
  // so this one line is all it takes to re-theme the entire site.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// A small helper hook so components can just call useTheme()
// instead of importing useContext + ThemeContext every time.
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside a <ThemeProvider>');
  }
  return context;
}