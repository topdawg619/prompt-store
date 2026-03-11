export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm font-medium px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            Trusted by 1,000+ professionals worldwide
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-center text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6 max-w-5xl mx-auto">
          Stop Wasting Time Writing{' '}
          <span className="gradient-text">AI Prompts</span>{' '}
          From Scratch
        </h1>

        {/* Subheadline */}
        <p className="text-center text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Ready-to-use prompt packs for professionals who want results, not experiments.
        </p>

        {/* CTA */}
        <div className="flex justify-center mb-14">
          <a
            href="#products"
            className="btn-primary text-white font-bold text-lg px-10 py-4 rounded-xl inline-flex items-center gap-3"
          >
            Browse Prompt Packs
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          <TrustBadge
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            text="30-Day Money Back"
          />
          <TrustBadge
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            }
            text="Instant Download"
          />
          <TrustBadge
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            text="Used by 1,000+ Professionals"
          />
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ icon, text }) {
  return (
    <div className="flex items-center gap-2 text-slate-300">
      <span className="text-purple-400">{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
