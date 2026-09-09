export default function CartView({ cart, onRemove }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Sepetiniz</h2>
      {cart.length === 0 ? <p className="text-zinc-500">Sepetiniz boş.</p> : (
        <div className="glass p-6 rounded-2xl space-y-4">
          {cart.map((item, idx) => (
            <div key={idx} className="flex justify-between items-center border-b border-zinc-800 pb-4">
              <span>{item.name}</span>
              <span className="text-indigo-400">{item.price} TL</span>
            </div>
          ))}
          <button className="w-full bg-indigo-600 py-3 rounded-xl font-bold">Ödemeye Geç</button>
        </div>
      )}
    </div>
  );
}