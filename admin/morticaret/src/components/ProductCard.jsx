import { ArrowUpRight, Plus } from "lucide-react";

export default function ProductCard({ product, addToCart }) {
  return (
    <article className="productCard">
      <div className="productVisual"><span>{product.emoji}</span><button className="roundBtn" onClick={() => addToCart(product)}><Plus size={18}/></button></div>
      <div className="productInfo"><div><small>{product.category}</small><h3>{product.name}</h3></div><strong>{product.price.toLocaleString("tr-TR")} ₺</strong></div>
      <button className="detailBtn" onClick={() => addToCart(product)}>Sepete ekle <ArrowUpRight size={16}/></button>
    </article>
  );
}