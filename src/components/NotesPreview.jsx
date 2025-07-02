import React from 'react';
import { FaDownload } from 'react-icons/fa';

const notes = [
  { title: 'Thermo Notes', university: 'AKTU', subject: 'Physics', semester: '3rd' },
  { title: 'Microeconomics', university: 'DU', subject: 'Economics', semester: '1st' },
  { title: 'OS Concepts', university: 'VTU', subject: 'CSE', semester: '5th' },
];

export default function NotesPreview() {
  return (
    <section className="py-14 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        📄 Recently Uploaded Notes
      </h2>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="w-full min-w-[600px] text-left">
          <thead>
            <tr className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 uppercase text-sm tracking-wide">
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">University</th>
              <th className="py-3 px-4">Subject</th>
              <th className="py-3 px-4">Semester</th>
              <th className="py-3 px-4 text-center">Download</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note, idx) => (
              <tr
                key={idx}
                className="border-t hover:bg-blue-50 transition duration-200"
              >
                <td className="py-3 px-4 font-medium">{note.title}</td>
                <td className="py-3 px-4">{note.university}</td>
                <td className="py-3 px-4">{note.subject}</td>
                <td className="py-3 px-4">{note.semester}</td>
                <td className="py-3 px-4 text-center">
                  <button className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-1 font-semibold">
                    <FaDownload className="text-sm" /> Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
