"use client";
import React, { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "What is DesignDeck?",
    answer:
      "DesignDeck is a web-based collaborative design tool, similar to Figma, built using Next.js, TypeScript, Tailwind CSS, and LiveBlocks API. It allows teams to seamlessly collaborate on designing interfaces in real-time.",
  },
  {
    question: "How do I get started with DesignDeck?",
    answer:
      "To get started, clone the repository from GitHub, install the dependencies, and run the project locally using npm. The full guide is available in the README.md file.",
  },
  {
    question: "What features does DesignDeck offer?",
    answer:
      "DesignDeck offers live collaboration, shape manipulation, free drawing, text addition, export to PDF, and many more features to help you design interfaces collaboratively.",
  },
  {
    question: "How can I contribute to DesignDeck?",
    answer:
      "You can contribute by forking the repository, creating a new branch, making your changes, and submitting a pull request. Contributions are always welcome!",
  },
  {
    question: "Is DesignDeck open source?",
    answer:
      "Yes, DesignDeck is an open-source project, and we encourage contributions from the community.",
  },
  {
    question: "Does DesignDeck support real-time collaboration?",
    answer:
      "Yes, with the LiveBlocks API integrated into DesignDeck, multiple users can collaborate in real-time. You can see live updates of cursor positions and design changes as they happen.",
  },
  {
    question: "What technologies power DesignDeck?",
    answer:
      "DesignDeck is built using Next.js, TypeScript, Tailwind CSS, and LiveBlocks API for real-time collaboration, along with Fabric.js for manipulating graphics and interactive content.",
  },
  {
    question: "How can I export my designs in DesignDeck?",
    answer:
      "DesignDeck allows you to export designs to PDF format. Simply select the elements you want to export and use the export option to generate a downloadable PDF.",
  },
  {
    question: "Are there keyboard shortcuts available in DesignDeck?",
    answer:
      "Currently, DesignDeck does not supports keyboard shortcuts,the feature is under development, once prepare user will be abel to do faster design operations, such as Undo (Ctrl+Z), Redo (Ctrl+Y), and copy-pasting elements.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container mx-auto p-6 min-h-screen h-screen overflow-y-auto">
      {/* Home Button */}
      <div className="text-left mb-4">
        <Link href="/">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
            Home
          </button>
        </Link>
      </div>
      <h1 className="text-4xl font-bold mb-6 text-center text-white">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4 max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-700 py-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h2
                className={`font-semibold text-lg ${
                  activeIndex === index ? "text-white" : "text-gray-300"
                }`}
              >
                {faq.question}
              </h2>
              <span className="text-gray-400">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;