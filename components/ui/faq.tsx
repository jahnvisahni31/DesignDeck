"use client";
import { faq } from "@/constants";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = () => {
  const [showAnswer, setShowAnswer] = useState<number | null>(null);
  const [show, setShow] = useState<number | null>(null);

  const handleAccordion = (index: number) => {
    setShowAnswer(index);
    setShow(index);
  };

  const closeAccordion = () => {
    setShowAnswer(null);
    setShow(null);
  };

  return (
    <div className="py-20">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-6xl gradient-text">Frequently Asked Questions</h1>
        <p className="text-xl md:text-2xl text-gray-600 font-light my-5 leading-snug md:w-1/3 text-center">
          Find answers to commonly asked questions about our product and services
        </p>
      </div>
      <div className="right mb-36 w-2/3 mx-auto select-none space-y-10">
        {faq.map((faq, i) => (
          <div key={i} className="faq-item">
            <div className="bg-gradient-to-r from-purple-100 shadow-lg shadow-purple-300 p-4 mx-3 md:p-7 md:m-5 rounded-xl">
              <div className="flex justify-between">
                <h1 className="md:text-2xl text-lg dm-sans-font w-[87%]">
                  {faq.question}
                </h1>

                {show === i ? (
                  <IoIosArrowUp
                    className="text-2xl cursor-pointer"
                    onClick={closeAccordion}
                  />
                ) : (
                  <IoIosArrowDown
                    className="text-2xl cursor-pointer"
                    onClick={() => handleAccordion(i)}
                  />
                )}
              </div>

              {showAnswer === i && (
                <p className="mt-5 text-lg text-gray-500 w-[95%] md:w-5/6">
                  {faq.answer}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;