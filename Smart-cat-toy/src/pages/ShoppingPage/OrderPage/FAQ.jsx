import React, { useState } from 'react';
import { FaqContent } from '../../utils/FaqContent';

function FAQ() {

  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div>
    {FaqContent.map((Faq, index) => {
      const isOpen = openIndex === index;
    return (
      <div className="px-5 py-4 rounded-sm border border-slate-200" >
        <button
          className="flex items-center justify-between w-full group mb-1"
          aria-expanded={isOpen}
          onClick={() => setOpenIndex(isOpen ? null : index)}
          key={index}
        >
          <div className="text-sm text-slate-800 font-medium">{Faq.title}</div>
          <svg className={`w-8 h-8 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 ${isOpen && 'rotate-180'}`} viewBox="0 0 32 32">
            <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z" />
          </svg>
        </button>
        <div className={`text-sm ${!isOpen && 'hidden'}`}>
          {Faq.children}
        </div>
      </div>
    );
  })}
</div>
  );
}

export default FAQ;
