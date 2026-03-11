export default function CTA() {
  return (
    <section className="py-24 px-4 bg-[#0d0d14]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative rounded-3xl border border-purple-500/20 bg-gradient-to-b from-purple-950/30 to-[#0d0d14] p-12 sm:p-16 overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-purple-600/20 blur-3xl rounded-full" />

          <div className="relative">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
              Ready to Stop Experimenting<br />
              <span className="gradient-text">and Start Delivering?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Join 1,000+ professionals using PromptPro to get better AI results, faster. Backed by a 30-day guarantee.
            </p>
            <a
              href="#products"
              className="btn-primary text-white font-bold text-lg px-10 py-4 rounded-xl inline-flex items-center gap-3"
            >
              Browse Prompt Packs
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <p className="text-slate-600 text-sm mt-4">
              Instant download. 30-day money-back guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
