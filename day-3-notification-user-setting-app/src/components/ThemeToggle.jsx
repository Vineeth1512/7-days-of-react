import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-lg font-semibold">Theme</p>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Current theme: {theme}
        </p>
      </div>

      <button
        onClick={toggleTheme}
        className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
}

export default ThemeToggle;
