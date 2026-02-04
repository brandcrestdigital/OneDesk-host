import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        relative p-2 rounded-full 
        bg-bg-card dark:bg-bg-card 
        hover:bg-accent-orange-900/20 
        transition-colors duration-200
      "
      aria-label="Toggle theme"
    >
      <Sun 
        className={`
          w-5 h-5 transition-all duration-300 
          ${theme === 'dark' ? 'opacity-0 scale-75 absolute' : 'opacity-100 scale-100'}
          text-accent-orange-500
        `}
      />
      <Moon 
        className={`
          w-5 h-5 transition-all duration-300 
          ${theme === 'light' ? 'opacity-0 scale-75 absolute' : 'opacity-100 scale-100'}
          text-accent-orange-400
        `}
      />
    </button>
  );
}