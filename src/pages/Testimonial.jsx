import React from "react";
import staticData from "../Dataset/staticData.json";
import nityanandIcon from "../images/nityanandIcon.jpg";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { AiOutlineDash } from "react-icons/ai";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div id="left-arrow">
        <MdOutlineArrowCircleLeft  size={25} />
      </div>
      <div id="right-arrow">
        <MdOutlineArrowCircleRight size={25}/>
      </div>
      <p>"{staticData.testimonial.text}"</p>
      <div className="image-container">
        <img src={nityanandIcon} alt="reviewerIcon" className="reviewer-icon" />
      </div>
      <div className="reviewer-testimonial">
        <div id="reviewer-text">
          <div id="reviewer-name">{staticData.testimonial.reviewer_name}</div>
          <div id="reviewer-designation">
            {staticData.testimonial.reviewer_designation}
          </div>
        </div>
      </div>
      <div className="dash-container">
       <AiOutlineDash size={50}/>
      </div>
    </div>
  );
};

export default Testimonial;
