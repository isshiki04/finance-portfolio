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
          <a href="/resume.pdf" target="_blank">
            <button className="bg-slate-100 text-slate-900 px-6 py-2 rounded-lg font-medium hover:bg-white transition">
              Download Resume
            </button>
          </a>

          <a
            href="www.linkedin.com/in/karan-lonare-2a82692a9"
            target="_blank"
          >
            <button className="border border-slate-700 text-slate-200 px-6 py-2 rounded-lg hover:bg-slate-800 transition">
              LinkedIn
            </button>
          </a>

          <a href="mailto:karanlonare04@gmail.com">
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

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Equity Research – JSW Steel",
              desc: "Company profile, industry overview, and financial ratio analysis."
            },
            {
              title: "Stock Valuation Project",
              desc: "Comparable companies analysis and valuation interpretation."
            },
            {
              title: "Ratio Analysis – TCS vs Infosys",
              desc: "Final year academic project focusing on profitability and efficiency ratios."
            }
          ].map((p) => (
            <div
              key={p.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition"
            >
              <h3 className="text-xl font-semibold text-white">
                {p.title}
              </h3>
              <p className="text-slate-400 mt-2">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Financial Analysis",
            "Equity Research",
            "Valuation",
            "MS Excel",
            "Corporate Finance",
            "Ratio Analysis"
          ].map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center text-slate-200"
            >
              {skill}
            </div>
          ))}
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

        <a href="mailto:karanlonare04@gmail.com">
          <button className="bg-slate-100 text-slate-900 px-6 py-2 rounded-lg font-medium hover:bg-white transition">
            Email Me
          </button>
        </a>
      </section>

    </div>
  );
}
