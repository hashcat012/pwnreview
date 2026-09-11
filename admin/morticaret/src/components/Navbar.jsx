import { Moon, Sun, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ page, setPage, theme, setTheme, cartCount }) {
  const [open, setOpen] = useState(false);
  const go = (target) => { setPage(target); setOpen(false); };
  return (
    <header className="nav">
      <button className="brand" onClick={() => go("home")}>
        <span className="brandMark">M</span><span>morticaret</span>
      </button>
      <nav className={open ? "links open" : "links"}>
        <button className={page === "home" ? "active" : ""} onClick={() => go("home")}>Ana Sayfa</button>
        <button className={page === "catalog" ? "active" : ""} onClick={() => go("catalog")}>Katalog</button>
        <button className={page === "about" ? "active" : ""} onClick={() => go("about")}>Hakkımızda</button>
      </nav>
      <div className="navActions">
        <button className="iconBtn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Tema değiştir">
          {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
        </button>
        <button className="cartBtn" onClick={() => go("cart")}><ShoppingBag size={19}/><span>{cartCount}</span></button>
        <button className="menuBtn" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
    </header>
  );
}