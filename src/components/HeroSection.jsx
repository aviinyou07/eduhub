import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-20 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-6 drop-shadow-sm">
          Access Every University’s Knowledge Base – Anytime, Anywhere
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Browse notes, syllabi, lectures, and get expert answers across all universities, semesters, and subjects.
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          <Link
            to="/notes"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            📘 Start Learning
          </Link>
          <Link
            to="/universities"
            className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 hover:scale-105 transition-transform duration-300"
          >
            🔍 Browse by University
          </Link>
          <Link
            to="/ask"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            ❓ Ask a Question
          </Link>
        </div>
      </div>
    </section>
  );
}
