import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Catalog from "./views/Catalog";
import Cart from "./views/Cart";
import { products } from "./data/products";

export default function App() {
  const [page, setPage] = useState("home");
  const [theme, setTheme] = useState("dark");
  const [cart, setCart] = useState([]);
  const addToCart = product => setCart(current => current.some(x => x.id === product.id) ? current.map(x => x.id === product.id ? {...x, qty: x.qty + 1} : x) : [...current, {...product, qty: 1}]);
  return <div className={theme}><Navbar page={page} setPage={setPage} theme={theme} setTheme={setTheme} cartCount={cart.reduce((s,x) => s+x.qty,0)}/>{page === "home" && <Home products={products} addToCart={addToCart} setPage={setPage}/>} {page === "catalog" && <Catalog products={products} addToCart={addToCart}/>} {page === "cart" && <Cart cart={cart} setCart={setCart}/>} {page === "about" && <main className="about section"><span className="eyebrow">Morticaret / Hikayemiz</span><h1>Morun özgür ruhu,<br/><em>günlük hayatında.</em></h1><p>Morticaret; seçkin tasarım, güçlü detay ve zamansız siyah-mor estetiği bir araya getiren bağımsız bir alışveriş deneyimidir.</p></main>}<footer>© 2025 morticaret <span>Karakter sahibi seçimler.</span></footer></div>;
}