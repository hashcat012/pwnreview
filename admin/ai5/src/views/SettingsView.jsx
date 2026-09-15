import React from "react";
import { ThemeContext } from "../context/AppContext.jsx";
import { Sun, Moon } from "lucide-react";

export default function SettingsView() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <section className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-white">⚙️ Ayarlar</h1>

      <div className="flex items-center gap-4 p-4 bg-zinc-900/60 rounded-xl border border-white/10 backdrop-blur-md">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
        >
          {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
          <span>{theme === "dark" ? "Koyu Tema" : "Açık Tema"}</span>
        </button>
      </div>
    </section>
  );
}