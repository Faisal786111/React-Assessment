import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Instructor from './components/Instructor';
import Reviews from './components/Reviews';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import InstructorIfno from './components/InstructorIfno';
import Testimonial from './pages/Testimonial';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
        <InstructorIfno/>
        
        <Testimonial />
      </div>
    </Router>
  );
};

export default App;
