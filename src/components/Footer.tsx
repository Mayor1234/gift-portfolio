import { FaPinterest, FaLinkedinIn } from 'react-icons/fa';

export default function FooterSection() {
  return (
    <footer className="bg-[#1c1c1c] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-semibold font-jakarta text-[#e68c47]">
              Gift
            </h3>
            <p className="mt-3 text-base text-gray-300">
              Elevating interiors through timeless, functional, and elegant
              design. Let us make your space unforgettable.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: giftthompson65@gmail.com</li>
              <li>Phone: +234 8148554538</li>
              <li>Location: Lagos, Nigeria</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Follow</h4>
            <div className="flex space-x-4 text-gray-300">
              <a href="#" aria-label="Pinterest" className="hover:text-white">
                <FaPinterest />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Gift. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
