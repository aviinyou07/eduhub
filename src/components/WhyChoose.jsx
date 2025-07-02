import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const reasons = [
  '100+ Indian & Global Universities',
  'Notes Verified by Professors',
  'Fast & Friendly Expert Support',
  'Always Free to Access',
];

export default function WhyChoose() {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Why Choose <span className="text-blue-600">EduPortal</span>?
      </h2>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reasons.map((text, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 bg-white p-5 rounded-lg shadow hover:shadow-lg transition duration-300 border-l-4 border-blue-600"
          >
            <FaCheckCircle className="text-blue-600 text-xl mt-1" />
            <p className="text-gray-700 text-base font-medium">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
