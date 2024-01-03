import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [about, setAbout] = useState(true);
  const [instructor, setInstructor] = useState(false);
  const [reviews, setReviews] = useState(false);

  const handleAbout = () => {
    setAbout(true);
    setInstructor(false);
    setReviews(false);
  };

  const handleInstructor = () => {
    setAbout(false);
    setInstructor(true);
    setReviews(false);
  };

  const handleReviews = () => {
    setAbout(false);
    setInstructor(false);
    setReviews(true);
  };

  return (
    <div className="navBarContainer">
      <nav>
        <div className={`navItem ${about ? 'active' : ''}`} onClick={handleAbout}>
          <span><Link to="/"  className='navLinks'>ABOUT </Link></span>
        </div>
        <div className={`navItem ${instructor ? 'active' : ''}`} onClick={handleInstructor}>
          <span><Link to="/instructor" className='navLinks'>INSTRUCTOR </Link></span>
        </div>
        <div className={`navItem ${reviews ? 'active' : ''}`} onClick={handleReviews}>
          <span><Link to="/reviews" className='navLinks'>REVIEWS </Link></span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
