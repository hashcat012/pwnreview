export default function ProductCard({ product, onAdd }) {
  return (
    <div className="glass p-5 rounded-2xl hover:border-indigo-500/50 transition-all group">
      <div className="text-4xl mb-4">{product.image}</div>
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-zinc-400 text-sm mb-4">{product.category}</p>
      <div className="flex items-center justify-between">
        <span className="font-bold text-indigo-400">{product.price} TL</span>
        <button onClick={() => onAdd(product)} className="bg-zinc-800 hover:bg-indigo-600 px-4 py-2 rounded-lg text-sm transition-colors">Ekle</button>
      </div>
    </div>
  );
}