import React, { useState } from 'react';
import { FaDownload, FaFileAlt } from 'react-icons/fa';

const notesData = [
  {
    title: 'Digital Circuits - Unit 1 Notes',
    university: 'AKTU',
    course: 'B.Tech',
    subject: 'Digital Circuits',
    semester: '3rd',
    url: '/notes/digital-circuits-unit1.pdf',
  },
  {
    title: 'Marketing Basics Notes',
    university: 'DU',
    course: 'B.Com',
    subject: 'Marketing',
    semester: '1st',
    url: '/notes/marketing-basics.pdf',
  },
  {
    title: 'Intro to Psychology Notes',
    university: 'MU',
    course: 'BA',
    subject: 'Psychology',
    semester: '2nd',
    url: '/notes/intro-psychology.pdf',
  },
  {
    title: 'Digital Circuits - Unit 2 Notes',
    university: 'AKTU',
    course: 'B.Tech',
    subject: 'Digital Circuits',
    semester: '3rd',
    url: '/notes/digital-circuits-unit2.pdf',
  },
];

export default function Notes() {
  const [filters, setFilters] = useState({
    university: '',
    course: '',
    semester: '',
    subject: '',
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredNotes = notesData.filter((note) => {
    return (
      (!filters.university || note.university === filters.university) &&
      (!filters.course || note.course === filters.course) &&
      (!filters.semester || note.semester === filters.semester) &&
      (!filters.subject || note.subject === filters.subject)
    );
  });

  // Generate unique options dynamically
  const universities = [...new Set(notesData.map((n) => n.university))];
  const courses = [...new Set(notesData.map((n) => n.course))];
  const semesters = [...new Set(notesData.map((n) => n.semester))];
  const subjects = [...new Set(notesData.map((n) => n.subject))];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">📘 Download Notes</h2>

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

      {/* Notes List */}
      <div className="grid gap-6">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-white border p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <FaFileAlt className="text-blue-600 text-xl" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{note.title}</h3>
                  <p className="text-sm text-gray-600">
                    🎓 {note.course} | 🗓 {note.semester} | 🏛 {note.university} | 📚 {note.subject}
                  </p>
                </div>
              </div>

              <a
                href={note.url}
                download
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition text-sm"
              >
                <FaDownload /> Download
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No notes found for selected filters.</p>
        )}
      </div>
    </section>
  );
}
