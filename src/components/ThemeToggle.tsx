import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // On mount, check localStorage or system preference
    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle('dark', saved === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 px-5 py-2 rounded-full font-semibold shadow border border-gray-300 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2"
      aria-label="Toggle dark/light mode"
    >
      {theme === 'dark' ? (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
      ) : (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.22a1 1 0 011.42 1.42l-.71.7a1 1 0 11-1.41-1.41l.7-.71zM18 9a1 1 0 100 2h-1a1 1 0 100-2h1zM5.29 4.22a1 1 0 00-1.41 1.42l.7.7A1 1 0 106.7 4.92l-.7-.7zM4 10a1 1 0 100 2H3a1 1 0 100-2h1zm1.29 5.71a1 1 0 001.41 1.42l.7-.71a1 1 0 10-1.41-1.41l-.7.7zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm5.71-1.29a1 1 0 00-1.41-1.41l-.71.7a1 1 0 101.42 1.42l.7-.71z" /></svg>
      )}
      {theme === 'dark' ? 'Dark' : 'Light'}
    </button>
  );
}
