import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center py-16"
      >
        <h1 className="text-4xl font-bold mb-4 text-white">
          Karan Lonare
        </h1>

        <p className="text-lg text-slate-400">
          Finance Graduate | Equity Research | Corporate Finance
        </p>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-slate-100 text-slate-900 px-6 py-2 rounded-lg font-medium hover:bg-white transition">
              Download Resume
            </button>
          </a>

          <a 
            href="https://www.linkedin.com/in/karan-lonare-2a82692a9" 
            target="_blank" 
            rel="noopener noreferrer"
          >

            <button className="border border-slate-700 text-slate-200 px-6 py-2 rounded-lg hover:bg-slate-800 transition">
              LinkedIn
            </button>
          </a>

          <a
           href="https://mail.google.com/mail/?view=cm&fs=1&to=karanlonare04@gmail.com"
           target="_blank"
           rel="noopener noreferrer"
          >
            <button className="border border-slate-700 text-slate-200 px-6 py-2 rounded-lg hover:bg-slate-800 transition">
              Email
            </button>
          </a>
        </div>
      </motion.section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto mb-12 bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h2 className="text-2xl font-semibold mb-3 text-white">
          About Me
        </h2>

        <p className="text-slate-400 leading-relaxed">
          I am a BBA Finance graduate with a strong interest in equity research,
          valuation, and corporate finance. I have worked on company analysis
          projects, financial statement analysis, and valuation frameworks, and
          I am actively building skills required for core finance and analyst roles.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="max-w-5xl mx-auto mb-12">
  <h2 className="text-2xl font-semibold mb-6 text-white">
    Projects
  </h2>

  {/* JSW Steel Project */}
  <a
    href="/jsw-steel-report.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="block mb-6"
  >
    <div className="rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">
          Equity Research – JSW Steel
        </h3>
        <p className="text-slate-400 mt-2">
          Company profile, industry overview, financial ratio analysis, and key
          investment insights.
        </p>
        <p className="text-slate-500 text-sm mt-3">
          Click to view full research PDF
        </p>
      </div>
    </div>
  </a>

  {/* Stock Valuation Project */}
  <div className="rounded-2xl bg-slate-900 border border-slate-800 mb-6">
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white">
        Stock Valuation Project
      </h3>
      <p className="text-slate-400 mt-2">
        Comparable companies analysis and valuation interpretation.
      </p>
    </div>
  </div>

  {/* Ratio Analysis Project */}
  <div className="rounded-2xl bg-slate-900 border border-slate-800">
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white">
        Ratio Analysis – TCS vs Infosys
      </h3>
      <p className="text-slate-400 mt-2">
        Final year project focusing on profitability, liquidity, and efficiency
        ratios.
      </p>
    </div>
  </div>
</section>
                                        

      {/* CONTACT */}
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Contact
        </h2>

        <p className="text-slate-400 mb-6">
          Open to internships and analyst roles. Let’s connect.
        </p>

        <a
         href="https://mail.google.com/mail/?view=cm&fs=1&to=karanlonare04@gmail.com"
         target="_blank"
         rel="noopener noreferrer"
        >

          <button className="bg-slate-100 text-slate-900 px-6 py-2 rounded-lg font-medium hover:bg-white transition">
            Email Me
          </button>
        </a>
      </section>

    </div>
  );
}
