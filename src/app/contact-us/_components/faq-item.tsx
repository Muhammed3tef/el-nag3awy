"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type Props = {
  question: string;
  answer: string;
};
export const FAQItem = ({ question, answer }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? "border-green-400/60 bg-green-50/40"
          : "border-stone-200 bg-white hover:border-green-300/50 hover:bg-green-50/20"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-right cursor-pointer"
        dir="rtl"
      >
        <span className="text-stone-800 font-semibold text-base leading-relaxed">
          {question}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            open
              ? "bg-green-400 text-white rotate-180"
              : "bg-stone-100 text-stone-400"
          }`}
        >
          <FaChevronDown size={12} />
        </span>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <p
          className="px-6 pb-5 text-stone-500 text-sm leading-relaxed text-right"
          dir="rtl"
        >
          {answer}
        </p>
      </div>
    </div>
  );
};
