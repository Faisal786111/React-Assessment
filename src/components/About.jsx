import React from "react";
import staticData from "../Dataset/staticData.json";
import "./about.css"

const About = () => {
  return (
    <div className="main-section">
      <h1>About the course</h1>
      <p> {staticData.course.about.html_content}</p>
      <p> {staticData.course.about.html_content}</p>
      <p> {staticData.course.about.html_content}</p>

      <h1>What to expect from the course</h1>
      <ul>
        <li>Learn to mange your relationships</li>
        <li>Better communication</li>
        <li>Time management</li>
        <li>Forgiveness</li>
      </ul>

      <h1>Key topics covered</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ipsam magnam quis aliquam deserunt esse perspiciatis non. Officia iusto quo aliquam sint incidunt, tempore, praesentium dolorem laborum sapiente error maxime magni eligendi repellat. Repellendus?</p>
      <ol>
        <li>
          10 written and audio sessions guiding you in decoding the language of
          numbers so that you can easily receive their insights and messages.
        </li>
        <li>
          Intuitive exercises and homework walk you through the energies and
          values of numbers and number sequences so you can become your own
          authority.
        </li>
        <li>
          Handy reference to numerical meanings, so you can uncover your soul's
          gifts, challenges, lessons, and purpose – and receive spiritual
          guidance along your path.
        </li>
        <li>
          Expert techniques for manifestation offer simple ways to use numbers
          to co-create with the universe.
        </li>
      </ol>
    </div>
  );
};

export default About;
