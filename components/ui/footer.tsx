import Link from 'next/link';
import { FaFileAlt, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdQuestionAnswer, MdEmail, MdArticle } from 'react-icons/md';
import { GiPriceTag } from 'react-icons/gi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { LuBookMinus } from 'react-icons/lu';
import { GrBusinessService } from "react-icons/gr";
import { FaBusinessTime } from "react-icons/fa";
import GoogleTranslator from './GoogleTranslator'


const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-10 px-4 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">DesignDesk</h2>
          <p className="text-gray-400 mb-4">
            DesignDesk is a collaborative web application for <span className="hidden md:inline">interface design,</span> <span className="md:hidden">interface</span> design, with real-time collaboration features.
          </p>
          <div className="flex space-x-4">
            <Link href="https://twitter.com/figmak" target="_blank" rel="noopener noreferrer">
              <div className="text-gray-400 hover:text-white">
                <FaSquareXTwitter size={24} />
              </div>
            </Link>
            <Link href="https://www.instagram.com/figma/" target="_blank" rel="noopener noreferrer">
              <div className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/company/figma" target="_blank" rel="noopener noreferrer">
              <div className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </div>
            </Link>
            <div>
              <GoogleTranslator />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Product</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/features">
                <div className="flex items-center text-gray-400 hover:text-white">
                  <GrBusinessService className="mr-2" size={20} />
                  Features
                </div>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <div className="flex items-center text-gray-400 hover:text-white">
                  <GiPriceTag className="mr-2" size={20} />
                  Pricing
                </div>
              </Link>
            </li>
            <li>
              <Link href="/community">
                <div className="flex items-center text-gray-400 hover:text-white">
                  <AiOutlineUsergroupAdd className="mr-2" size={20} />
                  Community
                </div>
              </Link>
            </li>
            <li>
              <Link href="/support">
                <div className="flex items-center text-gray-400 hover:text-white">
                  <MdQuestionAnswer className="mr-2" size={20} />
                  Support
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/faq">
                <div className="flex items-center text-gray-400 hover:text-white">
                  <MdQuestionAnswer className="mr-2" size={20} />
                  FAQ
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div className="flex items-center text-gray-400 hover:text-white">
                  <MdEmail className="mr-2" size={20} />
                  Contact Us
                </div>
              </Link>
            </li>
            <li>
              <Link href="/careers">
                <div className="flex items-center text-gray-400 hover:text-white">
                  <FaBusinessTime className="mr-2" size={20} />
                  Careers
                </div>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <div className="flex items-center text-gray-400 hover:text-white">
                  <LuBookMinus className="mr-2" size={20} />
                  Blog
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contributors">
                <div className="flex items-center text-gray-400 hover:text-white">
                  <MdQuestionAnswer className="mr-2" size={20} />
                  Contributors
                </div>
              </Link>
            </li>
          </ul>
        </div>
        {/* Legal */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Legal</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/terms_of_use">
                <div className="flex items-center text-gray-400 hover:text-white">
                  <FaFileAlt className="mr-2" size={20} />
                  Terms of Use
                </div>
              </Link>
            </li>
            <li>
              <Link href="/privacy_policy">
                <div className="flex items-center text-gray-400 hover:text-white">
                  <MdArticle className="mr-2" size={20} />
                  Privacy Policy
                </div>
              </Link>
            </li>

          </ul>
        </div>
      </div>
      <div className="mt-4 mb-1 border-t start-0 z-21 border-gray-700 pt-3 text-center text-gray-500">
        <div>&copy; {new Date().getFullYear()} DesignDesk. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
