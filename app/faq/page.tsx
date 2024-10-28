'use client'
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { ChevronDown, ChevronRight, Mail, Palette, Users, Zap, MousePointer2 } from 'lucide-react';
import NavbarComponent from '../front-navbar';

interface FAQ {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const faqs: FAQ[] = [
  {
    question: "What makes DesignDeck different from other design tools?",
    answer: "DesignDeck combines the power of real-time collaboration with advanced design capabilities. Using LiveBlocks API and Fabric.js, multiple team members can work simultaneously on the same canvas, seeing changes instantly while maintaining smooth performance.",
    icon: <Users className="w-5 h-5 text-blue-500" />
  },
  {
    question: "How does the real-time collaboration work?",
    answer: "Our platform utilizes LiveBlocks API to enable seamless real-time collaboration. Team members can see each other's cursor movements, changes, and annotations instantly, making remote design work feel like you're in the same room.",
    icon: <MousePointer2 className="w-5 h-5 text-green-500" />
  },
  {
    question: "What kind of design tools and features are available?",
    answer: "DesignDeck offers a comprehensive suite of design tools including vector editing, component libraries, responsive design testing, and custom asset management. With Fabric.js integration, you get powerful canvas manipulation capabilities.",
    icon: <Palette className="w-5 h-5 text-purple-500" />
  },
  {
    question: "How does the performance handle complex designs?",
    answer: "Built with Next.js and optimized rendering techniques, DesignDeck maintains smooth performance even with complex designs and multiple collaborators. Our architecture ensures minimal latency and maximum responsiveness.",
    icon: <Zap className="w-5 h-5 text-yellow-500" />
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
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
            </div>

            {/* Right Section - FAQs */}
            <div className="lg:col-span-2 space-y-4">
              {faqs.map((faq: FAQ, index: number) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
                >
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    onClick={() => toggleFAQ(index)}
                    type="button"
                  >
                    <div className="flex items-center space-x-3">
                      {faq.icon}
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {faq.question}
                      </span>
                    </div>
                    <div className="transform transition-transform duration-200">
                      {openIndex === index ? 
                        <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" /> : 
                        <ChevronRight className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      }
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                      <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;

