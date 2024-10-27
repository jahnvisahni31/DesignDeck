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
    <>
      <NavbarComponent
        isLoggedIn={isLoggedIn}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about DesignDeck's collaborative design platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Section - Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Need More Help?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our team is here to help you get the most out of DesignDeck's collaborative design features.
                  </p>
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <a href="mailto:support@designdeck.com" 
                         className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
                        support@designdeck.com
                      </a>
                    </div>
                  </div>
                </div>
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

export default FAQSection;