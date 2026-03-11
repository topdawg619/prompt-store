const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Engineered for Precision, Not Luck",
    body: "Generic prompts give generic results. Every prompt in these packs is designed with specific context, role framing, and output structure so AI produces exactly what you need — first try.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Skip the Learning Curve Entirely",
    body: "Prompt engineering takes months to master. These packs give you the output of that expertise immediately — so you're productive on day one, not after weeks of trial and error.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Reusable Across Every Project",
    body: "These aren't one-and-done templates. Each prompt is structured to be adapted — swap a detail, change a tone, and you've got a fresh output. One pack, infinite use cases.",
  },
];

export default function WhyItWorks() {
  return (
    <section id="why" className="py-24 px-4 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3 block">The Difference</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Why These Prompts Actually Work
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Most AI prompts are vague. These aren't. Here's what separates them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div key={i} className="bg-[#111118] border border-white/5 rounded-2xl p-8 hover:border-purple-500/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-900/40 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
                {reason.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{reason.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{reason.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
