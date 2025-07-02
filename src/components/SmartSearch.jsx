import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SmartSearch() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">🔎 Search</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <select className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option disabled selected>University</option>
          <option>Delhi University</option>
          <option>Mumbai University</option>
        </select>

        <select className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option disabled selected>Course/Stream</option>
          <option>B.Sc</option>
          <option>B.Com</option>
        </select>

        <select className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option disabled selected>Subject</option>
          <option>Mathematics</option>
          <option>Economics</option>
        </select>

        <select className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option disabled selected>Semester</option>
          <option>1st Semester</option>
          <option>2nd Semester</option>
        </select>
      </div>

      <div className="mt-8 text-center">
        <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition duration-300">
          <FaSearch />
          Search
        </button>
      </div>
    </section>
  );
}
