"use client";
// import heartSrc from "public/assets/heart.svg";
// import Image from "next/image";
import { useState } from 'react';
import React from 'react';
import './faq.css';   // Ensure you have this CSS file for custom styling

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: 'What is TTS Resume Parser Builder',
    answer: 'TTS Resume Parser Builder is an innovative tool designed to help job seekers create professional resumes quickly and easily. It offers a range of features such as modern templates, ATS optimization, and real-time preview to ensure your resume stands out to potential employers.',
  },
  {
    question: 'How does TTS Resume Parser Builder work?',
    answer: 'TTS Resume Parser Builder utilizes advanced algorithms to analyze and parse the information provided by users, extracting key details such as skills, experiences, and qualifications etc. It then uses this data to generate a formatted resume tailored to the users preferences.',
  },
  {
    question: 'Is TTS Resume Parser Builder free to use?',
    answer: 'While TTS Resume Parser Builder offers a free trial period with limited features, access to its full suite of premium features requires a subscription. However, our pricing plans are affordable and designed to suit various budgetary needs.',
  },
  {
    question: 'Is my data safe with TTS Resume Parser Builder?',
    answer: 'Yes, your privacy and data security are our top priorities. TTS Resume Parser Builder stores all user data locally on your device, ensuring that only you have access to your information. We do not share or sell your data to third parties.',
  },
  {
    question: 'Can I customize my resume with TTS Resume Parser Builder?',
    answer: 'Absolutely! TTS Resume Parser Builder offers customizable resume templates and sections, allowing you to tailor your resume to showcase your unique skills and experiences. Our user-friendly interface makes customization a breeze.',
  },
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="App">
     <h2 className="mb-8 text-center text-3xl font-bold mt-14">
        Frequently Asked {" "}
        {/* <Image src={heartSrc} alt="love" className="-mt-1 inline-block w-7" />{" "} */}
        Questions
      </h2>
      <div className="accordion">
        {faqItems.map((item, index) => (
          <div key={index} className="accordion-item">
            <div
              className="accordion-title"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span className={`icon ${activeIndex === index ? 'expanded' : ''}`}>
                ▼
              </span>
            </div>
            <div className={`accordion-content ${activeIndex === index ? 'expanded' : ''}`}>
              <div className="pt-4 pb-2 pl-3">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
