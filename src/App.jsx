import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Notes from './pages/Notes';
import Syllabus from './pages/Syllabus';
import Lectures from './pages/Lectures';
import AskExpert from './pages/AskExperts';
import About from './pages/About'

export default function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes/>} />
        <Route path="/syllabus" element={<Syllabus/>}/>
        <Route path="/lectures" element={<Lectures/>} />
        <Route path="/ask" element={<AskExpert/> }/>
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/signup" element={<div>Sign Up Page</div>} />
      </Routes>
      <Footer/>
    </>
  );
}
