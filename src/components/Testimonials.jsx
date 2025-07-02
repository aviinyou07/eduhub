import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const feedback = [
  {
    name: 'Priya S.',
    text: 'Helped me pass my final exam!',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Ankit R.',
    text: 'Videos are top-notch. Super useful.',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        🎓 What Students Say
      </h2>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {feedback.map((f, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition duration-300"
          >
            <div className="flex items-start gap-4">
              <img
                src={f.image}
                alt={f.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <FaQuoteLeft className="text-blue-500 text-lg mb-2" />
                <p className="text-gray-700 italic">“{f.text}”</p>
                <p className="mt-2 font-semibold text-gray-900">– {f.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
