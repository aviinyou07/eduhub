import React from 'react';

export default function About() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            📚 About EduPortal
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            EduPortal is a centralized platform created for university students across India. Whether you're from AKTU, DU, MU, or any other institution — we've got your back with syllabus documents, verified notes, video lectures, assignments, and question banks.
          </p>
          <p className="text-gray-600 mb-4">
            Our mission is to empower students with easy access to high-quality academic content — free of cost, fast, and reliable. We also provide expert support for subject-related doubts through our Ask an Expert feature.
          </p>
          <p className="text-gray-600">
            Join thousands of learners who trust EduPortal to help them stay ahead in their academic journey.
          </p>
        </div>

        {/* Right Side - Optional Image */}
        <div className="text-center">
          <img
            src="/images/about-illustration.svg"
            alt="About EduPortal"
            className="max-w-md w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
