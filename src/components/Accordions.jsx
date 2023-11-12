'use client';

import { useState } from 'react';

const Accordions = () => {
  const accordionData = [
    {
      question: 'What Large Language Models are available in ATF.AI?',
      answer:
        'We support all the LLMs offered by OpenAI (including GPT-4), Anthropic (including Claude-v1-100k), and Google (PaLM-2 under preview). We also support Open-Source Large Language Models hosted on Replicate.',
    },
    {
      question: 'What Large Language Models are available in Stack AI?',
      answer:
        'We support all the LLMs offered by OpenAI (including GPT-4), Anthropic (including Claude-v1-100k), and Google (PaLM-2 under preview). We also support Open-Source Large Language Models hosted on Replicate.',
    },
    {
      question: 'What Large Language Models are available in Stack AI?',
      answer:
        'We support all the LLMs offered by OpenAI (including GPT-4), Anthropic (including Claude-v1-100k), and Google (PaLM-2 under preview). We also support Open-Source Large Language Models hosted on Replicate.',
    },
    {
      question: 'What Large Language Models are available in Stack AI?',
      answer:
        'We support all the LLMs offered by OpenAI (including GPT-4), Anthropic (including Claude-v1-100k), and Google (PaLM-2 under preview). We also support Open-Source Large Language Models hosted on Replicate..',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-24">
      <h1 className="section-heading  text-center mb-12">
        Frequently Asked Questions
      </h1>
      {accordionData.map((item, index) => (
        <div key={index} className="rounded-lg bg-black-70 mb-5 w-lg mx-auto">
          <div
            className="p-6 cursor-pointer"
            onClick={() => handleAccordionClick(index)}
          >
            <div className="flex justify-between">
              <h2 className="card-heading">{item.question}</h2>
              <div className="text-black-90 font-bold text-2xl ">+</div>
            </div>
          </div>
          {openIndex === index && (
            <div className="">
              <div className="p-6">
                <p className="card-description">{item.answer}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordions;
