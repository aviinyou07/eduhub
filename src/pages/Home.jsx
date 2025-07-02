import React from 'react'
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SmartSearch from '../components/SmartSearch';
import ExploreCategories from '../components/ExploreCategories';
import NotesPreview from '../components/NotesPreview';
import SyllabusSection from '../components/SyllabusSection';
import LectureCarousel from '../components/LectureCarousel';
import AskExperts from '../components/AskExperts';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <SmartSearch />
      <ExploreCategories />
      <NotesPreview />
      <SyllabusSection />
      <LectureCarousel />
      <AskExperts />
      <WhyChoose />
      <Testimonials />
      <Newsletter />
    </div>
  )
}

export default Home