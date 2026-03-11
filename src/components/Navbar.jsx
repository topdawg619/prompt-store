export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg btn-primary flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-white font-bold text-xl">PromptPro</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Products</a>
          <a href="#why" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Why It Works</a>
          <a href="#testimonials" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Reviews</a>
          <a href="#faq" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">FAQ</a>
        </div>

        <a
          href="#products"
          className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg"
        >
          Browse Packs
        </a>
      </div>
    </nav>
  );
}
