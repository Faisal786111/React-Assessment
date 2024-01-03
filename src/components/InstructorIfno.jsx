import React from "react";
import nityanandIcon from "../images/nityanandIcon.jpg"
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./InstructorInfo.css"

const InstructorIfno = () => {
  return (
    <div className="instructor">
      <h1>About the Instructor</h1>
      <div className="intructor-desc">
        <div>
          <img
            src={nityanandIcon}
            alt="nityanandIcon"
            className="nityanand-icon"
          />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          praesentium libero non, officia reprehenderit eveniet ratione, nobis
          aspernatur corporis delectus quidem tenetur. Atque blanditiis enim
          deserunt officiis repudiandae illum, voluptate aspernatur alias.
          <div id="icon-1">
            <p><FaFacebook  /> Facebook</p>
            <p><BsTwitterX /> Twitter</p>
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          praesentium libero non, officia reprehenderit eveniet ratione, nobis
          aspernatur corporis delectus quidem tenetur. Atque blanditiis enim
          deserunt officiis repudiandae illum, voluptate aspernatur alias.
          <div id="icon-2">
            <p><FaYoutube  /> Youtube</p>
            <p><FaInstagram  /> Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorIfno;
