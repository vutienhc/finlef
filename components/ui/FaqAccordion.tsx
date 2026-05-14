"use client";

import { useState } from "react";

export interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  faqs: FaqItem[];
  accentColor?: string;
}

export default function FaqAccordion({ faqs, accentColor = "orange" }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  const colors: Record<string, { bg: string; hover: string; dot: string; body: string; border: string }> = {
    orange: { bg: "bg-orange-500", hover: "hover:bg-orange-50", dot: "bg-orange-400", body: "bg-orange-50", border: "border-orange-100" },
    blue:   { bg: "bg-blue-600",   hover: "hover:bg-blue-50",   dot: "bg-blue-400",   body: "bg-blue-50",   border: "border-blue-100" },
    green:  { bg: "bg-green-600",  hover: "hover:bg-green-50",  dot: "bg-green-500",  body: "bg-green-50",  border: "border-green-100" },
    teal:   { bg: "bg-teal-600",   hover: "hover:bg-teal-50",   dot: "bg-teal-400",   body: "bg-teal-50",   border: "border-teal-100" },
    red:    { bg: "bg-red-500",    hover: "hover:bg-red-50",    dot: "bg-red-400",    body: "bg-red-50",    border: "border-red-100" },
    purple: { bg: "bg-purple-600", hover: "hover:bg-purple-50", dot: "bg-purple-400", body: "bg-purple-50", border: "border-purple-100" },
  };

  const c = colors[accentColor] ?? colors.orange;

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className={`border ${c.border} rounded-2xl overflow-hidden`}>
          <button
            className={`w-full text-left px-6 py-4 flex justify-between items-center gap-4 bg-white ${c.hover} transition-colors`}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-gray-800 text-sm leading-snug">{faq.q}</span>
            <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm transition-transform ${open === i ? `${c.bg} rotate-45` : c.dot}`}>
              +
            </span>
          </button>
          {open === i && (
            <div className={`px-6 pb-5 ${c.body} text-gray-600 text-sm leading-relaxed`}>
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
