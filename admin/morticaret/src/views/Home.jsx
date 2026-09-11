import { ArrowRight, Sparkles, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import ProductCard from "../components/ProductCard";

export default function Home({ products, addToCart, setPage }) {
  return <main>
    <section className="hero">
      <div className="heroCopy"><span className="eyebrow"><Sparkles size={15}/> Yeni sezon şimdi yayında</span><h1>Tarzın karanlık<br/><em>tarafını keşfet.</em></h1><p>Günün enerjisine uyum sağlayan seçkin parçalar. Siyahın asaleti, morun karakteri.</p><button className="primary" onClick={() => setPage("catalog")}>Koleksiyonu keşfet <ArrowRight size={18}/></button></div>
      <div className="heroOrb"><div className="orbProduct">🖤</div><span className="floatTag">CURATED / 2025</span></div>
    </section>
    <section className="benefits"><div><Truck/><span><b>Hızlı teslimat</b><small>750₺ üzeri ücretsiz</small></span></div><div><ShieldCheck/><span><b>Güvenli ödeme</b><small>256-bit şifreleme</small></span></div><div><RotateCcw/><span><b>Kolay iade</b><small>14 gün içinde</small></span></div></section>
    <section className="section"><div className="sectionHead"><div><span className="eyebrow">Editörün seçtikleri</span><h2>Öne çıkanlar</h2></div><button className="textBtn" onClick={() => setPage("catalog")}>Tümünü gör <ArrowRight size={16}/></button></div><div className="productGrid">{products.filter(p => p.featured).map(p => <ProductCard key={p.id} product={p} addToCart={addToCart}/>)}</div></section>
  </main>;
}