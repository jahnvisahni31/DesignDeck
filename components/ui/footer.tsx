import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">DesignDesk</h2>
          <p className="text-gray-400 mb-4">
            DesignDesk is a collaborative web application for interface design, with real-time collaboration features.
          </p>
          <div className="flex space-x-4">
            <Link href="https://twitter.com/figmak">
              <div className="text-gray-400 hover:text-white">Twitter</div>
            </Link>
            <Link href="https://www.instagram.com/figma/">
              <div className="text-gray-400 hover:text-white">Instagram</div>
            </Link>
            <Link href="https://www.linkedin.com/company/figma">
              <div className="text-gray-400 hover:text-white">LinkedIn</div>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Product</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/features">
                <div className="text-gray-400 hover:text-white">Features</div>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <div className="text-gray-400 hover:text-white">Pricing</div>
              </Link>
            </li>
            <li>
              <Link href="/community">
                <div className="text-gray-400 hover:text-white">Community</div>
              </Link>
            </li>
            <li>
              <Link href="/support">
                <div className="text-gray-400 hover:text-white">Support</div>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <ul className="space-y-2">
          <li>
              <Link href="/faq">
                <div className="text-gray-400 hover:text-white">FAQ</div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div className="text-gray-400 hover:text-white">Contact Us</div>
              </Link>
            </li>
            <li>
              <Link href="/careers">
                <div className="text-gray-400 hover:text-white">Careers</div>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <div className="text-gray-400 hover:text-white">Blog</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500">
        <div>&copy; {new Date().getFullYear()} DesignDesk. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
