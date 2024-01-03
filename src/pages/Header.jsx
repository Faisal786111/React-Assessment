import React from "react";
import staticData from "../Dataset/staticData.json";
import nityanand from "../images/nityanand.jpeg";
import { MdOndemandVideo } from "react-icons/md";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import "./header.css";

const Header = () => {
  return (
    <header className="header-card">
      <img src={nityanand} alt="nityanand" />

      <div className="header-intro">
        <h4>{staticData.instructor.name}</h4>
        <p>{staticData.course.title}</p>
      </div>

      <div className="header-text">
        <div className="fees-container">
          <h4 className="course">Course fees</h4>
          <h1 id="amount">₹{staticData.course.fee.amount}</h1>
        </div>

        <div className="include-container">
          <p className="course">What's included:</p>
          <p className="course-desc">
            <MdOndemandVideo /> 5 on-demand videos
          </p>
          <p className="course-desc">
            <MdOndemandVideo /> 2 livestream sessions
          </p>
          <p className="course-desc">
            <HiOutlineChatAlt2 /> Live Q&A sessions with Nityanand Charan Das
          </p>
          <p className="course-desc">
            <HiOutlineChatAlt2 /> An active Whatsapp Community
          </p>
        </div>

        <button>Register today</button>
      </div>
    </header>
  );
};

export default Header;
