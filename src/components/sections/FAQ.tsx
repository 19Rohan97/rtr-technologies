"use client";

import { useState } from "react";
import { faqs as fallbackFaqs } from "@/content/faqs";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({ faqs }: { faqs?: FAQItem[] }) {
  const data = faqs?.length ? faqs : fallbackFaqs;

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  function toggle(idx: number) {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  }
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium mb-6">
            FAQs
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Answers to common questions about our services, process, and support.
          </p>
        </div>
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200/60 dark:border-gray-700/60 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
          {data.map((item, idx) => {
            const open = openIndex === idx;
            return (
              <div
                key={item.question}
                className={`p-6 ${idx !== 0 ? "border-t border-gray-200/60 dark:border-gray-700/60" : ""} ${open ? "bg-white/70 dark:bg-gray-800/70" : ""}`}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${idx}`}
                  onClick={() => toggle(idx)}
                  className="w-full flex items-start justify-between gap-4 text-left"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white">{item.question}</h3>
                  <span
                    className={`mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 transition-transform ${open ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${open ? "opacity-100 max-h-96" : "opacity-0 max-h-0"}`}
                >
                  <div className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
