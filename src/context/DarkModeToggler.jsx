import { useContext } from "react";
import { useDarkMode } from '../context/ThemeContext'

const DarkModeToggler = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle dark mode"
      className="w-9 h-5 rounded-full relative transition-colors duration-300
        bg-black/10 dark:bg-bright-green/30
        flex items-center px-0.5"
    >
      <span className={`
        w-4 h-4 rounded-full transition-all duration-300
        bg-almost-black dark:bg-bright-green
        ${darkMode ? 'translate-x-4' : 'translate-x-0'}
      `} />
    </button>
  );
};

export default DarkModeToggler;