import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-12 pt-16 pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

        {/* Brand Info */}
        <div>
          <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            EduPortal
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Your trusted companion for accessing university resources – from syllabi and notes to lectures and expert guidance.
          </p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-sky-400 transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-red-500 transition"><FaYoutube /></a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 border-b border-blue-500 pb-2">
            Quick Links
          </h4>
          <ul className="text-gray-400 space-y-3">
            <li><Link to="/" className="hover:text-white transition duration-300">🏠 Home</Link></li>
            <li><Link to="/notes" className="hover:text-white transition duration-300">📝 Notes</Link></li>
            <li><Link to="/syllabus" className="hover:text-white transition duration-300">📚 Syllabus</Link></li>
            <li><Link to="/lectures" className="hover:text-white transition duration-300">🎥 Lecture Videos</Link></li>
            <li><Link to="/ask" className="hover:text-white transition duration-300">❓ Ask Experts</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 border-b border-blue-500 pb-2">
            Contact Us
          </h4>
          <ul className="text-gray-400 space-y-3">
            <li>
              📧 <a href="mailto:support@eduportal.com" className="hover:text-white transition duration-300">
                support@eduportal.com
              </a>
            </li>
            <li>
              📞 <a href="tel:+911234567890" className="hover:text-white transition duration-300">
                +91-123-456-7890
              </a>
            </li>
            <li>📍 Mumbai, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">EduPortal</span>. All rights reserved.
      </div>
    </footer>
  );
}
