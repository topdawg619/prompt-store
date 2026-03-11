import { useState } from 'react';

const faqs = [
  {
    q: "What format are the prompts in?",
    a: "All prompts are delivered as a clean PDF and a plain-text .txt file — easy to copy-paste directly into ChatGPT, Claude, Gemini, or any other AI tool. No special software required.",
  },
  {
    q: "Do these work with ChatGPT, Claude, and Gemini?",
    a: "Yes — all prompts are written to be model-agnostic. They've been tested across ChatGPT (3.5 & 4), Claude 3, and Gemini Pro. While results may vary slightly between models, every prompt is designed to perform well across all major AI platforms.",
  },
  {
    q: "Can I get a refund?",
    a: "Absolutely. If you're not satisfied with your purchase for any reason, reach out within 30 days and we'll refund you — no questions asked. We're confident you'll love the results, but we want you to feel zero risk.",
  },
  {
    q: "How do I download after purchase?",
    a: "Immediately after purchase via Gumroad, you'll receive a download link by email. You can also access your files anytime through your Gumroad account library. Downloads are instant — no waiting.",
  },
  {
    q: "Can I use these for my clients?",
    a: "Yes, with a standard single-user license you can use the prompts for your own work and client deliverables. You may not resell, redistribute, or repackage the prompts themselves. Need a team license? Contact us and we'll sort you out.",
  },
];

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-200 ${
        isOpen ? 'border-purple-500/40 bg-purple-950/20' : 'border-white/5 bg-[#111118]'
      }`}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        onClick={onClick}
      >
        <span className={`font-semibold text-base ${isOpen ? 'text-white' : 'text-slate-200'}`}>
          {q}
        </span>
        <svg
          className={`w-5 h-5 text-purple-400 flex-shrink-0 ml-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 px-4 bg-[#0a0a0f]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-widest mb-3 block">FAQ</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Answers to Common Questions
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Everything you need to know before you buy.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
