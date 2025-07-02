import React, { useState } from 'react';
import { FaDownload, FaFileAlt } from 'react-icons/fa';

const syllabusData = [
  {
    title: 'B.Tech 3rd Sem Digital Circuits Syllabus',
    university: 'AKTU',
    course: 'B.Tech',
    subject: 'Digital Circuits',
    semester: '3rd',
    url: '/syllabus/btech-digital-circuits.pdf',
  },
  {
    title: 'B.Com 1st Sem Marketing Syllabus',
    university: 'DU',
    course: 'B.Com',
    subject: 'Marketing',
    semester: '1st',
    url: '/syllabus/bcom-marketing.pdf',
  },
  {
    title: 'BA 2nd Sem Psychology Syllabus',
    university: 'MU',
    course: 'BA',
    subject: 'Psychology',
    semester: '2nd',
    url: '/syllabus/ba-psychology.pdf',
  },
];

export default function Syllabus() {
  const [filters, setFilters] = useState({
    university: '',
    course: '',
    semester: '',
    subject: '',
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredSyllabus = syllabusData.filter((item) => {
    return (
      (!filters.university || item.university === filters.university) &&
      (!filters.course || item.course === filters.course) &&
      (!filters.semester || item.semester === filters.semester) &&
      (!filters.subject || item.subject === filters.subject)
    );
  });

  // Unique dynamic options
  const universities = [...new Set(syllabusData.map((s) => s.university))];
  const courses = [...new Set(syllabusData.map((s) => s.course))];
  const semesters = [...new Set(syllabusData.map((s) => s.semester))];
  const subjects = [...new Set(syllabusData.map((s) => s.subject))];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">📝 Download Syllabus</h2>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <select name="university" onChange={handleChange} value={filters.university} className="p-2 border rounded-md">
          <option value="">All Universities</option>
          {universities.map((u, idx) => (
            <option key={idx} value={u}>{u}</option>
          ))}
        </select>

        <select name="course" onChange={handleChange} value={filters.course} className="p-2 border rounded-md">
          <option value="">All Courses</option>
          {courses.map((c, idx) => (
            <option key={idx} value={c}>{c}</option>
          ))}
        </select>

        <select name="semester" onChange={handleChange} value={filters.semester} className="p-2 border rounded-md">
          <option value="">All Semesters</option>
          {semesters.map((s, idx) => (
            <option key={idx} value={s}>{s}</option>
          ))}
        </select>

        <select name="subject" onChange={handleChange} value={filters.subject} className="p-2 border rounded-md">
          <option value="">All Subjects</option>
          {subjects.map((s, idx) => (
            <option key={idx} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Syllabus List */}
      <div className="grid gap-6">
        {filteredSyllabus.length > 0 ? (
          filteredSyllabus.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-white border p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <FaFileAlt className="text-blue-600 text-xl" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">
                    🎓 {item.course} | 🗓 {item.semester} | 🏛 {item.university} | 📚 {item.subject}
                  </p>
                </div>
              </div>

              <a
                href={item.url}
                download
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition text-sm"
              >
                <FaDownload /> Download
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No syllabus found for selected filters.</p>
        )}
      </div>
    </section>
  );
}
