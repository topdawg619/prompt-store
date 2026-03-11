export default function Footer() {
  return (
    <footer className="section-bg border-t border-white/5 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg btn-primary flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-white font-bold">PromptPro</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#products" className="hover:text-slate-300 transition-colors">Products</a>
            <a href="#faq" className="hover:text-slate-300 transition-colors">FAQ</a>
            <a href="mailto:support@promptpro.ai" className="hover:text-slate-300 transition-colors">Support</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
          </div>

          {/* Copyright */}
          <p className="text-slate-600 text-sm">
            © 2026 PromptPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
