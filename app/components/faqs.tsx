"use client";

import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    { question: 'Question text goes here', answer: 'Answer text goes here' },
    { question: 'Question text goes here', answer: 'Answer text goes here' },
    { question: 'Question text goes here', answer: 'Answer text goes here' },
    { question: 'Question text goes here', answer: 'Answer text goes here' },
    { question: 'Question text goes here', answer: 'Answer text goes here' },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" text-white py-20 px-6">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Frequently asked questions
      </h2>
      <p className="text-center text-gray-400 mb-12">
        Find answers to common questions about our bikes, services, and more.
      </p>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-4 flex justify-between items-center"
            >
              <span className="text-lg">{faq.question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <p className="text-gray-400 pb-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
        <p className="text-gray-400 mb-6">
          Support details to capture customers that might be on the fence.
        </p>
        <button className="bg-transparent border border-purple-500 text-purple-500 py-2 px-4 rounded hover:bg-purple-500 hover:text-white transition">
          Contact
        </button>
      </div>
    </div>
  );
};

export default FAQAccordion;
