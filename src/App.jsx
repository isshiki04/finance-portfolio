
import { motion } from 'framer-motion'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center py-16"
      >
        <h1 className="text-4xl font-bold mb-4">Karan Lonare</h1>
        <p className="text-lg text-slate-400">
          Finance Graduate | Equity Research | Corporate Finance
        </p>
      </motion.section>

      <section className="max-w-5xl mx-auto mb-12 bg-slate-900 p-6 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
        <p className="text-slate-400">
          BBA Finance graduate with hands-on experience in equity research,
          valuation, and financial statement analysis. Actively seeking analyst
          and finance roles.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {["JSW Steel Equity Research", "Stock Valuation (Comps)", "TCS vs Infosys Ratio Analysis"].map(p => (
            <div key={p} className="bg-slate-900 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold">{p}</h3>
              <p className="text-slate-400 mt-2">Finance-focused academic and practical project.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-slate-400">Open to internships and analyst roles</p>
      </section>
    </div>
  )
}
