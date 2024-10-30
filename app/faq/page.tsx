'use client'
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { FiChevronDown, FiMail, FiMessageCircle, FiPhone } from 'react-icons/fi';
import NavbarComponent from '../front-navbar';

interface Faq {
  question: string;
  answer: string;
  icon: string;
  category: string;
}

interface ContactMethod {
  icon: JSX.Element;
  title: string;
  description: string;
  contact: string;
  action: string;
}

// Categorized FAQs with appropriate icons
const faqs: Faq[] = [
  {
    category: "Getting Started",
    question: "What is DesignDeck?",
    answer: "DesignDeck is a web-based collaborative design tool, similar to Figma, built using Next.js, TypeScript, Tailwind CSS, and LiveBlocks API. It allows teams to seamlessly collaborate on designing interfaces in real-time.",
    icon: "🎨"
  },
  {
    category: "Getting Started",
    question: "How do I get started with DesignDeck?",
    answer: "To get started, clone the repository from GitHub, install the dependencies, and run the project locally using npm. The full guide is available in the README.md file.",
    icon: "🚀"
  },
  {
    category: "Features",
    question: "What features does DesignDeck offer?",
    answer: "DesignDeck offers live collaboration, shape manipulation, free drawing, text addition, export to PDF, and many more features to help you design interfaces collaboratively.",
    icon: "⚡"
  },
  {
    category: "Community",
    question: "How can I contribute to DesignDeck?",
    answer: "You can contribute by forking the repository, creating a new branch, making your changes, and submitting a pull request. Contributions are always welcome!",
    icon: "🤝"
  },
  {
    category: "Community",
    question: "Is DesignDeck open source?",
    answer: "Yes, DesignDeck is an open-source project, and we encourage contributions from the community.",
    icon: "📖"
  },
  {
    category: "Features",
    question: "Does DesignDeck support real-time collaboration?",
    answer: "Yes, with the LiveBlocks API integrated into DesignDeck, multiple users can collaborate in real-time. You can see live updates of cursor positions and design changes as they happen.",
    icon: "👥"
  },
  {
    category: "Technical",
    question: "What technologies power DesignDeck?",
    answer: "DesignDeck is built using Next.js, TypeScript, Tailwind CSS, and LiveBlocks API for real-time collaboration, along with Fabric.js for manipulating graphics and interactive content.",
    icon: "⚙️"
  },
  {
    category: "Features",
    question: "How can I export my designs in DesignDeck?",
    answer: "DesignDeck allows you to export designs to PDF format. Simply select the elements you want to export and use the export option to generate a downloadable PDF.",
    icon: "📤"
  },
  {
    category: "Features",
    question: "Are there keyboard shortcuts available in DesignDeck?",
    answer: "Currently, DesignDeck does not support keyboard shortcuts. The feature is under development. Once prepared, users will be able to perform faster design operations, such as Undo (Ctrl+Z), Redo (Ctrl+Y), and copy-pasting elements.",
    icon: "⌨️"
  },
];

const contactMethods: ContactMethod[] = [
  {
    icon: <FiMail className="w-6 h-6" />,
    title: "Email Support",
    description: "Get help via email",
    contact: "support@designdeck.com",
    action: "mailto:support@designdeck.com"
  },
  {
    icon: <FiPhone className="w-6 h-6" />,
    title: "Phone Support",
    description: "Call us directly",
    contact: "+1 (555) 123-4567",
    action: "tel:+15551234567"
  }
];

interface FaqItemProps {
  faq: Faq;
  isOpen: boolean;
  onToggle: () => void;
  theme: string | undefined;
}

const FaqItem: React.FC<FaqItemProps> = ({ faq, isOpen, onToggle, theme }) => (
  <div
    className={`rounded-xl overflow-hidden transition-all duration-300 ${
      theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 shadow-md'
    }`}
  >
    <button onClick={onToggle} className="w-full flex items-center justify-between p-6 text-left font-medium">
      <span className="flex items-center gap-3">
        <span className="text-2xl">{faq.icon}</span>
        <span className="text-lg">{faq.question}</span>
      </span>
      <FiChevronDown
        className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""} ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}
      />
    </button>
    <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
      <div className={`p-6 pt-0 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
        {faq.answer}
      </div>
    </div>
  </div>
);

interface ContactSupportProps {
  methods: ContactMethod[];
  theme: string | undefined;
}

const ContactSupport: React.FC<ContactSupportProps> = ({ methods, theme }) => {
  const [selectedMethodIndex, setSelectedMethodIndex] = useState(0);

  return (
    <div
      className={`p-6 rounded-xl transition-all duration-300 ${
        theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 shadow-md'
      }`}
    >
      <div className="flex flex-wrap gap-2 mb-4">
        {methods.map((method, index) => (
          <button
            key={index}
            className={`px-4 py-2 font-semibold rounded-lg transition-all duration-300 ${
              selectedMethodIndex === index
                ? theme === 'dark' ? 'bg-purple-400 text-white' : 'bg-purple-600 text-white'
                : theme === 'dark' ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setSelectedMethodIndex(index)}
          >
            {method.title}
          </button>
        ))}
      </div>
      <div className="flex items-start space-x-4">
        <div className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}>
          {methods[selectedMethodIndex].icon}
        </div>
        <div>
          <h3 className="font-semibold mb-1">{methods[selectedMethodIndex].title}</h3>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
            {methods[selectedMethodIndex].description}
          </p>
          <a
            href={methods[selectedMethodIndex].action}
            className={`text-sm ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} font-medium hover:underline`}
          >
            {methods[selectedMethodIndex].contact}
          </a>
        </div>
      </div>
    </div>
  );
};

const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { theme } = useTheme();

  const categories = ["all", ...new Set(faqs.map(faq => faq.category))];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <header className="w-full">
      <NavbarComponent isLoggedIn={isLoggedIn} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </header>

      <section className="w-full py-12 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'bg-gradient-to-r from-purple-400 to-pink-400' : 'bg-gradient-to-r from-purple-600 to-pink-600'
            } bg-clip-text text-transparent`}
          >
            Frequently Asked Questions
          </h1>
          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Everything you need to know about DesignDeck's collaborative design platform
          </p>
          
          

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? theme === 'dark' ? 'bg-purple-400 text-white' : 'bg-purple-600 text-white'
                    : theme === 'dark' ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <aside className="flex flex-col space-y-4">
            <h2 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Need More Help?
            </h2>
            <ContactSupport methods={contactMethods} theme={theme} />
          </aside>

          <section className="lg:col-span-2 space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className={`text-center py-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                No FAQs found matching your search criteria.
              </div>
            ) : (
              filteredFaqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  faq={faq}
                  isOpen={openIndex === index}
                  onToggle={() => toggleFaq(index)}
                  theme={theme}
                />
              ))
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default FaqPage;