import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [dark, setDark] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 text-sm rounded-md border hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {dark ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
    </button>
  );
};

export default ThemeToggle;
