import React from 'react';

export default function Newsletter() {
  return (
    <section className="py-10 px-4 bg-blue-50">
      <h2 className="text-2xl font-semibold text-center mb-4">📬 Stay Updated</h2>
      <p className="text-center text-gray-600 mb-6">Get alerts when new notes or lectures are uploaded</p>
      <form className="flex justify-center gap-4 max-w-xl mx-auto">
        <input type="email" placeholder="Your email" className="flex-1 p-2 border rounded-md" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Subscribe</button>
      </form>
    </section>
  );
}
