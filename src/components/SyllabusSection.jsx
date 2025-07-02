import React from 'react';
import { FaDownload } from 'react-icons/fa';

const syllabi = [
  { course: 'B.Tech CSE', university: 'AKTU', semester: '5th', year: '2023' },
  { course: 'B.Com', university: 'DU', semester: '1st', year: '2022' },
];

export default function SyllabusSection() {
  return (
    <section className="bg-gradient-to-br from-yellow-50 via-white to-blue-50 py-14 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        📘 Syllabus Library
      </h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {syllabi.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition duration-300"
          >
            <p className="text-lg font-semibold text-gray-800 mb-1">
              {item.course}
            </p>
            <p className="text-gray-600 mb-1">
              📚 University: <span className="font-medium">{item.university}</span>
            </p>
            <p className="text-gray-600 mb-2">
              🗓 Semester: <span className="font-medium">{item.semester}</span> | Year: {item.year}
            </p>
            <button className="mt-3 inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition duration-200">
              <FaDownload className="text-sm" /> Download PDF
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
