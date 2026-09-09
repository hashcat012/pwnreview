import ProductCard from '../components/ProductCard';

export default function CatalogView({ products, onAdd }) {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map(p => <ProductCard key={p.id} product={p} onAdd={onAdd} />)}
    </div>
  );
}