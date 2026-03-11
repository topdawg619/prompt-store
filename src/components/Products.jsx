const products = [
  {
    id: 1,
    title: "Content Creator Pro Pack",
    price: "$27",
    description: "50+ battle-tested prompts for blogs, social media, newsletters, and video scripts. Cut content creation time in half.",
    popular: false,
    color: "from-blue-600 to-purple-600",
    icon: "✍️",
    gumroadUrl: "https://gumroad.com/l/content-creator-pro",
    features: ["50+ prompts", "Blog & social", "Video scripts", "Email sequences"],
  },
  {
    id: 2,
    title: "Business Ops Mega Pack",
    price: "$47",
    description: "100+ prompts for SOPs, proposals, client emails, meeting summaries, and strategic planning. Built for operators.",
    popular: true,
    color: "from-purple-600 to-violet-600",
    icon: "🚀",
    gumroadUrl: "https://gumroad.com/l/business-ops-mega",
    features: ["100+ prompts", "Client proposals", "SOPs & systems", "Strategic planning"],
  },
  {
    id: 3,
    title: "Developer Toolkit Pack",
    price: "$37",
    description: "75+ prompts for code review, debugging, technical docs, API design, and engineering communication.",
    popular: false,
    color: "from-violet-600 to-indigo-600",
    icon: "💻",
    gumroadUrl: "https://gumroad.com/l/dev-toolkit-pack",
    features: ["75+ prompts", "Code review", "Tech docs", "System design"],
  },
];

export default function Products() {
  return (
    <section id="products" className="section-bg py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3 block">Prompt Packs</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Pick Your Pack. Get Results.
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Every pack is structured, tested, and ready to deploy. No editing required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <div className={`relative rounded-2xl border transition-all duration-300 card-glow flex flex-col ${
      product.popular
        ? 'border-purple-500/60 bg-gradient-to-b from-purple-950/40 to-[#0d0d14]'
        : 'border-white/10 bg-[#111118]'
    }`}>
      {/* Most Popular Badge */}
      {product.popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            ⭐ Most Popular
          </span>
        </div>
      )}

      {/* Cover Image Placeholder */}
      <div className={`h-44 rounded-t-2xl bg-gradient-to-br ${product.color} flex items-center justify-center`}>
        <div className="text-center">
          <div className="text-5xl mb-2">{product.icon}</div>
          <div className="text-white/60 text-xs font-medium uppercase tracking-wider">Prompt Pack</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-white font-bold text-xl mb-1">{product.title}</h3>
        <div className="text-3xl font-black text-white mb-3">
          {product.price}
          <span className="text-slate-500 text-sm font-normal ml-1">one-time</span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{product.description}</p>

        {/* Feature List */}
        <ul className="space-y-2 mb-6 flex-1">
          {product.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
              <svg className="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </li>
          ))}
        </ul>

        <a
          href={product.gumroadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full text-center py-3.5 rounded-xl font-bold text-base transition-all duration-300 ${
            product.popular
              ? 'btn-primary text-white'
              : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-purple-500/40'
          }`}
        >
          Get It Now →
        </a>
      </div>
    </div>
  );
}
