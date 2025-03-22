import { BsQuestionSquare } from 'react-icons/bs';
import SectionHeading from './SectionHeading';
import { useState } from 'react';
import data from '../utility/data.json';
import {
  HiOutlineArrowNarrowDown,
  HiOutlineArrowNarrowUp,
} from 'react-icons/hi';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-light">
      <div className="container py-20">
        <SectionHeading title="FAQ" icon={BsQuestionSquare} />
        <h2 className="mt-6 text-center text-2xl font-bold text-accent md:text-3xl lg:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="text-md m-auto mt-4 max-w-5xl text-center font-semibold text-gray-500 md:text-lg">
          Here are some frequently asked questions about our automotive
          services. If you have any other questions, please don&apos;t hesitate
          to contact us.
        </p>
        <div className="grid grid-cols-1 gap-4 space-y-4 pt-10 md:grid-cols-2">
          {data.faq.map((faq, index) => (
            <div
              key={index}
              className="h-max transform overflow-hidden rounded-2xl bg-white duration-200 hover:scale-101"
            >
              <div
                className={`flex cursor-pointer items-center justify-between px-6 py-4 transition-all duration-300 ${
                  activeIndex === index ? '' : 'py-8'
                }`}
                onClick={() => toggleAnswer(index)}
              >
                <span className="text-md font-medium sm:text-lg md:text-xl">
                  {faq.question}
                </span>
                <span
                  className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-90' : ''}`}
                >
                  {activeIndex === index ? (
                    <HiOutlineArrowNarrowUp size={20} />
                  ) : (
                    <HiOutlineArrowNarrowDown size={20} />
                  )}
                </span>
              </div>
              {activeIndex === index && (
                <div className="bg-primary p-4">
                  <p className="text-white">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
