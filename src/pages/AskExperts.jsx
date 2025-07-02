import React, { useState } from 'react';

export default function AskExpert() {
  const [formData, setFormData] = useState({
    course: '',
    subject: '',
    semester: '',
    question: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // Here you'd typically send the formData to your backend or Firebase
    alert('Your question has been submitted!');
  };

  return (
    <section className="py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        🤔 Got a Doubt? Ask a Subject Expert!
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid gap-5 bg-white p-6 rounded-lg shadow-lg border"
      >
        <select
          name="course"
          onChange={handleChange}
          value={formData.course}
          className="p-2 border rounded-md"
          required
        >
          <option value="">Select Course</option>
          <option value="B.Tech">B.Tech</option>
          <option value="B.Com">B.Com</option>
          <option value="BA">BA</option>
        </select>

        <select
          name="subject"
          onChange={handleChange}
          value={formData.subject}
          className="p-2 border rounded-md"
          required
        >
          <option value="">Select Subject</option>
          <option value="Digital Circuits">Digital Circuits</option>
          <option value="Marketing">Marketing</option>
          <option value="Psychology">Psychology</option>
        </select>

        <select
          name="semester"
          onChange={handleChange}
          value={formData.semester}
          className="p-2 border rounded-md"
          required
        >
          <option value="">Select Semester</option>
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
        </select>

        <textarea
          name="question"
          rows="5"
          placeholder="Type your question here..."
          value={formData.question}
          onChange={handleChange}
          className="p-3 border rounded-md"
          required
        ></textarea>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Attach Image/Document (optional)</label>
          <input
            type="file"
            name="file"
            accept=".jpg,.jpeg,.png,.pdf,.docx"
            onChange={handleChange}
            className="p-2 border rounded-md w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Submit Question
        </button>
      </form>
    </section>
  );
}
