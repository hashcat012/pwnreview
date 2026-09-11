import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Catalog({ products, addToCart }) {
  const [query, setQuery] = useState(""); const [category, setCategory] = useState("Tümü");
  const filtered = useMemo(() => products.filter(p => (category === "Tümü" || p.category === category) && p.name.toLowerCase().includes(query.toLowerCase())), [products, query, category]);
  return <main className="section catalog"><div className="catalogTitle"><span className="eyebrow">Morticaret / Mağaza</span><h1>Tüm ürünler</h1><p>Senin için özenle seçilmiş, karakter sahibi parçalar.</p></div><div className="toolbar"><div className="search"><Search size={18}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Ürün ara..." /></div><div className="filters">{["Tümü","Giyim","Ayakkabı","Aksesuar","Elektronik"].map(c => <button className={category === c ? "selected" : ""} onClick={() => setCategory(c)} key={c}><SlidersHorizontal size={15}/>{c}</button>)}</div></div><div className="productGrid">{filtered.map(p => <ProductCard key={p.id} product={p} addToCart={addToCart}/>)}</div>{filtered.length === 0 && <div className="empty">Aramanla eşleşen ürün bulunamadı.</div>}</main>;
}