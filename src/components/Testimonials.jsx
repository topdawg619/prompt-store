const testimonials = [
  {
    name: "Marcus T.",
    role: "Freelance Copywriter",
    avatar: "MT",
    color: "from-purple-600 to-blue-600",
    quote: "I was spending 45 minutes a day wrestling with AI to get usable copy. With the Content Creator Pack, I get what I need in under 5 minutes. I've already made back the price 10x over in time saved.",
    stars: 5,
  },
  {
    name: "Priya S.",
    role: "Operations Manager, SaaS Startup",
    avatar: "PS",
    color: "from-violet-600 to-purple-600",
    quote: "The Business Ops pack alone transformed how we document processes. Our SOPs went from vague to actually useful. My team stopped complaining about unclear docs the week I started using it.",
    stars: 5,
  },
  {
    name: "Derek W.",
    role: "Senior Software Engineer",
    avatar: "DW",
    color: "from-indigo-600 to-violet-600",
    quote: "I was skeptical — I thought I could just figure out my own prompts. Tried these for a week and I'm never going back. The code review prompts alone caught 3 issues my team missed.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-bg py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3 block">Reviews</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Real Results From Real Users
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Professionals across every field using PromptPro to work faster and smarter.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#111118] border border-white/5 rounded-2xl p-8 hover:border-purple-500/20 transition-all duration-300 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.stars)].map((_, si) => (
                  <svg key={si} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
