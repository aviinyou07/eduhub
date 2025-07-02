import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-blue-700 hover:text-blue-900 transition duration-200">
          EduPortal
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/notes" className="hover:text-blue-600 transition">Notes</Link>
          <Link to="/syllabus" className="hover:text-blue-600 transition">Syllabus</Link>
          <Link to="/lectures" className="hover:text-blue-600 transition">Lecture</Link>
          <Link to="/ask" className="hover:text-blue-600 transition">Ask Experts</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex gap-2">
          <Link
            to="/login"
            className="text-blue-600 hover:text-blue-800 font-semibold transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md shadow transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
