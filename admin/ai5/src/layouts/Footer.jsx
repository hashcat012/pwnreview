import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900/80 border-t border-zinc-800 text-center py-4 text-sm text-zinc-500">
      © {new Date().getFullYear()} 21st.dev Stilinde Gerçek‑Zamanlı Sohbet Botu
    </footer>
  );
}