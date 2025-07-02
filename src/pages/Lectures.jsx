import React, { useState } from 'react';
import { FaDownload, FaFileAlt } from 'react-icons/fa';

const allResources = {
  assignments: [
    {
      title: 'Digital Circuits Assignment 1',
      university: 'AKTU',
      course: 'B.Tech',
      subject: 'Digital Circuits',
      semester: '3rd',
      url: '/assignments/digital-circuits-assignment1.pdf',
    },
    {
      title: 'Marketing Basics Assignment',
      university: 'DU',
      course: 'B.Com',
      subject: 'Marketing',
      semester: '1st',
      url: '/assignments/marketing-basics.pdf',
    },
  ],
  questionBanks: [
    {
      title: 'Digital Circuits PYQs',
      university: 'AKTU',
      course: 'B.Tech',
      subject: 'Digital Circuits',
      semester: '3rd',
      url: '/questions/digital-circuits-pyq.pdf',
    },
    {
      title: 'Psychology Question Bank',
      university: 'MU',
      course: 'BA',
      subject: 'Psychology',
      semester: '2nd',
      url: '/questions/psychology.pdf',
    },
  ],
  slides: [
    {
      title: 'Lecture Slides - Unit 1',
      university: 'AKTU',
      course: 'B.Tech',
      subject: 'Digital Circuits',
      semester: '3rd',
      url: '/slides/digital-circuits-unit1.pdf',
    },
    {
      title: 'Marketing Slides',
      university: 'DU',
      course: 'B.Com',
      subject: 'Marketing',
      semester: '1st',
      url: '/slides/marketing.pdf',
    },
  ],
};

function ResourceSection({ title, icon, data }) {
  const [filters, setFilters] = useState({
    university: '',
    course: '',
    semester: '',
    subject: '',
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filtered = data.filter((item) => {
    return (
      (!filters.university || item.university === filters.university) &&
      (!filters.course || item.course === filters.course) &&
      (!filters.semester || item.semester === filters.semester) &&
      (!filters.subject || item.subject === filters.subject)
    );
  });

  // Get unique filter options
  const universities = [...new Set(data.map((d) => d.university))];
  const courses = [...new Set(data.map((d) => d.course))];
  const semesters = [...new Set(data.map((d) => d.semester))];
  const subjects = [...new Set(data.map((d) => d.subject))];

  return (
    <section className="py-12 border-b border-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{icon} {title}</h2>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8 px-4">
        <select name="university" onChange={handleChange} value={filters.university} className="p-2 border rounded-md">
          <option value="">All Universities</option>
          {universities.map((u, idx) => <option key={idx} value={u}>{u}</option>)}
        </select>
        <select name="course" onChange={handleChange} value={filters.course} className="p-2 border rounded-md">
          <option value="">All Courses</option>
          {courses.map((c, idx) => <option key={idx} value={c}>{c}</option>)}
        </select>
        <select name="semester" onChange={handleChange} value={filters.semester} className="p-2 border rounded-md">
          <option value="">All Semesters</option>
          {semesters.map((s, idx) => <option key={idx} value={s}>{s}</option>)}
        </select>
        <select name="subject" onChange={handleChange} value={filters.subject} className="p-2 border rounded-md">
          <option value="">All Subjects</option>
          {subjects.map((s, idx) => <option key={idx} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Resource Cards */}
      <div className="grid gap-6 max-w-6xl mx-auto px-4">
        {filtered.length > 0 ? (
          filtered.map((item, idx) => (
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
          <p className="text-center text-gray-500">No resources found for selected filters.</p>
        )}
      </div>
    </section>
  );
}

export default function AllResources() {
  return (
    <div className="bg-gray-50">
      <ResourceSection
        title="Assignments"
        icon="📝"
        data={allResources.assignments}
      />
      <ResourceSection
        title="Question Banks"
        icon="📄"
        data={allResources.questionBanks}
      />
      <ResourceSection
        title="Lecture Slides"
        icon="📊"
        data={allResources.slides}
      />
    </div>
  );
}
