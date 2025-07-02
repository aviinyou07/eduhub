import React from 'react';
import { FaBookOpen } from 'react-icons/fa';

const categories = [
  'Engineering', 'Science', 'Commerce', 'Humanities', 'Law',
  'Medicine', 'Management', 'Architecture', 'General Studies'
];

export default function ExploreCategories() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-yellow-50 py-14 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        📚 Explore by Category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat}
            className="bg-white hover:bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer flex flex-col items-center justify-center text-center"
          >
            <div className="text-blue-600 text-2xl mb-2">
              <FaBookOpen />
            </div>
            <span className="text-gray-800 font-medium">{cat}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
