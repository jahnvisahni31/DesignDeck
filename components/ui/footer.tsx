import Link from 'next/link';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdQuestionAnswer, MdEmail } from 'react-icons/md';
import { GiPriceTag } from 'react-icons/gi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { LuBookMinus } from 'react-icons/lu';
import { GrBusinessService } from "react-icons/gr";
import { FaBusinessTime } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-10 px-4 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* First Section */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-6 transition-all duration-500 transform hover:scale-105 hover:text-purple-500">
            DesignDesk
          </h2> {/* Added hover scale and color change */}
          <p className="text-gray-400 mb-6">
            DesignDesk is a collaborative web application for interface design, with real-time collaboration features.
          </p>
          <div className="flex space-x-6 mt-auto">
  <Link href="https://twitter.com/figmak" target="_blank" rel="noopener noreferrer">
    <div className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg">
      <FaSquareXTwitter size={24} />
    </div>
  </Link>
  <Link href="https://www.instagram.com/figma/" target="_blank" rel="noopener noreferrer">
    <div className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg">
      <FaInstagram size={24} />
    </div>
  </Link>
  <Link href="https://www.linkedin.com/company/figma" target="_blank" rel="noopener noreferrer">
    <div className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg">
      <FaLinkedin size={24} />
    </div>
  </Link>
</div>

        </div>

        {/* Second Section */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-6 transition-all duration-500 transform hover:scale-105 hover:text-pink-500">
            Product
          </h2> {/* Added hover scale and color change */}
          <ul className="space-y-4">
            <li>
              <Link href="/features">
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <GrBusinessService className="mr-2" size={20} />
                  <span className="hover-underline-animation">Features</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <GiPriceTag className="mr-2" size={20} />
                  <span className="hover-underline-animation">Pricing</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/community">
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <AiOutlineUsergroupAdd className="mr-2" size={20} />
                  <span className="hover-underline-animation">Community</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/support">
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <MdQuestionAnswer className="mr-2" size={20} />
                  <span className="hover-underline-animation">Support</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        {/* Third Section */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-6 transition-all duration-500 transform hover:scale-105 hover:text-blue-500">
            Contact
          </h2> {/* Added hover scale and color change */}
          <ul className="space-y-4">
            <li>
              <Link href="/faq">
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <MdQuestionAnswer className="mr-2" size={20} />
                  <span className="hover-underline-animation">FAQ</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <MdEmail className="mr-2" size={20} />
                  <span className="hover-underline-animation">Contact Us</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/careers">
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <FaBusinessTime className="mr-2" size={20} />
                  <span className="hover-underline-animation">Careers</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <LuBookMinus className="mr-2" size={20} />
                  <span className="hover-underline-animation">Blog</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 mb-1 border-t border-gray-700 pt-3 text-center text-gray-500">
        <div>&copy; {new Date().getFullYear()} DesignDesk. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
