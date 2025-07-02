import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FaPlay, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const lectures = [
  {
    title: 'Digital Circuits - Unit 1',
    course: 'B.Tech',
    sem: '3rd',
    university: 'AKTU',
    image: 'https://img.youtube.com/vi/aqW4xVZ9a-M/0.jpg',
  },
  {
    title: 'Marketing Basics',
    course: 'B.Com',
    sem: '1st',
    university: 'DU',
    image: 'https://img.youtube.com/vi/VYOjWnS4cMY/0.jpg',
  },
  {
    title: 'Intro to Psychology',
    course: 'BA',
    sem: '2nd',
    university: 'MU',
    image: 'https://img.youtube.com/vi/vo4pMVb0R6M/0.jpg',
  },
];

export default function LectureCarousel() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1.2,
      spacing: 15,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2.2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3.2, spacing: 24 },
      },
    },
  });

  return (
    <section className="bg-blue-50 py-14 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        🎥 Top Lecture Videos
      </h2>

      <div className="relative">
        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider">
          {lectures.map((lecture, idx) => (
            <div
              key={idx}
              className="keen-slider__slide bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={lecture.image}
                alt={lecture.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{lecture.title}</h3>
              <p className="text-gray-600 mb-4">
                🎓 {lecture.course} | 🗓 {lecture.sem} Sem | 🏛 {lecture.university}
              </p>
              <button className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition duration-200">
                <FaPlay className="text-sm" /> Watch
              </button>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => slider.current?.prev()}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-blue-100"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => slider.current?.next()}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-blue-100"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
