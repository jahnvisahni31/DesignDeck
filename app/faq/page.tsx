"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import NavbarComponent from "../front-navbar";

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
      "Currently, DesignDeck does not support keyboard shortcuts. The feature is under development. Once prepared, users will be able to perform faster design operations, such as Undo (Ctrl+Z), Redo (Ctrl+Y), and copy-pasting elements.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "dark" ? systemTheme : theme;
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(currentTheme === 'dark');
  }, [currentTheme]);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-black text-white"
          : "bg-gradient-to-r from-gray-300 via-white to-gray-200 text-black"
      } font-sans`}
    >
      <NavbarComponent />
      <div className="container mx-auto p-6">
        <div className="text-left mb-6">
          <Link href="/">
            <button
              className={`px-4 py-2 rounded transition duration-300 ${
                darkMode
                  ? "bg-blue-900 text-white hover:bg-blue-800"
                  : "bg-blue-200 text-black hover:bg-blue-300"
              }`}
            >
              Home
            </button>
          </Link>
        </div>
        <h1
          className={`text-4xl font-bold mb-8 text-center transition-colors duration-300 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Frequently Asked Questions
        </h1>
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg transition duration-300 cursor-pointer shadow-md transform hover:scale-105 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h2
                  className={`font-semibold text-lg transition-colors duration-300 ${
                    activeIndex === index
                      ? darkMode
                        ? "text-white"
                        : "text-gray-800"
                      : darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  {faq.question}
                </h2>
                <span
                  className={`transition-transform duration-300 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  } ${activeIndex === index ? "rotate-180" : "rotate-0"}`}
                >
                  ▼
                </span>
              </div>
              {activeIndex === index && (
                <p
                  className={`mt-4 transition-all duration-300 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;