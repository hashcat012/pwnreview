import { motion } from 'framer-motion';

export default function DashboardView({ models }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Genel Bakış</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {models.map((m) => (
          <motion.div key={m.id} whileHover={{ y: -5 }} className="glass p-6 rounded-2xl">
            <p className="text-zinc-400 text-sm">{m.name}</p>
            <h3 className="text-2xl font-bold mt-2">{m.accuracy}% Accuracy</h3>
            <span className={`px-2 py-1 rounded text-xs mt-4 inline-block ${m.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
              {m.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}