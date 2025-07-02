import React, { useState } from 'react';

export default function AskExperts() {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send the form data to a backend or show a toast here
    alert("Question submitted successfully!");
  };

  return (
    <section className="py-10 px-4 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        🤔 Got a Doubt? Ask a Subject Expert!
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Course</label>
          <select required className="w-full p-2 border rounded-md">
            <option value="">Select Course</option>
            <option value="B.Tech">B.Tech</option>
            <option value="B.Com">B.Com</option>
            <option value="BA">BA</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Subject</label>
          <select required className="w-full p-2 border rounded-md">
            <option value="">Select Subject</option>
            <option value="Digital Circuits">Digital Circuits</option>
            <option value="Marketing">Marketing</option>
            <option value="Psychology">Psychology</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Semester</label>
          <select required className="w-full p-2 border rounded-md">
            <option value="">Select Semester</option>
            <option value="1st">1st</option>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Your Question</label>
          <textarea
            required
            placeholder="Type your question..."
            className="w-full p-2 border rounded-md"
            rows="4"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Attach Image (optional)</label>
          <input type="file" accept="image/*" onChange={handleFileChange} className="w-full p-2 border rounded-md" />
          {fileName && (
            <p className="text-sm text-gray-600 mt-1">Selected: {fileName}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-200"
        >
          Submit Question
        </button>
      </form>
    </section>
  );
}
