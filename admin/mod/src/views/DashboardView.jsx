import { motion } from 'framer-motion';

export default function DashboardView({ models }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {models.map(m => (
          <motion.div key={m.id} className="glass p-6 rounded-2xl border border-zinc-800" whileHover={{ y: -5 }}>
            <h3 className="font-semibold">{m.name}</h3>
            <p className="text-zinc-400 text-sm">{m.provider}</p>
            <div className="mt-4 h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500" style={{ width: `${m.usage}%` }} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}